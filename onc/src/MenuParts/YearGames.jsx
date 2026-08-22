import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { FaStar } from "react-icons/fa6"
import{motion} from "motion/react"
import { useNavigate } from "react-router-dom"

 export const Yeargames  = () =>{
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
animate={{boxShadow:"10px 10px 5px #F5CC57",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #F5CC57"}}
onClick={() =>{navigate(`/gamesD/Valorant`); window.location.reload()}}
 style={{
   boxShadow: "10px 10px 5px #F5CC57",
  backgroundImage: "url(https://i.pinimg.com/736x/d7/54/ff/d754ffe21e1304471900a41aab2c69a7.jpg)"
 }}
>
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757253274/bvalo_nsjba9.png" alt="" 
style={{marginLeft: "-10%",marginTop:"-1.5%"}}
/>
<li><h1>Valorant</h1> </li>
</motion.div>  
 <motion.div className="firstcardgame"  
 animate={{boxShadow:"10px 10px 5px #5E8E70",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #5E8E70"}}
 onClick={() =>{navigate(`/gamesD/legend of zelda`); window.location.reload()}}
 style={{
   boxShadow: "10px 10px 5px #5E8E70",
  backgroundImage: "url(https://i.pinimg.com/736x/71/ab/4b/71ab4bdbf95fa27e2b427edf05c93534.jpg)"
 }}
 >
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757253714/hourcerider_mnokkq.png" alt="" 
style={{
  marginLeft: "-32%",
  marginTop: "-25%",
  height: "95vh"
}}
/>  
<li
style={{top: "-15%"}}
><h1>legend of zelda</h1> </li>
</motion.div> 

 <motion.div className="firstcardgame" 
 animate={{boxShadow:"10px 10px 5px #A4A8A6",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #A4A8A6"}}
 onClick={() =>{navigate(`/gamesD/cyberpunk 20277`); window.location.reload()}}
 style={{
  boxShadow: "10px 10px 5px #A4A8A6",
  backgroundImage: "url(https://i.pinimg.com/736x/8f/27/3f/8f273fb1f91e90553e65ce50e1e66772.jpg)"
 }}
 >
<img src="https://wonder-day.com/wp-content/uploads/2020/11/wonder-day-png-cyberpunk-2077-24-1024x1024.png" alt="" 
style={{
  marginTop: "8%",
  marginLeft: "-40%",
scale: "0.9"
}}
/>  
<li><h1>cyberpunk 20277</h1> </li>
</motion.div> 

 <motion.div className="firstcardgame"  
  animate={{boxShadow:"10px 10px 5px #CB8BA6",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #CB8BA6"}}
 onClick={() =>{navigate(`/gamesD/horizan`); window.location.reload()}}
 style={{
  boxShadow: "10px 10px 5px #CB8BA6",
  backgroundImage: "url(https://images.hdqwalls.com/wallpapers/horizon-zero-dawn-game-nature-9p.jpg)"
 }}
 >
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757253743/horizan_y6r5ox.png" alt="" 
style={{
  scale :1.1,
  marginLeft: "-15%",
  marginTop: "-3%"
}}
/>  
<li><h1>horizan</h1> </li>
</motion.div> 
    </main>
  ) 
}