import { useEffect, useRef, useState } from "react"
import {motion} from "motion/react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useAuth } from "../ContextAPI/ContextAPI"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { Tablegetonc } from "./tablegetonc"
import { ImCross } from "react-icons/im"
import { FaInfo } from "react-icons/fa"
import { Mike } from "../maik/maik"
import { Desighev } from "./Desighev";
import { MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md"

export const ForgetPassword = () =>{
const[rendom,setrandom] = useState(Math.floor(Math.random() *6) +1) 
const[email,setverfiy] = useState("")
const navigate = useNavigate()
const bodyclassname = useRef()
const{table,settable,isLogin} = useAuth()
const{translation,resetTranscript,setTraslation,start,setmic} = useAuth2()
const[loading,setLoading] = useState(false)
const refs = useRef()

const handleSubmit = async(e) =>{
if (e && typeof e.preventDefault === "function") {
 e.preventDefault();   
}


setLoading(true)
const pins = Math.floor(1000 + Math.random() * 9000);
const response = await fetch("http://localhost:3000/user/cheekemailpin",{
  method:"POST",
  headers:{
    "Content-Type" :"application/json"
  },
  body:JSON.stringify({email,pins})  
})
if (response.ok) {
 const response = await fetch("http://localhost:3000/user/forgetpassword",{
method:"PATCH",
headers:{
    "Content-Type":"application/json"
},
body:JSON.stringify({email,pins}) 
})
setLoading(false);
toast.success("Check your gmail")
navigate(`/passpins/${email}`)
window.location.reload()
}else{
toast.error("email not found")
    
}
}

const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
} 
let mic = localStorage.getItem("togvoic")

const{contextSafe} = useGSAP()
const addgsap = contextSafe(() =>{
gsap.from(".emailvalibation,.handleform",{
opacity: 0,
y:121,
stagger:0.2,
duration: .7,   
})
})

useGSAP(()=>{
addgsap()
})

useEffect(()=>{
if (translation.includes("remove")) {
  setverfiy("")  
}else{    
let email = ""
let lowerEmail =  translation.toLowerCase()
if (lowerEmail.includes("email")) {
  email = translation
  .slice(5)
    .replace(/[.\s]/g, "")
        .replace(/[?\s]/g, "")
.replace(/attherate.*$/i, '@gmail.com')
  .trim()
}
if(email){  
if(email.toLowerCase().includes("remove") || email == "remove"){
setverfiy("")
}else{    
 refs.current.focus();
setverfiy(email.toLowerCase())  
}
let timer = setTimeout(()=>{
resetTranscript()
 setmic("")
setTraslation("")
  },2000)  
return () => clearTimeout(timer)  
}
}

if (translation.toLowerCase().includes("verify") || translation == "verify") {
handleSubmit()
}
},[translation])

useEffect(()=>{
if (translation == "info") {
  settable(true)
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
  if (isLogin) {
    navigate("/Home")
    window.location.reload()
  }
},[isLogin])

if (table == true && bodyclassname.current) {
 document.body.style.overflow = "hidden"; 
 bodyclassname.current.style.filter = "blur(10px)"
}else if(bodyclassname.current){
  document.body.style.overflow = "auto"
  bodyclassname.current.style.filter = "none"
}
 
return(
    <main>
     <div className="onctraninmenu" style={{zIndex:"9999999999999999"}}>
          {table ?
          <>
        <div className="svhmenufont">  <ImCross onClick={()=>settable(false)}/>   </div>  
          <Tablegetonc emailverfy={"emailverfy"}/>
          </>: 
        <div className="svhmenufont"> <FaInfo onClick={()=>settable(true)}/> </div>
            }
          </div>
    
    <div className="mikevoice" style={{zIndex:"999999999999999999",marginTop:"21%"}}>
          <Mike/>
            <div className="buttonmic">
              {mic== "true" ?
          <MdRecordVoiceOver onClick={handlemics}/>
           : 
           <MdVoiceOverOff  onClick={()=> start()}/>
          }
              </div>    
    </div>
<header className="forgetdesigh">
  <Desighev/>
</header>
<section className="emailvalibation" ref={bodyclassname}>
 <div className="handleform" style={{height:"40vh"}}>
   <form onSubmit={handleSubmit}>
    <motion.input type="email" ref={refs} style={{marginTop:"10%"}}
     animate={{scale:1,transition:{type:"spring",ease:"easeInOut",duration:.7,damping:15,stiffness:300}}}
    whileTap={{scale: .98}}
    value={email} onChange={(e)=>setverfiy(e.target.value)} placeholder="Enter Your valid Email" required/>
    <motion.div className="boderdivs"
    animate={{scale:1,transition:{type:"spring",ease:"easeInOut",duration:.7,damping:15,stiffness:300}}}
    whileTap={{scale: 1}}
    whileHover={{scale: 1.033}}
    >
    <button type="submit">{loading ? "Loading..." :"Verify"}</button>
    </motion.div>
   </form>
</div>   
    </section>
</main> 
)    
}