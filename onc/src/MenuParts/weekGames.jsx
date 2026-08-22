import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import{motion} from "motion/react"
import { FaStar } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

 export const Weekgames  = () =>{
  const navigate = useNavigate()
  gsap.registerPlugin(ScrollTrigger)  
const{contextSafe} = useGSAP()  
const addgsap = contextSafe(()=>{
 gsap.from(".daygames .firstcardgame",{
  stagger: 0.2,
  opacity: 0,
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
  animate={{boxShadow:"10px 10px 5px #0B4906",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #0B4906"}}
onClick={() =>{navigate(`/gamesD/EA SPORTS FC 25`); window.location.reload()}}
 style={{
   boxShadow: "10px 10px 5px #0B4906",
  backgroundImage: "url(https://i.pinimg.com/736x/b6/6f/e1/b66fe1b29cc04966235c56337b58c12b.jpg)"
 }}
>
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757253004/sports_jfhvpe.png" alt="" 
style={{marginLeft: "10%",marginTop:"12%"}}
/>
<li><h1>EA SPORTS FC 25</h1> </li>
</motion.div>  
 <motion.div className="firstcardgame" 
   animate={{boxShadow:"10px 10px 5px #275788",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #275788"}}
 onClick={() =>{navigate(`/gamesD/God of War Ragnarök`); window.location.reload()}}
 style={{
   boxShadow: "10px 10px 5px #275788",
  backgroundImage: "url(https://i.pinimg.com/1200x/a6/d9/14/a6d9142609230c272cc71ce9998120ef.jpg)"
 }}
 >
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757253510/Adobe_Express_-_file_49_vid9y9.png" alt="" 
style={{
  marginLeft: "2%",
  marginTop: "-16%",
  height: "76vh"
}}
/>  
<li><h1>God of War Ragnarök</h1> </li>
</motion.div> 

 <motion.div className="firstcardgame"
    animate={{boxShadow:"10px 10px 5px #A4A8A6",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #A4A8A6"}}
 onClick={() =>{navigate(`/gamesD/Black Myth: Wukong`); window.location.reload()}}
 style={{
  boxShadow: "10px 10px 5px #A4A8A6",
  backgroundImage: "url(https://i.pinimg.com/1200x/51/74/1e/51741e3dd9d758267f4fcbae17277bf9.jpg)"
 }}
 >
<img src="https://www.ign.com/special/black-myth-wukong/images/4_FolkOpera_v2.png" alt="" 
style={{
  marginTop: "8%",
  marginLeft: "-42%",
scale: "0.91"
}}
/>  
<li><h1>Black Myth: Wukong </h1> </li>
</motion.div> 

 <motion.div className="firstcardgame" 
    animate={{boxShadow:"10px 10px 5px #D29F8E",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #D29F8E"}}
 onClick={() =>{navigate(`/gamesD/Dota 2`); window.location.reload()}}
 style={{
  boxShadow: "10px 10px 5px #D29F8E",
  backgroundImage: "url(https://i.pinimg.com/1200x/17/93/ec/1793ec189cc4449685a8f77b552168b4.jpg)"
 }}
 >
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757169580/dota2_nwd9s4.png" alt="" 
style={{
  scale :1.14,
  marginLeft: "-15%",
  marginTop: "5%"
}}
/>  
<li><h1>Dota 2</h1> </li>
</motion.div> 
    </main>
)
}