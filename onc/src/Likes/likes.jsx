import { TiStarburstOutline } from "react-icons/ti";
import J42 from "./../../public/J42.json"
import { useEffect, useState } from "react";
import { BsBrilliance } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Likes = () =>{
const[count,setcount] = useState(1)
useEffect(()=>{
const time = setInterval(() => {
  setcount((prev) => prev +1)  
}, 10000);

if (count> 8) {
    clearInterval(time)
    setcount(1)
}
return () => clearInterval(time)
},[count])   

const{contextSafe} = useGSAP()

const addgsap = contextSafe(()=>{
 gsap.from(".LikesUser,.About",{
    stagger:0.2,
    rotate:50,
    duration:0.7,
 })   

  gsap.from(".LikesUser .countabout .reol,.reol2,.circule,.circule2",{
    scale:0,
    delay: .5,
    ease:"back.out",
    duration:0.7,
 })  

   gsap.from(".LikesUser .countabout img,.listA1,.listA2,.TiStarburstOutline,.TiStarburstOutline2",{
    scale:0,
    delay: 1,
    ease:"back.out",
    duration:0.7,
 }) 
})

useGSAP(()=>{
 addgsap()   
})

return(
    <main >
        <section className="LikesUser"
        style={{
animation: count > 1 ? "about 5s linear infinite" : "none",
    display: "inline-block"
}}
        >
     <h1 className="About">About</h1>  
     <h1
     style={{
        marginLeft :"75%",
        fontSize : "8rem"
     }}
     className="About"
     >US</h1>  
     {
J42.slice(count-1,count).map((curr,index) =>{ 
return(
<div key={index} className="countabout">
<section className="reol" style={{backgroundColor : curr.color}}></section>
<main className="reol2" style={{backgroundColor : curr.color}}></main>
<div className="circule" style={{border: `3px dotted ${curr.color}`}}></div>
<div className="circule2" style={{border: `3px dotted ${curr.color}`}}></div>

    
    <img src={curr.img} alt="" 
    style={{
        filter :`drop-shadow(5px 5px 20px ${curr.color})`
    }}
    /> 


<ul>
    <li className="listA1">
      <p>We’re passionate gamers bringing you the ultimate playground for fun, skill, and adventure. From epic battles to immersive worlds, we level up your gaming experience with fresh content, tips, and the latest updates—because here, it’s always game time</p>      
    </li>
     <li className="listA2">
        <h2 style={{color: curr.color,textShadow:`1px 1px 3px ${curr.color}`}}>Welcome to Orien</h2>
    </li>
</ul>

<header className="TiStarburstOutline">
    <TiStarburstOutline
    style={{color : curr.color,filter:`drop-shadow(5px 5px 10px ${curr.color})`}}
    />
</header>
<header className="TiStarburstOutline2">
    <TiStarburstOutline
    style={{color : curr.color,filter:`drop-shadow(5px 5px 10px ${curr.color})`}}
    />
</header>

</div>
)})
}
        </section>
    </main>
)
}