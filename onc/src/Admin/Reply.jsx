import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { Loading } from "../Loading/Loading";
import { useAuth } from "../ContextAPI/ContextAPI";
import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa6";
import { AdminMenu } from "./AdminMenu";

export const Reply = () =>{
    const{AuthToken,reand} = useAuth()
  const {id} = useParams();
const current = new Date()
  const[reply,setReplay] = useState({
   Replay :"",
   Rdate : `${current.toLocaleDateString()}-${current.toLocaleTimeString()}` 
  })
  
const getContect = async() =>{
 const response = await fetch(`https://orion2-0.onrender.com/admin/contect/${id}`,{
    headers:{
        Authorization:AuthToken  
    }
 })
 const obj = await response.json();
 return obj;   
}
// const updateData = async() =>{
// const response = await fetch(`https://orion2-0.onrender.com/admin/contect/update/${id}`,{
//    headers:{
//   Authorization : AuthToken
//    } 
// })
// const obj = await response.json()
   
// }


const{data,isLoading,error} = useQuery({
    queryKey:['post'],
    queryFn:getContect,
    refetchInterval: 100
})  
if(isLoading) return <Loading/>
if(error) return <div>{error}</div>

const handleSubmit = async(e) =>{
  e.preventDefault();
 try {
   const response = await fetch(`https://orion2-0.onrender.com/admin/contect/update/${id}`,{
      method: "PATCH",
      headers:{
         "Content-Type": "application/json",
         Authorization:AuthToken  
      },
      body:JSON.stringify(reply)
   })
   if (response.ok) {
      setReplay({Replay :""})
console.log('Update Sucessfuly') ;
   }
 } catch (error) {
   console.error("ContectUpdateError",error.message);
   
 } 
}


return(
  <main>
     {
      J25.slice(reand-1,reand).map((curr,index)=>{
         return(
            <section key={index} className="ReplayImg">
            <img src={curr.img} alt="" />
           <h1>Reply</h1>
            </section>
         )
      })
    }
    <section className="ReplayContect">
       <div>
        <button>{data.firstname.slice(0,1)}</button>
        <li>
         <h3>{data.firstname} {data.lastname}</h3>
         <h4>{data.email}</h4>
        </li>
       </div>
       <ul>
      
{
   data.message.map((curr,index)=>{
    return(
      <main key={index}>
         <span>{data.date[index]}</span> 
         <div className="userMessage">     
         <p>{curr}</p>
        </div>  
<br />
<span style={{
  marginLeft: "-23%"
}}


>{data.Rdate[index]}</span> 
       {
         data.Replay[index] && <>
        <div className="Rplay">
         <p>{data.Replay[index]}</p>
        </div>
        </>
       }
      </main>
    )  
    
   })
}

        </ul>
          <footer className="ReplyInput">
           <form onSubmit={ handleSubmit}>
           <textarea type="text" placeholder="Replay" value={reply.Replay} onChange={(e) =>setReplay({ ...reply, Replay: e.target.value })}/>
           <button type="submit"><IoSendSharp/></button>
           </form>
          </footer>

    </section>
    <footer style={{transform: "rotate(90deg)",width: "50%",top: "-23rem",position: "relative",marginLeft :"-20rem"}} className="AiA">
                      <AdminMenu/>
  </footer>
  </main>  
)


}