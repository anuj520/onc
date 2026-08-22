import { useAuth } from "../ContextAPI/ContextAPI";
import { useParams } from "react-router-dom";
import{useQuery} from "@tanstack/react-query"
import {Loading} from "./../Loading/Loading"
import { useEffect, useRef } from "react";
import { useCallback } from "react";
import { Footer } from "../footer/footer";
import{motion} from "motion/react"
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { Mike } from "../maik/maik";
import { MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md";

export  const Video2 = () =>{
      const{timeref2,handleTimeUpdate2,W2,E2,S2,P2,D2,RolexSir,sirR2,handleKeyDown2: originalHandleKeyDown2} = useAuth()
        const{start,translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()
    const refs = useRef({})
    const handleKeyDown2 = useCallback(originalHandleKeyDown2, [originalHandleKeyDown2]);

useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown2);  
    return () => {
        window.removeEventListener('keydown', handleKeyDown2);
    };  
    },[handleKeyDown2])

const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
} 
let mic = localStorage.getItem("togvoic")    

useEffect(()=>{
if (translation == "tap") {
  RolexSir();
  handleVoice("Play takken 8")
}
},[translation])    

  const mouseEnter = (id) =>{
    const node = refs.current[id];
    if (node) {
 node.style.transform = "translateX(1rem)"
    }
  } 
  const mouseLeave = (id) =>{
    const node = refs.current[id];
    if (node) {
      node.style.transform = "translateX(0rem)"
    }
  } 
  const mouseRight = (id) =>{
    const node = refs.current[id];
    if (node) {
      node.style.transform = "translateX(-1rem)"
    }
  } 


    const getData = async() =>{
    const response = await fetch("http://localhost:3000/games/play/67d53b1401bdae788f704b6f");
    const obj = await response.json();
    return obj;   
    }
    
    const{data,isLoading,error} = useQuery({
      queryKey:['gets'],
      queryFn: getData,
      refetchIntervalInBackground: true
    })
    if (isLoading) return <Loading/> 
    if (error) return <div>{error}</div>

    let id = 0

return(
  <>
  {!sirR2 && <>
     
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
      overflow: "hidden",
          position: "relative",
    }}>
  

   <section className="controles">
   {W2 && <>
   <div>
     <h1>W</h1>
   </div>
   </>}
   {E2 && <>
   <div>
     <h1>E</h1>
   </div>
   </>}
   {P2 &&  <>
   <div>
     <h1>P</h1>
   </div>
     </>}
     {S2 && <>
   <div>
     <h1>S</h1>
   </div>
     </>}
     {D2 && <>
   <div>
     <h1>D</h1>
   </div>
     </>}
   </section>
    
   <footer className="footerV" ref={(el) => refs.current[id] = el}
    style={{
           backgroundImage: `linear-gradient(to bottom, rgba(22, 22, 22, 0.9),
     rgba(22, 22, 22, 0.8)), 
     url(https://i.redd.it/2l9gcu9of8p61.jpg)`,
       height: "100vh",
  
    }}
    >
 {
  !sirR2  && <>
    
  <motion.p
  style={{
    left : "25%",
    top: "-5%", 

  }}
      initial={{y:123,opacity:0}}
    animate={{y:0,opacity:1,transition:{ease:"easeInOut",type:"spring",damping:15,stiffness:300,duration:0.7}}}
  > Takken 8 </motion.p>

<div onMouseEnter={() => mouseEnter(id)} onMouseLeave={()=> mouseLeave(id)}>

</div>
<section onMouseEnter={()=>mouseRight(id)} onMouseLeave={()=> mouseLeave(id)}>

</section>
  </>
 }  

      <video
      ref={timeref2}
           src={data.video}
            className="long2video"
   muted
      
        onTimeUpdate={handleTimeUpdate2}
           style={{
             width: "100%",
             height: "100vh",
             objectFit: "fill",
             display: sirR2 ? "": "none"
           }}
         ></video>

    </footer>   
    {  !sirR2  && <>
    <motion.img src="https://wallpaperaccess.com/full/12635341.png" alt=""
     initial={{scale:0}}
    animate={{scale: 1,transition:{ease:"easeInOut",type:"keyframes",damping:15,stiffness:300,duration:0.7,delay:.5}}}
     style={{
    transform: "scale(1.01)",
    marginTop :"-42%",
    marginLeft: "28%",
    height: "100vh"
     }}
   className="SunWoImgs SunWoImgs3"
    />
       <h1 className="SunWoImgs2"
       style={{
        marginLeft : "45%"
       }}
       onClick={RolexSir}
       >Tap</h1>
</>}
    </section>
    
 <header style={{
  marginTop: "-5.3%"
 }}>
     <Footer/>
  </header> 
    </>
)  
}