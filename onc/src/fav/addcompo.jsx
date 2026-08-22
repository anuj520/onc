import { useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { LuArrowLeft } from "react-icons/lu";
import{motion} from "motion/react"

export const Addcompo  = ({val,setvalue}) =>{
const[train,settrain] = useState() 
const{handleTrain} = useAuth2()   
const{data} = useAuth()    
console.log(train);

const handlSubmit = (e) =>{
e.preventDefault();
handleTrain([train],val)    
}

console.log(val);


  return(
    <section className="Addcompo" >
 <main>
  <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757245820/sunone_xd8kh5.png" alt="" style={{marginLeft:window.location.pathname == "/" && "-35%",zIndex:"9999999999999"}}/> 
<div className="addformdiv"> 
<div className="LuArrowLeft" onClick={()=>setvalue("")}><LuArrowLeft/></div>
<form onSubmit={handlSubmit}>
    <input type="text" value={val || ""} readOnly />
    <input type="email" value={data?.email || ""} readOnly />
    <input type="text" value={train} onChange={(e)=> settrain(e.target.value)} placeholder="ENTER NEW LOG"/>
<motion.button type="submit"
animate={{scale:1,transition:{duration:.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}
whileHover={{scale:1.033}}
whileTap={{scale:1}}
>Submit</motion.button>
</form>
  </div>
        </main>
    </section>
  )  
}