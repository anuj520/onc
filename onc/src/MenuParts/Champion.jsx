import { useEffect, useRef, useState } from "react"
import { Menu } from "../HomePart/Menu"
import { Footer } from "../footer/footer"
import { Loading } from "../Loading/Loading"
import {useQuery} from "@tanstack/react-query"
import { NavLink, useNavigate } from "react-router-dom"
import {motion} from "motion/react"
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { useAuth } from "../ContextAPI/ContextAPI"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

export const Champion = () =>{   
const{scroll2,op,last} = useAuth() 
const[tog,settog] = useState(false)
const refs = useRef({})
const nevigate = useNavigate()

const getdata = async() =>{
const response = await fetch('http://localhost:3000/games/chamption');
const obj = await response.json();
settog(true)
return obj  
}

const handleleft = (ld) =>{
 let node = refs.current[ld];
 if (node) {
  node.scrollLeft -=1424;
 } 
}

const handleRight = (ld) =>{
  let node = refs.current[ld];
  if (node) {
    node.scrollLeft +=1425;
  }
}

const{data,isLoading,error} = useQuery({
 queryKey:['get'],
 queryFn: getdata 
})

const{contextSafe} = useGSAP();
gsap.registerPlugin(ScrollTrigger)

const addgsap = contextSafe(()=>{
gsap.from(".Championheader .leftsideimgcham",{
  y: 175,
  opacity:0,
  duration:1,
  stagger:0.2,
  ease:"back.out"
})  
})

useEffect(()=>{
if (tog == true) {
  addgsap()
}  
},[tog])


if(isLoading) return <Loading/>
if (error) return <div>{error}</div>

let ld = 0;

let ismenu = localStorage.getItem("isMenu2")
let ismenu2 = localStorage.getItem("isMenu")
 return(
    <main
    style={{
      marginTop: ismenu == "true" && ismenu2 == "true" ? "0%" : 
      ismenu == "true" ? "4.3%" :  
      ismenu2 == "true" ? "0.2%" : ""
      }}
    >
      <div style={{marginLeft :"" , position :"relative", top: "34.4rem"}}>
<Menu/>
</div>

<section className="Championheader">
<section className="Champion" ref={(el=> {refs.current[ld] = el,scroll2.current = el})}> 
{
  data.map((curr,index)=>{
  return(
       <motion.div className="leftsideimgcham" key={index} onClick={()=> nevigate(`/champtionId/${curr._id}`)}
    animate={{scale:1,transition:{duration:0.7,ease:"easeInOut",damping:15,stiffness:300,type:"spring"}}}
    whileHover={{scale:1.055}}
    whileTap={{scale:1}}

  style={{
    backgroundImage: `url(${curr.img})`
  }}
  >
    <div className="hafecutimg" style={{backgroundColor: curr.f1color}}>
    <img src={curr.name} alt=""
    style={{
      height:index == 8 ?"12vh":""
    }}
    className={(index == 10 || index == 8) && "rocektLeages"} 
    />
    </div>
  </motion.div>
  )  
  })
}

</section>
<div className="icons">
<div className="lefticons" onClick={()=>handleleft(ld)}
    style={{
 opacity: op
}}  
><FaAnglesLeft/></div> 
<div className="righticons" onClick={()=>handleRight(ld)}
    style={{
 opacity: last
}}
><FaAnglesRight/></div> 
</div> 
</section>
<Footer/>
  </main>
 )   
}