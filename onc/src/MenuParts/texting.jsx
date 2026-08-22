import { useRef, useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import J49 from "./../../public/J49.json"
import { Footer } from "../footer/footer"
import { Menu } from "../HomePart/Menu"
import { Loading } from "../Loading/Loading"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { MdOutlineDoubleArrow } from "react-icons/md"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {motion, scale} from "motion/react"
import { FaAngleRight } from "react-icons/fa6"
import { ImCross } from "react-icons/im"
import { FaInfo } from "react-icons/fa"
import { ProfileTable } from "../onctables/profiletable"
export const Testing = () => {
const { data:authdata, userData,AuthToken,reand} = useAuth();
const{translation,resetTranscript,setTraslation,handleVoice,setmic} = useAuth2()
  const refs = useRef(null)
  const ref3 = useRef()
  const[copy,setcopy] = useState("")
  const[table2,settable2] = useState(false)
  const navigator = useNavigate()
  const[Data , setData] = useState(localStorage.getItem('img'))
  const[file,setfile] = useState(null)
   const refs2 = useRef(null)
    const refs3 = useRef(null)
    
     const refs4 = useRef(null)
const varients = {
  hidden :{scale:0},
  visible :{scale:1,transition:{type:"spring",ease:"easeInOut",duration:0.7,damping:15,stiffness:300}}
}

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
  });

  useEffect(() => {
    if (authdata) {
      setUser({
        firstname: authdata.firstname || "",
        lastname: authdata.lastname || "",
        email: authdata.email || "",
        gender: authdata.gender || "",
      });
    }
  }, [authdata]);

  const handleSubmit = async (e) => {   
    if (e && typeof e.preventDefault === "function") {
    e.preventDefault()
   }
const formData = new FormData();
   formData.append("file", file);
if (file !== null) {
   const res = await fetch(`http://localhost:3000/profileEdit/${authdata.email}`, {
     method: "PATCH",
     headers: {
       Authorization: AuthToken,
     },
     body: formData, 
   });
 
   setData(file.name);
   localStorage.setItem("img", file.name);
  }

     if (!authdata.google || authdata.image == undefined) {
    try {
      const response = await fetch(`http://localhost:3000/user/edit/${authdata._id}`,{
        method:"PATCH",
        headers:{
        "Content-Type": "application/json",   
        Authorization:AuthToken 
        }, 
        body:JSON.stringify(user)
       })
     const result = await response.json();
      console.log(result);  
      setcopy(result)  
    if (result.error) {
    toast.error(result.error)  
     } 
    } catch (error) {
      console.error("authError",error);
      
    }
}else{
    try {
      const response = await fetch(
        `http://localhost:3000/auth/google/edit/${authdata._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization:AuthToken
          },
          body: JSON.stringify(user),
        }
      );

      const result = await response.json();
      console.log(result);
      setcopy(result) 
     if (result.error) {
    toast.error(result.error)  
    }  
    } catch (error) {
      console.error("Error:", error); 
    }
  };
if (!copy.error) {
 toast.success("update Sucessfull")  
 setcopy(false)
navigator("/user")
window.location.reload()   
}
}

useEffect(()=>{

let name = ""
let nameTrans = translation.toLowerCase()
if (nameTrans.includes("name") && !nameTrans.includes("last name")) {
let nameIndex = nameTrans.indexOf("name");
 name = translation
 .slice(nameIndex+ 4)
 .replace(/[.\s]/g, "").trim()
}


let last = ""
let lastTrans = translation.toLowerCase()
if (lastTrans.includes("last name")) {
  let lastIndex = lastTrans.indexOf("last name")
  last = translation
  .slice(lastIndex + 9)
  .replace(/[.\s]/g,"").trim()
}
let gend = ""
let gradeTrans = translation.toLowerCase()
if(gradeTrans.includes("gender")){ 
let gendIndex = gradeTrans.indexOf("gender")
   gend = translation
   .slice(gendIndex + 6)
.replace(/[.\s]/g , "").trim()
}


if (last){
if (last.toLowerCase().includes("cut")) {
  setUser(((prev) => ({...prev,last :""})))
}else{   
   refs.current.blur();
     refs2.current.focus()
  setUser((prev) => ({...prev,lastname :last}))
}  
  const timer = setTimeout(()=>{
resetTranscript()
 setTraslation("")
  },2000)
  return () => clearTimeout(timer)
}

if (name) {
if (name.toLowerCase().includes("cut")) {
  setUser(((prev) => ({...prev,name :""})))
  
}else{   
  refs.current.focus()
  setUser((prev) =>({...prev,firstname:name}))
}  
const timer = setTimeout(()=>{
resetTranscript()
 setTraslation("")
},2000)
return () => clearTimeout(timer)
}
if (gend) { 
if (gend.toLowerCase().includes("cut")) {
  setUser(((prev) => ({...prev,gender :""})))
}else{  
    refs.current.blur();
     refs2.current.blur()
  refs3.current.blur()
  refs4.current.focus()
  setUser((prev) => ({...prev,gender:gend}))
}
  const timer = setTimeout(()=>{
resetTranscript()
 setTraslation("")
  },2000)
  return () => clearTimeout(timer)
}

if (translation.toLowerCase().includes("submit")) {
  handleSubmit()
}
},[translation])

useEffect(()=>{
if (translation == "details") {
  settable2(true)
   resetTranscript();
 setmic("")
setTraslation("")
handleVoice("gmaes details table")
} else if(translation == "close info")
  settable2(false)
   resetTranscript();
 setmic("")
setTraslation("")
},[translation])

useEffect(()=>{
if (!user) return; 
const handleedit = async() =>{
const respon = await fetch("http://localhost:3000/onc/edit",{
  method: "POST",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({edit: true,email:user.email})
})
}
handleedit()


},[user])

useEffect(()=>{
 const handleedit = async() =>{
if (!user.email) {
   return; 
}

const respon = await fetch("http://localhost:3000/onc/editpatch",{
  method: "PATCH",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({edit: true,email:user.email,game:false,mess:false,gcoll:false,home:false})
})
}

if (window.location.pathname === `/edit`) {
handleedit()  

}
  
},[window.location.pathname,user])

useGSAP(()=>{
gsap.from(".loginbox",{
opacity:0,
  duration: 1,
  delay: 0.5
})
gsap.from(".childbox,.childbox2,.childbox3",{
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

  if (table2 == true && refs3.current) {
 document.body.style.overflow = "hidden"; 
 refs3.current.style.filter = "blur(10px)"
}else if(refs3.current){
  document.body.style.overflow = "auto"
  refs3.current.style.filter = "none"
}


  return (
<>   
         <div className="onctraninmenu2" style={{zIndex:"999999999999999999999999",marginTop:"-3%"}}>
              {table2 ?
              <>
            <div className="svhmenufont">  <ImCross onClick={()=>settable2(false)}/>   </div>  
              <br /><br />
              <ProfileTable/>
              </>: 
            <div className="svhmenufont" > <FaInfo onClick={()=>settable2(true)}/> </div>
                }
          </div >
        <main ref={ref3}>
    <div style={{position:"relative",top:"33rem"}}>
       <Menu/>
      </div>
{
  J49.slice(reand-1,reand).map((curr,index)=>{
return(
     <div className="leftimg2" key={index} style={{
      marginTop:"-2%"
     }}>
        <div className="loginbox">
          <div className="childbox"
          style={{backgroundImage: `url(${curr.img})`}}
          >
            <p><span>Edit</span> profile</p>
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
 <section className="loginDiv2" style={{height: "90vh",position : "relative",top:"0.5rem"}}>
    <form onSubmit={handleSubmit} style={{marginTop: "1.3rem",lineHeight: "4rem"}}>
 <div className="handlefilebutton">
      <motion.label className="editpagechoosefile"
              initial="hidden"
             variants={varients}
             animate="visible"
             whileHover={{scale:1.034}}
             whileTap={{scale:1}}
      >
  <span>Upload your image</span>
  <input
    type="file"
    onChange={(e) => setfile(e.target.files[0])}
  />
</motion.label>
<span className="file-name">{file ? file.name : "No file chosen"}</span>
 </div>

            <motion.input type="text" 
              initial="hidden"
                     variants={varients}
                     animate="visible"
                    whileTap={{scale:0.98}}
            placeholder="Name" value={user.firstname} name="firstname" onChange={(e)=> setUser((prev) => ({...prev,firstname:e.target.value}))} ref={refs} style={{marginTop: "12%"}}/>
        
                   <motion.input 
                     initial="hidden"
                     variants={varients}
                     animate="visible"
                    whileTap={{scale:0.98}}
                   type="text" value={user.lastname} name="lastname" onChange={(e)=> setUser((prev) => ({...prev,lastname:e.target.value}))} ref={refs2}/>
        
                   <motion.input 
                     initial="hidden"
                     variants={varients}
                     animate="visible"
                     whileTap={{scale:0.98}}
                   type="text" value={user.email } name="email" ref={refs3}/>
         
                   <motion.input 
                     initial="hidden"
                     variants={varients}
                     animate="visible"
                     whileTap={{scale:0.98}}
                   type="text" value={user.gender} name="gender" onChange={(e)=> setUser((prev) => ({...prev,gender:e.target.value}))} placeholder="Enter Gender" ref={refs4}/>

        <motion.div className="buttonupperdivs"
                   initial="hidden"
                    variants={varients}
                    animate="visible"
                    whileHover={{scale: 1.033}}
                    whileTap={{scale:1}}
                 style={{
                   marginTop:"-2%",
                   marginLeft:"35%",
                 }}>
                    <button className="buttonEdit" role="button" type="submit"
                    onClick={handleSubmit}
                  >Submit <FaAngleRight/></button>
                 </motion.div>
      </form>
      </section>
    </main>
    </> 
  );
};
