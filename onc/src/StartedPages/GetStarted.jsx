import React, { useEffect, useRef, useState } from 'react';
import J1 from "./../../public/J1.json"
import { useDispatch, useSelector } from "react-redux"
import { refreshTask2 } from '../features/tasks/taskSlice';
import { TypeAnimation } from 'react-type-animation';
import J32 from "./../../public/J32.json"
import J48 from "./../../public/J48.json"
import { FaInfo, FaRegArrowAltCircleUp } from "react-icons/fa";
import J34 from "./../../public/J34.json"
import{useGSAP} from "@gsap/react";
import gsap from 'gsap';
import J57 from "./../../public/J57.json"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextAPI/ContextAPI';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { VeriLoad } from '../Admin/veriLoad';
import { ScrollTrigger } from 'gsap/all';
import { Menu } from '../HomePart/Menu';
import { Mike } from '../maik/maik';
import { useAuth2 } from '../ContextAPI/ContectApi2';
import { MdRecordVoiceOver, MdVoiceOverOff } from 'react-icons/md';
import { Tablegetonc } from './tablegetonc';
import { ImCross } from 'react-icons/im';
import "./../responsive.scss"
import "./../resmain.css"

export const GetStarted = () => {
  const {reand,settable,table,isLogin,buttonH} = useAuth()
  const{start,translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()
  const[num,setnum] = useState(Math.floor(Math.random() *18))
  const [playing, setPlaying] = useState(false); 
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const refs = useRef()


const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
} 

const{contextSafe} = useGSAP()

const addgsap = contextSafe(() =>{
gsap.from(".moun1",{
  y: 100,
  duration: 0.7,
  ease: "back.inOut"
})
gsap.from(".lin4,.lin1,.lin2,.lin3",{
opacity:0,
z:  1050,
duration:1,stagger: 0.2,
delay: 0.1,

})
gsap.from(".videomanage,video",{
  y: -1000,
  scaleY: 0,
  duration: 0.7,
  delay: 2
})
gsap.from(".pngmoun h1",{
  y: -75,
  duration :0.7,
  delay: 1,
  opacity: 0,           // fade in      // slight zoom-in
  ease: "elastic.out(1, 0.5)"
})
gsap.from(".moun2",{
  delay: 1.5,
  duration : 0.7,
scale :0,
  opacity:0,
})


//Pcimg2
     gsap.registerPlugin(ScrollTrigger);  
gsap.from(".Pcimg2 main .newg4,.newg3,.newg2",{
opacity: 0,
  duration:1,
  stagger: 0.2,
  scrollTrigger:{
   trigger: ".newg1",
   scroller: "body",
   start: "top 20%",
    // pin: true,
  }
})
//Pcimg2

// Pcimg4
gsap.from(".Pcimg4 .zipgets",{
  y:-500,
  duration: 1,
  scrollTrigger:{
    trigger: ".Pcimg4",
    start: "top 20%",
    scroller: "body",
  }
})
gsap.from(".Pcimg4 .pcgta6",{
  y: 500,
  opacity:0,
  duration :1,
  delay: 0.7,
  scrollTrigger:{
      trigger: ".Pcimg4",
     start: "top 20%",
    scroller: "body",
  }
})
//Pcimg3
gsap.from(".Pcimg3 main",{
scale :0,
duration: 0.7,
stagger: 0.1,
ease:"power2.in",
scrollTrigger:{
  trigger: ".Pcimg3",
      start: "top 20%",
  scroller: "body"
}
})

gsap.from(".Pcimg3 img",{
  scale: 0,
  duration: 0.7,
  delay: 0.5,
  scrollTrigger:{
    trigger: ".Pcimg3",
    start: "top 20%",
    scroller: "body"
  }
})

//Pcimg3
gsap.from(".Pcimg .siderdiv",{
  x: -150,
  duration: 0.7,
  delay: 0.5,
  scrollTrigger:{
    trigger: ".Pcimg",
    scroller: "body",
    start: "top 20%"
  }
})

gsap.from(".Pcimg h1",{
opacity:0,
  duration: 0.7,
  scrollTrigger:{
    trigger: ".Pcimg",
    scroller: "body",
    start: "top 20%"
  }
})

gsap.from(".Pcimg .sunkar1,.sunkar2,.sunkar3,.sunkar4,.sunkar5,.sunkar6,.sunkar7,.sunkar8,.sunkar9,.sunkar10,.sunkar11,.sunkar12,sunkar13,.sunkar14,.sunkar15,.sunkar16,.sunkar17,.sunkar18,.sunkar19,.sunkar20",{
opacity:0,
 delay:0.7,
 stagger: 0.2,
 duration : 1,
 scrollTrigger:{
  trigger:".Pcimg",
  scroller: "body",
  start: "top 20%"
 }
})  
})

useGSAP(()=>{
  // gsap.registerPlugin(ScrollTrigger);    
addgsap()
})

const handleTop = () =>{
window.scrollTo({
  top:0,
  behavior:"smooth"
})
}

useEffect(()=>{
const handleScroll = () =>{
if (window.scrollY >= 431) {
  videoRef.current.pause()
}else{
  videoRef.current.play()
}
  }


window.addEventListener("scroll",handleScroll);
return () =>{
window.removeEventListener("scroll",handleScroll)
}  
},[])

let isG = localStorage.getItem("isG")
let isG2 = localStorage.getItem("isG2")

const handleNavigate = () =>{
  if (isLogin) {
    navigate("/Home")
    window.location.reload()
  }else{
    navigate("/emailvalibation")
  }
}

useEffect(()=>{
const handleNavigate = () =>{
 if (translation == "tap") {
  if (isLogin) {
    navigate("/Home")
    handleVoice("welcome to Home page")
    window.location.reload()
  }else{
    navigate("/emailvalibation")
     handleVoice("please enter your valid email")
  }
} 
}
handleNavigate()
},[translation])


useEffect(()=>{
if (translation == "info") {
  settable(true)
  resetTranscript();
 setmic("")
setTraslation("")
}else if(translation == "close info"){
 settable(false)
 resetTranscript();
 setmic("")
setTraslation("")
}
},[translation])


const obj = J32.map((curr,index)=>{
 return curr.img 
});

let mic = localStorage.getItem("togvoic")

if (table == true && refs.current) {
 document.body.style.overflow = "hidden"; 
 refs.current.style.filter = "blur(10px)"
}else if(refs.current){
  document.body.style.overflow = "auto"
  refs.current.style.filter = "none"
}


  return (
    <>
<div className="mikevoice" style={{zIndex:"999999999999999999",marginTop:"21%"}}>
      <Mike/>
        <div className="buttonmic">
          {mic== "true" ?
      <MdRecordVoiceOver onClick={handlemics}/>
       : 
       <MdVoiceOverOff  onClick={()=> start()}/>
      }
          </div>    
</div>
 <div className="onctraninmenu" style={{zIndex:"9999999999999999"}}>
      {table ?
      <>
    <div className="svhmenufont">  <ImCross onClick={()=>settable(false)}/>   </div>  
      <Tablegetonc getStart={"getStart"}/>
      </>: 
    <div className="svhmenufont"> <FaInfo onClick={()=>settable(true)}/> </div>
        }
      </div>  

    <main className='main' ref={refs}>
    <section className='getStartedhome'>
     <main onClick={handleNavigate}>
      <h3>Tap</h3>
       <div className="lin1">
        <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757171722/orion_tkgzqe.png" alt="" />
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Provide Best PC Game Hub',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Provide Best PC Game Hub Poppins',
        1000,
        'Provide Best PC Game Hub Montserrat',
        1000,
        'Provide Best PC Game Hub Orbitron',
        1000
      ]}
      wrapper="span"
      className='textanimation'
      speed={50}
      style={{ fontSize: '2vmax', display: 'inline-block' }}
      repeat={Infinity}
    />
       </div>
{
  J48.slice(reand-1,reand).map((curr,index) =>{
   return(
    <ul key={index}>
<div className="lin2"></div>
      <div className="lin3"></div>
      <div className="lin4"></div>
      <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757171311/moun_yu9n2v.png" alt="" className='moun1'/>
      <div className="pngmoun">
        <img src={curr.img} alt="" className='moun2'
        style={{marginLeft: curr.id == 4 ? "-16%" : curr.id ==3 ? "0%":curr.id == 5 ? "-6.5%":"" }}
        />
        <h1><span
        style={{color :curr.color}} className='name2get'
        >{curr.name}</span></h1>
        <h1
        style={{
          marginLeft: curr.id == 1? "-39%" :"" 
        }}
        >{curr.name2}</h1>
        <div className="somecompany">
       <img src="https://static.vecteezy.com/system/resources/previews/027/076/046/large_2x/rockstar-game-logo-transparent-free-png.png" className="imagcom1" onClick={()=>window.open("https://www.rockstargames.com/")} /> 
      <img src="https://latestlogo.com/wp-content/uploads/2024/02/playstation.png" className="imgcom2" onClick={()=>window.open("https://www.playstation.com/en-in/ps5/")}/>  
     <img src="https://static.vecteezy.com/system/resources/previews/030/201/632/large_2x/ea-sports-logo-transparent-free-png.png" className="imgcom3" onClick={()=>window.open("https://www.ea.com/sports")}/> 
        </div>
        <div className="namewelcome">
          <h2>Welcome</h2>
        </div>
      </div>
      <div className="videomanage">
      {
        isG2 == "true"?
        <img src={curr.localimg} style={{width:"100%",height:"100vh",objectFit:"cover"}}/>
        : isG == "true" ?
        <video src={curr.livewallpaer} autoPlay muted loop ref={videoRef}></video>
       : <video src={curr.video} autoPlay muted loop ref={videoRef}></video> 
      }   
     
      </div>
    </ul>
   ) 
  })
}
     </main>
    </section>
{ window.innerWidth > 600 &&
      <section className='Pcimg'>
    <main className='flexresonsive'>
      <div className="leftside">
        <div className="siderdiv">
    <h1
         style={{
backgroundPositionY : "-15%"
         }}
         ><span 
         className='sunkar1'
         style={{
          letterSpacing: "-.5rem",
         }}>UNLEASH </span> <br />
         <span style={{
          letterSpacing: "-.5rem"
         }}>YOUR</span><br />
          <span 
          className='sunkar2'
          style={{
          letterSpacing: "-.5rem",
         }}>FATE</span><br />
           <span style={{
          letterSpacing: "-.5rem"
         }}>in the</span><br />
            <span 
            className='sunkar3'
            style={{
          letterSpacing: "-.5rem",
          fontSize: "4.6vw"
         }}>REALM</span><br />
            <span 
            className='sunkar4'
            style={{
          letterSpacing: "-.5rem",
         }}>of</span><br />
           <span 
           className='sunkar5'
           style={{
          letterSpacing: "-.5rem",
         }}>GOD-TIER</span><br />
          <span 
          className='sunkar6'
          style={{
          letterSpacing: "-.5rem",
         }}>HEROEs</span><br />
             <span 
             className='sunkar7'
             style={{
          letterSpacing: "-.5rem",
         }}>the</span><br />
            <span 
            className='sunkar8'
            style={{
          letterSpacing: "-.5rem",
         }}>final</span><br />
            <span 
            className='sunkar9'
            style={{
          letterSpacing: "-.5rem",
         }}>war</span><br />
          <span 
          className='sunkar10'
          style={{
          letterSpacing: "-.5rem",
         }}>BEGINS</span><br />

         <span className='sunsmallname'>kratos</span>
          </h1>
        </div>
        <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757170439/someimg4_dkz18z.png" className="kratosface" />
      </div>
       <div className="leftside">
        <div className="siderdiv siderdiv2">
         <h1
         style={{
          backgroundImage:'url(https://res.cloudinary.com/dycmuvzze/image/upload/v1757170444/nameimg3_dku9qj.png)'
         }}
         ><span 
         className='sunkar11'
         style={{
          letterSpacing: "-.5rem",
         }}>UNLEASH </span> <br />
         <span style={{
          letterSpacing: "-.5rem"
         }}>YOUR</span><br />
          <span 
          className='sunkar12'
          style={{
          letterSpacing: "-.5rem",
         }}>FATE</span><br />
           <span style={{
          letterSpacing: "-.5rem"
         }}>in the</span><br />
            <span 
            className='sunkar13'
            style={{
          letterSpacing: "-.5rem",
          fontSize: "4.6vw"
         }}>REALM</span><br />
            <span 
            className='sunkar14'
            style={{
          letterSpacing: "-.5rem",
         }}>of</span><br />
           <span 
           className='sunkar15'
           style={{
          letterSpacing: "-.5rem",
         }}>GOD-TIER</span><br />
          <span 
          className='sunkar16'
          style={{
          letterSpacing: "-.5rem",
         }}>HEROEs</span><br />
             <span 
             className='sunkar17'
             style={{
          letterSpacing: "-.5rem",
         }}>the</span><br />
            <span 
            className='sunkar18'
            style={{
          letterSpacing: "-.5rem",
         }}>final</span><br />
            <span 
            className='sunkar19'
            style={{
          letterSpacing: "-.5rem",
         }}>war</span><br />
          <span 
          className='sunkar20'
          style={{
          letterSpacing: "-.5rem",
         }}>BEGINS</span><br />

         <span className='sunsmallname'>Son Wokong</span>
          </h1>
        </div>
        <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757170453/nameimg2_uilydo.png" className="sunofface" />
      </div>
    </main>
       </section>
}   
<section className='Pcimg2'>
<h1>Top Best Games</h1>
<main>
  <div className="maindiv">
    <div className="dotunder">
