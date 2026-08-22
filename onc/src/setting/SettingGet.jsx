import { useState, useEffect } from "react";
import{motion} from "motion/react"
import { useAuth2 } from "../ContextAPI/ContectApi2";

export const SettingGet = () => {
    const{translation,setTraslation,resetTranscript,setmic} = useAuth2()  
  const [isG, setG] = useState(() => localStorage.getItem("isG") === "true");
  const [isG2, setG2] = useState(() => localStorage.getItem("isG2") === "true");

  const handleClick2 = () => {
    setG((prev) => !prev);
    setG2(false); // optional: reset isG2 if needed
  };

  const handleClick3 = () => {
    setG2((prev) => !prev);
    setG(false); // optional: reset isG if needed
  };

  useEffect(() => {
    localStorage.setItem("isG", isG);
  }, [isG]);

  useEffect(() => {
    localStorage.setItem("isG2", isG2);
  }, [isG2]);


useEffect(()=>{
if (translation.includes("Balanced Mode")) {
    handleClick2();
    resetTranscript()
    setTraslation("")
    setmic("")
}
if (translation.includes("Internet Safety Mode")) {
    handleClick3();
    resetTranscript()
    setTraslation("")
    setmic("")
}

},[translation])


  return (
    <main>
<section className="ButtonImg">
  {!isG && !isG2 ? (
    <>
<img
  src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757259142/sg_bhwfb8.png"
  alt=""
  style={{
    width: "43%",
    objectFit: "fill",
    height: "38vh",
    marginTop: "0.5rem",
    marginLeft: "3rem",
    borderRadius: "12px",
    filter: "brightness(1.5)",
  }}
/>
<img
  src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757259146/sg2_dkqsxw.png"
  alt=""
  style={{
    width: "43%",
    objectFit: "fill",
    height: "38vh",
    marginTop: "0.5rem",
    borderRadius: "12px",
    filter: "brightness(1.5)",
  }}
/>
    </>
  ) : isG ? (
    <>
     <img
  src="./../public/md1.png"
  alt=""
  style={{
    width: "43%",
    objectFit: "fill",
    height: "38vh",
    marginTop: "0.5rem",
    marginLeft: "3rem",
    borderRadius: "12px",
    filter: "brightness(1.5)",
  }}
/>
<img
  src="./../public/md2.png"
  alt=""
  style={{
    width: "43%",
    objectFit: "fill",
    height: "38vh",
    marginTop: "0.5rem",
    borderRadius: "12px",
    filter: "brightness(1.5)",
  }}
/>
    </>
  ) :
  isG2 ? 
  <>
  <img
src="./../public/ld1.png"
alt=""
style={{
  width: "43%",
  objectFit: "fill",
  height: "38vh",
  marginTop: "0.5rem",
  marginLeft: "3rem",
  borderRadius: "12px",
  filter: "brightness(1.2)",
}}
    />
    <img
src="./../public/ld2.png"
alt=""
style={{
  width: "43%",
  objectFit: "fill",
  height: "38vh",
  marginTop: "0.5rem",
  borderRadius: "12px",
filter: "brightness(1.2)",
}}
    />
  </>:""
  }

</section>

<section className="ButtonSound">
  <main
    onClick={handleClick2}
    style={{ marginTop: "2.5rem" }}
    className={isG ? "Sreverse" : ""}
  >
    <p>Balanced Mode</p>
    <motion.header className="Effect"
    initial={{scale:0}}
    animate={{scale:1,transition:{duration:0.7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
    whileHover={{scale:1.039}}
    whileTap={{scale:1}}
    style={{backgroundColor: !isG ? "" :"#00fbff"}}>

<ul>
  <span>{isG ? "ON" : "OFF"}</span>
</ul>
    </motion.header>
  </main>

  <main
    onClick={handleClick3}
    style={{ marginTop: "2.5rem" }}
    className={isG2 ? "Sreverse" : ""}
  >
    <p>Internet Safety Mode</p>
    <motion.header className="Effect"
    initial={{scale:0}}
    animate={{scale:1,transition:{duration:0.7,type:"spring",damping:15,stiffness:300,ease:"easeInOut"}}}
    whileHover={{scale:1.039}}
    whileTap={{scale:1}}
    style={{backgroundColor: !isG2 ? "" :"#00fbff"}}
    >
<ul>
  <span>{isG2 ? "ON" : "OFF"}</span>
</ul>
    </motion.header>
  </main>
</section>
    </main>
  );
};
