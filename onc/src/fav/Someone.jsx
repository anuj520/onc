import { SiRiotgames } from "react-icons/si";
import { AiOutlineExpand } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import { GiElectricalCrescent } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";
import J51 from "./../../public/J51.json"
import J52 from "./../../public/J52.json"
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import {motion} from "motion/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useAuth } from "../ContextAPI/ContextAPI";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { useNavigate } from "react-router-dom";
export const Someone = () =>{
const{reand} = useAuth()
const{translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()
const[count,setcount] = useState(Math.floor(Math.random() * 7));
const[cate,setcate] = useState(Math.floor(Math.random() *7))
const navigate = useNavigate();
const[store,setstore] = useState("")


useEffect(()=>{
let timer = setInterval(()=>{
setcount((prev)=> prev +1)    
},10000)
if (count > 7) {
 clearInterval(timer);
 setcount(1);   
}
return () => clearInterval(timer)
},[count])    
gsap.registerPlugin(ScrollTrigger)
const{contextSafe} = useGSAP()

const addgsap = contextSafe(()=>{
gsap.from(".sonewokong .sonwokong  div",{
    rotate: 75,
    scale:0,
    stagger: 0.1,
    duration :0.7,
})
gsap.from(".sonewokong .sonwokong img",{
    scale : 0,
    delay : 1.5,
    duration : 0.7,
    ease: "back.out"
})
gsap.from(".sonewokong .somegamesop div",{
    scale : 0,
    duration: 0.7,
     ease: "back.out",
    delay: 2.7,
    stagger: 0.2
})
})
useGSAP(()=>{
addgsap()    
},{scope:"body"})

useEffect(()=>{
if (translation == "ride 5") {
setcount(7)   
setstore("ride 5") 
}else if(translation == "palworld"){
setcount(6);
setstore("palworld")    
}else if(translation == "indiana jones"){
setcount(5)
setstore("indiana jones") 
}else if(translation == "Fortnite"){
setcount(4)  
setstore("Fortnite")   
}else if(translation == "Cyberpunk 2077"){
setcount(3)   
setstore("Cyberpunk 2077")  
}else if(translation == "Legend Zelda"){
setcount(2) 
setstore("Legend Zelda") 
}else if(translation == "Marval rivales"){
setcount(1)   
setstore("Marval rivales")  
}else if (translation == "open") {
navigate(`/gamesD/${store}`)
handleVoice(`the ${store}`)
window.location.reload() 
}
resetTranscript();
setTraslation("")
setmic("")
},[translation])


return(
<header className="sonewokong">     

{
    J51.slice(count-1,count).map((curr,index)=>{
    return(
 <section className="sonwokong" key={index} onClick={()=>{navigate(`/gamesD/${curr.ogname}`);window.location.reload()}}>
 <main >
<div className="angle">
    <div className="line"
      style={{
    backgroundColor:curr.rcolor
}}
    ></div>
    <div className="line2"
      style={{
    backgroundColor:curr.rcolor
}}
    ></div>
    <SiRiotgames
    style={{
    color:curr.rcolor
}}
    />
</div>

<div className="leftside">
 <h1>Team up Power up Fight on</h1>      
</div>

<div className="mainmasterdiv"
style={{backgroundColor: curr.color}}
>
    <motion.img src={`${curr.img}`} alt="" 
    animate={{scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{scale:1}}
whileHover={{scale:1.034}}
    style={{
        width:count == 5?  "62%" :count == 3 ? "70%" : "",
        height: count == 2 ? "92vh" :count==5 ? "98.9vh" :"",
        objectFit: "cover",
        marginLeft:count == 5? "-1%": count == 3? "-1%" :count == 2? "1%": count == 4? "-2%":count==5 ? "-2%" :""
        // marginLeft:"-4%",

            //  height:"91vh",
        // marginLeft:"-3%"

    }}
    />
   <div className="namenamename">
    <GiCrossMark
    style={{color: curr.svgc}}
    />
   </div>
  

   <div className="centermain">
  <div className="paramainc">
          <p>{curr.p1}</p>
    <p>{curr.p2}</p>
    <p>{curr.p3}</p>
  </div>
<div className="handleleftcut">
    <div className="leftcut"
    style={{backgroundColor: curr.boxc}}
    ></div>
    <div className="leftcut"
    style={{backgroundColor: curr.boxc}}
    ></div>
    <div className="leftcut"
    style={{backgroundColor: curr.boxc}}
    ></div>
    <div className="leftcut"
    style={{backgroundColor: curr.boxc}}
    ></div>
    <div className="leftcut"
    style={{backgroundColor: curr.boxc}}
    ></div>
    <div className="leftcut"
    style={{backgroundColor: curr.boxc}}
    ></div>
    <div className="leftcut"
    style={{backgroundColor: curr.boxc}}
    ></div>    
</div>
</div> 

<div className="posterno">
  <AiOutlineExpand
  style={{color: curr.rcolor}}
  />  
  <h2>{curr.rate} <FaStar/></h2>
</div>

<div className="japanetext">
    <h1>{curr.h1}</h1>
</div>

<div className="electricity"
style={{color: curr.rcolor}}
>
    <GiElectricalCrescent/>
</div>
<div className="bottomdiv"
>
<div className="rotate90">
   <p>{curr.p4}</p> 
 <div className="linecut"
 style={{backgroundColor: curr.boxc}}
 ><span>////////////////////////////</span></div> 
 <p>{curr.p5}</p>
</div>
</div>

<div className="rivales">
    <img src={curr.name} alt="" />
</div>

</div>

<div className="rightside">
 <h1>以英雄之名参与快速而激烈的战斗</h1>      
</div>


</main>

</section> 
    )
    })
}

<section className="masteruiinjs">
<div className="circlegame" onClick={()=>setcount(1)}></div>
<div className="circlegame" onClick={()=>setcount(2)}></div>
<div className="circlegame" onClick={()=>setcount(3)}></div>
<div className="circlegame" onClick={()=>setcount(4)}></div>
<div className="circlegame" onClick={()=>setcount(5)}></div>
<div className="circlegame" onClick={()=>setcount(6)}></div>
<div className="circlegame" onClick={()=>setcount(7)}></div>
</section>



<section className="somegamesop">
{
    J52.slice(cate,cate+3).map((curr,index)=>{
     return(
    
<div className="cardgames" key={index}
style={{backgroundImage:`url(${curr.back})`}}
>
<img src={`${curr.img}`} alt=""
style={{
     left: "-7%",
}}
/>
<motion.div className="namerating"
animate={{scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{scale:1}}
whileHover={{scale:1.034}}

style={{backgroundColor: curr.color}}
>
<h1
style={{
    fontSize: curr.name.length > 7 ?"2rem" :""
}}
>{curr.name}</h1>
</motion.div>
</div>
     )   
    })
}
<div className="more">
    <p>-------- More --------</p>
</div>
</section>


</header>
)    
}