<div className="leftside">
  <img src="https://i.pinimg.com/originals/30/37/8a/30378af6c20365cdaaf5a6cb306430e7.png" className="newg2"/>
<img src="https://www.pngall.com/wp-content/uploads/12/Resident-Evil-PNG-Photos.png" className="newg3"/>
      <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757170225/assien_1_jmaffy.png" className="newg4" />
</div>
<img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757170226/assien_2_vhck6m.png" className="newg1" />
<div className="rightside">
      <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757170225/assien_3_xzt0xq.png" className="newg2" />
<img src="https://pluspng.com/img-png/mass-effect-png-john-shepard-png-366.png" className="newg3"/>
<img src="https://i1.wp.com/www.ultimatepocket.com/wp-content/uploads/2021/04/halo-infinite-give-your-spartan-some-style-with-armor-coating-skins-7.png?resize=640%2C1049&is-pending-load=1#038;ssl=1" className="newg4"/>
</div>
    </div>
  </div>
</main>
</section> 

<section className='Pcimg3'>
  <h1>Browse by category</h1>
  <div>
    {
      J32.map((curr,index)=>{
        return(
          <main key={index} className={`PC3mg${index}`} 
          onMouseOver={()=>{setnum(index)}}
          onMouseEnter={buttonH}
          >
            <p>{curr.name}</p>
          </main>
        )
      })
    }
    <div className="objdiv">
 <img src={obj[num]} alt="" 
 style={{
  width:num == 4 || num == 5 || num == 6|| num == 9 || num == 12 || num == 13  || num == 15? "32%": ""
 }}
 />
    </div>
  </div>
  <br /><br />
