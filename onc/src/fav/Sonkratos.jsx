import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {motion} from "motion/react"
import { ScrollTrigger } from "gsap/all"
import { useState } from "react"

export  const Sonkratos = () =>{
gsap.registerPlugin(ScrollTrigger)
const{contextSafe} = useGSAP()
const[rand,setrand] = useState(Math.floor(Math.random() * 2))
const addgsap = contextSafe(()=>{
gsap.from(".sunvskratos .uperdivs .listg1,.listg2,.listg3,.listg5,.listg4",{
scale: 0,
stagger: 0.2,
ease: "back.out",
duration :0.7,
scrollTrigger:{
  trigger: ".sunvskratos",
  scroller: "body",
  start: "top 20%"}

})
gsap.from(".sunvskratos .bottomdiv .left1",{
  width :0,
  stagger: 0.2,
  duration: 0.7,
  delay: .5,
  scrollTrigger:{
    trigger: ".sunvskratos",
    scroller :"body",
    start:"top 20%"
  }
})
gsap.from(".sunvskratos .allimges img",{
   scale: .3,
  marginLeft: "-1",
  stagger: 0.2,
  opacity:0,
  duration: 0.7,
  delay: 1,
  scrollTrigger:{
    trigger: ".sunvskratos",
    scroller: "body",
    start: "top 20%",  
  }
})
}) 

useGSAP(()=>{
addgsap()
})  
 return(
  <>
  {rand == 1 ? 
    <section className="sunvskratos">
   <h1>Top Gameing Characters</h1>   
   <div className="cardbest">
 <div className="uperdivs">
  <li className="listg1"
  ></li>
 <li className="listg2"
 ></li>
 <li className="listg3"
 ></li>
 <li className="listg5"></li>
  <li className="listg4"></li>
 </div>

    <div className="bottomdiv">
      <dd>
        <li>
          <div className="left1"
          style={{backgroundImage: "url(https://i.pinimg.com/1200x/01/c3/3e/01c33e879dd09da8626cd0726cd73c75.jpg)"}}
          ></div>
          <div className="left1"
          style={{backgroundImage: "url(https://i.pinimg.com/1200x/5d/4e/ac/5d4eacc8806b62f74badb44dc8984e35.jpg)"}}
          ></div>
           <div className="left1"
           style={{backgroundImage: "url(https://i.pinimg.com/736x/a8/7e/b2/a87eb2d19aa714f74e5efefc3a3c914a.jpg)"}}
           > 
           </div>
          <div className="left1"
           style={{backgroundImage: "url(https://i.pinimg.com/1200x/20/26/48/202648c17222c3ad4615673d2ab86bac.jpg)"}}
          ></div>
           <div className="left1"
           style={{backgroundImage: "url(https://i.pinimg.com/1200x/4b/b4/e4/4bb4e4f5d79259f7f4ccb3d40543ca2c.jpg)"}}
           >
           </div>
        </li>
      </dd>
    </div>
<div className="allimges">
        <motion.img src="https://th.bing.com/th/id/R.d6b571ccaf0adca7b8ec7616f44a2adf?rik=dcbIN9oe2iK4Fw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f13%2fCloud-Strife-PNG-Transparent.png&ehk=VFjWFuoCb32Q1UE5lMQgn4z2Ey3RioqQh2l7WqwyH%2fk%3d&risl=&pid=ImgRaw&r=0" 
        animate={{transition:{scale:1,opacity:1,duration:1,type:"spring",ease:"easeInOut",damping:15,startOffset:300}}}
     whileHover={{scale:1.05}}
        className="kratos1"/>
      <h1>Cloud Strife</h1>
  <motion.img src="https://th.bing.com/th/id/R.1c62285303dc664a94a11d29c836d099?rik=nBYi0o%2bUgcWZvA&riu=http%3a%2f%2fstatic.tumblr.com%2fvd6jaak%2fIEbmcrygm%2flink_artwork_4__skyward_sword_.png&ehk=FwuXdOzWIK44nkZAT%2bVGJmEQBLeYMRCq8jLqi4qvLf8%3d&risl=&pid=ImgRaw&r=0" 
  animate={{transition:{scale:1,opacity:1,duration:1,type:"spring",ease:"easeInOut",damping:15,startOffset:300}}}
     whileHover={{scale:1.05}}
  className="kratos2"/>
  <h1 className="karleft1">Link</h1>
     <motion.img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757253160/kratosGame_zcdq5p.png" 
     animate={{transition:{scale:1,opacity:1,duration:1,type:"spring",ease:"easeInOut",damping:15,startOffset:300}}}
     whileHover={{scale:1.05}}
     className="kratos3"/>
       <h1 className="karleft2">Kratos</h1>
     <motion.img src="https://vignette.wikia.nocookie.net/sonic/images/d/d1/MovieSonicRun.png/revision/latest?cb=20200301135108" 
     animate={{transition:{scale:1,opacity:1,duration:1,type:"spring",ease:"easeInOut",damping:15,startOffset:300}}}
     whileHover={{scale:1.05}}
     className="kratos4"/>   
       <h1 className="karleft3">Sonic</h1>  
  <motion.img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757254615/hource_mdvwhf.png" 
  animate={{transition:{scale:1,opacity:1,duration:1,type:"spring",ease:"easeInOut",damping:15,startOffset:300}}}
     whileHover={{scale:1.05}}
  className="kratos5"/>
  <h1 className="karleft4">Arthur Morgan</h1>
  </div>
   </div>

   
    </section>

:
  <section className="sunvskratos">
   <h1>Top Gameing Characters</h1>   
   <div className="cardbest">
 <div className="uperdivs">
  <li className="listg1"
  style={{backgroundImage: "url(https://i.pinimg.com/1200x/33/a7/67/33a767396c2c4e2469735f749d691773.jpg)"}}
  ></li>
 <li className="listg2"
 style={{backgroundImage: "url(https://i.pinimg.com/1200x/4c/7b/f0/4c7bf04ac06c5307deceab0e239c013b.jpg)"}}
 ></li>
 <li className="listg3"
 style={{backgroundImage: "url(https://i.pinimg.com/1200x/fc/05/49/fc0549fef0405f4b02b4526eb7c68120.jpg)"}}
 ></li>
 <li className="listg5"
 style={{backgroundImage: "url(https://i.pinimg.com/1200x/34/3f/77/343f77ea2b0008f650ed3f61ab7dfbd3.jpg)"}}
 ></li>
  <li className="listg4"
  style={{backgroundImage: "url(https://i.pinimg.com/1200x/ea/60/a4/ea60a47f025c3f9717875abf4b9b0a6b.jpg)"}}
  ></li>
 </div>

    <div className="bottomdiv">
      <dd>
        <li>
          <div className="left1"
          style={{backgroundImage: "url(https://i.pinimg.com/1200x/33/a7/67/33a767396c2c4e2469735f749d691773.jpg)"}}
          ></div>
          <div className="left1"
          style={{backgroundImage: "url(https://i.pinimg.com/1200x/4c/7b/f0/4c7bf04ac06c5307deceab0e239c013b.jpg)"}}
          ></div>
           <div className="left1"
           style={{backgroundImage: "url(https://i.pinimg.com/1200x/fc/05/49/fc0549fef0405f4b02b4526eb7c68120.jpg)"}}
           > 
           </div>
          <div className="left1"
           style={{backgroundImage: "url(https://i.pinimg.com/1200x/34/3f/77/343f77ea2b0008f650ed3f61ab7dfbd3.jpg)"}}
          ></div>
           <div className="left1"
           style={{backgroundImage: "url(https://i.pinimg.com/1200x/ea/60/a4/ea60a47f025c3f9717875abf4b9b0a6b.jpg)"}}
           >
           </div>
        </li>
      </dd>
    </div>
<div className="allimges">
        <motion.img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757254771/mind_3_ilwqvj.png" 
         animate={{transition:{scale:1,opacity:1,duration:1,type:"spring",ease:"easeInOut",damping:15,startOffset:300}}}
     whileHover={{scale:1.05}}
        className="kratos1"
              style={
    {height: "50vh",width:"50%",left: "3%",top: "2%"}
  }
        />
      <h1>Master Chief</h1>
  <motion.img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757254770/mind_1_flsrwx.png" 
   animate={{transition:{scale:1,opacity:1,duration:1,type:"spring",ease:"easeInOut",damping:15,startOffset:300}}}
     whileHover={{scale:1.05}}
  className="kratos2"
       style={
    {height: "75vh",width:"60%",left: "2%",top: "2%"}
  }
  />
  <h1 className="karleft1"
  style={{marginLeft: "-12%"}}
  >Ezio Auditore</h1>
     <motion.img src="https://www.pngall.com/wp-content/uploads/15/Black-Myth-Wukong-Game-Armor-Set-PNG.png"
     animate={{transition:{scale:1,opacity:1,duration:1,type:"spring",ease:"easeInOut",damping:15,startOffset:300}}}
     whileHover={{scale:1.05}}
     className="kratos3"
     style={{height: "100vh",width:"100%",left: "-10%",top: "-14%"}}
     />
       <h1 className="karleft2"
       style={{fontSize: "3rem",width: "30%",marginLeft: "-6%"}}
       >Black Myth: Wukong</h1>
    <motion.img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757254769/mind_2_w7j5cx.png"
    animate={{transition:{scale:1,opacity:1,duration:1,type:"spring", ease:"easeInOut", damping:15,startOffset:300}}}
    whileHover={{scale:1.05}}
    className="kratos4"
       style={
    {height: "75vh",width:"50%",left: "-10%",top: "2%"}
  }
     />   
       <h1 className="karleft3"
       style={{width: "30%",marginLeft: "-8%"}}
       >Geralt of Rivia</h1>  
  <motion.img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757254767/mind_4_vvg8rl.png" 
  animate={{transition:{scale:1,opacity:1,duration:1,type:"spring",ease:"easeInOut",damping:15,startOffset:300}}}
  whileHover={{scale:1.05}}
  className="kratos5"
  style={
    {height: "50vh",width:"50%",left: "-14%",marginTop: "6%"}
  }
  />
  <h1 className="karleft4"
  style={{marginLeft: "-5%",fontSize: "3rem"}}
  >Steve</h1>
  </div>
   </div>
    </section>
}
  </>
 )   
}