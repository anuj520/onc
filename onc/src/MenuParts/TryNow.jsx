import { Menu } from "../HomePart/Menu"
import { Footer } from "../footer/footer"
import {motion} from "motion/react"
import { data, Link, NavLink, useNavigate } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef, useState } from "react"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { ImCross } from "react-icons/im"
import { FaInfo } from "react-icons/fa6"
import { Abouttable } from "../onctables/abouttable"
export const TryNow = () =>{
   const navigate = useNavigate()
     const{start,translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()
 const [table2,settable2] = useState(false)
 const refs3 = useRef()  


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



let ismenu = localStorage.getItem("isMenu2")
let ismenu2 = localStorage.getItem("isMenu")  
if (table2 == true && refs3.current) {
 document.body.style.overflow = "hidden"; 
 refs3.current.style.filter = "blur(10px)"
}else if(refs3.current){
  document.body.style.overflow = "auto"
  refs3.current.style.filter = "none"
}
const{contextSafe} = useGSAP()
gsap.registerPlugin(ScrollTrigger)

const addgsap = contextSafe(()=>{
 gsap.from(".trywokong .sunimages",{
   scale:0,
   opacity:0,
   duration:1,
   ease:"back.out",
   stagger:0.2
 }) 
 
  gsap.from(".trywokong .sunimages2",{
   y:220,
   opacity:0,
   delay: 0.5,
   duration:1,
   ease:"back.out",
   stagger:0.2
 }) 

  gsap.from(".takken8trypage .takkenh1h2",{
   scale:0,
   opacity:0,
   duration:1,
   ease:"back.out",
   stagger:0.2,
   scrollTrigger:{
   trigger:".takken8trypage",
   scroller:"body",
   start:"top 20%"
   }
 }) 
 
  gsap.from(".takken8trypage .takeimgs",{
   y:220,
   opacity:0,
   delay: 0.5,
   duration:1,
   ease:"back.out",
   stagger:0.2,
      scrollTrigger:{
   trigger:".takken8trypage",
   scroller:"body",
   start:"top 20%"
   }
 }) 
 
})


 useGSAP(()=>{
   addgsap()
 })



 return(
<>  

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
         
<main ref={refs3}
 style={{
   marginTop: ismenu == "true" && ismenu2 == "true" ? "-0%" : 
   ismenu == "true" ? "4%" :  
   ismenu2 == "true" ? "0.2%" : ""
   }}
>
<div className="menupages" style={{position:"relative",top:"34.3rem",zIndex:"999999999999999999999999999999999999999999999999999999"}}>
<Menu/>   
</div>   
<section className="trywokong">
   <main>
      <div className="posterbaner">
  <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757262585/sun_bo8qv1.png"  className="sunimages2"/>
 <div className="img2try">
     <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757262825/Adobe_Express_-_file_13_akzclm.png" className="sunimages2" />
</div> 
      </div>

<div className="mainimg">
   <img src="https://www.pngall.com/wp-content/uploads/15/Black-Myth-Wukong-Game-Armor-Set-PNG.png"  className="sunimages2"/>
</div>

{/* //names       */}
      <div className="nametry">
         <h1 className="sunimages">Black myth</h1>
          <h2 className="sunimages">Wokong</h2>
</div>
      <div className="nametry2">
      <h1 className="sunimages">monkey king</h1>
<Link to={`/try/67acd5e6b47d4a438d581c57`}><motion.button
   className="sunimages"
   style={{marginLeft:"-80%"}} 
   animate={{scale:1,transition:{ease:"easeInOut",duration:0.7,type:"spring",damping:15,stiffness:300}}}
   whileHover={{scale:1.055}}
   whileTap={{scale:1}}
   >play</motion.button> </Link>   
</div>
   </main>
</section>


<section className="trywokong takken8trypage">
   <main>
      <div className="posterbaner" 
      style={{background: `linear-gradient(to top,#572731,#000)`}}
      >
  <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757262762/Adobe_Express_-_file_21_fbjdyc.png" className="takeimgs" 
  style={{
   marginTop: "-18%"
  }}
  />

 <div className="img2try">
     <img src="https://www.pngplay.com/wp-content/uploads/8/Tekken-Transparent-Free-PNG-Transparent-Images.png" className="takeimgs" />
</div> 
      </div>

<div className="mainimg">
   <img src="https://th.bing.com/th/id/R.85683ccd4cc98da8a784b1e64b48fdc7?rik=bTBzPe3VjXuwyw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f12%2fTekken-Character-Transparent-PNG.png&ehk=L1wWu25bdPX%2bL2VeN5z3f%2fIbV1rdCUWboI6TQHtqtns%3d&risl=&pid=ImgRaw&r=0" className="takeimgs" 
   style={{
      marginTop: "258%",
      marginLeft: "36%"
   }}
   />
</div>

{/* //names       */}
      <div className="nametry">
         <h1 className="takkenh1h2">Takken 8 t8</h1>
          <h2 className="takkenh1h2">Devil Jin</h2>
</div>
      <div className="nametry2">
      <h1 style={{fontSize: "4.5rem",marginTop:"4%"}} className="takkenh1h2">Kazuya Mishima</h1>
<Link to={`/try2/679107379c965c44fa976828`}> <motion.button
  style={{marginLeft:"-85%"}} 
  animate={{scale:1,transition:{ease:"easeInOut",duration:0.7,type:"spring",damping:15,stiffness:300}}}
   whileHover={{scale:1.055}}
   whileTap={{scale:1}}
   className="takkenh1h2"
   >play</motion.button> </Link>
</div>
   </main>
</section>


<br /><br />
<Footer/>
 </main>
</> 
 )   
}