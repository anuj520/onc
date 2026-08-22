// import { useRef, useState } from "./../../public/";
import { useAuth } from "../ContextAPI/ContextAPI";
import { useParams } from "react-router-dom";
import{useQuery} from "@tanstack/react-query"
import {Loading} from "./../Loading/Loading"
import { useEffect, useRef, useState } from "react";
import { Footer } from "../footer/footer";
import{motion} from "motion/react"
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { Abouttable } from "../onctables/abouttable";
import { ImCross } from "react-icons/im";
import { FaInfo } from "react-icons/fa6";
import { Mike } from "../maik/maik";
import { MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md";

export const Video = () =>{
  const{handleTimeUpdate,timeref,E,P,W,S,handlegame,play,D} = useAuth()
  const[table2,settable2] = useState(false)
const refs = useRef({})
  const{start,translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()
const getData = async() =>{
const response = await fetch("http://localhost:3000/games/play/67d53b1401bdae788f704b6e");
const obj = await response.json();
return obj;   
}

const mouseEnter = (id) =>{
 const node = refs.current[id] 
if (node) {
  node.style.transform = "translateX(1rem)"
}
}
const mouseLeave = (id) => {
  const node = refs.current[id] 
  if (node) {
    node.style.transform = "translateX(0rem)";
  }
};

const mouseRight = (id) =>{
    const node = refs.current[id] 
    console.log(id);
    
if (node) {
  node.style.transform = "translateX(-1rem)"
}
}

const{data,isLoading,error} = useQuery({
  queryKey:['gets'],
  queryFn: getData,
  refetchIntervalInBackground: true
})

console.log(data)

const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
} 
let mic = localStorage.getItem("togvoic")

useEffect(()=>{
if (translation == "tap") {
  handlegame();
  handleVoice("Play black mith the black mith wokong")
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


if (isLoading) return <Loading/> 
if (error) return <div>{error}</div>

let id = 0;

return(
    <>
{!play && <>
   
<div className="mikevoice" style={{zIndex:"99999999999999999999999999999999999999999999999999999",marginTop:"21%"}}>
      <Mike/>
        <div className="buttonmic">
          {mic== "true" ?
      <MdRecordVoiceOver onClick={handlemics}/>
       : 
       <MdVoiceOverOff  onClick={()=> start()}/>
      }
          </div>
          </div>    
</>}        

    <section className="Tottorial2" style={{
      overflow: "hidden"
    }}>
 
 <section className="controles">
 {W && <>
 <div>
   <h1>W</h1>
 </div>
 </>}
 {E && <>
 <div>
   <h1>E</h1>
 </div>
 </>}
 {P &&  <>
 <div>
   <h1>P</h1>
 </div>
   </>}
   {S && <>
 <div>
   <h1>S</h1>
 </div>
   </>}
   {D && <>
 <div>
   <h1>D</h1>
 </div>
   </>}
 </section>
 
      
 <footer className="footerV" ref={(el) => refs.current[id] = el}>
{
  !play && <>
  
   <motion.pre
     initial={{y:123,opacity:0}}
    animate={{y:0,opacity:1,transition:{ease:"easeInOut",type:"spring",damping:15,stiffness:300,duration:0.7}}}
   >Black mith </motion.pre>
   <br /><br />
  <motion.p
       initial={{y:123,opacity:0}}
    animate={{y:0,opacity:1,transition:{ease:"easeInOut",type:"spring",damping:15,stiffness:300,duration:0.7}}}
  >  Wukong </motion.p>
   {/* <button onClick={handlegame}>play</button>  */}

 
<div onMouseEnter={() => mouseEnter(id)} onMouseLeave={()=> mouseLeave(id)}

  >

</div>
<section onMouseEnter={()=>mouseRight(id)} onMouseLeave={()=> mouseLeave(id)}
    style={{
    marginLeft : "-65%"
  }}
  >

</section>
 </>
}

    <video
    ref={timeref}
         src={data.video}
          className="long2video"
 muted 
//  controls
      onTimeUpdate={handleTimeUpdate}
         style={{
           width: "100%",
           height: "100vh",
           objectFit: "cover",
           
         display: play ? "": "none",
         }}
       ></video>
       
  </footer>    
     {!play && <>
    <motion.img src="https://www.pngall.com/wp-content/uploads/15/Black-Myth-Wukong-Monkey-Man-Character-PNG.png" alt=""
    className="SunWoImgs"
    initial={{scale:0}}
    animate={{scale: 1,transition:{ease:"easeInOut",type:"keyframes",damping:15,stiffness:300,duration:0.7,delay:.5}}}
    />
       <h1 className="SunWoImgs2" onClick={handlegame}>Tap</h1>
       </>}
     </section>

{
  !play &&
  <Footer/>
}
    </>
)
}