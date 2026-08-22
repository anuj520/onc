import { useEffect, useState } from "react"
import { Menu } from "../HomePart/Menu"
import J20 from "./../../public/J20.json"
import { GenraFooter } from "./genraFooter"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Footer } from "../footer/footer"

export const Tags = () =>{
const[search,setsearch] = useState("")
const[arrow , setarrow] = useState(() => localStorage.getItem("Gmenu") === "true")

const{contextSafe} = useGSAP();

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


  const SearchArea = J20.filter((curr)=>(
    curr.name.toLowerCase().includes(search.toLowerCase())
  ))

  const handlearrow = () =>{
    setarrow((prev) => !prev)
  }

  useEffect(()=>{
    localStorage.setItem("Gmenu",arrow)
    },[arrow])  
 return(
    <main className="gameOutlet">
       <h1 style={{fontSize: "3.3rem", fontWeight : "700",display:"flex",alignItems:"center",justifyContent:'center',color : "#eeeeee",marginTop : arrow == true ? "5%" : "",textTransform : "uppercase",letterSpacing:"0.2rem"}}>Tags Featured</h1>
       <br /><br />
        <section className="TagsFeatured" >
       
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