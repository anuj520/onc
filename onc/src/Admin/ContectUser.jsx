import { useEffect, useState } from "react"
import { data, NavLink, useParams } from "react-router-dom"
import { useAuth } from "../ContextAPI/ContextAPI"
import { FaSearch } from "react-icons/fa"
import { useQuery } from "@tanstack/react-query"
import { Loading } from "../Loading/Loading"
import { toast } from "react-toastify"
import { AdminMenu } from "./AdminMenu"
import { MdMessage } from "react-icons/md"

export const ContectUser = () =>{
    const{AuthToken} = useAuth()
    const[search,setsearch] = useState("")

const getAllmessage = async() =>{
 const response = await fetch("https://orion2-0.onrender.com/admin/allcontect",{
    method:"GET",
    headers:{
        Authorization:AuthToken    
    }
 })   
 const obj = await response.json()
 
return obj
}

const handleDelete = async(id) =>{
try {
const response = await fetch(`https://orion2-0.onrender.com/admin/delete/contect/${id}`,{
  method:"DELETE",
  headers:{
    Authorization:AuthToken   
  }  
})  
if (response.ok) {
    getAllmessage()
 toast.success('Delete sucessfully')   
}  
} catch (error) {
 console.log("hndledelete",error);
    
}
}

const{data,error,isLoading} = useQuery({
 queryKey:['get'],
 queryFn: getAllmessage,
 refetchInterval:1000  
})

 if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    if (isLoading) {
        return <Loading/>
    }
    
    const SearchEmail = data.filter((curr)=>(
        curr.email.toLowerCase().includes(search.toLowerCase())
      ))
          
// console.log(SearchEmail[0].message.toString().split(' '));

    return(
        <>
    <main>
    <section className="usersContect">
   <section className="SearcInput" style={{marginLeft : '3.5%',width: '93%'}}>
                  <form >
                  <span><FaSearch/></span>
                  <input type="text" placeholder="Search Email" value={search} onChange={(e) =>setsearch(e.target.value)}/>
                  </form>
                  </section>
      <h1><MdMessage/> Contect</h1>            
   {
    SearchEmail.map((curr,index)=>{
      return(
        <div key={index}>
        <ul>
        <button>{curr.firstname.slice(0,1)}</button>
        <NavLink to={`/admin/Reply/${curr._id}`}> 
       <li>
       <h5>{curr.email}</h5>
         <p>{curr.message[curr.message.length -1].slice(0,114)}..</p>
         <h6>{curr.firstname}</h6>
       </li></NavLink>
       <button onClick={() =>handleDelete(curr._id)}>Delete</button>
        </ul>  
       </div>
      )  
    })
   }
   </section>
   <footer style={{ position: 'relative',top: "13.4rem"}}>
                 <AdminMenu/>
                 </footer>
    </main>
        </>
    )
}