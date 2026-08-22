import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaRegHeart, FaStar } from "react-icons/fa";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Menu } from "./Menu";
import { FaAnglesLeft,FaAnglesRight, FaInfo} from "react-icons/fa6";
import { useAuth } from "../ContextAPI/ContextAPI";
import { Footer } from "../footer/footer";
import { BsFillStarFill } from "react-icons/bs";
import axios from "../Config/axios";
import { FaPlayCircle,FaPauseCircle  } from "react-icons/fa";
import { Loading } from "../Loading/Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { DetalishTable } from "../onctables/dralishgametable";
import { ImCross } from "react-icons/im";
import { useAuth2 } from "../ContextAPI/ContectApi2";

export const Games = () => {
  const scroll = useRef(null);  
  const[inputs,setInputs] = useState(new Array(5).fill(""))
  const refs = useRef()
  const[table2,settable2] = useState(false)
  const[op,setOP] = useState(0)
  const[genra,setGenra] = useState([])
  const play = useRef(null) 
  const scrollREf = useRef()
  const scrollREf2 = useRef()
  const scrollREf3 = useRef()
  const refs4 = useRef()
  const[tog , settog] = useState(false)
  const[tog2 , settog2] = useState(false)
  const[data2,setData] = useState([])
  const navigate = useNavigate()
  const { id } = useParams();
  const{time} = useAuth()
   const{resetTranscript,translation,handleVoice,setmic,setTraslation} = useAuth2()
 


  const handleDetalish = async() =>{
    const response = await axios.getGamesDetalish('3328')
    setData(response.data)
    }
      useEffect(()=>{
        handleDetalish()
      },[ ])

const handlScreenShortLEFT = () =>{
if (scroll.current) {
  scroll.current.scrollLeft -= 970
}
}
const handlScreenShortRight = () =>{
  if (scroll.current) {
    scroll.current.scrollLeft += 970;
    
  }
  }

useEffect(()=>{

const handleOP =  () =>{
if (scroll.current) {
  setOP(scroll.current.scrollLeft === 0 ? "0" : "1")
}
}

scroll.current?.addEventListener("scroll",handleOP);
return () => {
scroll.current?.removeEventListener("scroll",handleOP)
}
},[scroll.current])

      useEffect(() => {
     const handleWScroll = () =>{
      if (window.scrollY <=331) {
        refs.current?.play()
      }else{
        refs.current?.pause()
      }
     }     


      window.addEventListener("scroll",handleWScroll);
      return ()=>{
        window.removeEventListener("scroll",handleWScroll)
      }
      }, [refs]);

      
//genra
const handleGenra = async(g) =>{
const respone = await fetch(`http://localhost:3000/games/g/${g}`) 
const obj = await respone.json();
setGenra(obj)
 
}
//genra

  const handleId = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/games/pc/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      handleGenra(response.genra)
      return response;
    } catch (error) {
      console.log("handleId", error);
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => handleId(id),
    staleTime: 300000,
    placeholderData: keepPreviousData,
  });

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
gsap.from(".maindetalish2",{
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
  duration:.5,
  scrollTrigger:{
    trigger: ".Description",
    scroller:"body",
    start: "top 20%"
  }
})
gsap.from(".Features",{
    y:20,
  opacity: 0,
  duration:.5,
  scrollTrigger:{
    trigger: ".Features",
    scroller:"body",
    start: "top 20%"
  }
})
gsap.from(".version",{
      y:20,
  opacity: 0,
  duration:.5,
  scrollTrigger:{
    trigger: ".version",
    scroller:"body",
    start: "top 20%"
  }
})
gsap.from(".SystemRequirements",{
  y:20,
  opacity: 0,
  duration: 0.5,
  scrollTrigger:{
    trigger: ".SystemRequirements",
    scroller: "body",
    start: "top 20%"
  }
})
gsap.from(".Additional",{
  y:20,
  opacity: 0,
  duration: 0.5,
  scrollTrigger:{
    trigger: ".Additional",
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
    start: "top 20%"
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
    start: "top 20%"
  }
})
})
useGSAP(()=>{
addcontext()
},{scope: ".GamesPart",dependencies:[data]})


const handleClick = (_id) =>{  
  if ("67acd5e6b47d4a438d581c57" == _id) {
    navigate(`/try/${_id}`) 
    window.location.reload()
  }
  if ("679107379c965c44fa976828"  ==_id) {
    navigate(`/try2/${_id}`)
    window.location.reload()
  }
  
}



const handleLeft =  () =>{
const node = scrollREf.current
if (node) {
  node.scrollLeft -=1512;
}
}

const handleRight = () =>{
  const node = scrollREf.current;
  if (node) {
    node.scrollLeft +=1512
  }
}
const handleLeft2 =  () =>{
const node = scrollREf2.current
if (node) {
  node.scrollLeft -=1512;
}
}

const handleRight2 = () =>{
  const node = scrollREf2.current;
  if (node) {
    node.scrollLeft +=1512
  }
}
const handleLeft3 =  () =>{
const node = scrollREf3.current
if (node) {
  node.scrollLeft -=1512;
}
}

const handleRight3 = () =>{
  const node = scrollREf3.current;
  if (node) {
    node.scrollLeft +=1512
  }
}
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


let ld = 0;

