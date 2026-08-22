import { NavLink, useNavigate, useParams } from "react-router-dom"
import {Loading} from "./../Loading/Loading"
import {useQuery} from "@tanstack/react-query" 
import { Footer } from "../footer/footer";
import { Menu } from "../HomePart/Menu";
import { FaHandPointLeft, FaHandPointRight, FaInfo } from "react-icons/fa"
import { FaStar } from "react-icons/fa";
import {motion, scale} from "motion/react"
import { useAuth } from "../ContextAPI/ContextAPI";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CreatosTable } from "../onctables/creatorstable";
import { ImCross } from "react-icons/im";
import { useAuth2 } from "../ContextAPI/ContectApi2";
export const CreatorsId = () =>{
 const{id} = useParams();
 const{translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()
 const{reand,scroll2,op,last} = useAuth()
 const refs = useRef({})
 const refs3 = useRef()
 const navigator = useNavigate()
 const[table2,settable2] = useState(false)
 const[tog,settog] = useState(false)
 

const getCratoesId = async(id) =>{
const response = await fetch(`http://localhost:3000/games/creators/${id}`);
const res = await response.json();
settog(true)
return res
}

 const{data,isLoading,error} = useQuery({
  queryKey:['gets'],
  queryFn: () =>getCratoesId(id)
 })

const handleLeft = (ld)=>{
  let node = refs.current[ld]
  if (node) {
    node.scrollLeft -= 1130
  }
}
const handleRight = (ld)=>{
  let node = refs.current[ld]
  if (node) {
    node.scrollLeft += 1130
  }
}

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
 data.games.map((curr)=>(
  handleVoice(`${curr.name} ${curr.rating}`)
  ))
}
if (translation) {
  console.log(translation);
}
},[translation, data])

useEffect(()=>{
if (translation.includes("left")) {
handleLeft(translation.split(' ')[1] -1)  ;
handleVoice(translation)
setmic("")
}else if (translation.includes("right")) {
  handleRight(translation.split(' ')[1] - 1)
  handleVoice(translation)
setmic("")
} else if (translation.includes("open")) {
  let slic = translation.slice(4)
  let index = slic.toLowerCase().indexOf("open")
  let sl = slic.slice(index + 4).replace(/\./g, "");  
if (sl.length > 1 && sl !== " ") {
   navigator(`/gamesD/${sl}`)
  handleVoice(`the ${sl}`)
   window.location.reload()
  console.log("sl",sl); 
}
  console.log("96 sl",sl); 
}
},[translation])


const{contextSafe} = useGSAP();
gsap.registerPlugin(ScrollTrigger)

const addgsap = contextSafe(()=>{
gsap.from(".creatorsInfo .shortCreators",{
  scale:0,
  duration:0.7,
ease:"circ.out"
})
gsap.from(".creatorsInfo .Newell",{
opacity:0,
y: 121,
duration:0.7,
stagger: 0.2,
ease:"back.out"
})  

gsap.from(".CategoryDetalish .topcreators",{
scale: 0,
opacity:0,
stagger:0.2,
duration: 0.7,
ease:"back.out",
scrollTrigger:{
  trigger:".topcreators",
  scroller: "body",
  start:"top 40%",
}  
})

gsap.from(".CategoryDetalish .Bestcreators",{
scale: 0,
opacity:0,
stagger:0.2,
duration: 0.7,
ease:"back.out",
scrollTrigger:{
  trigger:".Bestcreators",
  scroller: "body",
  start:"top 40%",
}  
})

})

useGSAP(()=>{
  addgsap()
},{scope: ".gameOutlet",dependencies:[tog]})

if (table2 == true && refs3.current) {
 document.body.style.overflow = "hidden"; 
 refs3.current.style.filter = "blur(10px)"
}else if(refs3.current){
  document.body.style.overflow = "auto"
  refs3.current.style.filter = "none"
}

 if(isLoading) return <Loading/>
 if(error) return <div>{error}</div>
 
