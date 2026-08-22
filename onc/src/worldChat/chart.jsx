import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
import J53 from  "./../../public/J53.json"
import { useAuth } from "../ContextAPI/ContextAPI";
import { Menu } from "../HomePart/Menu";
import{motion} from "motion/react"
import { FaArrowLeft, FaInfo } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MdNotificationsActive, MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { LuMessageCircleWarning } from "react-icons/lu";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { Mike } from "../maik/maik";
import { OncTrainText } from "../fav/onctrain.text";
import { GamesTable } from "../onctables/gamestable";
import { Abouttable } from "../onctables/abouttable";

const socket = io('http://localhost:3000/');

export const Worldchat = () => {
  const {data:authData,settable,table} = useAuth()
    const{start,translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()  
  const[table2,settable2] = useState(false)
  const refs3 = useRef()
  const[image,setimg] = useState(localStorage.getItem("worldchat"))
  const [message, setMessage] = useState('');
  const refs = useRef(null)
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log("connected to server");
    });

    socket.on("msg", (data) => {
      // data = { text, user, time }
      setReceivedMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("msg");
    };
  }, []);

  const handleSent = () => {
    if (message.trim()) {
      socket.emit("msg", message, authData); // Send to server
      setMessage('');
    }
  };

   useEffect(() => {
    if (refs.current) {
      refs.current.scrollTop = refs.current.scrollHeight;
    }
  }, [receivedMessages]);

  useEffect(()=>{
  if (translation == "info") {
    settable(true)
    handleVoice("orion information table")
    resetTranscript();
   setmic("")
  setTraslation("")
  }else if(translation == "close info"){
   settable(false)
   resetTranscript();
   setmic("")
  setTraslation("")
  }
  },[translation])

useEffect(()=>{
let chat = "";
let chates = translation.toLowerCase();
if (chates.includes("chat")) {
  let index = chates.indexOf("chat");
  chat = translation.toLowerCase().slice(index + 11)
  .replace(/[.\s]/g, " ")
  .replace(/[?\s]/g, " ")
}
if (chat && !chat.includes("cut") && !chat.includes("send") && !chat.includes("cut")) {
 setMessage(chat) 
}
if (translation.toLowerCase().includes("send") ||chat.includes("send")) {
  handleSent()
 resetTranscript()
  setTraslation("")
  setmic("")
}
if (translation == "cut" || chat.includes("cut")) {
  setMessage("")
   resetTranscript()
  setTraslation("")
  setmic("")
}
},[translation])

useEffect(()=>{
if (translation == "one") {
 setimg(J53[0].img) 
 localStorage.setItem("worldchat",J53[0].img)
 resetTranscript()
  setTraslation("") 
 setmic("")
}else if (translation == "two") {
  setimg(J53[1].img)
  localStorage.setItem("worldchat",J53[1].img)
 resetTranscript()
  setTraslation("") 
 setmic("")
}else if (translation == "three") {
  setimg(J53[2].img)
  localStorage.setItem("worldchat",J53[2].img)
 resetTranscript()
  setTraslation("") 
 setmic("")
}else if (translation == "four") {
  setimg(J53[3].img)
  localStorage.setItem("worldchat",J53[3].img)
 resetTranscript()
  setTraslation("") 
 setmic("")
}else if (translation == "five") {
  setimg(J53[4].img)
  localStorage.setItem("worldchat",J53[4].img)
 resetTranscript()
  setTraslation("") 
 setmic("")
}else if (translation == "four") {
  setimg(J53[5].img)
  localStorage.setItem("worldchat",J53[5].img)
 resetTranscript()
  setTraslation("") 
 setmic("")
}else if (translation == "six") {
  setimg(J53[6].img)
  localStorage.setItem("worldchat",J53[6].img)
 resetTranscript()
  setTraslation("") 
 setmic("")
}else if (translation == "eight") {
  setimg(J53[7].img)
  localStorage.setItem("worldchat",J53[7].img)
 resetTranscript()
  setTraslation("") 
 setmic("")
}else if (translation == "nine") {
  setimg(J53[8].img)
  localStorage.setItem("worldchat",J53[8].img)
 resetTranscript()
  setTraslation("") 
 setmic("")
}else if (translation == "ten") {
  setimg(J53[9].img)
  localStorage.setItem("worldchat",J53[9].img)
 resetTranscript()
  setTraslation("") 
 setmic("")
}
},[translation])

useEffect(()=>{
const handlegmaes = async()=>{  
if (!authData.email) {
  return;
}
const respon = await fetch("http://localhost:3000/onc/edit",{
  method: "POST",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({email:authData.email})
})
}
handlegmaes()
},[authData.email])

useEffect(()=>{
 const handleedit = async() =>{
if (!authData.email) {
   return; 
}


const respon = await fetch("http://localhost:3000/onc/editpatch",{
  method: "PATCH",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({edit: false,email:authData.email,game:false,mess:false,gcoll:false,home:false,chat:true})
})
}

if (window.location.pathname === `/worldChat`) {
handleedit()  
}
  
},[window.location.pathname,authData])


