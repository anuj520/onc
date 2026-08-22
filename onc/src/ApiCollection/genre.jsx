import { useEffect, useRef, useState } from "react"
import { Menu } from "../HomePart/Menu"
import { Footer } from "../footer/footer"
import { NavLink } from "react-router-dom"
import { Loading } from "../Loading/Loading"
import J37 from "./../../public/J37.json"
import {useQuery} from "@tanstack/react-query"
import { GenraFooter } from "./genraFooter"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useAuth } from "../ContextAPI/ContextAPI"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { GenraTable } from "../Multer/genrarable"
import { FaInfo } from "react-icons/fa"
import { ImCross } from "react-icons/im"
export const Genre = () =>{
    const{reand} = useAuth()
       const{handleVoice,translation,setTraslation,setmic,resetTranscript} = useAuth2()
    const[search,setsearch] = useState("")
    const[Gimg,setGimg] = useState("")
    const[table2,settable2] = useState(false)
    const[tog,settog] = useState(false)
    const refs3 = useRef()
    const[Gpng,setGpng] = useState("")
    const[arrow , setarrow] = useState(()=>localStorage.getItem("Gmenu") === "true")
const getdata = async() =>{
  const respone = await fetch("http://localhost:3000/games/genra",{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
  })
  const obj = await respone.json();
  settog(true)
  return obj; 
}


  const handlearrow = () =>{
    setarrow((prev) => !prev)
  }


  useEffect(()=>{
    localStorage.setItem("Gmenu",arrow)
    },[arrow])

    const{data,error,isLoading} = useQuery({
      queryKey: ['posts'],
      queryFn: getdata
    })  
  
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
    

  useEffect(()=>{
if (translation.toLowerCase().includes(`category`)) {
    const namess = data?.map(item => item.name)
    handleVoice(`${namess}`)
}
  },[translation])
  
const{contextSafe} = useGSAP();
gsap.registerPlugin(ScrollTrigger)

const addgsap = contextSafe(()=>{
  gsap.from(".gameOutlet .CollectionsFeatured .hoverImg",{
scale: 0,
duration :0.7,
  })
    gsap.from(".gameOutlet .CollectionsFeatured .hoverImg2",{
x: 310,
delay : .2,
stagger: 0.2,
duration :0.7,
ease: "back.out"
})

gsap.from(".gameOutlet .CollectionsFeatured li",{
  opacity: 0,
  duration: 0.7,
  delay: .5,
  stagger: 0.2,
  ease: "back.out"
})

})


useGSAP(()=>{
  addgsap()
},{ scope: ".gameOutlet",dependencies: [tog]})


    if (isLoading) return <Loading/>
    if (error) return <div>Error: {error.message}</div>;
    
    const SearchArea = data.filter((curr)=>(
        curr.name.toLowerCase().includes(search.toLowerCase())
      ))

  let ismenu = localStorage.getItem("isMenu2")
  let ismenu2 = localStorage.getItem("isMenu") 

let ld;
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
      <GenraTable genra={"genra"}/>
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
 
 <section className="CollectionsFeatured">
   
<main className="">
{
  Gimg == "" && Gpng == "" ? 
  <>
  <img src={`${J37[reand - 1].img}`} alt="" className="hoverImg"/>
   <img src={`${J37[reand -1].png}`} alt="" className="hoverImg2"/>
  </>:
  <>
   <img src={Gimg} className="hoverImg" /> 
  <img src={Gpng} alt="" className="hoverImg2"/>
  </>
}
 <h1>Best <span>Category</span> Games</h1>
</main>
  <div>
    {
      SearchArea.map((curr,index)=>{
       return(
    <NavLink to={`/genreD/${curr.name}`} reloadDocument>  <li key={index}>
          <section className="CollectionText"
          onMouseEnter={()=>{
            clearTimeout(ld)
            ld =  setTimeout(()=>{
              setGimg(curr?.top[reand]?.back)
              setGpng(curr?.top[reand]?.png)
            },1000)
            }}
          >
            <p>{curr.name.length >=19 ? `${curr.name.slice(10,22)}` : curr.name}</p>
        </section>
        </li></NavLink> 
       ) 
      })
    }
  </div>
 </section>





     <br /><br /><br />
    <Footer/>
 <GenraFooter search={search} setsearch={setsearch} arrow={arrow}/>
    </main>
</>     
 )   
}