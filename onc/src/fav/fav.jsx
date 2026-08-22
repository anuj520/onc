import { useQuery } from "@tanstack/react-query";
import {  FaInfo, FaStar } from "react-icons/fa"
import { Loading } from "../Loading/Loading";
import { useAuth } from "../ContextAPI/ContextAPI";
import { useEffect, useRef, useState } from "react";
import { PiHeartStraightFill, PiHeartStraightLight } from "react-icons/pi";
import { Footer } from "../footer/footer"
import { motion } from "motion/react";
import { Menu } from "../HomePart/Menu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { toast } from "react-toastify";
import { LikesTable } from "../onctables/likestable";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { ImCross } from "react-icons/im";

export const Fav = () => {
const{data:authdata,handledeletefav} = useAuth()
const{translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()
const[table2,settable2] = useState(false)
const refs3 = useRef()
const[tag,settog] = useState(false)

const getData = async() =>{
const response = await fetch(`http://localhost:3000/games/heartGet/${authdata.email}`)
const obj = await response.json();
settog(true)
return obj;
}

useEffect(()=>{
if (translation == "details") {
  settable2(true)
   resetTranscript();
 setmic("")
setTraslation("")
handleVoice("gmaes details table")
} else if(translation == "close info"){
  settable2(false)
   resetTranscript();
 setmic("")
setTraslation("")
}else if (translation.includes("open")) {
  let slic = translation.slice(4)
  let index = slic.toLowerCase().indexOf("open")
  let sl = slic.slice(index + 4)  
  navigator(`/gamesD/${sl}`)
  handleVoice(`the ${sl}`)
   window.location.reload()
}
},[translation])



const{data,isLoading,error} = useQuery({
  queryKey : ['get'],
  queryFn : getData,
  refetchInterval:1
})

const{contextSafe} = useGSAP();
gsap.registerPlugin(ScrollTrigger)

const addgsap = contextSafe(()=>{
gsap.from(".Fav .topfav",{
  opacity:0,
  duration:0.7,
  y:-121,
  ease:"back.out"
})    
gsap.from(".Fav .topfav .Favourite,.spiderman",{
  opacity:0,
  stagger:.2,
  duration:0.7,
  delay: .5,
  y:121,
  ease:"back.out"
})  

gsap.from(".Fav .favmain .addmotiongsapdiv",{
  stagger:0.2,
  y:120,
  duration:0.7,
  opacity:0,
  ease:"back.out",
  scrollTrigger:{
    trigger:".favmain",
    scroller:"body",
    start:"top 20%",
  }
})
gsap.from(".Fav .favmain2 .part2addgsapdiv",{
  stagger:0.2,
  y:120,
  duration:0.7,
  opacity:0,
  ease:"back.out",
  scrollTrigger:{
    trigger:".favmain2",
    scroller:"body",
    start:"top 20%",
  }
})
})

useGSAP(()=>{
addgsap()
},{scope:".Fav",dependencies:[tag]})


if(isLoading) return <Loading/>
if(error) return <div>{error}</div>

if (table2 == true && refs3.current) {
 document.body.style.overflow = "hidden"; 
 refs3.current.style.filter = "blur(10px)"
}else if(refs3.current){
  document.body.style.overflow = "auto"
  refs3.current.style.filter = "none"
}

  return (
    <>
 <div className="onctraninmenu2" style={{zIndex:"9999999999999999",marginTop:"-3%"}}>
      {table2 ?
      <>
    <div className="svhmenufont">  <ImCross onClick={()=>settable2(false)}/>   </div>  
      <br /><br />
      <LikesTable/>
      </>: 
    <div className="svhmenufont" > <FaInfo onClick={()=>settable2(true)}/> </div>
        }
      </div>     
    <div style={{top:"34.4rem",position:"relative",zIndex:"999999"}}>
         <Menu />
    </div>
  
    <main className="Fav" ref={refs3}>
    <header>
        <section className="topfav">
      <div>
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757263129/gogo_l5qqtb.png" alt="" className="spiderman"/>
      </div>
      <ul>
        <h1 className="Favourite">My <span>Favourite</span> Game</h1>
        <h3 className="Favourite">"Level Up with My <span>Favorite Game! "</span></h3>
        <p className="Favourite">Gaming is one of my favorite hobbies, and there's one game I enjoy the most. It has exciting challenges, amazing graphics, and keeps me entertained for hours. Whether I'm exploring new worlds or competing with others, this game always makes me feel excited and happy.</p>
      </ul>

      </section>
    </header>

      <main className="favmain">
        {data?.game?.length !==0 &&
        <h1 className="favh1">{authdata.firstname? authdata.firstname : authdata.name} Top Favorite Game</h1>
        }
        <ul>
              {
          data?.game?.map((curr,index)=>{
          if(!curr.png)  return; 
          return(
            <>
            <motion.div key={index}
            animate={{scale:1,transition:{ease:"easeInOut",type:"spring",duration:0.7,damping:15,stiffness:300}}}
            whileHover={{scale:1.044}}
            whileTap={{scale:1}}
            className="addmotiongsapdiv"
            >
              <img src={curr.back} alt="" />
              <div className="pngFav">
                 <small onClick={() =>handledeletefav(curr.name)}><PiHeartStraightFill/></small>  
                <img src={curr.png} alt="" />
                <span><FaStar/> {curr.rating.slice(0,1) == 1 ?curr.rating.slice(0,1) +0   : curr.rating.slice(0,1)}</span> 
              </div>
              <dd>
                <h1
                style={{backgroundImage:`url(${curr.back})`}}
                >{curr.name.length > 10 ? `${curr.name.slice(0,10)}..` : curr.name}</h1>
              </dd>
              </motion.div>
             </>  )  
          })
        }
          
            
        </ul>
      </main>
      {/* "not png" */}
      <main className="favmain favmain2">
         {data?.game.length !==0 &&
           <h1 className="favh1">{authdata.firstname? authdata.firstname : authdata.name} Favorite Game</h1>
         }<ul style={{gap:"3.2rem"}}>
{
          data?.game?.map((curr,index)=>{
            
            if(!curr.like || curr.png) return;
          return(
            <motion.div key={index}
              animate={{scale:1,transition:{ease:"easeInOut",type:"spring",duration:0.7,damping:15,stiffness:300}}}
            whileHover={{scale:1.044}}
            whileTap={{scale:1}}
            className="part2addgsapdiv"
            > 
              <img src={curr.back} alt="" />
      <big  onClick={() => handledeletefav(curr.name)}><PiHeartStraightFill/></big> 
              <div className="secoundfavitem">
                <h1>{curr.name}</h1>
                <span><FaStar/> {curr.rating.slice(0,1) == 1 ?curr.rating.slice(0,1) +0   : curr.rating.slice(0,1)}</span>
                </div>
            </motion.div>
          )  
          })
       } 
        </ul>
      </main>
    </main><br /><br /><br />
          <Footer/>
      </>
  );
};
