import { useGSAP } from "@gsap/react"
import { Menu } from "../HomePart/Menu"
import {Footer} from "./../footer/footer"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

export const NextPage = ({data2}) =>{  
let ismenu = localStorage.getItem("isMenu2")
let ismenu2 = localStorage.getItem("isMenu")

return(
    <main
    style={{
      marginTop: ismenu == "true" && ismenu2 == "true" ? "0%" : 
      ismenu == "true" ? "4%" :  
      ismenu2 == "true" ? "0.2%" : ""
      }}
    > 
        <section className="NextPage">
  {
   data2.year.map((curr,index)=>{
    return(
      <li key={index} className="nextyearh2">
            <h1>{curr.h2}</h1> 
             <h1 style={{color :"#00fbff"}}>{curr.h3}</h1> 
      </li>
    )  
   })
  }    
       {
         data2.extra.map((t,index) =>{
      return(
        <div key={index} className="nextdata2extra">
        <img src={t.img} className="startchanmnext" />
        <div>
       <p>{t.p1}</p>
       <br />
       <p >{t.p2}</p>
        <br />
        <p>{t.p3}</p>
        
        <img src={data2.somenext} className="img2" />
        </div>
         
         <footer className="info">
            <h1>{t.h3.slice(0,52)}
              <span style={{color : "#00fbff",marginLeft :"1%"}}>{t.h2.slice(52,88)}</span>
              </h1>
            <img src={t.img4} alt="" />
            <ol>
                <li><span>{index+1} :</span> {t.li3}</li>
                <li><span>{index+2} :</span> {t.li4}</li>
                <li><span>{index+3} :</span> {t.li5}</li>
                <li><span>{index+4} :</span> {t.li6}</li>
                <li><span>{index+5} :</span> {t.li7}</li>
                <li><span>{index+6} :</span> {t.li8}</li>
                <li><span>{index+7} :</span> {t.li9}</li>
                <li><span>{index+8} :</span> {t.li10}</li>
                <li><span>{index+9} :</span> {t.li11}</li>
                <li><span>{index+10} :</span> {t.li12}</li>
                <li><span>{index+11} :</span> {t.li13}</li>
                <li><span>{index+12} :</span> {t.li14}</li>
                <li><span>{index+13} :</span> {t.li15}</li>
                <li><span>{index+14} :</span> {t.li16}</li>
                <li><span>{index+15} :</span> {t.li17}</li>
                <li><span>{index+16} :</span> {t.li18}</li>
            </ol>
         </footer>
         <footer className="info2">
            <h1>{t.h1.slice(0,30)} <span>{t.h1.slice(30,45)}</span>
              </h1> 
            <img src={t.img2} alt="" />
            <div>
    <p>{t.p4}</p>
            <br />
    <p>{t.p5}</p>        
            </div>
         </footer>
             
         <footer className="info" style={{height:"90vh",marginTop: "0%"}}>
            <h1>{t.h2.slice(0,52)}
              <span style={{color : "#00fbff",marginLeft :"1%"}}>{t.h2.slice(52,88)}</span>
              </h1><br />
            <img src={t.img3} alt=""  style={{width:"50%",marginTop: "1%"}}/>
            <ol style={{width:"43%",marginLeft:"52rem",marginTop:"-35rem"}}>
          <li>{t.li}</li><br />
          <li>{t.li2}</li>
            </ol>
         </footer>     

        </div>
        
      )
         })
       }
        </section>
        <br /><br /> 
        <Footer/>
    </main>
)    
}