import { useRef, useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { MdKeyboardArrowRight } from "react-icons/md";
import J43 from "./../../public/J43"
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Homesec = () =>{
const{reand} = useAuth()
const{translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()
const refs = useRef()
const navigate = useNavigate()
const[num,setnum] = useState(2)
const[store,setstore] = useState("")

  useEffect(() => {
    const handleMouse = (e) => {
      if (!refs.current) return;
      const bounds = refs.current.getBoundingClientRect();
      
      const relativeX = e.clientX - bounds.left;
      const relativeY = e.clientY - bounds.top;
      
      // Move head
      gsap.to(".headHome", {
        x: relativeX,
        y: relativeY,
        duration: 0.5,
      });

      // Move eye
      gsap.to(".eyslft", {
        x: relativeX * 0.004,
        y: relativeY * 0.002,
        duration: 0.3
      });

      gsap.to(".eysRft", {
        x: relativeX * 0.004,
        y: relativeY * 0.002,
        duration: 0.3
      });
    }  

refs.current?.addEventListener("mousemove",handleMouse)
return () => refs.current?.removeEventListener("mousemove",handleMouse)
},[])

useEffect(()=>{
if (translation == "black mith wokong") {
  setnum(5)
   setstore("black mith wokong") 
   handleVoice("The Power of black mith") 
}else if (translation == "red dead redemption") {
 setnum(4) 
 setstore("red dead redemption")  
}else if (translation == "marval spider man 2") {
 setnum(3) 
setstore("marval spider man 2")   
}else if (translation == "valorant") {
 setnum(2) 
 setstore("valorant")   
}else if (translation == "marval rivales") {
 setnum(1) 
 setstore("marval rivales") 
}else if (translation == "god of war") {
 setnum(6) 
setstore("god of war ragnarok")   
}
else if (translation == "wwe") {
 setnum(7) 
setstore("wwe 2k24")   
}else if(translation == "Forza Horizon 5"){
handleVoice(`the Forza Horizon 5`)   
navigate(`/gamesD/Forza Horizon 5`); 
window.location.reload()
}
else if(translation == "NARAKA BLADEPOINT"){
handleVoice(`the NARAKA BLADEPOINT`)   
navigate(`/gamesD/NARAKA BLADEPOINT`); 
window.location.reload()
}
else if(translation == "Uncharted The Lost Legacy"){
handleVoice(`the Uncharted The Lost Legacy`)   
navigate(`/gamesD/Uncharted The Lost Legacy`); 
window.location.reload()
}

if (translation.includes("open")) {
handleVoice(`the  ${store}`)   
navigate(`/gamesD/${store}`); 
window.location.reload()
}
},[translation])

const{contextSafe} = useGSAP()

const addgsap = contextSafe(()=>{
  gsap.from(".glasshss, ul, li,video",{
    scale:0,
    delay: 1,
    duration:1,
  ease:"back.out"
  })
    gsap.from(".glasshss,.mounnight,.eyslft,.eysRft",{
    y:220,
    duration:0.7,
    ease:"back.out"
  })  
})

useGSAP(()=>{
addgsap()
},[])

  return(
    <div className="Homesec" ref={refs}>
        <header className="headHome" style={{opacity:num !== 1 && "0"}}></header> 
{
  J43.slice(num-1,num).map((curr,index) =>{
    
  return(
   <header onDoubleClick={()=>{navigate(`/games/${curr.length}`),window.location.reload()}}>  
<img style={{height: curr.height,width:num == 5 &&"54%",margin : curr.margin,filter:curr.drop}}src={curr.img} alt="" className={`mounnight ${num == 5 ? "sonfohandle" : num == 2 ? "valorant" : ""}`}/>

 <div className="eyslft" style={{display: num !== 1 && "none"}}></div>
 <div className="eysRft"style={{display: num !== 1 && "none"}}></div>
 
 <ul></ul>
 <ul className="ulHome"></ul>
<ul className="ulHome2"></ul>   
<ul className="ulHome3"></ul>  
<ul className="ulHome4"></ul> 
<ul className="ulHome5"></ul>
<ul className="ulHome6"></ul>
<ul className="ulHome7"></ul>
<ul className="ulHome8"></ul>

{/* ///right */}
<li className="lihome"></li>
<li className="lihome2"></li>
<li className="lihome3"></li>
<li className="lihome4"></li>
<li className="lihome5"></li>
<li className="lihome6"></li>

    <section className="glasshss"> 
</section>  
 
<footer className="hfss">
  <video src={curr.video} autoPlay muted loop></video> 
  <h1
  className={`${curr.length.length >=9 ? "eaightVmax" :"mainh1"}`}
  >{curr.text} <span>{curr.text2}</span> {curr.text1}</h1>

 {/* //slice /part  */}  
</footer>
{/* </NavLink>   */}
<div className="allshowjome">
  <MdKeyboardArrowRight/>
  <main>
<motion.div className="imgcoverhomss" onClick={() => setnum(5)}
animate={{scale:1,transition:{duration: .7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
whileHover={{scale:1.033}}
whileTap={{scale:1}}
style={{
  backgroundImage: `url(https://res.cloudinary.com/dycmuvzze/image/upload/v1757218472/S4_jfp1ed.png)`
}}
></motion.div>

<motion.div className="imgcoverhomss" 
animate={{scale:1,transition:{duration: .7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
whileHover={{scale:1.033}}
whileTap={{scale:1}}
style={{
  backgroundImage: `url(https://res.cloudinary.com/dycmuvzze/image/upload/v1757218470/S6_okh3ts.png)`
}}
onClick={()=> setnum(2)}> 
</motion.div>

<motion.div className="imgcoverhomss"
animate={{scale:1,transition:{duration: .7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
whileHover={{scale:1.033}}
whileTap={{scale:1}}
style={{
  backgroundImage: `url(https://res.cloudinary.com/dycmuvzze/image/upload/v1757218474/S1_ykkdru.png)`
}}
onClick={()=> setnum(1)}> <img src="https://clipground.com/images/best-png-20.png" alt="" />
</motion.div>

<motion.div className="imgcoverhomss"
animate={{scale:1,transition:{duration: .7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
whileHover={{scale:1.033}}
whileTap={{scale:1}}
style={{
  backgroundImage: `url(https://res.cloudinary.com/dycmuvzze/image/upload/v1757218464/S3_nc81m2.png)`
}}
onClick={()=> setnum(6)}>
</motion.div>

<motion.div className="imgcoverhomss" 
animate={{scale:1,transition:{duration: .7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
whileHover={{scale:1.033}}
whileTap={{scale:1}}
style={{
  backgroundImage: `url(https://res.cloudinary.com/dycmuvzze/image/upload/v1757218468/S2_hoxk08.png)`
}}
onClick={()=> setnum(7)}>
</motion.div>

<motion.div className="imgcoverhomss"
animate={{scale:1,transition:{duration: .7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
whileHover={{scale:1.033}}
whileTap={{scale:1}}
style={{
  backgroundImage: `url(https://res.cloudinary.com/dycmuvzze/image/upload/v1757218465/S7_bhfuke.png)`
}}
onClick={()=> setnum(3)}>
</motion.div>

<motion.div className="imgcoverhomss" 
animate={{scale:1,transition:{duration: .7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
whileHover={{scale:1.033}}
whileTap={{scale:1}}
style={{
  backgroundImage: `url(https://res.cloudinary.com/dycmuvzze/image/upload/v1757218470/S5_j8l7vw.png)`
}}
onClick={()=> setnum(4)}>
</motion.div>
  </main>
</div>
</header>  
  )  
  })
} 
    </div>
  )  
}