import { useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { FaSearch } from "react-icons/fa"
import { MdDeleteForever } from "react-icons/md";
import { AdminMenu } from "./AdminMenu";

export const Notification = () =>{
  const current = new Date()
   const{AuthToken,data,userData} = useAuth() 
  const[noti,setnotif] = useState({
    notification : "",
    view :true,
    date: `${current.toLocaleDateString()} - ${current.toLocaleTimeString()}`
  })  

const handleNotification = async(e) =>{
 e.preventDefault();
 
try {
  const response = await fetch("https://orion2-0.onrender.com/user/notification",{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
        Authorization:AuthToken  
    },
    body:JSON.stringify(noti)
 })
 console.log(response);
} catch (error) {
  console.error("handleNotification", error.message);
  
}

try {
  const data = await fetch("https://orion2-0.onrender.com/auth/gnotifition",{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
        Authorization:AuthToken  
    },
    body:JSON.stringify(noti)
 })
 if (data.ok) {
  window.location.reload()
 }
} catch (error) {
  console.error("handleNotification", error.message);
  
}
}
const handleDelete = async(id) =>{
const response = await fetch(`https://orion2-0.onrender.com/admin/notificationD/${id}`,{
  method: "PATCH",
  headers:{
    "Content-Type" : "application/json",
    Authorization : AuthToken
  }
}) 
console.log(response);
userData()
}

const handleClear = async() =>{
 const response = await fetch("https://orion2-0.onrender.com/admin/clearNoti",{
  method: "PATCH",
  headers:{
    "Content-Type" : "application/json",
    Authorization : AuthToken
  }
 }) 
 console.log(response);
userData()
}


 return(
  <main>
    <section className="SearcInput" style={{marginLeft : '3.5%',width: '93%'}}>
        <form onSubmit={handleNotification}>
           <span><FaSearch/></span>
         <input type="text" placeholder="Enter Notifications" value={noti.notification} onChange={(e) => setnotif({...noti,notification: e.target.value})}/> 
        </form>
    </section>
<button className="Clear_All" onClick={handleClear}>Clear All</button>
    <section className="NotificatinAdmin">
      {
        data?.notification?.map((curr,index)=>{
         return(         
          <header key={index}>
          {
            data.notification[index] && <>
           <span>{data.date[index]}</span> 
          <div key={index}>
          <p>{curr}</p>
          <button onClick={() =>handleDelete(index)}><MdDeleteForever/></button>
          <br />
          </div>
          </>
          } 
          </header>
         ) 
        })
      }
    </section>
        <footer style={{top: "-0.4rem",position: "relative"}}>
                          <AdminMenu/>
      </footer>
  </main>  
 )   
}