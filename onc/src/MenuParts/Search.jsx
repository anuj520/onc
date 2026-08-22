import { useEffect, useRef, useState } from "react"
import J15 from "./../../public/J38.json"
import J40 from "./../../public/J40.json"
import J39 from "./../../public/J39.json"
import J41 from "./../../public/J41.json"
import { FaInfo, FaSearch, FaStar } from "react-icons/fa";
import { Menu } from "../HomePart/Menu";
import { Footer } from "../footer/footer";
import axios from "../Config/axios";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { useAuth } from "../ContextAPI/ContextAPI";
import { TypeAnimation } from "react-type-animation";
import ColorThief from 'colorthief';
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { motion } from "motion/react"
import { ScrollTrigger } from "gsap/all"
import { HomeTable } from "../HomePart/hometable"
import { ImCross } from "react-icons/im"
import { SearchTable } from "../onctables/searchrable"
export const Search = () =>{

const{reand,op,last,scroll2,data:authdata} = useAuth()  
const{transcript,resetTranscript,translation,setTraslation,handleVoice,setmic} = useAuth2()
const[data,stValue] = useState("")  
const searchRef = useRef([])  
const[log,setlog] = useState("")
const[len,setlen] = useState(false)
// const[err,seterror] = useState(false)
const[res,setres] = useState([]) 
const imgRef = useRef();
const refs = useRef({})
const navigate = useNavigate()
const timeRef = useRef(null)
const[table2,settable2] = useState(false)

const handleSubmit = async (e) => {
  if (e && typeof e.preventDefault === "function") {
    e.preventDefault();
  }
  try {
    const query = data.trim() || translation.trim();
    if (!query) return;
    // console.log(query);
  timeRef.current = setTimeout(async() => {
      const response = await axios.search(`https://api.example.com/search?q=${query}`);
    setres(response.data.results);
    setlen(prev => !prev);
    console.log(response);
  }, 2000);
       
  } catch (error) {
    console.error("Search failed:", error);
  }
};

const handleLeft = (id) =>{
  console.log(id);
  
  const node = refs.current[id];
  if (node) {
    node.scrollLeft -=1470;
  }
}

const hnadleRight = (id) =>{
  const node = refs.current[id];
  if (node) {
 node.scrollLeft +=1470;
  }
}

useEffect(()=>{
if (translation.toLowerCase().includes("game") ) {
  let index = translation.toLowerCase().indexOf("game") 
  stValue(translation.slice(index + 4).replace(/[.\s]/g, " ") )
}  

if (translation.toLowerCase().includes("remove")) {
  stValue("")
  setTraslation("")
   resetTranscript()
}

let time = setTimeout(() => {
  handleSubmit()  
  setTraslation("")
   resetTranscript() 
}, 2000);
  return() => clearTimeout(time)
},[translation])

useEffect(()=>{
const handlegmaes = async()=>{  
if (!authdata.email) {
  return;
}
const respon = await fetch("http://localhost:3000/onc/edit",{
  method: "POST",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({email:authdata.email,game: true})
})
}
handlegmaes()
},[authdata])

useEffect(()=>{
 const handleedit = async() =>{
if (!authdata.email) {
   return; 
}

const respon = await fetch("http://localhost:3000/onc/editpatch",{
  method: "PATCH",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({edit: false,email:authdata.email,game:true,gcoll:false,home:false})
})
}

if (window.location.pathname === `/search`) {
handleedit()  

}
  
},[window.location.pathname,authdata])

useEffect(()=>{
switch(translation){
 case "Project Witches":
  handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`); 
window.location.reload()
break; 
case "The Witcher 4":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`); 
window.location.reload() 
break
case "Saros":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`); 
window.location.reload() 
break
case "Onimusha: Way of the Sword":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`); 
window.location.reload() 
break
case "Warhammer 40,000: Boltgun 2":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`); 
window.location.reload() 
break
case "Star Wars: Zero Company":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`); 
window.location.reload() 
break
case "Marvel 1943: Rise of Hydra":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`); 
window.location.reload() 
break 
case "Fable":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`);
window.location.reload()  
break  
case "inZOI":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`);
window.location.reload()  
break 
case "Grand Theft Auto VI":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`);
window.location.reload()  
break 
case "Granblue Fantasy":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`);
window.location.reload()  
break
case "Dead or Alive 6":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`); 
window.location.reload() 
break
case "Tales":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`); 
window.location.reload() 
break
case "Warframe":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`);
window.location.reload()  
break
case "Apex Legends":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`);
window.location.reload()  
break
case "2XKO":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`); 
window.location.reload() 
break
case "Marvel’s Wolverine":handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`); 
window.location.reload() 
break
case "Fortnite":
handleVoice(`the  ${translation}`)   
navigate(`/gamesD/${translation}`);  
window.location.reload()
break 
case "Valorant":
handleVoice(`the ${translation}`);
navigate(`/gamesD/${translation}`)  
window.location.reload()
break

}
},[translation])

useEffect(()=>{
if (translation == "details") {
  settable2(true)
   resetTranscript();
 setmic("")
setTraslation("")
} else if(translation == "close info")
  settable2(false)
   resetTranscript();
 setmic("")
setTraslation("")
},[translation])


// console.log(data);
gsap.registerPlugin(ScrollTrigger);
const{contextSafe} = useGSAP();
const addgsap = contextSafe(() =>{

gsap.from(".SearchData li,.Sd2",{
  scale:0.9,
delay: 0.5,
duration: 0.7,
stagger: 0.2,
ease:"back.out"
})
gsap.from(".SearchData2 img",{
  scale:0,
  ease:"power1.out",
  duration: 0.7,
  delay: .5,
  scrollTrigger:{
    trigger: ".SearchData2",
    scroller: "body",
    start: "top 20%"
  }
})
gsap.from(".SearchData2",{
  x:175,
  opacity:0,
  ease:"power1.out",
  duration: 0.7,
  scrollTrigger:{
    trigger: ".SearchData2",
    scroller: "body",
    start: "top 20%"
  }
})

gsap.from(".EsportsSearch .eshead",{
skewX: 15,
stagger: 0.2,
ease:"back.out",
duration: 0.7,
scrollTrigger:{
  trigger: ".EsportsSearch",
  scroller:"body",
  start: "top 20%"
}
})

gsap.from(".SearchData2Upcoming img",{
  zIndex: 9999,
  duration: 0.7,
  stagger: 0.3,
  scrollTrigger:{
    trigger: ".SearchData2Upcoming",
    start:"top 20%",
    scroller: "body",
  }
})

})

useGSAP(()=>{
addgsap()
})

useEffect(()=>{
if (data.length==0  || translation.length >=2) {
  setres([])
}
},[data])


useEffect(()=>{
const internal = setInterval(()=>{ 
if (window.innerWidth < 500 && searchRef.current) {
const section = searchRef.current[3];
const dd = document.createElement("dd");
dd.className = "handlethis";
dd.append(
searchRef.current[0], // TypeAnimation
searchRef.current[1], // Paragraph
searchRef.current[2]  // Button 
)
section?.appendChild(dd)
clearInterval(internal)
}
},100) 
return () => clearInterval(internal)
},[searchRef.current])




let id = 0

let ismenu = localStorage.getItem("isMenu2")
let ismenu2 = localStorage.getItem("isMenu")


return(
<>
   <div className="onctraninmenu2" style={{zIndex:"9999999999999999",marginTop:"-3%"}}>
        {table2 ?
        <>
      <div className="svhmenufont">  <ImCross onClick={()=>settable2(false)}/>   </div>  
        <br /><br />
        <SearchTable/>
        </>: 
      <div className="svhmenufont" > <FaInfo onClick={()=>settable2(true)}/> </div>
          }
        </div> 

    <main  style={{
      marginTop: ismenu == "true" && ismenu2 == "true" ? "0%" : 
      ismenu == "true" ? "6%" :  
      ismenu2 == "true" ? "0.2%" : ""
    }} className="searchmains">

  
       <div style={{top: "32.4rem",position: "relative",zIndex:"999999999999999999999"}}>
       <Menu/>
       </div>
        <section className="SearcInput">
        <form onChange={handleSubmit} onSubmit={handleSubmit}>
        <span><FaSearch/></span>
        <input type="text" placeholder="Search Games" value={data} onChange={(e) =>{
         let val = e.target.value;
          stValue(val) 
         if (val.length === 0 ) resetTranscript()  } }/>
        </form>
        </section>
        <br />

        {data.length >= 2  || translation.length >=2? <>
        {
          res.length == 0 && len  ?<> 
         <section className="SomthingRong">
          <img src="https://static.vecteezy.com/system/resources/previews/008/846/375/original/illustration-student-with-question-mark-png.png" alt="" />
          <h1>Couldn't find "{data}"</h1>
          <p>Try searching for something else or try with a different spelling</p>
         </section>
          </> :
          <>

         <section className="SearchGames">
          <h1 className="TopSearch">Top Search</h1>

        <dd className="zerosethreee">
        {
          res.slice(0,3).map((curr,index)=>{
                const rate = curr.rating + 5;
            return(
               <NavLink to={`/gamesD/${curr.name}`} reloadDocument> <motion.li 
               initial={{opacity: 0 ,scale: 0}}
               animate={{opacity: 1, scale: 1,transition:{duration: 0.6,ease :"easeInOut",type: "spring",stiffness: 300,damping: 15}}}
               whileHover={{scale: 1.039,transition:{duration: 0.1}}}
               whileTap={{scale: 0.98}}
               
               key={index}>  
              <div className="threezs">
                <img src={curr.background_image} alt="" />
              </div>
              <div className="extradetalishs">
              <div className="nameratingsear">
                  <h1>{curr.name.length >20 ?curr.name.slice(0,20)+".." :curr.name }</h1>
                <h2>{Number(rate.toFixed(1))} <FaStar/></h2>
              </div>
              
              <div className="genraSe">
                  {
                  curr.genres.map((tex,ind)=>(                    
                 <p key={ind}>{ind>0 ?"| " + tex.name : tex.name}</p> 
                  ))

                }
              </div>
              </div>
          </motion.li></NavLink> 
            )
          })
        }  
        </dd>  
    <ul className="search2ul">
    {
        res.slice(4,99).map((curr,index)=>{
          const rate = curr.rating + 5
      return(
         <NavLink to={`/gamesD/${curr.name}`} reloadDocument>   <li key={index}
         
         >  
        <div >
          <motion.img src={curr.background_image} className="img2" ref={imgRef} 
          whileHover={{scale :1.039,transition:{duration: 0.2}}}
          whileTap={{scale: 0.99}}
          />
        </div>
          <dd className='h2img'>
         <motion.h3
         whileHover={{scale :1.050,transition:{duration: 0.2}}}
          whileTap={{scale: 0.99}}
         >{curr.name.length <=22 ?curr.name : `${curr.name.slice(0,22)}..`}</motion.h3>
           <h4 className="rate">{Number(rate.toFixed(1)) } <FaStar/></h4>
          </dd>
          <br />
          </li></NavLink> 
      )
      })
       }
       </ul>
       </section> <br /><br /><br /><br />
      </>}
      </>: <>
      <section className="SearchData">
           <ul className="Sd2">
            <div>
              <img src="https://sm.ign.com/t/ign_za/photo/m/marvel-riv/marvel-rivals-reveals-first-look-at-thor-and-jeff-the-landsh_3xjp.960.png" alt="" />
            </div>
 <main>
   {
    J15.map((curr,index) =>{
     return(
    <NavLink to={`/gamesD/${curr.name}`}><li key={index} className={index > 2 && "nones"}
      style={{
        backgroundColor:`${index == 0 ? "#2A354F" : index == 2 ? "#2C4258" : index == 1 ? "#8C52E1" : index == 3 ? "#A49D83" :index == 4 ? "#BF8C68" : index == 5 ? "#43414C" : index == 6 ? "#BD9332" :"#4A6089"}`
      }}
      >
       <img src={curr.png} alt="" />
       <p>{curr.name.length > 13 ? `${curr.name.slice(0,13)}..` : curr.name }</p>
      </li>
      </NavLink>
     ) 
    })
  }
 </main>
 </ul>                
        </section> 

<section className="SearchData2" ref={(el) => searchRef.current[3] = el} onClick={()=>{navigate("/genra");window.location.reolod()}}>
<div >
  <ul
  style={{
     backgroundImage: `
     url(${J39[reand -1]?.img})`
  }}
  >
    <img src={`${J39[reand -1]?.png}`} alt="" />
  </ul>

</div>
     <TypeAnimation
     ref={(el) => searchRef.current[0] = el}
      sequence={[
        `PC Action Games`,
        5000, 
        ' PC Advancher Games.',
        5000,
        ' PC RPG Games',
        5000,
        ' PC Story Games',
        5000
      ]}
      wrapper="span"
      speed={40}
      className="TypeAnimation"
      repeat={Infinity}
    />

<p ref={(el) =>searchRef.current[1] = el}>Action, strategy, and fantasy collide in every genre. Whether it's mastering complex mechanics or exploring vast digital realms, each game offers a unique experience. From casual battles to competitive showdowns, the world of gaming never stops evolving.</p>
<button
ref={(el) => searchRef.current[2] = el}
>Open Now</button>
</section>

<section className="EsportsSearch">
  <h1>Top Esports Games</h1>
<div>
{
  J41.map((curr,index)=>{
    return(
      <header key={index} className="eshead">
        <img src={curr.img} alt="" style={{boxShadow:`7px 7px 5px ${curr.bgcolor2}`}}/>
  <ul
  style={{
    backgroundColor : `${curr.bgcolor2}`
  }}
  ><span>{index +1}</span></ul>
<dd
style={{
  backgroundColor : `${curr.bgcolor}`
}}
>
    <h2>{curr.name}</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qua</p>
</dd>
      </header>
    )
  })
}
</div>
</section>


<section className="SearchData2Upcoming">
<h1>UpComing Top Games</h1>

<main className="LeftRightS">
  <ul
  onClick={() => handleLeft(id)}
  style={{opacity: op}}
  ><FaChevronLeft/></ul>
  <ul
  onClick={() => hnadleRight(id)}
  style={{opacity:last}}
  ><FaChevronRight/></ul>
</main>

<div className="lasttopfamesearch">
  <header ref={(el) => {refs.current[id] = el,scroll2.current = el}}>
    {
      J40.map((curr,index) =>{
        return(
       <NavLink to={`/gamesD/${curr.name}`} reloadDocument> <li key={index} className="upcomheader">
            <img src={curr.img} alt=""/>
            <main >
              <h1>{curr.name}</h1>
            <div className="genraS">
                <p>{curr.g1}</p>
              <p>{curr.g2}</p>
            </div>
            <pre>{curr.relase}</pre>
             <div className="desinS">
               <span>{curr.summary}</span>
             </div>
  
              <div className="Scom">
                <h2>,,</h2>
              </div>
            </main>
          </li></NavLink> 
        )
      })
    }
  </header>
</div>

</section>

        </>}
        <br /><br /> <br /> <br />
     <Footer/>    
    </main>
</> 
)
}