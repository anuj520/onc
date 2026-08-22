import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../ContextAPI/ContextAPI";
import { toast } from "react-toastify";
import { MdOutlineDoubleArrow, MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import {useGoogleLogin} from "@react-oauth/google"
import { googleAuth } from "../Config/axios2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import J49 from "./../../public/J49.json"
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { FaInfo } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Tablegetonc } from "./tablegetonc";
import { Mike } from "../maik/maik";
import { ErrorElements } from "../Error/ErrorElements";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Loading } from "../Loading/Loading";

export const SignUp = () =>{
 const{storeToken,handleButtonClick,reand,buttonH,settable,table,isLogin} = useAuth();
 const{translation,resetTranscript,setTraslation,start,setmic} = useAuth2()
const[red,setred] = useState(false)
const[togs,setsinupobj] = useState([])
const refs = useRef()
const refs2 = useRef()
const refs3 = useRef()
const[ice,setice] = useState(false)
const refs4 = useRef()
const ref5 = useRef()

const email2 = useParams()


//googlePart//
const responseGoogle = async(authResults) =>{
try {
  if (authResults['code']) {
    const results = await googleAuth(authResults['code'])
    const{email, name, picture,gender} = results.data.user;
    const token = results.data.token;
    storeToken(token)
toast.success("Registration Sucessfully")
navigate("/Home")
window.location.reload()
  }
  console.log(authResults);
  
} catch (error) {
  console.log(error);
  
  toast.error("Someting went wrong")
}
}

const googleLogin = useGoogleLogin({
  onError:responseGoogle,
  onSuccess:responseGoogle,
  flow: "auth-code"
})

//googlePart//

const navigate = useNavigate()
const[user,setuser] = useState({
 firstname : "",
 lastname : "",   
 email : email2.email,
 password : "",
 gender : ""   
})    

const handleSubmit = async(e) =>{
 if(e && typeof e.preventDefault === "function"){ 
  e.preventDefault();
}
 try {
  const res = await fetch("http://localhost:3000/user/signUp/",{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
  },
    body:JSON.stringify(user)
  })
 const response = await res.json()
 console.log(response);
 
 storeToken(response.token)
 if (response.token) {
  toast.success("Registration Sucessfully")
    navigate('/Home');
      window.location.reload()
    }else{
      toast.error(response.errors ? response.errors[0].msg :response);
      setred(!red)
    }
} catch (error) {
  toast.error("Someting went wrong")
  
}
}
const handleChange = (e) =>{
  const{name,value} = e.target;
  setuser((prev) => ({...prev,[name]:value}))   

  if (e.target.value == 0) {
    resetTranscript()
  }
}

useEffect(()=>{
//firstname  
let firstname = ""
let first = translation.toLowerCase();
if (first.includes("name")&& !first.includes("last name")) {
  firstname = translation
   .slice(4) 
    .replace(/^[\s.]+/, "") 
    .replace(/[.\s]/g, "") 
      .replace(/[?\s]/g, "")
    .trim();
}
//firstname  

//lastname//
let lastname = "";
let last = translation.toLowerCase();
if (last.includes("last name")) {
  lastname = translation
  .slice(9)
  .replace(/[.\s]/g, "")
  .replace(/[?\s]/g, "")
  .trim()
}
//lastname//

//email//
let email = ""
let em = translation.toLowerCase();
if (em.includes("email")) {
  email = translation
  .slice(5)
    .replace(/[.\s]/g, "")
      .replace(/[?\s]/g, "")
.replace(/attherate.*$/i, '@gmail.com')
  .trim()
}
//email//

//password
let pass = "";
let psasTract = translation.toLowerCase();
if (psasTract.includes("password")) {
  pass = translation
  .slice(8)
  .replace(/at the rate/i,"@")
    .replace(/[?\s]/g, "")
  .trim()
}
//password

//gender

let gender = "";
let gen = translation.toLowerCase();

if (gen.includes("gender")) {
 gender = translation.toLowerCase()
 .slice(6)
 .replace(/[.\s]/g,"").trim()
   .replace(/[?\s]/g, "")
}
//gender


if (lastname) { 
  if (lastname.toLowerCase().includes("remove")) {
  setuser(((prev) => ({...prev,lastname :""})))
  }else{
  refs2.current.focus()
  refs3.current.blur()
  refs.current.blur()
   refs4.current.blur()
setuser(((prev) => ({...prev,lastname :lastname})))
  }
  const time = setTimeout(() => {
    resetTranscript()
     setmic("")
    setTraslation("")
  }, 2000);
  return () => clearTimeout(time) 
}
if (firstname) {
 if (firstname.toLowerCase().includes("remove")) {
setuser(((prev) => ({...prev,firstname :""})))
  }else{ 
  refs.current.focus()
  refs2.current.blur()
  refs3.current.blur()
    refs4.current.blur()
  setuser((prev) =>({...prev,firstname : firstname}))
  }
 const time = setTimeout(()=>{
  resetTranscript()
  setmic("")
  setTraslation("")
 },2000) 

return () => clearTimeout(time) 
}
if (email) {
if(email.toLowerCase().includes("remove")){
setuser(((prev) => ({...prev,email :""})))
}else{  
  refs3.current.focus()
    refs2.current.blur()
      refs4.current.blur()
  refs.current.blur()
  setuser((prev) =>({...prev,email:email.toLowerCase()}))
}
const timer = setTimeout(()=>{
resetTranscript()
 setmic("")
setTraslation("")
},2000)
return () => clearTimeout(timer)
}
if (pass) {
if(pass.toLowerCase().includes("remove")){
setuser(((prev) => ({...prev,password :""})))
}else{
  refs4.current.focus()
    refs2.current.blur()
  refs3.current.blur()
  refs.current.blur()
  setuser((prev) =>({...prev,password:pass}))
}
 const timer = setTimeout(() => {
  resetTranscript();
   setmic("")
  setTraslation("")
 }, 2000); 
 return () => clearTimeout(timer)
}
if (gender) {
  if (translation == "remove") {
     ref5.current.textContent = "Select Gender";
  }else if (gender.includes("man") || gender.includes("male")) {
    ref5.current.textContent = "male"
    setuser((prev)=>({...prev,gender : "male"}))
  }else if(gender.includes("other")){
    ref5.current.textContent = "other";
    setuser((prev) => ({...prev,gender: "other"}))
  }
   if (gender.includes("woman") || gender.includes("female")) {
    ref5.current.textContent = "female"
    setuser((prev)=>({...prev,gender: "female"}))
  }
  const timer = setTimeout(() => {
    resetTranscript();
     setmic("")
    setTraslation("")
  }, 2000);
  return () => clearTimeout(timer)
}

if (translation.toLowerCase().includes("submit")) {
  handleSubmit()
}

},[translation])
// console.log(user);


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


