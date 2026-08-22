import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import{motion} from "motion/react"
import { useNavigate } from "react-router-dom"
 export const Monthgames  = () =>{
  const navigate = useNavigate() 
gsap.registerPlugin(ScrollTrigger)  
const{contextSafe} = useGSAP()  
const addgsap = contextSafe(()=>{
 gsap.from(".daygames .firstcardgame",{
  stagger: 0.2,
 opacity:0,
  ease:"back.out",
  duration: 0.7,
  scrollTrigger:{
    trigger: ".daygames",
    scroller: "body",
  }
 }) 
})

  useGSAP(()=>{
 addgsap() 
})  

 return(
     <main className="daygames">  
<motion.div className="firstcardgame" 
animate={{boxShadow:"10px 10px 5px #867769",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #867769"}}
onClick={() =>{navigate(`/gamesD/Helldivers II`); window.location.reload()}}
 style={{
   boxShadow: "10px 10px 5px #867769",
  backgroundImage: "url(https://i.pinimg.com/736x/fc/ce/e7/fccee7547f37b37c4701d5c313ad6ac7.jpg)"
 }}
>
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757253809/helo_k0ptcd.png" alt="" 
style={{marginLeft: "-1%",marginTop:"0%", height:"70vh"}}
/>
<li><h1>Helldivers II</h1> </li>
</motion.div>  
 <motion.div className="firstcardgame" 
 animate={{boxShadow:"10px 10px 5px #A99580",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #A99580"}}
 onClick={() =>{navigate(`/gamesD/Ride 5`); window.location.reload()}}
 style={{
   boxShadow: "10px 10px 5px #A99580",
  backgroundImage: "url(https://i.pinimg.com/736x/31/8a/33/318a33e4d9fd11e7de08a6b0f430291f.jpg)"
 }}
 >
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757254345/Adobe_Express_-_file_33_-_Copy_puzx7r.png" alt="" 
style={{
  marginLeft: "-10%",
  marginTop: "-16%",
  height: "76vh"
}}
/>  
<li><h1>Ride 5 </h1> </li>
</motion.div> 

 <motion.div className="firstcardgame" 
  animate={{boxShadow:"10px 10px 5px #83040E",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #83040E"}}
 onClick={() =>{navigate(`/gamesD/red redemption 2`); window.location.reload()}}
 style={{
  boxShadow: "10px 10px 5px #83040E",
  backgroundImage: "url(https://i.pinimg.com/1200x/76/16/ad/7616ad814b63da41246c4fb8dc9b1b0b.jpg)"
 }}
 >
<img src="https://www.pngmart.com/files/22/Red-Dead-Redemption-II-PNG-Picture.png" alt="" 
style={{
  marginTop: "-1%",
  marginLeft: "-75%",
}}
/>  
<li><h1>red redemption 2</h1> </li>
</motion.div> 

 <motion.div className="firstcardgame" 
  animate={{boxShadow:"10px 10px 5px #96367D",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #96367D"}}
 onClick={() =>{navigate(`/gamesD/Fortnight`); window.location.reload()}}
 style={{
  boxShadow: "10px 10px 5px #96367D",
  backgroundImage: "url(https://i.pinimg.com/1200x/c9/b6/83/c9b683300ea45bc08a69914b6acee834.jpg)"
 }}
 >
<img src="https://www.pngmart.com/files/22/Fortnite-Transparent-Background.png" alt="" 
style={{
  scale :0.95,
  marginLeft: "-42%",
  marginTop: "4%"
}}
/>  
<li><h1>fortnight </h1> </li>
</motion.div> 
    </main>
 ) 
}