const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
} 
let mic = localStorage.getItem("togvoic")  

const{contextSafe} = useGSAP();

const addgsap = contextSafe(()=>{
gsap.from(".worldChat",{
  opacity: 0,
  y:225,
  duration:1,
ease:"back.out"
}) 
gsap.from(".imgoptionworlsvhat .divhandleimages",{
  opacity: 0,
  y:-175,
  stagger:0.2,
  delay:.2,
  duration:0.7,
ease:"back.out"
}) 
gsap.from(".namechantname .homeChat",{
  opacity: 0,
  scale:0,
  stagger:0.2,
  delay:.2,
  duration:0.7,
ease:"back.out"
}) 
})

useGSAP(()=>{
  addgsap()
})


  return (
<>
<div className="mikevoice" style={{zIndex:"99999999999999999999999999999999999999999999999999999",marginTop:"21%"}}>
      <Mike/>
        <div className="buttonmic">
          {mic== "true" ?
      <MdRecordVoiceOver onClick={handlemics}/>
       : 
       <MdVoiceOverOff  onClick={()=> start()}/>
      }
          </div>    
</div>
 <div className="onctraninmenu" style={{zIndex:"999999999"}}>
      {table ?
      <>
    <div className="svhmenufont">  <ImCross onClick={()=>settable(false)}/>   </div>  
      <OncTrainText/>
      </>: 
    <div className="svhmenufont"> <FaInfo onClick={()=>settable(true)}/> </div>
        }
      </div>
<div className="userivolment" style={{zIndex:"9999999999999999999"}}>
  <LuMessageCircleWarning/>
  <MdNotificationsActive/>
</div>

 <div className="onctraninmenu2" style={{zIndex:"999"}}>
      {table2 ?
      <>
    <div className="svhmenufont" style={{marginTop:"-3%"}}>  <ImCross onClick={()=>settable2(false)}/>   </div>  
      <br /><br />
      <Abouttable/>
      </>: 
    <div className="svhmenufont" style={{marginTop:"-3%"}}> <FaInfo onClick={()=>settable2(true)}/> </div>
        }
      </div>  
    <main ref={refs3}>
      <div className="worldChat">
        <ul style={{
  listStyle: "none",
  backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.8),rgba(0,0,0,0.6)), url(${image})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}} ref={refs}>
          {receivedMessages.map((msg, index) => {
            const isOwn = msg.user?.email === authData?.email;

            return (
              <li key={index}
              style={{
                display: "flex"
              }}
              >
                <img
                  src={`http://localhost:3000/${msg.user?.img || "default.jpg"}`}
                  alt="user"
                  style={{borderRadius: "50%" }}
                />
                <div >
                 <section style={{ backgroundColor: isOwn ? "#00FBFF" : "#254D70", color : isOwn ? "#1E1E2F " : "#fff"}}>
                    <small
                    style={{marginLeft: isOwn ? "3rem" : "6rem"}}
                    >{new Date(msg.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
                  <h4 style={{ margin: "0" }}>{isOwn ? "You" : `${msg.user.firstname} ${msg.user.lastname}`}</h4>
                  <p style={{ margin: "5px 0" }}>{msg.text.trim()}</p>
                 </section>
              
                </div>
              </li>
            );
          })}
        </ul>

        <section style={{ display: "flex", gap: "10px" }}>
          <motion.textarea
           animate={{scale:1,transition:{ease:"easeInOut",type:"spring",duration:0.7,damping:15,stiffness:300}}}
       whileTap={{scale:0.99}}
            type="text"
            placeholder="Enter chat"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ flex: 1, resize: "none", padding: "10px" }}
          />
          <motion.button 
               animate={{scale:1,transition:{ease:"easeInOut",type:"spring",duration:0.7,damping:15,stiffness:300}}}
       whileHover={{scale:1.055,border:"1px solid #00fbff"}}
       whileTap={{scale:1}}
          onClick={handleSent}><IoMdSend /></motion.button>
        </section>
      </div>
      
      <div className="imgoptionworlsvhat">
      {
        J53.map((curr,index)=>{
        return(
        <motion.div
         animate={{scale:1,transition:{ease:"easeInOut",type:"spring",duration:0.7,damping:15,stiffness:300}}}
       whileHover={{scale:1.053}}
       whileTap={{scale:1}}
        className="divhandleimages" key={index} onClick={()=> {setimg(curr.img), localStorage.setItem("worldchat",curr.img)}}>
       <img src={curr.img} alt="" />
      </motion.div> 
        )  
        })
      } 
      </div>


      <div className="namechantname">
     <NavLink to={'/home'} reloadDocument> <motion.h2
       animate={{scale:1,transition:{ease:"easeInOut",type:"spring",duration:0.7,damping:15,stiffness:300}}}
       whileHover={{scale:1.053}}
       whileTap={{scale:1}}
       className="homeChat"
       ><FaArrowLeft/> Home</motion.h2> </NavLink>
      <h1 className="homeChat">Universal <span>Chat</span></h1>
      </div>    
    </main>
    </>    
  );
};
