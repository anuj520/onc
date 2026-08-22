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

export const Edit = () =>{
const{data,reand,AuthToken,isLogin,userData} = useAuth()
const{translation,resetTranscript,setTraslation,handleVoice,setmic} = useAuth2()
const param = useParams();
const ref3 = useRef()
const[table2,settable2] = useState(false)
const[file,setfile] = useState(null)
const navigator = useNavigate()
const[Data , setData] = useState(localStorage.getItem('img'))
  const refs = useRef(null)
   const refs2 = useRef(null)
    const refs3 = useRef(null)
     const refs4 = useRef(null)
const handleChange = (e) =>{
    const{name,value} = e.target;
    console.log(value);
    
    
    setuser((prev) => ({...prev,[name]:value}))
    if (e.target.value == 0) {
      resetTranscript()
    }
  }  

// const handleech = async(e) =>{
// if (e && typeof e.preventDefault === "function") {
//   e.preventDefault()
// }
//      if (!data.google || data.image == undefined) {
//     try {
//       const response = await fetch(`https://orion2-0.onrender.com/user/edit/${param.id}`,{
//         method:"PATCH",
//         headers:{
//         "Content-Type": "application/json",   
//         Authorization:AuthToken 
//         }, 
//         body:JSON.stringify(user)
//        })
//     } catch (error) {
//       console.error("authError",error);
      
//     }
// }   

// await fetch(`https://orion2-0.onrender.com/auth/google/edit/${param.id}`,{
//   method:"PATCH",
//   headers:{
//     "Content-Type": "application/json", 
//     Authorization:AuthToken
//   },
//   body:JSON.stringify(user)
// })
// }

  const handleSubmit = async(e) =>{
   if (e && typeof e.preventDefault === "function") {
    e.preventDefault()
   }
   const formData = new FormData();
   formData.append("file", file);
if (file !== null) {
   const res = await fetch(`https://orion2-0.onrender.com/profileEdit/${data.email}`, {
     method: "PATCH",
     headers: {
       Authorization: AuthToken,
     },
     body: formData, 
   });
 
   setData(file.name);
   localStorage.setItem("img", file.name);
  }
    // handleech() 
  navigator("/user")
  toast.success("update Sucessully")
  userData()
  window.location.relod()
}
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



const varients = {
  hidden :{scale:0},
  visible :{scale:1,transition:{type:"spring",ease:"easeInOut",duration:0.7,damping:15,stiffness:300}}
}
  if (!isLogin) {
    navigator('/login')
  }
if (data == "") {
    return <Loading/>  
} 

  if (table2 == true && refs3.current) {
 document.body.style.overflow = "hidden"; 
 refs3.current.style.filter = "blur(10px)"
}else if(refs3.current){
  document.body.style.overflow = "auto"
  refs3.current.style.filter = "none"
}

return(
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
        </section><br /><br /><br />
        <Footer/>
    </main>
    </>  
)
}