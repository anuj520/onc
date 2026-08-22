import { NavLink, useNavigate, useParams } from "react-router-dom"
import { Menu } from "../HomePart/Menu"
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { PiHeartStraightFill, PiHeartStraightLight } from "react-icons/pi";
import { FaHandPointLeft, FaHandPointRight, FaInfo, FaStar } from "react-icons/fa"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Footer } from "../footer/footer"
import { useQuery } from "@tanstack/react-query"
import { Loading } from "../Loading/Loading"
import { FaHeart } from "react-icons/fa6";
import {motion} from "motion/react"
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../ContextAPI/ContextAPI";
import { GenraFooter } from "./genraFooter";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { HomeTable } from "../HomePart/hometable";
import { ImCross } from "react-icons/im";
import { GenraTable } from "../Multer/genrarable";

export const GenreInfo = () =>{
  const{translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()
  const[search,setsearch] = useState("")
  const{data:authdata,handledeletefav} = useAuth()
  const trans = useRef()
  const[table2,settable2] = useState(false)
  const navigator = useNavigate()
  const refs = useRef({})
  const refs3 = useRef()
  const[arrow , setarrow] = useState()
  const{name} = useParams();

const getDetalish = async(name) =>{
const respone = await fetch(`http://localhost:3000/games/g/${name}`)
const obj = await respone.json()
setarrow(respone.ok)
return obj
}

const handlelike = async(name, like, topname,rating,back,png) =>{
   let heartObj = {
    name: topname,
    like : !like,
    topname: name
   }
   
   let hartDetalish2 ={
    email:authdata.email,
    name:name,
    rating:rating,
    like: like == false ? true :false,
    back:back,
    png:png 
   }

    
  const respone = await fetch("http://localhost:3000/games/like",{
    method: "PATCH",
    headers:{
     "Content-Type" : "application/json"
    },
    body:JSON.stringify(heartObj)
  })

  
  const response2 = await fetch("http://localhost:3000/games/heart",{
    method: "POST",
    headers:{
      "Content-Type" :"application/json"
    },
    body:JSON.stringify(hartDetalish2)
  })
     
 console.log(hartDetalish2.like);
  
}


const scrollLeft = (ld) =>{
const node = refs.current[ld]
if (node) {
  node.scrollLeft -=1390;
}
}

const scrollRight = (ld) =>{
  const node = refs.current[ld]
  if (node) {
    node.scrollLeft +=1290
  }
}



const handleBottom = () => {
  window.scrollTo({
    top: window.innerHeight * 1.02,
    behavior: "smooth"
  });
}

const mouseEnter = () =>{  
  if (trans.current) {
    trans.current.style.transform = "translateX(0.5rem)"
  }
}

const mouseLeve = () =>{
  if (trans.current) {
    trans.current.style.transform = "translateX(0rem)"
  }
}


const{data,error,isLoading} = useQuery({
  queryKey:['get'],
  queryFn: () =>getDetalish(name) ,
  refetchInterval :1
 }) 
    
 useEffect(()=>{
if (translation == "top") {
  setTraslation("")
  resetTranscript()
  setmic("")
data.top?.map((curr)=>(
 handleVoice(`${curr.name} ${curr.rating}`)
));

}

if (translation == "all") {
    setTraslation("")
  resetTranscript()
  setmic("")
  data.games?.map((curr)=>{
    handleVoice(`${curr.name} ${curr.rating}`)
  })
}
if (translation) {
  console.log(translation);
}
},[translation, data])

useEffect(()=>{
if (translation.includes("left")) {
scrollLeft(translation.split(' ')[1] -1)  ;
handleVoice(translation)
setmic("")
}else if (translation.includes("right")) {
  scrollRight(translation.split(' ')[1] - 1)
  handleVoice(translation)
setmic("")
} else if (translation.includes("open")) {
  let slic = translation.slice(4)
  let index = slic.toLowerCase().indexOf("open")
  let sl = slic.slice(index + 4)  
  navigator(`/gamesD/${sl}`)
  handleVoice(`the ${sl}`)
   window.location.reload()
}
},[translation])

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


const{contextSafe} = useGSAP()
gsap.registerPlugin(ScrollTrigger);

const addgsap = contextSafe(()=>{
 gsap.from(".gameOutlet .GenreInfo",{
  y: 234,
  ease:"back.out",
  duration: 0.7,
 }) 

gsap.from(".gameOutlet .GenreInfoDetails2 .SearchArea img",{
  scale: 0,
stagger: 0.2, 
duration: 0.7,
ease:"back.out", 
  scrollTrigger:{
    trigger:".GenreInfoDetails2",
    start:"top 20%",
    scroller:"body"
  }
}) 
gsap.from(".gameOutlet .GenreInfoDetails .dataitem",{
  scale: 0,
  duration: 0.7,
stagger: 0.2,  
ease:"back.out",
  scrollTrigger:{
    trigger:".GenreInfoDetails2",
    scroller:"body"
  }
}) 
})

useGSAP(() => {
     addgsap();
},{scope:"body", dependencies: arrow});


 if (isLoading) return <Loading/>
 if(error) return <div>Error:{error.message}</div>
 

 const SearchArea = [...data.games,...data.top].filter((curr)=>(
   curr.name.toLowerCase().includes(search.toLowerCase()) 
 ))


let ld = 0;
let ismenu = localStorage.getItem("isMenu2");
let ismenu2 = localStorage.getItem("isMenu") ;

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
      <GenraTable/>
      </>: 
    <div className="svhmenufont" > <FaInfo onClick={()=>settable2(true)}/> </div>
        }
      </div> 

<main className="gameOutlet" const ref={refs3}
   style={{
    marginTop: ismenu == "true" && ismenu2 == "true" ? "-0%" : 
    ismenu == "true" ? "4%" :  
    ismenu2 == "true" ? "0.2%" : "",

    }}
>
  {
    search.length < 2 &&
    <>

  <section className="GenreInfo">   
<div
style={{
   backgroundImage: `linear-gradient(to right, rgba(0, 0,0, 1),
     rgba(0, 0, 0, 0.5)), 
     url(${data.video})`
}}
>
  <img src={data.png} alt="" />
</div>
{/* 1400*788png */}
    <div className="Games" ref={trans} onMouseEnter={mouseEnter} onMouseLeave={mouseLeve}>
      <h5>Enjoy Best</h5>
      <span
      style={{
        fontSize : data.name.length >= 6 ? "5rem" : "" 
      }}
      >{data.name}</span>
      <h5>Games</h5>
      <p>Multiplayer survival game mode where players fight until one remains on a shrinking battlefield</p>

<motion.header
whileHover={{scale : 1.033}}
whileTap={{scale: 1}}
>
       <button
     onClick={() =>{handleBottom() , handleScale()}}
     >Explor <IoIosArrowDropdownCircle/></button>
</motion.header>
    </div>
  </section>
 </>
  }

{
  search.length < 2 &&
    <section className="GenreInfoDetails">
    <br />
     <div className="Gscroll">
  <header
    onClick={() => scrollLeft(ld)}
  ><FaHandPointLeft /></header>
  <header
   onClick={() => scrollRight(ld)}
  > <FaHandPointRight /></header>
      </div>
    <div ref={(el => refs.current[ld] = el)}>
    {
    data.top.map((curr,index)=>{
     return(
    <NavLink >
      
       <motion.section key={index}
       className="dataitem"
       whileHover={{scale: 1.040}}
       transition={{duration: 0.5}}
       > 
          <div className="imgTop1"
          style={{
   backgroundImage: `linear-gradient(to right, rgba(22, 22, 22,0.1),
     rgba(22, 22, 22, 0.5)), 
     url(${curr.back})`
}}>
      </div>
       <img src={curr.png} className="pngTop" />
        
      <ul>
      <h2>{index+1}</h2>
    <li onClick={()=> handlelike(curr.name,curr.like, data.name,curr.rating,curr.back,curr.png )} 
     
     >{curr.like ? <PiHeartStraightFill  style={{
        color: curr.like ? "red" :"",
      }}/> : < PiHeartStraightLight onClick={() =>handledeletefav(curr.name)}/>}</li> 
      <main>
      <h3>{curr.name}</h3>
      <p><FaStar/> {curr.rating}</p>
      </main>
      </ul>
          </motion.section></NavLink> 
            ) 
          })
         }
    </div> 
  </section>
}


<br /><br /><br />
  <section className="GenreInfoDetails2">
    <h1>Best {data.name} Games</h1>
    <br />
    <div  >
      {
        SearchArea.map((curr,index)=>{
         if(index> 29){
          return;
         } 
         return(
          // <NavLink to={`/gamesD/${curr.name}`} reloadDocument>  
           <motion.section key={index}
              initial={{opacity: 0 ,scale: 0}}
               animate={{opacity: 1, scale: 1,transition:{duration: 0.6,ease :"easeInOut",type: "spring",stiffness: 300,damping: 15}}}
           whileHover={{scale :1.035}}
           whileTap={{scale: 1.023}}
           className="SearchArea"
           > 
          <img src={curr.img||curr.back} alt="" />
          <div onClick={()=> handlelike(curr.name,curr.like, data.name,curr.rating,curr.img,curr.png )}
            style={{
              color : curr.like ? "red" : "",
              transition :"all .2s ease-in-out"
            }}
            >
            { curr.like ? <PiHeartStraightFill/>:<PiHeartStraightLight onClick={() =>handledeletefav(curr.name)}/>}</div>
        <ul>
        <h2 style={{opacity:"0"}}>{index+1}</h2> 
          <h3>{curr.name.length > 30? `${curr.name.slice(0,30)}..`: curr.name}</h3>
          <h4>{data.name}</h4>
          <p><FaStar/> {curr.rating}</p>
        </ul>
        <br /><br /><br />
          </motion.section>
          
          // </NavLink>
         ) 
        })
      }
    </div>
  </section>
  <br /><br />
  <Footer/>
  
   <GenraFooter search={search} setsearch={setsearch} arrow={arrow}/>
</main>
</>
 )   
}