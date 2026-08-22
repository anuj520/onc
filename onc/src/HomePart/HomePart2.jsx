import { Link, NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../ContextAPI/ContextAPI"
import { useEffect, useRef, useState } from "react"
import J50 from "./../../public/J50.json"
import J46 from "./../../public/J46.json"
import { FaAngleRight } from "react-icons/fa6";
import { GiLaurelsTrophy } from "react-icons/gi";
import J6 from "./../../public/J6.json"
import {motion} from "motion/react"
import J45 from "./../../public/J45.json"
import { FaStar } from "react-icons/fa6";
import { FaHandPointLeft,FaHandPointRight } from "react-icons/fa";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollToPlugin, ScrollTrigger } from "gsap/all"

export const HomePart2 = () =>{
const{handleButtonClick,reand,data:authData,handleMusicHover,buttonH} = useAuth()
  const refs = useRef({})
 const navigate = useNavigate() 

const handleRight = (id) =>{
const node = refs.current[id]
  if(node){
    node.scrollLeft += 1503;
  }
}

const handleLeft = (id) =>{
  const node = refs.current[id];
  if (node) {
    node.scrollLeft -=1510;
  }
}
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
 const{contextSafe} = useGSAP()

const appgsap = contextSafe(()=>{
      gsap.from(".antohomepart2 .hawkname", {
       y: -312,
        duration: 1,
        stagger:0.3,
         ease:"bounce.out",
       scrollTrigger:{
    trigger:".antohomepart2",
   scroller: "body",
   start: "top 20%",
   end: "top 40%"
       }
      })
  gsap.from(".antohomepart2 .hawkname2", {
       y: 312,
        duration: 1,
        stagger:0.3,
        ease:"bounce.out",
       scrollTrigger:{
    trigger:".antohomepart2",
   scroller: "body",
   start: "top 20%",
 end: "bottom 25%"
       }
      })
gsap.from(".part2Hompart div",{
 rotate: 90,
 stagger: 0.2,
  duration:0.7,
       ease:"back.out",
  scrollTrigger:{
    trigger: ".part2Hompart",
    scroller :"body",
    start: "top 20%",
}
})


gsap.from(".chaphome2 .chamhome2",{
  scale:0,
  duration: 0.7,
    delay :.5,
    stagger: 0.2,
    ease:"back.out",
  scrollTrigger:{
    trigger:".chaphome2",
    scroller: "body",
    start: "top 20%",
  }
})

gsap.from(".chaphome2",{
  y:-110,
  duration: 0.7,
  scrollTrigger:{
    trigger:".chaphome2",
    scroller: "body",
    start: "top 20%",
  }
})

gsap.from(".creatoresh2 img",{
  scale:0,
  stagger: 0.2,
  duration: 0.7,
  ease: "back.out",
  scrollTrigger:{
    trigger: ".creatoresh2",
    scroller: "body",
    start: "top 20%",
  }
})

gsap.from(".creatoresh2 h1",{
  rotate:360,
  stagger: 0.2,
  delay :.5,
  duration: 0.7,
  scrollTrigger:{
    trigger: ".creatoresh2",
    scroller: "body",
    start: "top 20%",
  }
})

gsap.from(".favh2 .wokongh2",{
duration: 0.7,
x: -340,
scrollTrigger:{
  trigger: ".favh2",
  scroller :"body",
  start : "top 20%"
}
})
gsap.from(".favh2 .kratos",{
duration: 0.7,
x: 410,
delay: .5,
scrollTrigger:{
  trigger: ".favh2",
  scroller :"body",
  start : "top 20%"
}
})

gsap.from(".favh2 h1",{
duration: 0.7,
fontSize: 0,
stagger: 0.2,
delay: 1,
ease: "back.out",
scrollTrigger:{
  trigger: ".favh2",
  scroller :"body",
  start : "top 20%"
}
})
gsap.from(".Hpcollections img",{
delay: 1,
duration: 1,
opacity: 0,
scrollTrigger:{
  trigger: ".Hpcollections",
  scroller: "body",
} 
})
})

useGSAP(()=>{
appgsap()  
})


let ismenu = localStorage.getItem("isMenu2")
let ismenu2 = localStorage.getItem("isMenu")
let id = 0

return(
    <header>
{

  authData.isAdmin &&
    <NavLink to={'/verfication'} reloadDocument>
          <div className="admin" onClick={handleButtonClick}
          onMouseEnter={buttonH}
          style={{
            marginTop: ismenu == "true" && ismenu2 == "true" ? "4%" : 
            ismenu == "true" ? "4%" :  
            ismenu2 == "true" ? "0%" : ""
          }}
          >
        <p>ADMIN</p>  
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757218104/admin1_ffvoft.gif" alt="" />
    </div>
    </NavLink>
}
     {/* //ai */}

<header className="antohomepart2">
  <h1 className="Explore">Explore the Gaming Realm <FaAngleRight/></h1>
<main>
{
  J50.map((curr,index)=>{
    return(
   <div className="hpart2img" key={index} onClick={()=> {navigate(`/games/${curr.name3}`); window.location.reload()}}>
    <motion.img 
    animate={{scale:1,transition:{duration:.7,ease:"easeInOut",damping:15,stiffness:300,type:"spring"}}}
    whileHover={{scale:1.033}}
    whileTap={{scale:1}}
    src={curr.img} alt="" />
   <div className={`hawkname ${index == 0 && "horizenforza"}`} style={{left: index>=1 && "-134%"}}>
     <h1
   style={{color: curr.color}}
     >{curr.name}</h1>
     <h1 className="Hawkops">{curr.name}</h1>
   </div>
     <div className="hawkname2">
     <h1 className="Hawkops">{curr.name2}</h1>
     <h1 style={{color: curr.color}}>{curr.name2}</h1>
   </div>
  </div>
    )
  })
}
</main>
</header> 
<br /><br />
   <h1 className="Explore Top-Tier">Top-Tier RPG & Fighting Battles Await<FaAngleRight/></h1>   
  <section className="part2Hompart">

 <motion.main onClick={()=>{navigate("/try/67acd5e6b47d4a438d581c57");window.location.reload()}}
animate={{scale:1,transition:{duration:.7,ease:"easeInOut",damping:15,stiffness:300,type:"tween"}}}
whileHover={{scale:1.015}}
whileTap={{scale:1}}
>
  <div className="imgcuthom1"></div>
  <div className="imgcuthom2"></div>
  <div className="imgcuthom3"></div>
 <div className="imgcuthom4"></div>
 <p className="textblackmith"><span>|</span> Black mth Wokong <span>|</span></p>
 <div className="linebottom"> </div>
  <div className="linetop"> </div>
<button>Play</button>
<div className="rightboxtop">
<div className="righttext"><p className="prighttext"><FaStar/> 9.5</p></div>
</div>
<div className="bottomboxdev">
  <pre>Wokong</pre>
<div className="line1"></div>
<div className="line2"></div>
</div>
<div>

</div>
 </motion.main>
  <motion.main 
  onClick={()=>{navigate("/try2/679107379c965c44fa976828");window.location.reload()}}
animate={{scale:1,transition:{duration:.7,ease:"easeInOut",damping:15,stiffness:300,type:"tween"}}}
whileHover={{scale:1.015}}
whileTap={{scale:1}}

  style={{background: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_5d8432ae40bf320d71262eb8725a7e1e9e871dbf.1920x1080.jpg?t=1688111009)`,
    backgroundPosition: "center",backgroundSize: "cover"
  }}
  >
  <div className="imgcuthom1"
   style={{
  backgroundImage : "url(https://cdn.akamai.steamstatic.com/steam/apps/1778820/ss_5d8432ae40bf320d71262eb8725a7e1e9e871dbf.1920x1080.jpg?t=1688111009)",
  backgroundPositionX:"-19rem"
 }} 
  ></div>
  <div className="imgcuthom2"
   style={{
  backgroundImage : "url(https://res.cloudinary.com/dycmuvzze/image/upload/v1757245260/take8_f18uoi.png)",
  backgroundPositionX: "-15rem",
  backgroundPositionY: "4.4rem"
 }} 
  ></div>
  <div className="imgcuthom3"
   style={{
  backgroundImage : "url(https://res.cloudinary.com/dycmuvzze/image/upload/v1757245260/take8_f18uoi.png)",
  backgroundPositionX: "-36rem",
  backgroundPositionY: "0rem"
 }} 
  ></div>
 <div className="imgcuthom4"></div>
 <p className="textblackmith"><span>|</span> Takken 8 <span>|</span></p>
 <div className="linebottom"> </div>
  <div className="linetop"> </div>
<button>Play</button>
<div className="rightboxtop">
<div className="righttext"><p className="prighttext"> <FaStar/> 9.5</p></div>
</div>
<div className="bottomboxdev">
  <pre>Gin</pre>
<div className="line1"></div>
<div className="line2"></div>
</div>
<div>

</div>
 </motion.main>
  </section>

<br /><br /><br /><br />
<h1 className="Explore Top-Tier2" onClick={() =>navigate("/genra")}>Discover the Best Game Genres<FaAngleRight/></h1>   
<motion.section className="categoruHom2"
    animate={{scale:1,transition:{duration:.7,ease:"easeInOut",damping:15,stiffness:300,type:"spring"}}}
    whileTap={{scale:0.99}} 
>
{
  J45.map((curr,index)=>{
  return(

<main key={index} 
// onClick={() =>navigate(`${curr.path}`)}
style={{
  background: `linear-gradient(to right,${curr.color1},${curr.color2})`
}}
>
<div className="somenames">
<h1><span
style={{
  color: curr.darkcolor
}}
>{curr.para2.split('')[0]}</span>{curr.para2.slice(1)}</h1>  
<p>{curr.para}</p>
</div> 
<header>
  <div className="clrcle"
  style={{background : `linear-gradient(to right,${curr.circle2},#000)`}}
  >
  <div className="circle2"
  style={{
    backgroundColor: curr.circle
  }}
  ></div>
</div>

<img src={curr.img} alt="" 
style={{
  height : index >= 1? "140vh":"",transform:index >=1?  "rotateY(200deg)" :"",marginLeft :index >=1? "11%":""
}}
/>
<div className="namesAc">
  <h1>{curr.name}</h1>
  <span style={{color: curr.gamecolor}}>game</span>
</div>

<div className="paradiv2">
<span
style={{
  color : curr.darkcolor
}}
>{curr.toname.slice(0,6)}</span>{curr.toname.slice(6,988)}
</div>

<div className="toph2"></div>
{
  index !== 2 && <>
<div className="imgfoarroe">
  <img src="https://cdn4.iconfinder.com/data/icons/video-game-items-concepts/128/weapon-arrow-1024.png" alt="" />
<h1>More</h1>
</div>
  </> 
}
<div className="toph3"></div>
</header>

</main>   
  )  
  })
}  
</motion.section>

