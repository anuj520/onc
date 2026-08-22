import { useEffect, useRef, useState } from "react"
import { IoSend } from "react-icons/io5";
import{useAuth}  from "./../ContextAPI/ContextAPI"
import { toast } from "react-toastify";
import {useQuery} from "@tanstack/react-query"
import {Loading} from "./../Loading/Loading"
export const PersonBlocked = () =>{
const refs = useRef()
const[request,setRequest] = useState({
userRequest : ""
})
const{data:authData,AuthToken} = useAuth() 

const handleQuery = async() =>{
 const response = await fetch(`http://localhost:3000/admin/blockedRequest/${authData.email}`,{
    method :"GET",
    headers:{
        Authorization:AuthToken
    }
 })   
 const obj1 = await response.json();
 return obj1
}

const handleSubmit = async(e) =>{
    e.preventDefault()
const response = await fetch(`http://localhost:3000/user/Userrequest/${authData.email}`,{
    method:"PATCH",
    headers:{
        "Content-Type" : "application/json",
        Authorization : AuthToken
    },
    body:JSON.stringify(request)
})  
const data = await response.json()
if (response.ok) {
    toast.success(data); 
    setRequest({userRequest : ""})
}else{
    toast.error(data);   
}  
}

useEffect(()=>{
    refs.current?.focus()
    },[])

const{data,isLoading,error} = useQuery({
queryKey:['gets'],
queryFn: handleQuery,
refetchInterval:100
})

if (isLoading) {
 return <Loading/>   
}
if (error) {
    return <div>{error.message}</div>
}

return(
    <main>
     <section className="PersonBlocked">
        <img src="https://wallpaperaccess.com/full/644586.jpg" alt="" />
       <div>
<ul>
<h1>You Are Blocked</h1>
<p><span>Reagion : {data.whyBkocked}</span> </p>
</ul>
       <form onSubmit={handleSubmit}>
       <textarea type="text" placeholder="Enter Request" required ref={refs} 
       value={request.userRequest} onChange={(e) =>setRequest({...request, userRequest:e.target.value})}/>
       <button><IoSend/></button>
       </form>
       </div>
     </section>
    </main>
)    
}