import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import axios from "../Config/axios";
import J19 from "../../public/J19.json"
import { Menu } from "../HomePart/Menu";
import { Loading } from "../Loading/Loading";
import { Footer } from "../footer/footer";
import { CiSearch } from "react-icons/ci";
import { GenraFooter } from "./genraFooter";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Platforms = () =>{
const[search,setsearch] = useState("")
const[arrow , setarrow] = useState(() => localStorage.getItem("Gmenu") === "true")

const{contextSafe} = useGSAP()

const addgsap = contextSafe(()=>{
gsap.from(".gameOutlet .TagsFeatured .tagsplatfrom",{
opacity: 0,
stagger:0.3,
duration: 0.7,
ease: "back.out"
})  
})

  useGSAP(()=>{
    addgsap()
  })

 if (J19.length === 0 || J19 == []) {
    return <Loading/>
 }
 const SearchArea = J19.filter((curr)=>{
  return curr.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())  
 })

 const handlearrow = () =>{
    setarrow((prev) => !prev)
  }

  useEffect(()=>{
    localStorage.setItem("Gmenu",arrow)
    },[arrow])

  

 return(
  <main className="gameOutlet"  >

        <h1 style={{fontSize: "3.3rem", fontWeight : "700",display:"flex",alignItems:"center",justifyContent:'center',color : "#eeeeee",marginTop : arrow == true ? "5%" : "",textTransform : "uppercase",letterSpacing:"0.2rem"}}>Platforms Collections</h1>
        <br /><br />
         <section className="TagsFeatured">
        
        {
            SearchArea.map((curr,index)=>{
            return(
                <div key={index} className="tagsplatfrom">
                    <img src={curr.img} alt="" />
                <section>
                <h2>{curr.name}</h2>
<p>{curr.p}</p>
                </section>
                </div>
            )    
            })
        }
         </section>
         <br /><br /><br />
        <Footer/>
       <GenraFooter search={search} setsearch={setsearch} arrow={arrow}/>
        </main>
 )   
}