<section className="chaphome2">
  <h1 className="Explore Top-Tier3"  onClick={()=>navigate("/champion")}>Top Games. Big Plays. Real Esports<FaAngleRight/></h1>   
<main>
  {
    J46.map((curr,index)=>{
     return(
  <div className="onediv2" key={index}
  style={{
    background: `linear-gradient(to right,#000,${curr.backco})`
  }}
  > 
   <div className="logogame">
    <img src={curr.imglogo} alt="" />
  </div> 
  <h1><span
  style={{
    color: curr.color
  }}
  >{curr.name.slice(0,4)}</span>{curr.name.slice(4,99)}</h1>
  <p><span
    style={{
    color: curr.color
  }}
  >{curr.date.slice(0,4)}</span> {'>'} {curr.date.slice(4,99)}</p>
 <div className="live">
  <img src={curr.liveimg} alt="" />
      <h2>{curr.from}</h2>
  </div> 
<div className="winerposter">
  <img src={curr.winnwerimg} alt="" />
  <h3
    style={{
    color: curr.color
  }}
  >{curr.winname} <span> <GiLaurelsTrophy/></span></h3>
</div>
<h2 className="prices2"><span
  style={{
    color: curr.color
  }}
>{curr.price.slice(0,5)}</span> {'>'} {curr.price.slice(5,99)}</h2>
  <div className="imgp2">
  <p ><span>{curr.watchlive.slice(0,5)}</span> {'>'} {curr.watchlive.slice(5,99)} </p>
<img src={curr.liveimg1} alt="" />
<img src={curr.liveimg2} alt="" />
<img src={curr.liveimg3} alt="" />
  </div>

  <div className="espores">
    <h4>{curr.sponser}</h4>
<img src={curr.simg} alt="" />
<img src={curr.simg2} alt="" />
  </div>

    <img src={curr.img} alt="" className="chamhome2"
    style={{
      marginLeft: index == 1? "22%": "", 
    }}
    />
    <div className={`linees ${index == 0 && "linees2"}`}
    style={{
      backgroundColor: curr.linees
    }}
    >
      <p>2024</p>
      <p>2023</p>
       <p>2022</p>
    </div>
  </div>
     ) 
    })
  }
