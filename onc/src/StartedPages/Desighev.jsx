import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import J55 from "./../../public/J55.json"
import { useState } from "react";

export const Desighev = () =>{
const[reand,setrand] = useState(Math.floor(Math.random() *7))

const text = "OrionAwaitYou";
const text2 = "OrionGuidesU"

const{contextSafe} = useGSAP()

const addgsap = contextSafe(() =>{
gsap.from(".control4tiers .outer span",{
stagger: .1,
duration: .7,
opacity:0,
y:175,
ease:"back.out"
})
gsap.from(".spemcricle",{
duration: .7,
opacity:0,
delay:1,
y:175,
ease:"back.out"
})
})

useGSAP(()=>{
addgsap()
})

let c1 = J55.slice(reand-1,reand)[0].color1;
let c2 = J55.slice(reand-1,reand)[0].color2;
let m1 = J55.slice(reand-1,reand)[0].img;


return(
<header
// className="forgetdesigh"
style={{
    display:"flex",
    width:"95%",
    justifyContent:"space-between"
}}
>
<section className="control4tiers sixhundredpx">
<main className="Desighev marginLeftclass">
  <div className="outer">
    <section>
      <div className="circle" style={{animation :"rotwwate 40s linear infinite reverse"}}>
        {text2.split("").map((curr, index) => (
          <span key={index} style={{ "--i": index + 1,color: c1 ,textShadow:`1px 1px 10px ${c2}` }}>
            {curr}
          </span>
        ))}
      </div>
    </section>
  </div>
</main>    
<main className="Desighev">
  <div className="outer">
    <section>
      <div className="circle">
        {text2.split("").map((curr, index) => (
          <span key={index} style={{ "--i": index + 1,color: c2,textShadow:`1px 1px 10px ${c1}`}}>
            {curr}
          </span>
        ))}
      </div>
    </section>
  </div>
</main>
</section>

<img src={m1} alt="" className="spemcricle"/>

<section className="control4tiers marginLeftclass2">
<main className="Desighev use600Desighev">
  <div className="outer" >
    <section>
      <div className="circle">
        {text.split("").map((curr, index) => (
          <span key={index} style={{ "--i": index + 1,color:c1 ,textShadow:`1px 1px 10px ${c2}`  }}>
            {curr}
          </span>
        ))}
      </div>
    </section>
  </div>
</main>    
<main className="Desighev" >
  <div className="outer">
    <section>
      <div className="circle" style={{animation :"rotwwate 40s linear infinite reverse"}}>
        {text.split("").map((curr, index) => (
          <span key={index} style={{ "--i": index + 1,color: c2,textShadow:`1px 1px 10px ${c1}` }}>
            {curr}
          </span>
        ))}
      </div>
    </section>
  </div>
</main>
</section>
</header>    
)    
}