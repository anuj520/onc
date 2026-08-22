import { useGSAP } from "@gsap/react";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { useAuth } from "../ContextAPI/ContextAPI";
import gsap from "gsap";
import { useRef } from "react";

export const Mike = () => {
const {mic} = useAuth2()
const{data:authdata} = useAuth()

let mics = localStorage.getItem("togvoic")

  useGSAP(() => {
    gsap.to(".voiceeyes", {
      repeat: -1,
          ease: "power1.inOut",
      duration: 0.4,
      repeatDelay: 2,
        scale: 0.7,
        yoyo: true
    });
    gsap.to(".voiceeyes2", {
      scale: 0.7,
      repeat: -1,
      duration: 0.4,
      repeatDelay: 2,
       yoyo: true,
     ease: "power1.inOut",
  });
  });
if (mics == "false") {
  return;
}

  return (
    <>
    <section className="voicemic">
      <main>
        <header>
          <div className="promt">
     {  mic ? mic:<p><span>listing</span> please say Rio</p>} 
        
          </div>
        </header>
        <div className="voicediv">
          <div className="voice2div">
          <div className="voiceeyes"></div>
          <div className="voiceeyes2"></div>
        </div>  
        </div>
      </main>
    </section>

    </>
  );
};



      // <h1>Listening</h1>
      // <div>{ stopwrite ? "wating.." : transcript }</div>
      // <button onClick={() => {start()}}>Start Listening</button>
      // <button onClick={stop}>Stop</button>
      // {/* <button>Speak</button> */}

      // <section>
      //   <Couser/>
      // </section>