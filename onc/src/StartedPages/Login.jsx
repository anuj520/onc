import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../ContextAPI/ContextAPI";
import { toast } from "react-toastify";
import {useGoogleLogin} from "@react-oauth/google"
import { googleAuth } from "../Config/axios2";
import { FaAngleRight } from "react-icons/fa";
import J49 from "./../../public/J49.json"
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { MdOutlineDoubleArrow, MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Mike } from "../maik/maik";
import { Tablegetonc } from "./tablegetonc";
import{motion} from "motion/react"
import { ImCross } from "react-icons/im";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FaInfo } from "react-icons/fa6";

export const Login = () => {
  const{storeToken,reand,setwide,table,settable,isLogin} = useAuth();
  const{translation,resetTranscript,setTraslation,start,setmic} = useAuth2()
  const[ice,setice] = useState(false)
//googlePart//

const responseGoogle = async(authResults) =>{
try {
if (authResults['code']) {
  const results = await googleAuth(authResults['code']);
  const{email,name,image} = results.data.user;
  const token = results.data.token;
  storeToken(token);
  toast.success("Login Sucesfully")
  navigate("/Home")
  window.location.relod()
  // console.log("results",results); 
}
  
} catch (error) {
  toast.error("Someting went wrong")
}  
}

const googleLogin = useGoogleLogin({
  onSuccess: responseGoogle,
  onError: responseGoogle,
  flow :"auth-Code"
})

//googlePart//

const[red,setred] = useState(false)
const refs = useRef(null)
const refs2 = useRef(null)
const navigate = useNavigate()
  const [user, setUser] = useState({
email: "",
password: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
    if (e.target.value == 0) {
      resetTranscript()
    }
  };

  const handleSubmit = async(e) => {
   if (e && typeof e.preventDefault === "function") {
     e.preventDefault();
   }
      try {
        const res = await fetch("http://localhost:3000/user/login",{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
        },
          body:JSON.stringify(user)
        })

       const response = await res.json()
       storeToken(response.token)
console.log(response);

        if (response.token) {
      toast.success("login Sucessfully")
      setwide(true)
      navigate('/Home');
      window.location.reload()
        }else{
          toast.error(response.errorr ? response.errorr[0].msg :response.msg);
          setred(!red)
        }
      } catch (error) {
 toast.error("Someting went wrong")
        
      }
  };  
  


useEffect(()=>{
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

//password///
let pass = "";
let lowerTranscript = translation.toLowerCase();
if (lowerTranscript.includes("password")) {
  pass = translation
    .slice(8)  // slice after the word 'password'
   .replace(/[.\s]/g, "")
    .replace(/[?\s]/g, "")
    .replace(/attherate/i, "@") // remove spaces and dots
    .trim();
}

if(email){  
if(email.toLowerCase().includes("remove")){
setUser(((prev) => ({...prev,email :""})))
}else{
    refs.current.focus();
    setUser((prev) => ({...prev,email: email.toLowerCase()}))  
}    
  let timer = setTimeout(()=>{
resetTranscript()
 setmic("")
setTraslation("")
  },2000)  
return () => clearTimeout(timer)  
}
if (pass) {
if (pass.toLowerCase().includes("remove")) {
  setUser(((prev) => ({...prev,password :""})))
}else{  
refs.current.blur()
refs2.current.focus()
setUser((prev) =>({...prev,password:pass}))
}  
let timer = setTimeout(()=>{
resetTranscript();
 setmic("")
setTraslation("")
},2000)  
return () => clearTimeout(timer)
}
if (translation.toLowerCase().includes("submit")) {
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

const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
} 
let mic = localStorage.getItem("togvoic")

useGSAP(()=>{
gsap.from(".loginDiv",{
opacity:0,
y:121,
duration: .7,
})
})  



useEffect(() => {
  if (isLogin) {
    navigate('/Home');
  }
}, [isLogin]);
let forget = localStorage.getItem("forget")
if (forget!== "" && forget !== null && forget.length !==0) {
  localStorage.removeItem("forget")
}



  return (
<>
 <div className="onctraninmenu" style={{zIndex:"9999999999999999"}}>
      {table ?
      <>
    <div className="svhmenufont">  <ImCross onClick={()=>settable(false)}/>   </div>  
      <Tablegetonc login={"login"}/>
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

    <main className={`${red ? "SignUpWibberate" : "SignUpWibberate2"}`}>
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
             <p>please <span>login</span></p>
             <h5 style={{
              right: "-31%"
             }}>ログイン</h5>
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
            backgroundImage: `url(${curr.img3})`,zIndex:"99"
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

      <div>
   <h3  style={{color: "#00fbff"}}>Login</h3>
   <NavLink to={'/emailvalibation'}> <h4 style={{color: "#EEEEEE"}}

   >SignUp</h4></NavLink>  
    </div>
        <form onSubmit={handleSubmit}>
          <motion.input
           animate={{ scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
             whileTap={{scale:0.98}}
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            ref={refs}
          />
          <label className="IoIosEye" onClick={()=>setice(!ice)}>{!ice ? <IoIosEyeOff /> :<IoIosEye/>}</label> 
          <motion.input
           animate={{ scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
             whileTap={{scale:0.98}}
            type={!ice ?"password" :"text"}
            style={{paddingRight: "3.6rem"}}
            placeholder="Enter Your Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            ref={refs2}
          /> 
       <NavLink to={'/forgetpasword'}><motion.div className="forgetpassword"
         animate={{ scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
             whileHover={{scale:1.043}}
             whileTap={{scale:1}}
        >Forget Passwored</motion.div></NavLink> 
          <br /><br />
          <section>
          <input type="checkbox"  required id="checkbox2"
          /> 
          <label htmlFor="checkbox2"
          >Enter terms and policies</label>
<br /><br />
          <input type="checkbox"  required id="checkbox1"

          /> 
          <label htmlFor="checkbox1" 

          >Remember me</label>
          </section>
              <motion.div className="buttonupperdivs"
              animate={{ scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
             whileHover={{scale:1.043}}
             whileTap={{scale:1}}
              >    
             <button  role="button" type="Submit" 
             style={{marginTop:"-2rem",marginLeft: "1rem"}}
      ><span>Submit</span> <FaAngleRight/></button>
</motion.div>

        <motion.div className="googleImg" 
         animate={{ scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
             whileHover={{scale:1.033}}
             whileTap={{scale:1}}
        onClick={googleLogin}
          >
          <img src="https://www.pngmart.com/files/16/Google-Logo-PNG-Image.png" alt="" />
          <p>Login with Google</p>
        </motion.div>
        </form>
      </div>
      </section>
    </main>
  </>  
  );
};
