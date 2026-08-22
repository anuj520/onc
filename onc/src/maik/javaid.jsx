import React, { useState, useRef, useEffect } from "react";
import { createModel } from "vosk-browser";


export const Javaid = () => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const audio1 = useRef(null);
  const audio2 = useRef(null);

  // Load model once
  useEffect(() => {
    const loadModel = async () => {
      setLoading(true);
      try {
        const m = await createModel("./models/vosk-model-small-en-us-0.15", {
          workerUrl: "/vosk.worker.js",
        });
  
        await model.loadSpkModel("/models/vosk-model-spk-0.4/");

        setModel(m);
        setLoading(true);
        console.log("✅ Model loaded");
      } catch (err) {
        console.error(err);
      }
    };
    loadModel();
  }, []);

  const recordAudio = async (ref) => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const rec = new MediaRecorder(stream);
    const chunks = [];
    rec.ondataavailable = (e) => chunks.push(e.data);

    rec.start();
    alert("🎙 Speak now (3 seconds)");
    setTimeout(() => rec.stop(), 3000);

    rec.onstop = async () => {
      const blob = new Blob(chunks, { type: "audio/webm" });
      const arrayBuffer = await blob.arrayBuffer();
      const floatArr = new Float32Array(arrayBuffer);
      ref.current = floatArr;
      alert("✅ Voice recorded");
    };
  };

  const compareVoices = async () => {
    if (!model) return alert("Model not loaded");
    if (!audio1.current || !audio2.current) return alert("Record both voices");

    const spk1 = await model.extractSpeakerEmbedding(audio1.current);
    const spk2 = await model.extractSpeakerEmbedding(audio2.current);

    // Cosine similarity
    const dot = spk1.reduce((s, v, i) => s + v * spk2[i], 0);
    const mag1 = Math.sqrt(spk1.reduce((s, v) => s + v * v, 0));
    const mag2 = Math.sqrt(spk2.reduce((s, v) => s + v * v, 0));
    const similarity = dot / (mag1 * mag2);

    setResult(
      similarity > 0.85
        ? `✅ Same speaker (similarity: ${similarity.toFixed(2)})`
        : `❌ Different speaker (similarity: ${similarity.toFixed(2)})`
    );
  };

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <h2>🎙 Voice Identity Detector</h2>
      {loading ? <p>Loading model...</p> : <p>Model ready ✅</p>}
      <button onClick={() => recordAudio(audio1)}>Record Voice 1</button>
      <button onClick={() => recordAudio(audio2)}>Record Voice 2</button>
      <button onClick={compareVoices}>Compare Voices</button>
      <h3>{result}</h3>
    </div>
  );
};