</main>
</section>


<section className="creatoresh2">
<h1 className="Explore Top-Tier4" onClick={()=>navigate("/creators")}>Legends in Game Development<FaAngleRight/></h1>     
<main>
<div className="creator1" onClick={()=>navigate("/creator/Gabe%20Newell")}>
<img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/valve-gabe-newell-announcer-dota-2.jpg" alt="" />
<div className="name">
<h1>GABE NEWELL</h1>  
</div>
</div>

<div className="creator1" onClick={()=>navigate("/creator/Hideo%20Kojima")}>
  <img src="https://cdn1.dotesports.com/wp-content/uploads/2022/07/08135125/kojima-blogroll-1655058510612-1024x576.jpg" alt="" />
 <h1>HIDEO KOJIMA</h1> 
</div>
<div className="creator1" onClick={()=>navigate("/creator/Jason%20Jones")}>
  <img src="https://th.bing.com/th/id/R.a85b96bb917aa2a72244fc1d3694030e?rik=3HViFYn2iKhtBA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-G87_Nba192k%2fUdoGG2NyKEI%2fAAAAAAAAAdI%2ffDub50MSMGM%2fs1600%2fjason-jones-destiny-bungie.png&ehk=CtVrspDhMfqXV5catIBKzr3ivCJ%2bYw%2f00e6TMVOXDgg%3d&risl=&pid=ImgRaw&r=0" alt="" />
  <h1>JASON JONES</h1>