useGSAP(()=>{
gsap.from(".loginbox",{
opacity:0,
  duration: 1,
  delay: 0.5
})
gsap.from(".leftimg2 .childbox,.childbox2,.childbox3",{
rotate:90,
  y : -130,
  duration: 1,
  delay: 1,
   ease:"back.out"
})
gsap.from(".loginDiv2",{
 scale: 0,
  duration: 0.7,
})
})

const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
} 

let mic = localStorage.getItem("togvoic")

if (table == true && refs.current) {
 document.body.style.overflow = "hidden"; 
 refs.current.style.filter = "blur(10px)"
}else if(refs.current){
  document.body.style.overflow = "auto"
  refs.current.style.filter = "none"
}

useEffect(()=>{
const handlegetSinup = async() =>{
const respon = await fetch(`http://localhost:3000/user/handlegets/${email2.email}`);
const obj = await respon.json();
if (window.location.pathname == `/signUp/${obj.verify}`) {
setsinupobj(obj.tog)
    
}
}  
handlegetSinup()
},[window.location.pathname])

useEffect(() => {
  if (isLogin) {
    navigate('/Home');
  }
}, [isLogin]);


if (togs == false) {
  return <Loading/>
}

return(
<>
 <div className="onctraninmenu" style={{zIndex:"9999999999999999"}}>
      {table ?
      <>
    <div className="svhmenufont">  <ImCross onClick={()=>settable(false)}/>   </div>  
      <Tablegetonc sinup={"sinup"}/>
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

{
  J49.slice(reand-1,reand).map((curr,index)=>{
return(
     <div className="leftimg2 leftimg3" key={index}>
        <div className="loginbox">
          <div className="childbox"
          style={{backgroundImage: `url(${curr.img})`}}
          >
            <p>please <span>Signup</span></p>
            <h5>サインアップ</h5>
          </div>
          <div className="childbox2"
             style={{backgroundImage: `url(${curr.img2})`}}
          ></div>
          <div className="childbox3"
             style={{backgroundImage: `url(${curr.img3})`,zIndex:"99"}}
          ></div>
           <div className="smallbox3">
              <p>Orion</p>
              <h5>orion</h5>
              <h5>orion</h5>
            </div>
          <div className="childbox4"><MdOutlineDoubleArrow/></div>
        <div className="childbox5"><MdOutlineDoubleArrow/></div>
       <div className="childbox6"><MdOutlineDoubleArrow/></div>
        </div>
    </div> 
  )})
}
 
    <div className="loginDiv2">
    <div>
    <h3 style={{color: "#00fbff"}}>SignUp</h3>  
    <NavLink to={'/login'}><h4 style={{color: "#EEEEEE"}}
    onClick={handleButtonClick}
    >Login</h4></NavLink>
    </div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Enter Your Name"
        required name="firstname" value={user.firstname} 
        onClick={handleButtonClick}
        onChange={handleChange}
        ref={refs}/>

        <input type="text" 
        placeholder="Enter Your Last name"
        required name="lastname" value={user.lastname} 
        onClick={handleButtonClick}
        onChange={handleChange}
        ref={refs2}/>

        <input
          type="text"
          placeholder="Enter Your Email"
         required name="email"
          value={email2.email}
          onClick={handleButtonClick}
          onChange={handleChange}
          ref={refs3}
        />
        <input
          type={!ice ?"password" :"text"}
          placeholder="Enter Your Password"
         required name="password"
          value={user.password}
          style={{paddingRight: "3.6rem"}}
          onClick={handleButtonClick}
          onChange={handleChange}
          ref={refs4}
        />
        <label className="IoIosEye" onClick={()=>setice(!ice)}>{!ice ? <IoIosEyeOff /> :<IoIosEye/>}</label> 
           <select
           required name="gender"
            value={user.gender}
            onClick={handleButtonClick}
            onChange={handleChange}
        >
            <option value="" ref={ref5}><span>GENDER</span></option>
            <option value="male" >Male</option>
            <option value="female" >Female</option>
            <option value="other" >Other</option>
        </select>
        <div className="buttonupperdivs">
        <button type="submit" 
        ><span>Submit</span> <FaAngleRight/></button>
        </div>

        <div className="googleImg" onClick={() =>{googleLogin();handleButtonClick()}}
        >
          <img src="https://www.pngmart.com/files/16/Google-Logo-PNG-Image.png" alt="" />
          <p>Sign up with Google</p>
        </div>
      </form>
    </div>
  </main>
  </> 
);
};