let rate = `${data?.Rating.slice(0,3)- 5}` 
let ismenu = localStorage.getItem("isMenu2")
let ismenu2 = localStorage.getItem("isMenu")

  if (isLoading) return <div><Loading/></div>;
  if (error) return <div>Error: {error.message}</div>




  return (
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
    <div style={{top:"34.4rem",position:"relative",zIndex:"99999999999999999999999999999999999"}}>
   
    <Menu/>
    </div>
    <section className="GamesPart"
        style={{
          marginTop: ismenu == "true" && ismenu2 == "true" ? "-0%" : 
          ismenu == "true" ? "4%" :  
          ismenu2 == "true" ? "0.2%" : ""
          }}
    >

 <section className="list4" >
<header>
  <h1>Recomndation For You</h1>
<main className="li4main">
  {
  genra.top?.map((curr,index) =>{
    return(
   <NavLink to={`/gamesD/${curr.name}`}> <ul className="gameUl" key={index} style={{width:"91%",color:"#fff"}}>
  <img src={curr.back} alt="" />
<section>
  <h1>{curr.name.slice(0,15)}..</h1>
  <p>{curr.rating} <FaStar/></p>
</section>
</ul> </NavLink>
    )
  })
}
</main>
</header>

<div>
   {time < 9 ? <>
    <img src={data.img} alt=""  className="dbackImg" style={{
      width: "100%"
    }}/>
    </> :<>
    <video src={data.video} ref={refs} muted loop ></video>
    </>}
    <main className="Gmask"></main>
</div>
<section className=".maindetalish2">
  <img src={data.img3} className="Daimg" />
<ul>
    <h1>{data.name}</h1>
  <p>{data.summary.slice(0,168)}</p>
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
<h2> {data.Rating.slice(0,3)} <FaStar/></h2>
<li>
<p>Release Date</p>
<p>21/33/22</p>
<p>Genra</p>
<p>Action/RPG</p>

<p>Available</p>
<p>stream epic game</p>
<p>Devloper</p>
<p>...</p>
</li>
<button onClick={() =>handleClick(data._id)}>Open Now</button>
<button className="Gb1"><FaRegHeart/></button>
</section>
</section>



      <section className="Screenshots">
        <h1>Screenshots</h1>
          <section>
          <FaAnglesLeft onClick={handlScreenShortLEFT} 
          style={{opacity : op}}
          />
          <FaAnglesRight onClick={handlScreenShortRight}
          style={{opacity : op == "0" ? "1" : "0"}}
          />
            </section>   
   
        <div ref={scroll} >
    <img src={data.Screenshots[0]} alt="" />
    <img src={data.Screenshots[1]} alt="" />
    <img src={data.Screenshots[2]} alt="" />
    <img src={data.Screenshots[3]} alt="" />
    <img src={data.Screenshots[4]} alt="" />
        </div>
      </section>

   <section className="Grating">
<h1>{rate.slice(0,3)}</h1>
{
  inputs.map((curr,index) =>(
  
      <BsFillStarFill style={{color : rate > index+1 ? "peru" : ""}}/>
   
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
      backgroundColor: rate.slice(0,1) == 5-index ? "peru" : ""
      ,
          width: rate.slice(0,1) == 5-index ?  "70%" :
          rate.slice(0,1) > 5-index ? "10%"  : rate.slice(0,1) < 5-index +1 ? "26%"  : "",
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
       <p>{data.summary}</p>
       <br />
      </section>

      <section className="Features">
     <h1>Features</h1><br />
     <hr />
     <pre> {data.Features[0]}</pre>
     <pre> {data.Features[1]}</pre>
     <pre> {data.Features[2]}</pre>
     <pre> {data.Features[3]}</pre>
     <br />
      </section>

      <section className="Description version">
        <h1>What's new in this version</h1><br />
        <hr />
       <p>{data.version}</p>
       <br />
      </section>

      <section className="SystemRequirements">
        <h1>System Requirements</h1><br />
        <hr />
        <h2>Minimum</h2>
        <p>: {data.SystemRequirements[0].Minimum}</p>
        <h2>Recommended</h2>
        <p>: {data.SystemRequirements[0].Recommended}</p>
        <br />
      </section>

      <section className="Description Additional">
        <h1>Additional information</h1><br />
        <hr />
       <p>{data.Additionalinformation}</p>
       <br />
      </section>
          
<section className="DetalishGenrea">
 <h1>Semilar Games </h1>
 <div className="seealll">See All <FaAngleRight/></div>
 <section className="SemilarG2">
 <header onClick={() =>handleLeft()}><FaAngleLeft/></header>
  <header onClick={() =>handleRight()}><FaAngleRight/></header>
 </section>
      <div ref={scrollREf}>
        {
          genra.games?.map((curr,index)=>{
            return(
           <NavLink to={`/gamesD/${curr.name}`}>  <li key={index} className="liertre" style={{color:"#ddd"}}>
                <img src={curr.img} alt="" />
                <section>
                  <h1>{curr.name.length > 18 ? `${curr.name.slice(0,24)}..` : curr.name}</h1>
                  <p>{curr.rating.slice(0,1)} <FaStar/></p>
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
                <section className="Platform" ref={scrollREf2}>
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
       <main className="mainDetalish" style={{marginTop : "0.5%"}}>
       <h1>Platforms</h1>
    <section className="SemilarG2">
        <header onClick={() =>handleLeft3()}><FaAngleLeft/></header>
         <header onClick={() =>handleRight3()}><FaAngleRight/></header>
        </section>
           <section className="Platform" ref={scrollREf3} >
           {data2.tags?.map((platform, index) => {
    return(
      <div key={index}>
        <img src={platform.image_background} alt="" />
        <div><h1>{platform.name.length > 18 ? `${platform.name.slice(0,18)}..` :platform.name }</h1></div>
     </div>
             )
           })}
       </section>
    
       </main>
    </section> <br /><br /><br />
    <Footer/>
    </>
  );
};