</div>
<div className="creator1" onClick={()=>navigate("creator/John%20Carmack")}>
  <img src="https://i.pcmag.com/imagery/articles/03LkDshCv87GvqOvhD6q4RM-1.fit_lim.v1635538924.jpg" alt="" />
<h1>JOHN CARMACK</h1>
</div>
</main>
</section>

<br /><br /><br /><br /><br /><br />
<h1 className="Explore Suntoes">Ready to Revisit Your Top Game<FaAngleRight/></h1>   
<section className="favh2">  
  <main>
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757245687/mith_2_edpn1n.png" alt="" className="wokongh2"/>  
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757245686/mith_1_hden7d.png" alt="" className="kratos"/>
<h2><span>Pick</span> your <span>favorite</span> game.</h2>  
  </main>
</section>


<section className="CollectionsHp" >
<h1 className="Explore h1collectionhome" onClick={()=>{navigate(`/genra`);window.location.reload()}}>Collections<FaAngleRight/></h1>
<div>
      <header><FaHandPointLeft onClick={() =>{(handleLeft(id+11));handleButtonClick()}}
         onMouseEnter={buttonH}
        /></header>
      <header><FaHandPointRight onClick={()=>{handleRight(id+11);handleButtonClick()}}
         onMouseEnter={buttonH}/></header>
    </div>
</section>

<section className="Hpcollections" ref={(el)=> refs.current[id+11] = el} style={{overflowX:"hidden"}}>
{
  J6.map((curr,index)=>{
  return(
    <div key={index}
    onMouseEnter={handleMusicHover}
    onClick={()=>{navigate(`/genreD/${curr.name}`);window.location.reload()}}
    >
  <img src={curr.img} className="careimages" />
<section>
<h2>{curr.name}</h2>
<p>{curr.para}</p>
</section>
</div>
  )  
  })
}
</section>

</header> 
)
}