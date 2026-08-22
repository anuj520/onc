import { FaAngleRight, FaInfo } from "react-icons/fa"
import J49 from "./../../public/J49.json"
import { useAuth } from "../ContextAPI/ContextAPI"
import { NavLink, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { MdOutlineDoubleArrow, MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md"
import {motion} from "motion/react"
import { toast } from "react-toastify"
import { ErrorElements } from "../Error/ErrorElements"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { ImCross } from "react-icons/im"
import { Tablegetonc } from "./tablegetonc"
import { Mike } from "../maik/maik"
import { IoIosEye, IoIosEyeOff } from "react-icons/io"
export const ChangePsaaword  = () =>{
const[user,setuser] = useState({
email:"",
password:"",
changePsaaword:""    
})    
const navigate = useNavigate()
const[ice,setice] = useState(false)
const bodyclassname = useRef()
const[ice2,setice2] = useState(false)
const{table,settable,reand,isLogin} = useAuth()
const{translation,resetTranscript,setTraslation,start,setmic} = useAuth2()
const refs = useRef()
const refs2 = useRef()
const refs3 = useRef()
let email = localStorage.getItem("forget")

const handleChange = (e) =>{
const{name,value} = e.target;
setuser((prev)=> ({...prev,[name]:value}))
}

const handleSubmit = async(e) =>{
if (e && typeof e.preventDefault === "function") {
 e.preventDefault();   
}  

if (email == "" || email == null || email.length ==0) {
   return; 
}else if (user.password !== user.changePsaaword) {
  toast.warning("Password not match")  
}else if (user.password.length < 6) {
 toast.error("Password must be at least 6 characters")   
}else{
let password = user.password;    
const response = await fetch("http://localhost:3000/user/changePassword",{
method:"POST",
headers:{
  "Content-Type": "application/json"  
},
body:JSON.stringify({email,password})
})
console.log(response);
if (response.ok) {
   toast.success("Password change sucessfully") 
   navigate('/login')
   window.location.reload()
}else{
    toast.error("Password not change")  
}
}
}
const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
} 
let mic = localStorage.getItem("togvoic")

useEffect(()=>{
let pass = "";
let psasTract = translation.toLowerCase();
if (psasTract.includes("password")) {
  pass = translation
  .slice(8)
  .replace(/at the rate/i,"@")
    .replace(/[?\s]/g, "")
  .trim()
}
let pass2 = "";
let psasTract2 = translation.toLowerCase();
if (psasTract2.includes("confirm")) {
  pass2 = translation
  .slice(7)
  .replace(/at the rate/i,"@")
    .replace(/[?\s]/g, "")
  .trim()
}

if(pass){  
if(pass.toLowerCase().includes("remove")){
setuser("")
}else{    
 refs2.current.focus();
setuser((prev) =>({...prev,password:pass}))
}
let timer = setTimeout(()=>{
resetTranscript()
 setmic("")
setTraslation("")
  },2000)  
return () => clearTimeout(timer)  
}

if(pass2){  
if(pass2.toLowerCase().includes("remove")){
setuser("")
}else{    
 refs3.current.focus();
setuser((prev) =>({...prev,changePsaaword:pass2}))
}
let timer = setTimeout(()=>{
resetTranscript()
 setmic("")
setTraslation("")
  },2000)  
return () => clearTimeout(timer)  
}

if (translation.toLowerCase().includes("submit") || translation == "submit") {
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


if (email== "" || email == null || email.length ==0) {
  return <ErrorElements/>
}

return(
    <main>
     <div className="onctraninmenu" style={{zIndex:"9999999999999999"}}>
          {table ?
          <>
        <div className="svhmenufont">  <ImCross onClick={()=>settable(false)}/>   </div>  
          <Tablegetonc chexkemail={"chexkemail"}/>
          </>: 
        <div className="svhmenufont"> <FaInfo onClick={()=>settable(true)}/> </div>
            }
          </div>
    
    <div className="mikevoice" style={{zIndex:"999999999999999999999999999999999",marginTop:"21%"}} ref={bodyclassname}>
          <Mike/>
            <div className="buttonmic">
              {mic== "true" ?
          <MdRecordVoiceOver onClick={handlemics}/>
           : 
           <MdVoiceOverOff  onClick={()=> start()}/>
          }
              </div>    
    </div>

  <div className="leftimg2" style={{
    marginLeft: "0%"
  }}>
     {
        J49.slice(reand-1,reand).map((curr,index)=>{
          return(
               <div className="loginbox" key={index}>
           <motion.div className="childbox"
           initial={{rotate:90,y:-130}}
          animate={{rotate:0,y:0,transition:{duration:1,delay:1,ease:"easeInOut",damping:15,type:"spring",stiffness:300}}}
            style={{
            backgroundImage: `url(${curr.img})`
           }}
           >
             <p style={{marginTop:"132%",fontSize:"1.4rem"}}>change <span>password</span></p>
             <h5 style={{
              right: "-52%"
             }}>パスワードを変更</h5>
           </motion.div>
           <motion.div className="childbox2"
             initial={{rotate:90,y:-130}}
          animate={{rotate:0,y:0,transition:{duration:1,delay:1,ease:"easeInOut",damping:15,type:"spring",stiffness:300}}}
            style={{
            backgroundImage: `url(${curr.img2})`
           }}
           ></motion.div>
           <motion.div className="childbox3"
             initial={{rotate:90,y:-130}}
          animate={{rotate:0,y:0,transition:{duration:1,delay:1,ease:"easeInOut",damping:15,type:"spring",stiffness:300}}}
            style={{
            backgroundImage: `url(${curr.img3})`,zIndex:"999"
           }}
           ></motion.div>
            <div className="smallbox3">
               <p>Orion</p>
               <h5>orion</h5>
               <h5>orion</h5>
             </div>
           <div className="childbox4"><MdOutlineDoubleArrow/></div>
         <div className="childbox5"><MdOutlineDoubleArrow/></div>
        <div className="childbox6"><MdOutlineDoubleArrow/></div>
         </div>
          )
        })
      }
      </div>
      
      <section className="loginAni">
      <div className="loginDiv">

      <div style={{opacity:"0",visibility:"hidden"}}>
   <h3  style={{color: "#00fbff"}}>Login</h3>
   <NavLink to={'/signUp'}> <h4 style={{color: "#EEEEEE"}}

   >SignUp</h4></NavLink>  
    </div>
        <form onSubmit={handleSubmit}>
          <motion.input
     animate={{ scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
            whileTap={{scale:0.98}}
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={email!== "" && email !== null && email.length !==0 ? email :user.email}
            onChange={handleChange}
            ref={refs}
          />
          <label className="IoIosEye" style={{top:"3rem"}} onClick={()=>setice(!ice)}>{!ice ? <IoIosEyeOff /> :<IoIosEye/>}</label>
          <motion.input
           animate={{ scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
           whileTap={{scale:0.98}}
            type={!ice ?"password" :"text"}
            placeholder="Enter new Password"
            name="password"
             style={{paddingRight: "3.6rem",position:"relative", top: "-1rem"}}
            value={user.password}
            onChange={handleChange}
            ref={refs2}
          />
          <label className="IoIosEye" style={{top:"2.3rem"}}onClick={()=>setice2(!ice2)}>{!ice2 ? <IoIosEyeOff /> :<IoIosEye/>}</label>
            <motion.input
             animate={{ scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
             whileTap={{scale:0.98}}
           type={!ice2 ?"password" :"text"}
               ref={refs3}
                style={{paddingRight: "3.6rem",position:"relative", top: "-1.5rem"}}
            placeholder="confrom new Password"
            name="changePsaaword"
            value={user.changePsaaword}
            onChange={handleChange}

          />
        
          <br /><br />
              
        <motion.div className="buttonupperdivs"
              animate={{ scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
             whileHover={{scale:1.043}}
             whileTap={{scale:1}}
              >    
             <button  role="button" type="Submit" 
             style={{marginTop:"-2rem",marginLeft: "1rem"}}
      ><span>Submit</span> <FaAngleRight/></button>
</motion.div>
        </form>
      </div>
      </section>
    </main>
)
}