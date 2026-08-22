import { NavLink } from "react-router-dom"
import { Footer } from "../footer/footer"
import { Menu } from "../HomePart/Menu"
import {Loading} from "./../Loading/Loading"
import {useQuery} from "@tanstack/react-query" 
import {motion} from "motion/react"
import { useEffect, useRef, useState } from "react"
import { CreatosTable } from "../onctables/creatorstable"
import { ImCross } from "react-icons/im"
import { FaInfo } from "react-icons/fa"
import { useAuth2 } from "../ContextAPI/ContectApi2"

export const Creators = () =>{
const{translation,setTraslation,handleVoice,setmic,resetTranscript} = useAuth2()  
const[table2,settable2] = useState(false)
const refs3 = useRef()

const getdata = async() =>{
 const response  = await fetch("http://localhost:3000/games/creators/");
 const res = await response.json();
 return res;   
}  

useEffect(()=>{
if (translation == "details") {
  settable2(true)
   resetTranscript();
 setmic("")
setTraslation("")
handleVoice("creators page Log table")
} else if(translation == "close info")
  settable2(false)
   resetTranscript();
 setmic("")
setTraslation("")
},[translation])


const{data,error,isLoading} = useQuery({
queryKey:['gets'],
queryFn:getdata
}) 

if(isLoading) return <Loading/>
if(error) return <div>{error}</div>

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
      <CreatosTable creators={"creators"}/>
      </>: 
    <div className="svhmenufont" > <FaInfo onClick={()=>settable2(true)}/> </div>
        }
      </div> 
   <main className="gameOutlet" ref={refs3}
   style={{
    marginTop: ismenu == "true" && ismenu2 == "true" ? "-0%" : 
    ismenu == "true" ? "4%" :  
    ismenu2 == "true" ? "0.2%" : ""
    }}
   >
   <div style={{position: "relative",top:"34.4rem",zIndex:"999999"}}>
        <Menu/>
        </div>
      <h1 className="creatorsOPenh1">Creators</h1>
       <section className="creatorsOPen">
      
      {
          data.map((curr,index)=>{
          return(
           <NavLink to={`/creator/${curr.name}`} reloadDocument><motion.div key={index}
           initial={{scale: 0}}
           animate={{scale:1,transition:{duration:0.7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
           whileHover={{scale:1.040}}
         whileTap={{scale:1}}
           >
      <img src={curr.img} alt="" />
     <ul>
    <div className="seth2cretors">
    <h2>{curr.name.split(' ')[0]}</h2>
    <h2 style={{WebkitTextStroke: "1px #fff",color:"transparent"}}>{curr.name.split(' ')[1]}</h2>
    </div>
     </ul>
              <br /><br />
              </motion.div></NavLink> 
          )    
          })
      }
       </section>
       <br /><br /><br />
      <Footer/>
      </main>
</>       
)    
}