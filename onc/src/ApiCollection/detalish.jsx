import { useEffect, useRef, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import axios from "../Config/axios"
import { Menu } from "../HomePart/Menu"
import { FaAngleLeft, FaAnglesLeft, FaAnglesRight, FaInfo, FaRegHeart } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaHeart, FaStar } from "react-icons/fa"
import { useAuth } from "../ContextAPI/ContextAPI"
import { Footer } from "../footer/footer"
import{Loading} from "../Loading/Loading"
import { BsFillStarFill } from "react-icons/bs";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { DetalishTable } from "../onctables/dralishgametable";
import { ImCross } from "react-icons/im";

export const Detalish = () =>{
 const{name} = useParams()   
 const{op,last,scroll2} = useAuth()
 const[inputs,setInputs] = useState(new Array(5).fill(""))
 const[data,setdata] = useState([])  
 const refs = useRef()
const refs2 = useRef()
const[table2,settable2] = useState(false)
const refs4 = useRef()
const refs3 = useRef()
const navigator = useNavigate()
const scroll = useRef(null)
const[genra,setGenra] = useState([])
 const[data2,setdata2] = useState([]) 
 const[id,setid] = useState([])
 const[fav,setlikes] = useState(false)
 const{resetTranscript,translation,handleVoice,setmic,setTraslation} = useAuth2()
 

//genra
const handleGenra = async(g) =>{
if (g == undefined) {
const respone = await fetch(`http://localhost:3000/games/g/Action`);
const obj = await respone.json();
setGenra(obj)
}else{
const respone = await fetch(`http://localhost:3000/games/g/${g}`);
const obj = await respone.json();
setGenra(obj)
}
}
//genra

const handleCatagory = async() =>{
  const response = await axios.search(name);
  setdata(response.data.results);
  setid(response.data.results[0]?.id )
  handleGenra(response.data.results[0]?.genres[0]?.name);
  
}
const handleDetalish = async(id) =>{
    const respons =  await axios.getGamesDetalish(id);
       setdata2(respons.data)    
}


 useEffect(()=>{
handleCatagory()
 },[])


useEffect(() =>{
if (!id == []) {
  handleDetalish(id)  
}
},[id])


useEffect(()=>{
if (translation == "description") {
  handleVoice(data2?.description_raw)
  resetTranscript()
  setTraslation("")
  setmic("")
}else if (translation == "System Requirements") {
  handleVoice("Minimum Intel i5, 8GB RAM, GTX 960 Recommended Intel i7, 16GB RAM, RTX 2070")
resetTranscript()
 setTraslation("")
  setmic("")
}else if (translation == "Additional information") {
  handleVoice("Developed by Naughty Dog. Available on PS4, PS5, and PC.")
resetTranscript()
 setTraslation("")
  setmic("")
}else if(translation.includes("open")){
let trans = translation.toLowerCase().indexOf("open")
let sl = translation.slice(trans + 9) 
navigator(`/gamesD/${sl}`)
handleVoice(`the ${sl}`)
window.location.reload()
}else if(translation == "top"){
 genra.top?.map((curr)=>(
  handleVoice(`${curr.name} ${curr.rating}`)
 )) 
}
else if(translation == "all"){
 genra.games?.map((curr)=>(
  handleVoice(`${curr.name} ${curr.rating}`)
 )) 
}
},[translation])


gsap.registerPlugin(ScrollTrigger);
const{contextSafe} = useGSAP()

const addcontext = contextSafe(() =>{
gsap.from(".GamesPart .list4 .li4main",{
  y:-315,
  stagger: 0.2,
  delay: 0.7,
  duration: 0.7,
  ease:"back.out",
})
gsap.from(".dbackImg",{
filter:"blur(25px)",
  delay: 1,
  duration: 1,
  ease:"back.out",
})
gsap.from(".maindetalish",{
  scale:0.8,
  delay:1.2,
  duration: 0.7,
   ease:"back.out",
})

gsap.from(".Screenshots img",{
  scale:0,
  stagger: 0.2,
  duration: 0.7,
     ease:"power1.out",
  scrollTrigger:{
    trigger:".Screenshots",
    scroller: "body",
    start :"top 25%"
  }
})
gsap.from(".Grating li",{
  x:-43,
   stagger: 0.2,
  opacity:0,
  duration:0.7,
  scrollTrigger:{
    trigger: ".Grating",
    start: "top 20%",
    scroller: "body",
  }
})
gsap.from(".Description p",{
  y:20,
  opacity: 0,
  duration:1,
  scrollTrigger:{
    trigger: ".Description",
    scroller:"body",
    start: "top 20%"
  }
})
gsap.from(".SystemRequirements",{
  y:20,
  opacity: 0,
  duration: 0.7,
  scrollTrigger:{
    trigger: ".SystemRequirements",
    scroller: "body",
    start: "top 20%"
  }
})

gsap.from(".Description2",{
  y:20,
  opacity: 0,
  duration: 0.7,
  scrollTrigger:{
    trigger: ".Description2",
    scroller: "body",
    start: "top 20%"
  }
})
gsap.from(".DetalishGenrea div",{
  scale: 0.8,
  opacity:0,
  stagger: 0.2,
  duration: 0.7,
  scrollTrigger:{
    trigger:".DetalishGenrea",
    scroller: "body",
    start: "top 10%"
  }
})
gsap.from(".mainDetalish .Platform",{
  scale: 0.8,
  opacity:0,
  stagger: 0.2,
  duration: 0.7,
  scrollTrigger:{
    trigger:".mainDetalish",
    scroller: "body",
    start: "top 10%"
  }
})
})
useGSAP(()=>{
addcontext()
},{scope: ".GamesPart",dependencies:[data]})

 const handlScreenShortLEFT = () =>{
    if (scroll.current) {
         scroll.current.scrollLeft -= 1395; 
     }
     }
     const handlScreenShortRight = () =>{
     if (scroll.current) {
           scroll.current.scrollLeft += 1395;
     }
    } 
const handleLeft = () =>{  
  const node = refs.current
  if (node) {
    node.scrollLeft -=1512;
  }
}    
const handleRight = () =>{
const node = refs.current
if (node) {
  node.scrollLeft +=1512;
}
}
const handleLeft2 = () =>{  
  const node = refs2.current
  if (node) {
    node.scrollLeft -=1512;
  }
}    
const handleRight2 = () =>{
const node = refs2.current
if (node) {
  node.scrollLeft +=1512;
}
}
const handleLeft3 = () =>{  
  const node = refs3.current
  if (node) {
    node.scrollLeft -=1512;
  }
}    
const handleRight3 = () =>{
const node = refs3.current
if (node) {
  node.scrollLeft +=1512;
}
}

useEffect(()=>{
if (translation == "left 1") {
  handlScreenShortLEFT()
  handleVoice(translation) 
    resetTranscript()
  setTraslation("")
  setmic("") 
}else if (translation == "right 1") {
  handlScreenShortRight()
  handleVoice(translation)
    resetTranscript()
  setTraslation("")
  setmic("") 
} 
else if (translation == "left 2") {  
  handleLeft()
  handleVoice(translation) 
    resetTranscript()
  setTraslation("")
  setmic("")
} 
else if (translation == "right 2") {
  handleRight()
  handleVoice(translation) 
    resetTranscript()
  setTraslation("")
  setmic("")
}else if (translation == "left 3") {
  handleLeft2()
  handleVoice(translation) 
    resetTranscript()
  setTraslation("")
  setmic("") 
}else if (translation == "right 3") {
  handleRight2()
  handleVoice(translation) 
    resetTranscript()
  setTraslation("")
  setmic("")
} 
else if (translation == "left 4") {
  handleLeft3()
  handleVoice(translation) 
    resetTranscript()
  setTraslation("")
  setmic("")
} 
else if (translation == "right 4") {
  handleRight3()
  handleVoice(translation) 
    resetTranscript()
  setTraslation("")
  setmic("")
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

if (table2 == true && refs4.current) {
 document.body.style.overflow = "hidden"; 
 refs4.current.style.filter = "blur(10px)"
}else if(refs4.current){
  document.body.style.overflow = "auto"
  refs4.current.style.filter = "none"
}


const handlelikes = async(name,back,rating) =>{
let likes = {
  name:name,
  like:true,
  rating:rating,
  back:back
}
setlikes(!fav)
const respone = await fetch("http://localhost:3000/games/heart",{
 method: "POST",
 headers:{
  "Content-Type" :"application/json"
 },
 body:JSON.stringify(likes) 
})
console.log("genra",genra);

}
 if (data.length == 0 || data == [] ) {
    return <Loading/>
}
let ismenu = localStorage.getItem("isMenu2")
let ismenu2 = localStorage.getItem("isMenu")
 
 return(
<>
 <div className="onctraninmenu2" style={{zIndex:"999"}}>
      {table2 ?
      <>
    <div className="svhmenufont" style={{marginTop:"-3%"}}>  <ImCross onClick={()=>settable2(false)}/>   </div>  
      <br /><br />
      <DetalishTable/>
      </>: 
    <div className="svhmenufont" style={{marginTop:"-3%"}}> <FaInfo onClick={()=>settable2(true)}/> </div>
        }
      </div>   
    <main 
    style={{
      marginTop: ismenu == "true" && ismenu2 == "true" ? "-0%" : 
      ismenu == "true" ? "4%" :  
      ismenu2 == "true" ? "0.2%" : ""
      }}
    >
    <div style={{top:"34.4rem",position:"relative",zIndex:"99999999999999999999999999999999999"}}>
       <Menu/>
       </div>
           <section className="GamesPart">
         {
            data.slice(0,1).map((curr,index)=>{
              let rate = `${curr.rating + 5}`
              let Rate = `${curr.rating }`
             return(
                <section key={index}>                  
   
 <section className="list4" >
<header>
  <h1>Recomndation For You</h1>
<main className="li4main">
  {
  genra.top?.map((curr,index) =>{    
    return(
  <NavLink to={`/gamesD/${curr.name}`} reloadDocument> <ul className="gameUl" key={index} style={{color:"#ddd"}}>
  <img src={curr.back} alt="" />
<section>
  <h1>{curr.name.length >=13 ? `${curr.name.slice(0,13)}..` : curr.name}</h1>
  <p><FaStar/> {curr.rating}</p>
</section>
</ul></NavLink>
    )
  })
}
</main>
</header>

<div>

  {
      curr.short_screenshots.map((sr, index2) => {    
    
    const delay = index2 == 0 ? `${index2 + 12}s` : `${index2 == 1 ? index +24 :  index2* 19}s`; 
    return (
      <>
        <header
         className="dbackImg"
          style={{
            animation: index2 !== curr.short_screenshots.length-1 ? `move 1s ease-in-out ${delay} forwards` : "none",
           backgroundImage: ` 
     url(${sr.image})`,
          }}
        ></header>
      </>
    );
  })
}
</div>

  <main className="DmaskTop"></main>

<section style={{
  marginTop: "-38%"
}} className="maindetalish">
  <img src={curr.background_image} className="Daimg" />
<ul>
    <h1>{curr.name.length > 48?`${curr.name.slice(0,48)}..`:curr.name}</h1>
  <p>{data2?.description_raw?.slice(0,172)}..</p>
  <button>
    <img src="https://th.bing.com/th/id/R.d0765d0ab011e50dda0dfd4336f87e8e?rik=YUiubQaeuaJx6A&riu=http%3a%2f%2fpngimg.com%2fuploads%2fwindows_logos%2fwindows_logos_PNG33.png&ehk=GpVe8TjU8dWRiA%2fo6Oq8VRvc5g9JVLM1TrTd22Itf1E%3d&risl=&pid=ImgRaw&r=0" alt="" />
    <span>PC</span>
  </button>
 <button className="Gm">
    <img src="https://purepng.com/public/uploads/large/purepng.com-xbox-logoxboxmicrosoft-xboxxbox-game-playerxbox-game-pad-1701528437275uri79.png" alt="" />
    <span>Series X|S</span>
  </button>
  <button className="Gm">
    <img src="https://vectorseek.com/wp-content/uploads/2023/08/Playstation-Now-Logo-Vector.svg-.png" alt="" />
    <span>PS5</span>
  </button>
</ul>
</section>

<section className="secoundG2">
<h2> {rate.slice(0,3)} <FaStar/></h2>
<li>
<p>Release Date</p>
<p>{curr.released}</p>
<p>Genra</p>
<p>{`${data[0].genres[0]?.name} /`} {data[0].genres[1]?.name}</p>

<p>Updated</p>
<p>{curr.updated.slice(0,10)}</p>
<p>Available</p>
<p>{curr.stores?  curr.stores[0].store.name : ""}</p>
</li>
<button>Open Now</button>
<button className="Gb1" onClick={()=> {handlelikes(curr.name,curr.background_image,rate.slice(0,3))}}><FaHeart style={{color: fav? "#BE3D2A" :"#fff" }}/></button>
</section>
</section>

   
       <section className="Screenshots">
         <h1>Screenshots</h1>
           <section>
           <FaAnglesLeft onClick={handlScreenShortLEFT}
           style={{
            opacity: op
           }}
           />
           <FaAnglesRight onClick={handlScreenShortRight}
           style={{
            opacity: last
           }}
           />
             </section>      
         <div ref={el => { scroll.current = el; scroll2.current = el }}>
            {
            curr.short_screenshots?.map((curr,index) =>{
            return(
                <img key={index} src={curr.image} alt="" />
            )  
            })
        }
         </div>
       </section>

      <section className="Grating">
<h1>{Rate.slice(0,3)}</h1>
{
  inputs.map((curr,index) =>(
  
      <BsFillStarFill style={{color : Rate > index+1 ? "peru" : ""}}/>
   
  ))
}
  <div>
{
inputs.map((curr,index)=>{
 return(
  <li key={index} >
    <p>{(5-index)} </p>
   <div>
    <header
    style={{
      backgroundColor: Rate.slice(0,1) == 5-index ? "peru" : ""
      ,
          width: Rate.slice(0,1) == 5-index ?  "70%" :
          Rate.slice(0,1) > 5-index ? "10%"  : Rate.slice(0,1) < 5-index +1 ? "26%"  : "",
        minWidth: index +1 == 3 ? "20%" : ""
        }}
    >
    </header>
   </div>
  </li>
 ) 
})
}
  </div>
</section>


       <section className="Description">
         <h1>Description</h1><br />
         <hr />
        <p>{data2?.description_raw}</p>
        <br />
       </section>
       
       <section className="SystemRequirements">
     <h1>System Requirements</h1><br />
<hr />
     <h2>Minimum</h2>
     <p> Intel i5, 8GB RAM, GTX 960</p>
     <h2>Recommended</h2>
     <p> Intel i7, 16GB RAM, RTX 2070</p>
     <br />
             </section>
        
             <section className="Description Description2 ">
     <h1>Additional information</h1><br />
     <hr />
    <p>Developed by Naughty Dog. Available on PS4, PS5, and PC.</p>
    <br />
             </section>

<section className="DetalishGenrea">
 <h1>Semilar Games </h1>
 <div className="seealll">See All <FaAngleRight/></div>
 <section className="SemilarG2">
 <header onClick={() =>handleLeft()}><FaAngleLeft/></header>
  <header onClick={() =>handleRight()}><FaAngleRight/></header>
 </section>
      <div ref={refs}>
        {
          genra.games?.map((curr,index)=>{     
            return(
           <NavLink to={`/gamesD/${curr.name}`} reloadDocument> <li key={index} className="liertre" style={{color:"#ddd"}}>
                <img src={curr.img} alt="" />
                <section>
                  <h1>{curr.name.length > 18 ? `${curr.name.slice(0,24)}..` : curr.name}</h1>
                  <p>{curr.rating.replace("/10","")} <FaStar/></p>
                </section>
              </li></NavLink>  
            )
          })
        }
      </div>
        </section>

         <main className="mainDetalish">
           <h1>Platform</h1>
            <section className="SemilarG2">
        <header onClick={() =>handleLeft2()}><FaAngleLeft/></header>
         <header onClick={() =>handleRight2()}><FaAngleRight/></header>
        </section>
           <section className="Platform" ref={refs2}>
           {data2?.platforms?.map((platform, index) => {
    return(
<NavLink to={'/platform'} reloadDocument>
<div key={index}>
        <img src={platform.platform.image_background} alt="" />
        <div>
          <h1>{platform.platform.name.slice(0,13)}</h1>
        </div>
     </div>
</NavLink>
             )
           })}
       </section>
       </main>
       {data[0]?.tags.length>0 && <>
       <main className="mainDetalish" style={{marginTop : "1%"}}>
       <h1>Platforms</h1>
    <section className="SemilarG2">
        <header onClick={() =>handleLeft3()}><FaAngleLeft/></header>
         <header onClick={() =>handleRight3()}><FaAngleRight/></header>
        </section>
           <section className="Platform" ref={refs3} >
           {curr.tags?.map((platform, index) => {
    return(
      <div key={index}>
        <img src={platform.image_background} alt="" />
        <div><h1>{platform.name.length > 18 ? `${platform.name.slice(0,18)}..` :platform.name }</h1></div>
     </div>
             )
           })}
       </section>
    
       </main> 
        </>}
       </section> 
             ) 
            })
         }
    </section><br /><br /><br />
      <Footer/>
    </main>
</>     
 )   
}