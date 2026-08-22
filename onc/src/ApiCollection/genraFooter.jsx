import { useEffect, useRef, useState } from "react";
import { IoGameController } from "react-icons/io5";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaInfo, FaTags } from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import { GiFloatingPlatforms } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom"
import {motion, scale} from "motion/react"
import { Mike } from "../maik/maik";
import { MdNotificationsActive, MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md";
import { OncTrainText } from "../fav/onctrain.text";
import { ImCross } from "react-icons/im";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { useAuth } from "../ContextAPI/ContextAPI";
import { LuMessageCircleWarning } from "react-icons/lu";

export const GenraFooter =({search,setsearch,arrow}) =>{
const {data:authData,settable,table} = useAuth()
  const{start,translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()    
const refs3 = useRef()



const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
} 
let mic = localStorage.getItem("togvoic")

useEffect(()=>{
if (translation == "info") {
  settable(true)
  handleVoice("orion information table")
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

if (table == true ) {
 document.body.style.overflow = "hidden"; 
}else{
  document.body.style.overflow = "auto"
}


    return(
<>
<div className="mikevoice" style={{zIndex:"99999999999999999999999999999999999999999999999999999",top:"34.5rem"}}>
      <Mike/>
        <div className="buttonmic">
          {mic== "true" ?
      <MdRecordVoiceOver onClick={handlemics}/>
       : 
       <MdVoiceOverOff  onClick={()=> start()}/>
      }
          </div>    
</div>
 <div className="onctraninmenu" style={{zIndex:"999999999"}}>
      {table ?
      <>
    <div className="svhmenufont">  <ImCross onClick={()=>settable(false)}/>   </div>  
      <OncTrainText/>
      </>: 
    <div className="svhmenufont"> <FaInfo onClick={()=>settable(true)}/> </div>
        }
      </div>
<div className="userivolment">
  <LuMessageCircleWarning/>
  <MdNotificationsActive/>
</div>

        <footer className={"leftwidth"}>
        <NavLink to={'/games'} reloadDocument>
        <motion.dd
        initial={{scale: 0,opacity: 0}}
        animate={{scale:1,opacity:1,transition:{duration:0.7,ease:"easeOut",damping:15,type:"spring",stiffness:300}}}
        whileHover={{scale:1.1}}
        whileTap={{scale: 1}}
        ><IoGameController/>
        <h1 > GAMES</h1>
        </motion.dd>
        </NavLink>
           
        <NavLink to={'/genra'} reloadDocument>   
        <motion.dd
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1,transition:{duration:0.7,ease:"easeInOut",damping:15,type:"spring",stiffness:300}}}
        whileHover={{scale: 1.1}}
        whileTap={{scale:1}}
        ><BiSolidCategoryAlt/>
        <h1>Genre</h1>
        </motion.dd>
</NavLink>

       <NavLink to={'/tag'} reloadDocument>
        <motion.dd
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1,transition:{duration:0.7,ease:"easeInOut",damping:15,type:"spring",stiffness:300}}}
        whileHover={{scale: 1.1}}
        whileTap={{scale:1}}
        > <FaTags/>   
       <h1>Tags</h1>
        </motion.dd>
        
        </NavLink>
        
        <NavLink to={'/platform'} reloadDocument>
        <motion.dd
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1,transition:{duration:0.7,ease:"easeInOut",damping:15,stiffness:300,type:"spring"}}}
        whileHover={{scale:1.1}}
        whileTap={{scale: 1}}
        > <GiFloatingPlatforms/>
        <h1>Platforms</h1>
        </motion.dd>      
       </NavLink> 

        <div className="orionpreax">
        <div className="colordivo"> 
        <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757258739/o2_jyq3qm.png" alt="" />
        </div>   
        </div>  
        <NavLink to={'/Home'} reloadDocument>  
        <motion.dd
        initial={{scale:0,opacity:0}}
        animate={{scale:1,opacity:1,transition:{duration:0.7,ease:"easeInOut",damping:15,stiffness:300,type:"spring"}}}
        whileHover={{scale:1.1}}
        whileTap={{scale:1}}
        > <FaHome/>
        <h1>Home</h1>
        </motion.dd>
        </NavLink>
           <section>
              <input type="search" placeholder=" what do you want to hear?" value={search} onChange={(e) =>setsearch(e.target.value)}/>
              </section>
           <br /><br />
             </footer>
             </>
    )
}