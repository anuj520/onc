import { useAuth } from "../ContextAPI/ContextAPI"
import { Footer } from "../footer/footer"
import { Menu } from "../HomePart/Menu"
import J28 from "./../../public/J28.json"
import J26 from "./../../public/J1.json"
import J30 from "./../../public/J30.json"
import { Likes } from "../Likes/likes"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { useState } from "react"
import { useRef } from "react"
import { ProfileTable } from "../onctables/profiletable"
import { FaInfo } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { useEffect } from "react"
import { SettingTable } from "../onctables/settingtable"
import { Abouttable } from "../onctables/abouttable"
export const About = () =>{
 const{reand} = useAuth()
const[table2,settable2] = useState(false)
const refs3 = useRef()
const{translation,handleVoice,setTraslation,setmic,resetTranscript} = useAuth2() 
   
   let ismenu = localStorage.getItem("isMenu2")
   let ismenu2 = localStorage.getItem("isMenu")  

const{contextSafe} = useGSAP();
gsap.registerPlugin(ScrollTrigger)

const addgsap  = contextSafe(()=>{
gsap.from(".aboutbacground .AboutMain,.LEVEL",{
scale:0,
stagger:0.2,
duration: 0.7,
scrollTrigger:{
  trigger:".aboutbacground",
  scroller:"body",
  start:"top 40%"
}  
})

gsap.from(".aboutbacground .AboutMain2,.opimvaloab2,.BEST",{
  y:40,
  opacity:0,
  ease:"back.out",
  duration:0.7,
  stagger:0.2,
  scrollTrigger:{
    trigger:".AboutMain2",
    scroller:"body",
    start:"top 50%"
  }  
})

gsap.from(".aboutbacground .AboutMain3 .NEW,.maxabout",{
  y:40,
  opacity:0,
  ease:"back.out",
  duration:0.7,
  stagger:0.2,
  scrollTrigger:{
    trigger:".AboutMain3",
    scroller:"body",

    start:"top 50%"
  }
})
gsap.from(".aboutbacground .AboutMain5 .coverbackgroung,.pngabout,.pngabout2,.INSTANT",{
  y:40,
  scale:0,
  ease:"back.out",
  duration:0.7,
  stagger:0.2,
  scrollTrigger:{
    trigger:".AboutMain5",
    scroller:"body",

     start:"top 20%"
  }
})
gsap.from(".aboutbacground .AboutMain4 .DISCOVER",{
  y:40,
  scale:0,
  ease:"back.out",
  duration:0.7,
  stagger:0.2,
  scrollTrigger:{
    trigger:".AboutMain4",
    scroller:"body",

     start:"top 20%"
  }
})

gsap.from(".aboutbacground .AboutMain6 .UNMATCHED",{
  y:40,
  opacity:0,
  ease:"back.out",
  duration:0.7,
  stagger:0.2,
  scrollTrigger:{
    trigger:".AboutMain6",
    scroller:"body",

    start:"top 50%"
  }
})
})

useGSAP(()=>{
  addgsap()
})

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
            <Abouttable/>
            </>: 
          <div className="svhmenufont" > <FaInfo onClick={()=>settable2(true)}/> </div>
              }
        </div > 
    <main ref={refs3}
    style={{
      marginTop: ismenu == "true" && ismenu2 == "true" ? "-0%" : 
      ismenu == "true" ? "4%" :  
      ismenu2 == "true" ? "0.2%" : ""
      }}
    >
        <div style={{position: "relative",top:"34.4rem"}}>
        <Menu/>
        </div>
    <Likes/>
    <section className="aboutbacground">
        <main className="AboutMain">
            <h1 className="LEVEL">LEVEL UP YOUR GAMING EXPERIENCE</h1>
          <p className="LEVEL">Unlock new worlds, epic adventures, and the latest releases with our cutting-edge PC gaming platform. Whether you're a casual player or a hardcore enthusiast, we offer the best games, seamless performance, and an immersive experience that will take your gaming to the next level.</p>
            <div>

  {
  J28.map((curr,index)=>{
    return(
      <li className={`ab${index}`} key={index}
      style={{
        backgroundColor : curr.color
      }}
      >
        <img src={curr.img} />
      </li>
    )
})
}
            </div>
            </main>

            <section className="AboutMain2">
  {
        J26.map((curr,index)=>{
        return(
         <li key={index} className="ab2li">
           <img src={curr.img} className="opimvaloab2" /> 
         <img src={curr.img2} className="opimvaloab2"
         style={{
          marginLeft: "65%"
         }}
         /> 
         </li>
        )
})
}
      <div>
            <h2 className="BEST"><span>BEST</span> ONLINE GAMENING COMMUNITIES</h2>
          </div>
            </section> 

            <section className="AboutMain3">
            <h1 className="NEW">A NEW ERA OF GAMING AT YOUR FINGERTIPS</h1>
            <div>
