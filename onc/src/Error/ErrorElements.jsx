import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowLeftLong, FaHandPointLeft } from "react-icons/fa6";
import J56 from "./../../public/J56.json"
import {motion} from "motion/react"
import { NavLink, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaHandPointRight } from "react-icons/fa";
export const ErrorElements = () =>{
const[tog,settog] = useState(false)  
const[gun,setgun] = useState(localStorage.getItem("gun"))
const[fire,setfire] = useState(false)
const navigate = useNavigate()
const[gscope,setgscope] = useState(localStorage.getItem("gscope"))
const[restog,setrestog] = useState(false)

const handleClick = () =>{  
    new Audio("/gs.wav").play();
}
const handleClick2 = (e) =>{
        new Audio("/fire.mp3").play();
   setTimeout(() => {
     setfire(false)
   },50); 
}
const{contextSafe} = useGSAP()
const addgsap = contextSafe(()=>{
gsap.from(".page404 .sectionerror .itemerror",{
opacity:0,
y:175,
stagger:0.2,
duration:1,
ease:"back.out"
})  
gsap.from(".page404 .scopeguner,.firebuttoner",{
scale:0,
duration:1,
delay:.5,
ease:"bounce.out"
})

})

useGSAP(()=>{
 addgsap() 
})

  return(
    <main>
    <section className="page404">
   <div className="mainerorpage" onClick={()=>setrestog(false)}>
    <div className="leftdives"></div>
    <div className="leftdives"><div className="homenavigateerror">
    <motion.p onClick={()=>navigate("/Home")}
     animate={{scale:1,transition:{ease:"easeInOut",type:"spring",duration:0.7,damping:15,stiffness:300}}}
            whileHover={{scale:1.044}}
            whileTap={{scale:1}}
    > <FaArrowLeftLong/> Home</motion.p>
      </div></div>
   </div>
{
  !fire ?
   <img src={gun !== null ? gun :"https://videos.openai.com/vg-assets/assets%2Ftask_01k4851fd2egw8cpaskhj7xs0v%2F1756915497_img_1.webp?st=2025-09-04T01%3A00%3A37Z&se=2025-09-10T02%3A00%3A37Z&sks=b&skt=2025-09-04T01%3A00%3A37Z&ske=2025-09-10T02%3A00%3A37Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=fea36edb-a052-425e-a84a-436fdce0a7b4&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=YSUX82A86hc%2BJ25wPyaQcWXgcp8mK7%2BPb%2BW11OJrvTk%3D&az=oaivgprodscus"} alt="" 
   onClick={()=>setrestog(false)}
   className={`${tog ? "scaleerror" :"scaleerror4"} ${fire && "firess"}`}
style={{
  filter:
    (gun == "gun (4).png" || gun == "gun (5).png")
      ? "brightness(2)"
      : "none"
}}
   />  
   : 
     <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757263471/gunfire_rf5tfz.webp" alt="" 
   className={`${tog ? "scaleerror" :"scaleerror4"} ${fire && "firess"}`}

   />   
}
  
   <div className={`scopeguner ${tog ? "togerror" : "tofalseerror"}`} onClick={()=>{handleClick();settog(!tog)}}>
    <img src="https://cdn1.iconfinder.com/data/icons/loans-and-finance-outline-icon-set/100/loansfinance_100x100___9-512.png" alt=""/>
   </div>
  
   <div  className={`bigscope ${tog ? "scaleerror2" :"scaleerror3"}`} >
 <div className="four04"
     style={{left:gscope == "https://res.cloudinary.com/dycmuvzze/image/upload/v1757266183/bgun_k0hlnf.png" && "16rem"}}
 >
  <h1 style={{fontSize:"3.2rem",marginLeft:"2.5%",animation:"op  2s linear infinite"}}>warning</h1>
   <p>Page No Found</p>
       <h1>404 Error</h1>
 </div>
    <img src={gscope} alt="" 
    className={`${fire && "firess"}`}
    style={{left:gscope == "https://res.cloudinary.com/dycmuvzze/image/upload/v1757266183/bgun_k0hlnf.png" && "-14.8rem"}}
    />
   </div>
<div className="goimg" onClick={()=>navigate("/Home")}>
        <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757266348/runhome_qurodc.png" className="runerror" />
</div>
<motion.div
    animate={{scale:1,transition:{ease:"easeInOut",type:"spring",duration:0.7,damping:15,stiffness:300}}}
            whileHover={{scale:1.074}}
            whileTap={{scale:1}}
className="firebuttoner" onClick={()=>{setfire(true);handleClick2()}}></motion.div>

<section className="FaHandPointRight" >
{
  !restog && 
  <FaHandPointRight onClick={()=>setrestog(true)}/> }
</section>

<section className={`sectionerror ${restog && "moveRight"}`}>
    {
        J56.map((curr,index)=>(
         <motion.img src={curr.img} key={index} style={{display:index ==6 && "none"}}
         animate={{scale:1,transition:{ease:"easeInOut",type:"spring",duration:0.7,damping:15,stiffness:300}}}
            whileHover={{scale:1.084}}
            whileTap={{scale:1}}
         onClick={()=>{setgun(curr.img);localStorage.setItem("gun",curr.img);setgscope(curr.scope);localStorage.setItem("gscope",curr.scope)}}  className="itemerror"/> 
        ))
      }
</section>

   </section>

    </main>
  )  
}