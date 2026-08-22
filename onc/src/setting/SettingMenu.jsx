import { useEffect, useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import{motion} from "motion/react"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { useRef } from "react"
import { ImCross } from "react-icons/im"
import { FaInfo } from "react-icons/fa"
import { GenraTable } from "../Multer/genrarable"

export const SettingMenu = () =>{
  const{translation,setTraslation,resetTranscript,setmic} = useAuth2()  
  const[table2,settable2] = useState(false)
  const refs3 = useRef()
 const[isMenu ,setison2] = useState(() => localStorage.getItem("isMenu") === "true")
const[isMenu2 ,setison3] = useState(() => localStorage.getItem("isMenu2") === "true")

const handleClick2 = () =>{
  setison2((prev => !prev))
}

const handleClick3  = () =>{
  setison3((prev => !prev))  
  window.location.reload()
}

useEffect(()=>{
localStorage.setItem("isMenu",isMenu)
},[isMenu])

useEffect(()=>{
localStorage.setItem("isMenu2",isMenu2)
},[isMenu2])

useEffect(()=>{
if (translation.includes("Dynamic Menu")) {
    handleClick2();
    resetTranscript()
    setTraslation("")
    setmic("")
}
if (translation.includes("menu top")) {
    handleClick3();
    resetTranscript()
    setTraslation("")
    setmic("")
}

},[translation])

if (table2 == true && refs3.current) {
 document.body.style.overflow = "hidden"; 
 refs3.current.style.filter = "blur(10px)"
}else if(refs3.current){
  document.body.style.overflow = "auto"
  refs3.current.style.filter = "none"
}


return(
<>    
    <main>
    <section className="ButtonImg" >
    {!isMenu2 ? 
        <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757259130/sm_pi21js.png" alt="" 
style={{width : "90%" ,objectFit : "fill",
    height: "10vh",marginTop :"13rem",
     animation : isMenu ? "op 4s ease-in-out infinite 0s forwards" : "",
     filter :"brightness(1.2)"
}} />
:
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757259130/sm_pi21js.png" alt="" 
style={{width : "90%" ,objectFit : "fill",
    height: "10vh",marginTop :"0.5rem",
     filter :"brightness(1.2)",
     animation : isMenu ? "op 4s ease-in-out infinite 0s forwards" : ""
}} />
}    


</section>

<section className="ButtonSound">   

             <main onClick={handleClick2}
             style={{marginTop : "2rem"}}
                 className={`${!isMenu ? "" : "Sreverse"}`}
             >
        <p>Dynamic Menu</p>    
    <motion.header className="Effect"
     initial={{scale:0}}
    animate={{scale:1,transition:{duration:0.7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
    whileHover={{scale:1.039}}
    whileTap={{scale:1}}
    style={{backgroundColor: !isMenu ? "" :"#00fbff"}}>
    <ul
    ><span>{!isMenu  ? "OFF":"ON"}</span></ul>
    </motion.header>
        </main> 

             <main
             style={{marginTop : "2rem"}}
             onClick={handleClick3}
             className={`${!isMenu2  ? "" : "Sreverse"}`}
             >
        <p>The menu appears at the top.</p>    
    <motion.header className="Effect"
     initial={{scale:0}}
    animate={{scale:1,transition:{duration:0.7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
    whileHover={{scale:1.039}}
    whileTap={{scale:1}}
    style={{backgroundColor: !isMenu2 ? "" :"#00fbff"}}
    >
    <ul
    ><span>{!isMenu2  ? "OFF":"ON"}</span></ul>
    </motion.header>
    <br />
        </main> 
        </section>
    </main>
    </> 
)    
}