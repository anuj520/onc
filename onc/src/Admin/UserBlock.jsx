import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../ContextAPI/ContextAPI"
import { Loading } from "../Loading/Loading"
import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { AdminMenu } from "./AdminMenu"
import { MdBlock } from "react-icons/md"
import { FaArrowLeftLong } from "react-icons/fa6";

export const UserBlock = () =>{
const{AuthToken,reand}= useAuth()
const[search,setsearch] = useState('')
    const[tofwhy,settogwhy] = useState(false)
const[obj2,setobj] = useState([])
const[request,setRequest] = useState([])
    const[block,setblock] = useState({

        isBlocked: false
    })
const handleBlockData = async() =>{
try {
   const response = await fetch("https://orion2-0.onrender.com/admin/user",{
    method: "GET",
    headers:{
        Authorization: AuthToken
    }
   })
   const obj = await response.json();
   return obj 
} catch (error) {
   console.log("handleBlockData",error);
    
}
}
const handlegetGoogleBlock = async() =>{
    const response = await fetch("https://orion2-0.onrender.com/admin/googleUser",{
       headers:{
        Authorization :AuthToken
       }
    })
    const dd = await response.json()
    setobj(dd)
    }
    useEffect(()=>{
    handlegetGoogleBlock()
    },[])

const handleBlocked = async(id) =>{
try {
    const response = await fetch(`https://orion2-0.onrender.com/admin/blocked/${id}`,{
    method:"PATCH",
    headers:{
        "Content-Type" : "application/json",
        Authorization : AuthToken
    },
    body:JSON.stringify(block)
    
    })
    console.log(response);
    handlegetGoogleBlock()
} catch (error) {
  console.error("handleBlocked",error);
    
}
}
const handleRequest = async(email) =>{
    const response = await fetch(`https://orion2-0.onrender.com/admin/blockedRequest/${email}`,{
      method: "GET",
      headers:{
          Authorization :AuthToken
      }
    }) 
    const obj = await response.json();
    setRequest(obj)
    settogwhy(true)
     
  }

const{data,isLoading,error} =  useQuery({
queryKey :['gets'],
queryFn: handleBlockData,
refetchInterval: 1
})

if(isLoading) return <Loading/>
if (error) return <div>{error}</div> 


const SearchEmail = data.filter((curr) =>
    curr.email.toLowerCase().includes(search.toLowerCase().trim())
).concat(
    obj2.filter((curr) =>
        curr.email.toLowerCase().includes(search.toLowerCase().trim())
    )
);


    
 return(
    <main>
        <section className="UsersData">
            <section className="SearcInput" style={{marginLeft : '3.5%',width: '93%'}}>
            <form >
            <span><FaSearch/></span>
            <input type="text" placeholder="Search Email" value={search} onChange={(e) =>setsearch(e.target.value)}/>
            </form>
    
            </section>
        <h1><MdBlock/> Block Users</h1>
        <footer style={{ position: 'relative',top: "31.5rem"}}>
        <AdminMenu/>
        </footer>
     <ul>
     <div>
        {
        SearchEmail?.map((curr,index)=>{
        return(
        <li key={index} style={{ display : curr.isBlocked == false  ? `none` : ""}}>
           {
            curr.img[0] ? <img src={`https://orion2-0.onrender.com/${curr.img}`} alt="" /> : 
            (curr.gender == "male" ? <img src="https://c4.wallpaperflare.com/wallpaper/777/604/837/cyberpunk-cyberpunk-2077-v-cyberpunk-2077-video-games-wallpaper-preview.jpg" alt="" /> : <img src="https://i.pinimg.com/originals/1b/61/26/1b6126773471aa008fa51389f1762dd6.jpg" alt="" />)
           }
             <main
     style={{
        backgroundImage: `linear-gradient(to right, rgba(22, 22, 22, 0.8), 
        rgba(22, 22, 22, 0.7)), 
        url(ad${reand}.jpg)`,
      }}
    >
         <br /><br />
          <p><span>Firstname :</span> {curr.firstname || curr.name.split(' ')[0] }</p>
          <p><span>Lastname :</span> {curr.lastname || curr.name.split(' ')[1] }</p>
          <p><span>Email :</span> {curr.email}  </p>
          <p><span>Gender : </span> {curr.gender || "No fill"}</p>    

<button onClick={() =>handleBlocked(curr._id)}>unBlockeg</button> 
<button onClick={()=>handleRequest(curr.email)}>Request</button> 

        </main> 
        </li>
        )  
        })
        }

       </div>
    
     </ul>
        </section>

        <section className="BlockRequest" style={{left: tofwhy == false? "100%" : "", transition: "all .3s linear"}}>
<div>
<h1>{request.email}</h1>
<button onClick={() =>settogwhy(false)}><FaArrowLeftLong/> Skip</button>
</div>

<div className="request">
    <h3>You : {request.whyBkocked}</h3>
</div>
<header>
{
    request.userRequest?.map((curr,index)=>{
      return(
        <div className="request" key={index}>
    <h4>User : {curr}</h4>
</div>
      )  
    })
}
</header>

        </section>
    </main>
 )   
}