</section>

{/* J33 */}
{window.innerWidth > 600 &&
<section className='Pcimg4'>
<main>
<dd className='pcgta6'>
  {
  J57.slice(reand-1,reand).map((curr,index)=>(
<img src={curr.img} key={index} 
  alt="Drive Image" />  
  ))
}  
</dd>
<img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Decorative-Elements-PNG/Open_Zipper_PNG_Clip_Art_Transparent_Image.png?m=1529593735" alt="" className='zipgets'/>
<div className="leftbox">
  <h1>High Graphics</h1>
</div>
<div className="rightbox">
  <h1>Pc Game</h1>
</div>
</main>
</section>
}

<section className='Pcimg5'>
{
  J34.slice(0,11).map((curr,index)=>{
    return(
      <div key={index}>
        <img src={curr.img} alt="" />
      </div>
    )
  })
}
</section>
<section className='Pcimg5' style={{marginTop : "2%"}}>
{
  J34.slice(11,23).map((curr,index)=>{
    return(
      <div key={index}>
        <img src={curr.img} alt="" 
        style={{
          animation: "g2 20s linear infinite" 
        }}
        />
      </div>
    )
  })
}
</section>

<section className='pcimg6'>
  <button onClick={handleTop}><FaRegArrowAltCircleUp/></button>
</section>
<br />
    </main>
    </>
  );
};