let rolex = reand === 0? reand +1: reand === 5 ? reand -5 : reand

let ld = 0;

 let ismenu = localStorage.getItem("isMenu2")
 let ismenu2 = localStorage.getItem("isMenu")
 
 return(
  <>
   <div className="onctraninmenu2" style={{zIndex:"9999999999999999",marginTop:"-3%"}}>
        {table2 ?
        <>
      <div className="svhmenufont">  <ImCross onClick={()=>settable2(false)}/>   </div>  
        <br /><br />
        <CreatosTable/>
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
  <section className="creatorsInfo">
    <ul className="backhead">
      <img src={data.top[rolex]?.img} className="shortCreators" />
    </ul>
    <img src={data.img} className="Newell" 
    style={{boxShadow:"1px 1px 10px 10px #000000ff"}}
    />

    <div>
      <br />
      <h1 className="Newell">{data.name.split(' ')[0]} <span className="spancidh1">{data.name.split(' ')[1]}</span></h1>
      <p className="Newell">Gabe Newell, often affectionately called "Gaben", is an American video game developer and entrepreneur best known as the co-founder and president of Valve Corporation. After dropping out of Harvard, he worked at Microsoft for 13 years before founding Valve in 1996. Under his leadership, Valve created iconic games like Half-Life, Portal, and Dota 2, and launched Steam, the groundbreaking digital distribution platform that revolutionized PC gaming
</p>
    </div>
  </section>
   <section className="CategoryDetalish" style={{marginTop: "-5rem"}}>
   <div className="iconleft">
  <header onClick={()=> handleLeft(ld)} style={{opacity: op}}><FaHandPointLeft/></header>
   <header onClick={() => handleRight(ld)} style={{opacity: last}}><FaHandPointRight/></header>  
  </div>  
    <div ref={(el) => {refs.current[ld] = el,scroll2.current = el}}>
    {
    data.top.map((curr,index)=>{
     return(
      <NavLink to={`/gamesD/${curr.name}`} reloadDocument>   <motion.section key={index} className="topcreators"
      animate={{scale:1,transition:{ease:"easeInOut",type:"spring",duration:0.7,damping:15,stiffness:300}}}
      whileHover={{scale: 1.030}}
      whileTap={{scale: 1}}
      > 
          <img src={curr.img} alt="" />
        <h2>{index+1}</h2> 
        <ul>
        
          <h3>{curr.name}</h3>
          <p><FaStar/> {curr.rating}</p>
        </ul>
          </motion.section></NavLink> 
            ) 
          })
         }
    </div> 
  </section>

  <section className="CategoryDetalish" style={{marginTop :"3%"}}>
    <h1 style={{fontSize:"1.6rem",marginLeft:"2%",
       fontWeight : "600"}}>Best {data.name} Games</h1>
    <div 
style={{
  overflow: "hidden", display:"grid",gridTemplateColumns: "repeat(3,1fr)",gap: "1rem",padding: "1rem",justifyContent: "center",alignItems: "center",width: "100%",height: "100%",zIndex: "9999999999999999999999",
  marginLeft:"rem",
  marginTop : "-2rem"
}}     
    >
      {
        data.games.map((curr,index)=>{
         return(
          <motion.section key={index}
          className="Bestcreators"
               animate={{scale:1,transition:{ease:"easeInOut",type:"spring",duration:0.7,damping:15,stiffness:300}}}
      whileHover={{scale: 1.035}}
      whileTap={{scale: 1}}
          > 
          <img src={curr.img} alt="" />
        <ul>
        <h2 style={{opacity:"0"}}>{index+1}</h2> 
          <h3
          style={{width:"98.5%",marginTop: "1%"}}
          >{curr.name}</h3>
          <p><FaStar/> {curr.rating}</p>
        </ul>
  <br />
          </motion.section>
         ) 
        })
      }
    </div>
  </section> 
  <br /><br />
  <Footer/>
</main>
</>
 )
}