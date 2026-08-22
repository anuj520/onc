import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../ContextAPI/ContextAPI";
import { FaDeleteLeft } from "react-icons/fa6";
import { data } from "react-router-dom";
import { scale } from "motion/react";
import {motion} from "motion/react"
import { Loading } from "../Loading/Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export const UserNotification = () =>{
 const { Logout, data: authData,userData,AuthToken} = useAuth();

 const handleDelete = async(id,noti)=>{
  try {
    const response = await fetch(`http://localhost:3000/user/notificattion/delete/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type": "application/json",
            "Authorization": AuthToken
        },
        body:JSON.stringify({noti})
    })
    userData()
    console.log(response);
    
  } catch (error) {
    console.error("handleDelete",error);
    
  }  
 }

 const handleDg = async(id) =>{
try {
  const response = await fetch(`http://localhost:3000/auth/deleteNoti/${id}`,{
    method: "PATCH",
    headers:{
      "Content-Type": "application/json",
      "Authorization": AuthToken
    }
  })
  console.log(response);
  userData()
} catch (error) {
  console.error(error);
  
}
 }
   
 const handleClear = async(id) =>{
  try {
    const response = await fetch(`http://localhost:3000/auth/clearAll/${id}`,{
      method :"PATCH",
      headers:{
        "Content-Type": "application/json",
        "Authorization": AuthToken
      }
    })
    console.log(response);
    userData()
  } catch (error) {
    console.log(error.message);
    
  }
 }

const{contextSafe} = useGSAP() 
const addgasp = contextSafe(()=>{
gsap.from(".UserNotification .notiuser",{
  scale:0,
  stagger:0.2,
  duration:0.4
})  
})

useGSAP(()=>{
addgasp()
},{scope:".UserNotification",dependencies:[authData]})


 const varients = {
  hidden : {scale:0},
  visible:{scale:1,transition:{duration:0.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}}

if (authData.length == 0 || authData == []) {
return <Loading/>  
}

 return(
    <main>
    
    <section className="UserNotification">
    {authData.notification !== '' && authData.notification?.length >=0 && <> 
  <main> <motion.button onClick={() => handleClear(authData._id)}
      initial="hidden"
variants={varients}
animate="visible"
whileTap={{scale:1}}
whileHover={{scale:1.036}}
    >Clear All</motion.button>
  </main>
  <section>
  {
    authData.notification.map((item,index)=>{      
     return(
      <header key={index} className="notiuser">  
      {
        item && <> 
      <span>{authData.date[index]}</span>
        <div key={index}>
      <p>Hey {authData.firstname ? authData.firstname : authData.name.split(' ')[0]},{authData.notification[index]
      }</p> 
      {
        authData.image ?
        <> <motion.button onClick={() => handleDg(authData._id,authData.notification[index])}
             initial="hidden"
variants={varients}
animate="visible"
whileTap={{scale:1}}
whileHover={{scale:1.2}}
        ><FaDeleteLeft/></motion.button></> :

        <><motion.button onClick={() => handleDelete(authData._id,authData.notification[index])}
             initial="hidden"
variants={varients}
animate="visible"
whileTap={{scale:1}}
whileHover={{scale:1.2}}
        ><FaDeleteLeft/></motion.button></>
      }
  </div>
  </>
      }
  </header>
     ) 
    })
  }
  </section>
            </>}
    </section>
 </main>
)    
}
