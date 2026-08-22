import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import{motion} from "motion/react"
import { useNavigate } from "react-router-dom"

 export const Daygames  = () =>{
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
 onClick={() =>{navigate(`/gamesD/Resident Evil 4 Remake`); window.location.reload()}}>
 <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f6b0bf93-bf66-4551-8b9b-b723ee634429/dgvpqa1-0329911a-2873-4a20-b7b2-081c3cd95ac5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y2YjBiZjkzLWJmNjYtNDU1MS04YjliLWI3MjNlZTYzNDQyOVwvZGd2cHFhMS0wMzI5OTExYS0yODczLTRhMjAtYjdiMi0wODFjM2NkOTVhYzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Z_XFgwbGMnSH3AydCx6yBODIbJBqtu2gqmbkZVNTYcE" alt="" />  
 <li><h1>Resident Evil 4 Remake</h1> </li>
 </motion.div>  

 <motion.div className="firstcardgame"
  animate={{boxShadow:"10px 10px 5px #ECCBA0",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}} 
 whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #ECCBA0"}}
 onClick={() =>{navigate(`/gamesD/call of duty mobile`); window.location.reload()}}
 style={{
   boxShadow: "10px 10px 5px #ECCBA0",
  backgroundImage: "url(https://i.pinimg.com/1200x/fb/5d/9a/fb5d9acca9f9e6c13430d5192f84fb57.jpg)"
 }}
 >
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757252799/gostcall_bs9qyb.png" alt="" 
style={{
  marginLeft: "-2%",
  scale: "0.94",
  marginTop: "2%"
}}
/>  
<li><h1>call of duty mobile</h1> </li>
</motion.div> 

 <motion.div className="firstcardgame" 
   animate={{boxShadow:"10px 10px 5px #BBC8F2",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}} 
 whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #BBC8F2"}}
 
 onClick={() =>{navigate(`/gamesD/Pubg mobile`); window.location.reload()}}
 style={{
  boxShadow: "10px 10px 5px #BBC8F2",
  backgroundImage: "url(https://i.pinimg.com/736x/62/50/b0/6250b09b79eb4582b34459659587fadc.jpg)"
 }}
 >
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757252821/freecall_nk5ty9.png" alt="" 
style={{
  marginLeft: "-12%",
scale: "1.17"
}}
/>  
<li><h1>Pubg mobile</h1> </li>
</motion.div> 

 <motion.div className="firstcardgame" 
    animate={{boxShadow:"10px 10px 5px #558B29",transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}} 
 whileTap={{boxShadow:"none"}}
whileHover={{boxShadow:"1px 1px 20px 5px #558B29"}}
 onClick={() =>{navigate(`/gamesD/Roblox`); window.location.reload()}}
 style={{
  boxShadow: "10px 10px 5px #558B29",
  backgroundImage: "url(https://i.pinimg.com/1200x/6b/42/65/6b426526cb3ca226514287c3bb110458.jpg)"
 }}
 >
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757252860/robocall_h3nkzl.png" alt="" />  
<li><h1>Roblox – Grow a Garden</h1> </li>
</motion.div> 
    </main>
  )  
}