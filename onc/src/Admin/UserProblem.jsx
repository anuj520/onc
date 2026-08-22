import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../ContextAPI/ContextAPI"
import { useState } from "react"
import { FaHireAHelper, FaSearch } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { AdminMenu } from "./AdminMenu"

export const UserProblem = () =>{
const{AuthToken} = useAuth()
const[file,setfile] = useState(null)
const[problem,setProblem] = useState({
   Reply: ""
})
const[search,setsearch] = useState("")

 const getAllimg = async() =>{
   try {
    const response = await fetch("https://orion2-0.onrender.com/admin/allBlog",{
        method: "GET",
        headers:{
         Authorization: AuthToken,
        }
    })
    const res = await response.json();
    console.log(res);
    return res  
   } catch (error) {
    console.log(error);
    
   } 
 }
 
 const handleDelete = async(id) =>{
    try {
       const response = await fetch(`https://orion2-0.onrender.com/admin/delete/blog/${id}`,{
        method: "DELETE",
        headers:{
           Authorization:AuthToken 
        }   
       })
       if (response.ok) {
           getAllimg()
       }
    } catch (error) {
     console.log("handleDelete",error);
       
    }   
   }

 const{data,error,isLoading} = useQuery({
    queryKey: ['posts'],
    queryFn: getAllimg,
    refetchInterval: 100
 })
 if (error) {
    return <h1>Error: {error.message}</h1>;
}

if (isLoading) {
    return <h1>Loading...</h1>;
}

const SearchEmail = data.filter((curr) =>(
  curr.email.toLowerCase().includes(search.toLowerCase()) 
))

console.log(SearchEmail);

    return(
      <main>
      <section className="usersContect" >
     <section className="SearcInput" style={{marginLeft : '3.5%',width: '93%'}}>
 <form >
 <span><FaSearch/></span>
 <input type="text" placeholder="Search Email" value={search} onChange={(e) =>setsearch(e.target.value)}/>
 </form>    
 </section>
 <h1><FaHireAHelper/> User Problem</h1>   
     {
      SearchEmail.map((curr,index)=>{
        return(
          <div key={index} style={{backgroundColor : "#222831"}}>
          <ul>
          <button>{curr.firstname.slice(0,1)}</button>
          <NavLink to={`/userproble/${curr._id}`}> 
         <li>
         <h5>{curr.email}</h5>
           <p>{curr.problem[curr.problem.length -1].slice(0,114)}..</p>
           <h6>{curr.firstname}</h6>
         </li></NavLink>
         <button onClick={() =>handleDelete(curr._id)}>Delete</button>
          </ul>  
         </div>
        )  
      })
     }
     </section>

     <footer style={{ position: 'relative',top: "22.3rem"}}>
                 <AdminMenu/>
                 </footer>
      </main>
    )   
   }

 