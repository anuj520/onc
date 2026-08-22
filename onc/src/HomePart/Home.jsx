import { useAuth } from "../ContextAPI/ContextAPI"
import { HomePart2 } from "./HomePart2"
import { Menu } from "./Menu"
import {Footer} from "./../footer/footer"
import { FaInfo } from "react-icons/fa";
import { Homesec } from "../fav/Homesec"
import { ImCross } from "react-icons/im"
import { useEffect, useRef, useState } from "react"
import { HomeTable } from "./hometable"
import { useAuth2 } from "../ContextAPI/ContectApi2"

export const Home = () =>{
const{data:authData} = useAuth()  
  const{translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()
const refs =useRef()
const[table2,settable2] = useState(false)

useEffect(()=>{
if (translation == "details") {
  settable2(true)
   resetTranscript();
 setmic("")
setTraslation("")
} else if(translation == "close info")
  settable2(false)
   resetTranscript();
 setmic("")
setTraslation("")
},[translation])


useEffect(()=>{
const handlegmaes = async()=>{  
if (!authData.email) {
  return;
}
const respon = await fetch("http://localhost:3000/onc/edit",{
  method: "POST",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({email:authData.email})
})
}
handlegmaes()
},[authData?.email])

useEffect(()=>{
 const handleedit = async() =>{
if (!authData.email) {
   return; 
}


const respon = await fetch("http://localhost:3000/onc/editpatch",{
  method: "PATCH",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({edit: false,email:authData.email,game:false,mess:false,gcoll:false,home:true})
})
}

if (window.location.pathname === `/Home`) {
handleedit()  
}
  
},[window.location.pathname,authData])


if (table2 == true && refs.current) {
 document.body.style.overflow = "hidden"; 
 refs.current.style.filter = "blur(10px)"
}else if(refs.current){
  document.body.style.overflow = "auto"
  refs.current.style.filter = "none"
}

// console.log(wideTrue);

let ismenu = localStorage.getItem("isMenu2")
let ismenu2 = localStorage.getItem("isMenu")
let isH = localStorage.getItem("isH")

return(
  <>
 <div className="onctraninmenu2" style={{zIndex:"9999999999999999",marginTop:"-3%"}}>
      {table2 ?
      <>
    <div className="svhmenufont">  <ImCross onClick={()=>settable2(false)}/>   </div>  
      <br /><br />
      <HomeTable/>
      </>: 
    <div className="svhmenufont" > <FaInfo onClick={()=>settable2(true)}/> </div>
        }
      </div>  



    <div style={{top: "38.5rem",position:"relative",zIndex :"99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"}}>
      <Menu/>
    </div>
 <section className="bodysection"  ref={refs}> 
 <main  ref={refs} style={{
 marginTop: ismenu == "true" && ismenu2 == "true" ? "-0%" : 
 ismenu == "true" ? "4%" :  
 ismenu2 == "true" ? "0.2%" : "",
 }}>

 <section className="HSection">
    <Homesec/>  
 </section>
  </main>
  <br />
    <HomePart2/>   
    <br /><br />
    <Footer/>
</section>      
    </>  
)  
}