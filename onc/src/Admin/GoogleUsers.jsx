import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../ContextAPI/ContextAPI"
import { Loading } from "../Loading/Loading"
import { NavLink } from "react-router-dom"
import { toast } from "react-toastify"
import { FaSearch } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { useState } from "react"
import { AdminMenu } from "./AdminMenu"
import { FaArrowLeftLong } from "react-icons/fa6"

export const GoogleUsers = () =>{
    const{AuthToken,reand}= useAuth()  
   const[tofwhy,settogwhy] = useState(false)  
    const[em,setEmail] = useState()
        const[why,setwhy] = useState({        
     whyBkocked : ""
        }) 
     const[block,setblock] = useState({
      isBlocked: true
       })

 const[search,setsearch] = useState("")
    const getGooleUsers = async() =>{
 try {
    const response = await fetch("https://orion2-0.onrender.com/admin/googleUser",{
        headers:{
        Authorization: AuthToken
     }   
    })
    const obj = await response.json();
return obj
   
 } catch (error) {
   console.log("getGooleUsers", error);
    
 }   
}    

const handleDelete = async(id) =>{
try {
    const response = await fetch(`https://orion2-0.onrender.com/admin/googleUser/delete/${id}`,{
        method: "DELETE",
        headers:{
         Authorization: AuthToken
        }
     })
     const obj = await response.json();
     getGooleUsers()
        toast.success(obj)   
} catch (error) {
  console.log("handleDelete",error);  
} 
}

const handleBlocked = async(id,email) =>{
   setEmail(email)
  const response = await fetch(`https://orion2-0.onrender.com/admin/blocked/${id}`,{
   method:"PATCH",
   headers:{
      "Content-Type" : "application/json",
      Authorization: AuthToken
   },
   body:JSON.stringify(block)
  }) 
  console.log(response);
  settogwhy(true)
    
}

const handleSubmit = async(e) =>{
   e.preventDefault()
   const response = await fetch(`https://orion2-0.onrender.com/admin/request/${em}`,{
       method:"POST",
       headers:{
           "Content-Type" : "application/json",
           Authorization: AuthToken
       },
       body:JSON.stringify(why)
   })
const data = response.json()
console.log(data);

   settogwhy(false)
   setwhy({whyBkocked : ""})
   }
// console.log(block);


const{data,error,isLoading} = useQuery({
    queryKey:['gets'],
    queryFn :getGooleUsers,
    refetchInterval: 1000
})   

if(isLoading) return <Loading/>
if (error) return <div>{error}</div> 

if(data.length == 0 || data == "No User Found !") return <div>No Data Found !</div>

 const SearchEmail = data?.filter((curr)=>(
   curr.email.toLowerCase().includes(search.toLowerCase().trim()) 
 ))

//  console.log(data);
 
 
 
 return(
    <main>
               <section className="UsersData">
                <section className="SearcInput" style={{marginLeft : '3.5%',width: '93%'}}>
                <form >
                <span><FaSearch/></span>
                <input type="text" placeholder="Search Email" value={search} onChange={(e) =>setsearch(e.target.value)}/>
                </form>
        
                </section>
            <h1><FcGoogle/> Users</h1>
            
           <div>
            {
            SearchEmail?.map((curr,index)=>{
            return(
            <li key={index} style={{ display : curr.isBlocked == true   ? `none` : ""}}>
               {
                curr.img.length !== 0 ? <><img src={`https://orion2-0.onrender.com/${curr.img}`} alt="" /> </> : <><img src="https://wallpapercave.com/wp/wp2860517.jpg" alt="" style={{objectFit: "contain"}}/></>
               }
                     <main
  style={{
    backgroundImage: `linear-gradient(to right, rgba(22, 22, 22, 0.8), 
    rgba(22, 22, 22, 0.7)), 
    url(ad${reand}.jpg)`,
  }}
>
             <br /><br />
              <p><span>Firstname :</span> {curr.name ?  curr.name.split(' ')[0]:curr.name}</p>
              <p><span>Lastname :</span> {curr.name ?  curr.name.split(' ')[1]:curr.name}</p>
              <p><span>Email :</span> {curr.email}</p>
              <p><span>Gender :</span> {curr.gender?curr.gender : "No Fill"}</p>
  
<button onClick={() => handleDelete(curr._id)}>Delete</button>

<button onClick={() =>handleBlocked(curr._id,curr.email)} style={{marginTop: "2rem",backgroundColor :"red"}}>Blocked</button>  


      
            </main> 
            </li>
            )  
            })
            }
           </div>
           <br />
           <div style={{position:"fixed",top:"39rem",left:"-3%"}}>
           <AdminMenu/>
           </div>
            </section>
  <section className="WhyitBlocked" style={{left: tofwhy == true? "50%" : "", transition: "all .3s linear",
    backgroundImage: `linear-gradient(to right, rgba(22, 22, 22, 0.8),
    rgba(22, 22, 22, 0.7)), 
    url(ad${reand}.jpg)`,

                }}>
                    <img src="https://th.bing.com/th/id/OIP.dvFUiNv--jdhoEdy1gx3CQHaNK?rs=1&pid=ImgDetMain" alt="" />
                    <form onSubmit={handleSubmit}>
               <div onClick={()=>settogwhy(false)}><FaArrowLeftLong/> Skip</div>
<img src="https://i.pinimg.com/originals/c8/af/94/c8af94689b81752d0054fa79f9d13920.png" alt="" />
<h1>Why <span>nanuj062@gamil</span> isBlocked dddddddddddddd</h1>   
                    <button>Send</button>
                    <textarea type="text" placeholder="Why its is Blocked" value={why.whyBkocked} onChange={(e)=>setwhy({...why,whyBkocked:e.target.value})}/>
                    </form>
                </section>
    </main>
 )   
}