<main>
<img src="https://www.cloudgaming.my/wp-content/uploads/2025/01/img-home-card-performance.png" alt="" 
style={{marginLeft:"6%"}} className="maxabout"
/>
              <h5 className="NEW">Max Performance, Minimal Cost</h5>
              <p className="NEW">Upgrade your experience without upgrading your gear. Enjoy gaming at 1440p without costly hardware.</p>
</main>
   <main>
   <img src="https://www.cloudgaming.my/wp-content/uploads/2025/01/img-home-card-play.png" alt="" 
   className="maxabout"
   />
              <h5 className="NEW">Instant Play, Endless Fun</h5>
              <p className="NEW">Say goodbye to downloads and updates. Jump into your favourite games wherever you are in seconds.</p>
   </main>
<main>
<img src="https://www.cloudgaming.my/wp-content/uploads/2025/01/img-home-card-game.png" alt="" 
style={{marginLeft:"-2%"}} className="maxabout"
/>
              <h5 className="NEW">Game On, Anywhere</h5>
              <p className="NEW">Your game library, your rules. Play across all your devices with seamless cloud gaming.</p>
</main>
            </div>
            </section> 

        <section className="AboutMain5">
         <div className="handleimg">
       <div className="coverbackgroung"></div>
 <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757262226/pngabout_h977de.png" alt="" className="pngabout"/>
 <div className="pngimgabout">
  <img src="https://static.tvtropes.org/pmwiki/pub/images/katsuki_s7_80.png" className="pngabout2" />
 </div>
 <div className="ab5hp">
          <h1 className="INSTANT">INSTANT ACCESS TO THE LATEST TITLES</h1>
        <p className="INSTANT">Stay ahead of the curve with instant access to the latest releases and updates in the gaming world. Our platform lets you download, install, and start playing your favorite games faster than ever before</p>
 </div>
         </div>
        </section>

        <section className="AboutMain4">
         <div>

       {
        J30.map((curr,index)=>{
    return(
      <li key={index}>
        <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757262284/ele_xvoekk.png" className="DISCOVER"/>
        <dd>
          <img src={curr.png} className="DISCOVER" />
        </dd>
      </li>
    )
})}
        <main>
          <h1 className="DISCOVER">DISCOVER</h1>
          <pre className="DISCOVER">Y O U R   N E W   F A V O R I T E   G A M E</pre>
        </main>
        </div>    
        </section>

        <section className="AboutMain6">
          <div>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e09bdfc4-503d-47f3-a277-46c8e2f15fd0/dgtqf79-991b6a2e-c4cf-4007-887b-f4f0d56a1e7e.png/v1/fill/w_924,h_865/sonic_the_hedgehog_png_by_spider_monkie_dgtqf79-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTQzIiwicGF0aCI6IlwvZlwvZTA5YmRmYzQtNTAzZC00N2YzLWEyNzctNDZjOGUyZjE1ZmQwXC9kZ3RxZjc5LTk5MWI2YTJlLWM0Y2YtNDAwNy04ODdiLWY0ZjBkNTZhMWU3ZS5wbmciLCJ3aWR0aCI6Ijw9MTAwNyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ej-ND1GB2MROuC7VNshV0GnZcHJImewML93Z4wNxE4k" className="UNMATCHED" />
<li>
              <img src="https://cdn.staticcrate.com/stock-hd/effects/FootageCrate-4K_Spark_Portal_Front_5-prev-full.png" className="UNMATCHED" />
</li>
            <main>
            <h1 className="UNMATCHED">UNMATCHED CUSTOMIZATION AND CONTROL</h1>
            <p className="UNMATCHED">Take your gaming to the next level with customizable settings that let you fine-tune every aspect of your experience. From graphics to controls, adjust your game to fit your style and get the edge in every match.</p>
            </main>
          </div>
        </section>

        </section><br /><br /><br />
        <Footer/>
    </main>
    </>
 )   
}


