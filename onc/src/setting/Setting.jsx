import { useRef, useState } from "react"
import { Menu } from "../HomePart/Menu"
import{motion} from "motion/react"
import { Footer } from "../footer/footer"
import { NavLink, Outlet } from "react-router-dom"
import { ImCross } from "react-icons/im"
import { FaInfo } from "react-icons/fa"
import { SettingTable } from "../onctables/settingtable"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { useEffect } from "react"

export const Setting =() =>{
const{translation,resetTranscript,setTraslation,handleVoice,setmic} = useAuth2()  
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

 const[table2,settable2] = useState(false)
  let ismenu = localStorage.getItem("isMenu2")
let ismenu2 = localStorage.getItem("isMenu")

if (table2 == true && refs3.current) {
 document.body.style.overflow = "hidden"; 
 refs3.current.style.filter = "blur(10px)"
}else if(refs3.current){
  document.body.style.overflow = "auto"
  refs3.current.style.filter = "none"
}

return(
    <>
     <div className="onctraninmenu2" style={{zIndex:"9999999999999999",marginTop:"-3%"}}>
          {table2 ?
          <>
        <div className="svhmenufont">  <ImCross onClick={()=>settable2(false)}/>   </div>  
          <br /><br />
          <SettingTable/>
          </>: 
        <div className="svhmenufont" > <FaInfo onClick={()=>settable2(true)}/> </div>
            }
      </div > 
    <section className="setting" ref={refs3}
     style={{
      marginTop: ismenu == "true" && ismenu2 == "true" ? "0%" : 
      ismenu == "true" ? "4%" :  
      ismenu2 == "true" ? "0.2%" : ""
      }}
    >
<div>
  <section>
    <ul><h1>Settting</h1></ul>
    <li>
    {/* <NavLink to={'ButtonSound'}> <p>Button Sound</p> </NavLink> */}
    <NavLink to={'Menu'}> <motion.p
       initial={{scale:0}}
    animate={{scale:1,transition:{duration:0.7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
    whileHover={{scale:1.039}}
    whileTap={{scale:1}}
    >Menu</motion.p> </NavLink>
    <NavLink to={'getStarted'}> <motion.p
       initial={{scale:0}}
    animate={{scale:1,transition:{duration:0.7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
    whileHover={{scale:1.039}}
    whileTap={{scale:1}}
    >Get Statrted</motion.p></NavLink>
    {/* <NavLink to={'Home'}>  <p>Home</p></NavLink>
    <NavLink to={'games'}>  <p>Games</p></NavLink>
    <NavLink to={'dynamically'}>  <p>About</p></NavLink> */}
    </li>
  </section>
</div>

<section className="settingMenu">
 <div></div>

 <Outlet />
</section>
</section>
    <div style={{marginTop: "-11.8rem"}}>
    <Menu/>
    </div><br /> <br /><br /> <br /><br /><br /><br /><br /><br /><br /><br />
<Footer/>
    </>
)    
}

// onClick={handleMusicHover}
// onClick={buttonH}