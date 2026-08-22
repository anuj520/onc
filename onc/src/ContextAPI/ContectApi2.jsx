import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios1 from "axios";

export const AuthContext2 = createContext();

export const AuthProvider2 = ({ children }) => {
  const [respon, setDataAi] = useState([]);
  const [onc, setonc] = useState([]);
  const [translation, setTraslation] = useState("");
  const [transcript, setTranscript] = useState("");
  const [voice, setVoice] = useState(null);
  const [data, setData] = useState([]);
  const [ai, setAi] = useState({ prompt: "" });
  const [list, setList] = useState([]);
  const [load, setload] = useState(false);
  const [togtrans, settrans] = useState(false);
  const [findes, setfindres] = useState([]);
  const [arr, setarr] = useState([]);
  const [replay, setquestion] = useState("");
  const [listen, setlisten] = useState([]);
  const [mic, setmic] = useState("");
  const [yesno, setyesno] = useState([]);
  const [mess, setmess] = useState({ message: "" });
  
  const [togvoic, setogvic] = useState(() => localStorage.getItem("togvoic") === "true");

  const recognitionRef = useRef(null);
  const streamRef = useRef(null); // Hardware stream channel reference
  
  const wideTrue = localStorage.getItem("wide");
  let trnas = localStorage.getItem("trans");
  let orio = localStorage.getItem("onc");
  let rou = listen.length !== 0 ? listen.slice(1) : translation;

  const resetTranscript = () => setTranscript("");
  
  const stop = () => {
    localStorage.setItem("togvoic", "false");
    setogvic(false);
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  // User details loader
  const userData = async () => {
    let AuthToken = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:3000/user/person/", {
        method: "GET",
        headers: { Authorization: AuthToken }
      });
      const res = await response.json();
      setData(res);
    } catch (error) {
      console.log("userData", error);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  // Text to Speech Voice Synthesis
  const handleVoice = (name) => {
    if (!voice || !name) return;
    const utterance = new SpeechSynthesisUtterance(`${name}`);
    utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  };

  // Central AI processing logic
  const handleSubmit = async (directPrompt) => {
    const promptToSubmit = directPrompt || ai.prompt;
    const cleanPrompt = promptToSubmit.replace(/,/g, "").trim();

    if (!cleanPrompt) return;

    setList((prev) => [...prev, cleanPrompt]);
    setload(true);
    try {
      const response = await axios1.get("http://localhost:3000/Ai/result", {
        params: { promt: cleanPrompt }
      });

      if (cleanPrompt.toLowerCase().includes("ma likher do no extra word")) {
        setonc((prev) => [...prev, response.data]);
      }

      if (togtrans) {
        setDataAi((prev) => [...prev, response.data]);
        settrans(false);
      } else {
        setfindres((prev) => [...prev, response.data]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setload(false);
      setAi({ prompt: "" });
    }
  };

  // Translate request trigger
  const translate = async (orion) => {
    let lang = trnas ? trnas.slice(0, 2) : "en";
    let email = data.email;
    let name = data.firstname;
    let id = data._id;

    try {
      const response = await fetch("http://localhost:3000/onc/text/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: lang, transcript: orion, email, id, name })
      });
      const obj = await response.json();

      if (obj.home) {
        setlisten(obj.home);
        const autoPrompt = `${transcript} meaning is ${obj.home} page in ${trnas}`;
        setAi({ prompt: autoPrompt });
        handleSubmit(autoPrompt);
      } else if (obj.onctranc) {
        setTraslation(obj.onctranc);
      } else {
        setarr((prev) => [...prev, obj]);
        setquestion(obj);
      }
    } catch (err) {
      console.error("Translation processing failure", err);
    }
  };

  // Key phrase recognition logic from transcript stream
  useEffect(() => {
    if (!transcript) return;
    const chectONC = (orio ? orio : "Rio").trim();
    const lowerTranscript = transcript.normalize("NFC").toLowerCase();
    const checkTarget = chectONC.normalize("NFC").toLowerCase();

    if (lowerTranscript.includes(checkTarget)) {
      let index = lowerTranscript.indexOf(checkTarget);
      setmic(transcript.slice(index));
      let orion = transcript.slice(index + chectONC.length).replace(/\./g, "").trim();

      if (orion) {
        const timer = setTimeout(() => {
          translate(orion);
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [transcript]);

  // Hardware Microphone Initiator and Listener Engine
  const start = async () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("❌ Speech Recognition not supported in this browser");
      return;
    }

    if (recognitionRef.current) return;

    try {
      // Connects all hardware input devices (Wired, Bluetooth, USB Mics)
      const hardwareStream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });
      streamRef.current = hardwareStream;

      const recognition = new SpeechRecognition();
      recognition.continuous = true; 
      recognition.interimResults = true; 
      recognition.lang = localStorage.getItem("trans") || "en-IN";

      recognition.onresult = (event) => {
        let finalTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          }
        }
        if (finalTranscript) {
          setTranscript((prev) => prev + " " + finalTranscript);
        }
      };

      recognition.onerror = (event) => {
        if (event.error === "no-speech") return;
        console.error("Engine internal audio processing report:", event.error);
      };

      recognition.onend = () => {
        recognitionRef.current = null;
        if (localStorage.getItem("togvoic") === "true") {
          setTimeout(() => {
            if (localStorage.getItem("togvoic") === "true") start();
          }, 400); // Small cooldown allows OS device toggling without breaking context
        } else {
          setogvic(false);
        }
      };

      recognition.start();
      recognitionRef.current = recognition;
      setogvic(true);
      localStorage.setItem("togvoic", "true");

    } catch (hardwareError) {
      console.error("Microphone hardware configuration access denied:", hardwareError);
      setogvic(false);
    }
  };

  // Sync mic state changes securely
  useEffect(() => {
    const isVoiceActivated = localStorage.getItem("togvoic") === "true";
    if (isVoiceActivated && !recognitionRef.current) {
      start();
    } else if (!isVoiceActivated && recognitionRef.current) {
      stop();
    }
  }, [togvoic]);

  // Text TTS Speech Engine Config loader
  useEffect(() => {
    const languagePrefix = trnas ? trnas.slice(0, 2) : "en";
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const matchVoice = voices.find(v => v.lang.toLowerCase().includes(languagePrefix));
      setVoice(matchVoice || voices[0]);
    };

    if (typeof window !== "undefined") {
      window.speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
    }
  }, [trnas]);

  // Voice navigation control command processing
  useEffect(() => {
    if (!translation) return;
    const lowerTrans = translation.toLowerCase();

    if (translation === "remove") {
      resetTranscript();
      setTraslation("");
      setmic("");
      setmess({ message: "" });
    } else if (translation === "close") {
      stop();
      window.location.reload();
    } else if (translation === "down") {
      window.scrollBy({ top: document.body.scrollHeight * 0.2, behavior: "smooth" });
      setTraslation("");
      setmic("");
    } else if (translation === "up") {
      window.scrollBy({ top: document.body.scrollHeight * -0.2, behavior: "smooth" });
      setTraslation("");
      setmic("");
    } else if (translation === "cut") {
      resetTranscript();
    } else if (translation === "whatName") {
      handleVoice(data.firstname);
      setTraslation("");
    } else if (translation === "whatEamil") {
      handleVoice(data.email);
    } else if (translation === "yourName") {
      handleVoice("Rio");
      setTraslation("");
    } else if (lowerTrans.includes("find")) {
      const targetQuery = translation.slice(4).trim();
      setAi({ prompt: targetQuery });
      handleSubmit(targetQuery);
    } else if (lowerTrans.includes("language")) {
      const parsedLang = translation.slice(8).trim();
      setAi({ prompt: `${parsedLang} language BCP-47` });
      settrans(true);
      handleSubmit(`${parsedLang} language BCP-47`);
    }
  }, [translation]);

  // Handle redirect configurations
  useEffect(() => {
    if (findes.length !== 0 && listen.length !== 0) {
      handleVoice(`${findes[findes.length - 1]} in ${trnas ? trnas.slice(0, 2) : "en"}`);
      setfindres([]);
      setTimeout(() => {
        window.location.href = `${listen}`;
      }, 100);
    }
  }, [findes, listen]);

  return (
    <AuthContext2.Provider value={{
      wideTrue, start, data, transcript, stop, resetTranscript, handleSubmit: () => handleSubmit(),
      respon, list, load, setAi, ai, handleVoice, findes, translation, setTraslation,
      mic, yesno, handleTrain: () => {}, setmic, mess, setmess, togvoic
    }}>
      {children}
    </AuthContext2.Provider>
  );
};

export const useAuth2 = () => useContext(AuthContext2);