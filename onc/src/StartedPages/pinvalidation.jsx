import { useEffect, useRef, useState } from "react"
import { VeriLoad } from "../Admin/veriLoad"
import { IoIosArrowForward } from "react-icons/io"
import { FaArrowLeft } from "react-icons/fa6"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import {motion} from "motion/react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md"
import { FaInfo } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { Tablegetonc } from "./tablegetonc"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { useAuth } from "../ContextAPI/ContextAPI"
import { Mike } from "../maik/maik"

export const Pins = () =>{
const[inputs,setInputs] = useState(new Array(4).fill(''))
const refs = [useRef(),useRef(),useRef(),useRef()]
const[inputArr,setInputArr] = useState(inputs)
const{table,settable,isLogin} = useAuth()
const bodyclassname = useRef()
const{translation,resetTranscript,setTraslation,start,setmic} = useAuth2()
const[loading,setloading] = useState(false)


const{verify} = useParams();
const navigate = useNavigate()

const handleInputs = (e,index) =>{
const val = e.target.value;

  if (isNaN(Number(val))) return;

const copyArray = [...inputArr];

copyArray[index] = val;

setInputArr(copyArray)
if (val && index < inputArr.length-1) {
   refs[index + 1].current.focus() 
}
}

const handleKeyDown = (e,index) =>{
 if (e.keyCode == 8) {
    const copyArray = [...inputArr]
   copyArray[index+1]  = ""

   setInputArr(copyArray)
   if (index > 0 && !copyArray[index]) {
        refs[index - 1].current.focus();
      }
    }

    if (e.key === "ArrowRight" && index < 3) {
      refs[index + 1].current.focus();
    }

    if (e.key === "ArrowLeft" && index > 0) {
      refs[index - 1].current.focus();
    }
}

const handlePaste = (e) =>{
 const data = e.clipboardData.getData("text")
 setInputArr(data.split(""))
 refs[inputArr.length -1].current.focus()
}


const handleverfication = async(e) =>{
if (e && typeof e.preventDefault === "function") {
 e.preventDefault();   
}  

if (!verify) {
  return; 
}
setloading(true)
let pins = parseInt(inputArr.join(''))   
const tog = true;
const response = await fetch("http://localhost:3000/user/pincheek/",{
method:"POST",
headers:{
   "Content-Type" :"application/json"
},
body:JSON.stringify({verify,pins,tog})
})
if(response.ok){
setloading(false)  
toast.success("Email valibation sucessfully")
navigate(`/signUp/${verify}`)
window.location.reload();
}else{
toast.error("pin not match")   
}
}
const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
} 
let mic = localStorage.getItem("togvoic")
useGSAP(()=>{
gsap.from(".VerficationAd",{
scale:0,
duration:.7,
stagger:0.2,
ease:"back.out",
y:121,  
})
},[])

useEffect(()=>{
if (translation.includes("remove") || translation == "remove") {
console.log("hello");
  
refs[0].current.value = ""
refs[1].current.value = ""
refs[2].current.value = ""
refs[3].current.value = ""
refs[0].current.focus();
}else{

let pass = "";
let lowerTranscript = translation.toLowerCase();
if (lowerTranscript.includes("otp")) {
  pass = translation
    .slice(3)  // slice after the word 'password'
   .replace(/[.\s]/g, "")
    .replace(/[?\s]/g, "")
    .trim();
}

if (pass) {  
if (pass.toLowerCase().includes("remove")) {
  setInputArr("")
}else{  
refs[0].current.focus()
setInputArr(pass.split(''))
}  
}

if (translation.toLowerCase().includes("verify") || translation == "verify") {
handleverfication()
}

if (translation == "back") {
navigate("/emailvalibation")
console.log("hello");
}
let timer = setTimeout(()=>{
resetTranscript();
 setmic("")
setTraslation("")
},2000)  
return () => clearTimeout(timer)
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

// console.log(parseInt(inputArr.join('')))


return(
    <main className="painmain">
     <div className="onctraninmenu" style={{zIndex:"9999999999999999"}}>
          {table ?
          <>
        <div className="svhmenufont">  <ImCross onClick={()=>settable(false)}/>   </div>  
          <Tablegetonc pinverfy={"pinverfy"}/>
          </>: 
        <div className="svhmenufont"> <FaInfo onClick={()=>settable(true)}/> </div>
            }
          </div>
    
    <div className="mikevoice" style={{zIndex:"999999999999999999",marginTop:"17.1%"}}>
          <Mike/>
            <div className="buttonmic">
              {mic== "true" ?
          <MdRecordVoiceOver onClick={handlemics}/>
           : 
           <MdVoiceOverOff  onClick={()=> start()}/>
          }
              </div>    
    </div>
    <section className="VerficationAd" ref={bodyclassname}>
  <VeriLoad/>
       
         <form onSubmit={handleverfication} className="handleverfication"> {/* Use onSubmit */}
        <NavLink to={'/emailvalibation'}><h2><FaArrowLeft/> Back</h2></NavLink>
          <div className="handlemainitems">
          <dd>
           <h1>Enter OTP Check Email</h1>
      <ul>   
    {
     inputs?.map((curr,index)=>{
     return(
       <div key={index}>
           <input
       type="text"
       key={index}
       required
       maxLength={1}
       ref={refs[index]}
       value={inputArr[index]}
       onPaste={handlePaste}
       onKeyDown={(event)=>handleKeyDown(event,index)}
       onChange={(event) => handleInputs(event,index)}
     />  
       </div>
     )
 })
    }
     </ul> 
   <motion.button type="submit"
    animate={{scale:1,transition:{type:"spring",ease:"easeInOut",duration:.7,damping:15,stiffness:300}}}
    whileTap={{scale: 1}}
    whileHover={{scale: 1.033}}
   >{loading ? "Loading..." :"Verify"}<IoIosArrowForward/></motion.button> {/* Correct spelling */} 
       </dd>  
        </div>
         </form>
 
       </section>

     </main>
)
}