import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../ContextAPI/ContextAPI"
import { AdminMenu } from "./AdminMenu"
import { Loading } from "../Loading/Loading"
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify"

export const Updateuser = () =>{
    const{AuthToken,reand} = useAuth()    
    const navigate = useNavigate()
const[User,setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: ""
})  

const params = useParams()

const getSingleUser = async() =>{
try {
  const response = await fetch(`https://orion2-0.onrender.com/admin/user/${params.id}`,{
    method: "GET",
    headers:{
    Authorization:AuthToken   
    }
  })  
  const data = await response.json()
     console.log(data);
  setUser(data)
} catch (error) {
 console.log("getSingleUser",error);
    
}    
}

useEffect(()=>{
getSingleUser()
},[])




const handleChange = (e) =>{
const{name,value} = e.target;
setUser((prev  => ({...prev,[name]:value})))
}
const handeleSubmit = async(e) =>{
e.preventDefault()

const response = await fetch(`https://orion2-0.onrender.com/admin/user/update/${params.id}`,{
  method: "PATCH",
  headers:{
    "Content-Type": "application/json",
   Authorization:AuthToken 
  },
  body:JSON.stringify(User)  
})
if (response) {
   toast.success('Update Sucessfuly') 
   navigate('/users')
}else{
    console.log("not update");
 toast.error('Not Update')   
}
}  

if (User.img == undefined) {
  return <Loading/>
}

return(
    <>
   <main>
               <section className="UsersData">
            <h1><MdEdit/> Edit </h1>
           <div>
            <li>
               {
                User.img[0] ? <><img src={`https://orion2-0.onrender.com/${User.img}`} alt="" /> </> :
                 (User.gender == "male" ? <><img src="https://c4.wallpaperflare.com/wallpaper/777/604/837/cyberpunk-cyberpunk-2077-v-cyberpunk-2077-video-games-wallpaper-preview.jpg" alt=""/></> : <><img src="https://i.pinimg.com/originals/1b/61/26/1b6126773471aa008fa51389f1762dd6.jpg" alt="" /></>)
               }
                     <main
   style={{
    backgroundImage: `linear-gradient(to right, rgba(22, 22, 22, 0.8),
     rgba(22, 22, 22, 0.7)), 
      url(https://4kwallpapers.com/images/walls/thumbs_3t/8702.jpg)`,
      backgroundSize: "fill"
  }}
>
             <br /><br />
             <form onSubmit={handeleSubmit}>
        <label htmlFor="firstname">Firstname :</label>
        <input type="text" name="firstname" value={User.firstname} onChange={handleChange}/>
        <label htmlFor="lastname">Lastname :</label>
        <input type="text" name="lastname" value={User.lastname} onChange={handleChange}/>
        <label htmlFor="email">Email :</label>
        <input type="text" name="email" value={User.email} onChange={handleChange}/>
        <label htmlFor="gender">Gender :</label>
        <input type="text" name="gender" value={User.gender} onChange={handleChange}/>

        <button type="Submit">Save</button>
    </form>
            </main> 
            </li>
           </div>
           <br /><br /><br /><br /><br />
           <AdminMenu/>
            </section>
    </main>
    </>
)    
}