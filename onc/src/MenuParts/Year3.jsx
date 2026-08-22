import { useEffect, useState } from "react";
import { Menu } from "../HomePart/Menu"
import { NextPage3 } from "./NextPage3";
import { NavLink, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../Loading/Loading";
import { FaAngleRight } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export const Year2 = () =>{
  const{id} = useParams()
const[data2,setdata2] = useState([])  
 const[tog,settog] = useState(false) 

const getadata = async() =>{
const response = await fetch(`http://localhost:3000/games/chamption/${id}`)
const obj = await response.json();
setdata2(obj);
settog(true)
return obj;  
}

const{data,isLoading,error} = useQuery({
  queryKey:['gets'],
  queryFn: getadata
})

const{contextSafe} = useGSAP()
gsap.registerPlugin(ScrollTrigger)

const addgsap = contextSafe(()=>{
gsap.from(".ChamptionId .ddchampion,.namechampion,.olph2champion,.championimages,.lichamp1,.lichamp",{
opacity:0,
duration:1,
y:175,
stagger:0.2,
ease:"back.out"
})  

gsap.from(".ChamptionId2 .topimagecham,.tophandlecham",{
  scale:0,
  stagger:0.2,
  ease:"back.out",
  duration:0.7,
  scrollTrigger:{
    trigger:".ChamptionId2",
    scroller:"body",
    start:"top 20%",
    markers:true
  }
})
})

useEffect(() => {
  if (tog == true) {
     addgsap(); 
  }
},[tog])


if(isLoading) return <Loading/>
if(error) return <div>{error}</div>

 return(
         <main>
           <div style={{marginLeft :"" , position :"relative", top: "35rem"}}>
     <Menu/>
     </div>  
       {
        data.year3.map((curr,index)=>{
        return( 
      <section className="ChamptionId"
      style={{background: `linear-gradient(to right, #000,${curr.color2})`,
    backgroundSize:"cover",
    backgroundPosition:"center"  
  }}
      >
   <div key={index}>
   <header>
    <dd className="ddchampion">
  <NavLink to={`/champtionId/${id}`} reloadDocument>  <h1>2024</h1> </NavLink> 
    <NavLink to={`/year2/${data._id}`} reloadDocument> <h1>2023</h1></NavLink>
   <NavLink to={`/year/${data._id}`} reloadDocument> <h1>2023</h1> </NavLink>
    <FaAngleRight/>
    </dd>
        <img src={curr.name} alt="" className="namechampion"/>
        <ol  className="olph2champion">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quisquam at reiciendis nemo cumque ipsa perferendis ipsam mollitia molestiae dolorem itaque, eos veritatis, dolore error in! Nemo illum fugit explicabo.</p>
        <h2 style={{color: curr.color2}}>{curr.tag}</h2>
        </ol>
       </header>
  <img src={curr.img} alt="" className="championimages" />
        <ul>
          <li style={{backgroundColor: curr.color1}} className="lichamp1">E-Sports <span>E-Sports</span>
          E-Sports  <span>E-Sports</span> E-Sports  <span>E-Sports</span> E-Sports  <span>E-Sports</span>
          E-Sports  <span>E-Sports</span> E-Sports  <span>E-Sports</span>
             E-Sports  <span>E-Sports</span> E-Sports  <span>E-Sports</span> </li>
          <li className="lichamp" style={{backgroundColor: curr.color2}}>
        E-Sports <span>E-Sports</span>
          E-Sports  <span>E-Sports</span> E-Sports  <span>E-Sports</span> E-Sports  <span>E-Sports</span> 
          E-Sports  <span>E-Sports</span> E-Sports  <span>E-Sports</span>  
             E-Sports  <span>E-Sports</span> E-Sports  <span>E-Sports</span>  
          </li>
        </ul>
      
  
  
       </div>
      </section>
  )  
        })
       }      
          <section className="ChamptionId2" >
    <img src={data.imgtop3} alt="" className="championimages"/>
            <ul>
              <h1 className="top3">Top 3 Player</h1>
              <div>
              {
              data.top3.map((t,index)=>{
                return(
                 <li key={index} className="topimagecham">
                  <h1>{index == 0 ? `${index+1}st` : ""}</h1>
                  <h1>{index == 1  ? `${index+1}nd` : ""}</h1>
                  <h1>{index == 2 ? `${index+1}ld` : ""}</h1>
                  <img src={t.img} alt="" />
  
                 <footer className="top">
                 <h2>{t.place}</h2>
                  <h3>{t.point}</h3>
                  <h4>{t.MVP}</h4>
                  <p>{t.para}</p>
                 </footer>
                 </li> 
                )  
              })
              }
              </div>
            </ul>
  
   </section> 
 <NextPage3 data2={data2}/>    
    </main>
 )     
} 