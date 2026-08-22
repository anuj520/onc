import { useEffect, useRef, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {motion} from "motion/react"
import { useGSAP } from "@gsap/react";
import {useGoogleLogin} from "@react-oauth/google"
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa6";
import { MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md";
import { Tablegetonc } from "./tablegetonc";
import { ImCross } from "react-icons/im";
import { FaInfo } from "react-icons/fa";
import { useAuth } from "../ContextAPI/ContextAPI";
import { Mike } from "../maik/maik";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { googleAuth } from "../Config/axios2";
import { Desighev } from "./Desighev";

export const Emailvalibation = () =>{
const[verify,setverfiy] = useState("")
const[rendom,setrandom] = useState(Math.floor(Math.random()*6) +1) 
const navigate = useNavigate()
const bodyclassname = useRef()
const{table,settable,storeToken,isLogin} = useAuth()
const{translation,resetTranscript,setTraslation,start,setmic} = useAuth2()
const[loading,setloading] = useState(false)
const refs = useRef();

//googlePart//
const responseGoogle = async (authResults) => {
  try {
    if (authResults?.code) {
      const results = await googleAuth(authResults.code);

      const { email, name, image, gender } = results?.data?.user || {};
      const token = results?.data?.token;

      if (!email) {
        throw new Error("User email missing from response");
      }

      storeToken(token);
      toast.success("Registration Successfully");
      navigate("/Home");
      window.location.reload();
    }
    console.log("Google Auth Results:", authResults);
  } catch (error) {
    console.error("Google Auth Error:", error);
    toast.error("Something went wrong");
  }
};

const errorGoogle = (err) => {
  console.error("Google Login Failed:", err);
  toast.error("Google Login Failed");
};

const googleLogin = useGoogleLogin({
  flow: "auth-code",
  onSuccess: responseGoogle,
  onError: errorGoogle,
});


//googlePart//


const handleSubmit = async(e) =>{
if (e && typeof e.preventDefault === "function") {
 e.preventDefault();   
}    

if (!verify) {
   return; 
}
setloading(true)
let pins = Math.floor(1000 + Math.random()* 9000)
let tog = false;
const response = await fetch("http://localhost:3000/user/handlePin",{
method:"POST",
headers:{
"content-Type" :"application/json"
},
body:JSON.stringify({verify,pins,tog})
})
if (response.ok) {
const response = await fetch("http://localhost:3000/user/nodemailer",{
method:"PATCH",
headers:{
"content-Type" :"application/json"
},
body:JSON.stringify({verify,pins})
})
setloading(false) 
 toast.success("check your Gmail")
navigate(`/Pins/${verify}`)
window.location.reload()
}else{    
 toast.error("Email already Exits")   
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
if (translation.includes("remove") || translation == "remove") {
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
if(email.toLowerCase().includes("remove")){
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
 <div className="handleform">
<NavLink to={'/login'}> <motion.h1
     animate={{scale:1,transition:{type:"spring",ease:"easeInOut",duration:.7,damping:15,stiffness:300}}}
    whileTap={{scale: 1}}
    whileHover={{scale: 1.033}}
 >Login <FaArrowRight/></motion.h1> </NavLink>  
   <form onSubmit={handleSubmit}>
    <motion.input type="email"ref={refs}
     animate={{scale:1,transition:{type:"spring",ease:"easeInOut",duration:.7,damping:15,stiffness:300}}}
    whileTap={{scale: .98}}
    value={verify} onChange={(e)=>setverfiy(e.target.value)} placeholder="Enter Your valid Email" required/>
    <motion.div className="boderdivs"
    animate={{scale:1,transition:{type:"spring",ease:"easeInOut",duration:.7,damping:15,stiffness:300}}}
    whileTap={{scale: 1}}
    whileHover={{scale: 1.033}}
    >
    <button type="submit">{loading ? "Loading..." :"Verify"}</button>
    </motion.div>

      <div className="googleImg" onClick={googleLogin}>
       <dd>
          <motion.p
           animate={{scale:1,transition:{type:"spring",ease:"easeInOut",duration:.7,damping:15,stiffness:300}}}
    whileTap={{scale: 1}}
    whileHover={{scale: 1.053}}
          >           <img src="https://www.pngmart.com/files/16/Google-Logo-PNG-Image.png" alt="" /> Sign up with Google</motion.p>
        </dd> 
        </div>
   </form>
</div>   
    </section>
</main>    
)    
}