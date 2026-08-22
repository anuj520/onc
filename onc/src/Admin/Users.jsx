import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../ContextAPI/ContextAPI";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../Loading/Loading";
import { FaSearch, FaUser } from "react-icons/fa";
import { AdminMenu } from "./AdminMenu";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiDownArrow } from "react-icons/bi";
export const Users = () => {
    const { AuthToken,reand,data:authData } = useAuth();
    const[search,setsearch] = useState("")
    const[Pimg,setImg] = useState()
    const[tofwhy,settogwhy] = useState(false)
    const[em,setEmail] = useState()
    const[profile,setProfile] = useState([])
    const[why,setwhy] = useState({        
 whyBkocked : ""
    })
    const[block,setblock] = useState({
        isBlocked: true
    })


    const getUser = async () => {
        try {
            const response = await fetch("https://orion2-0.onrender.com/admin/user", {
                method: "GET",
                headers: {
                    Authorization: AuthToken,
                },
            });
            const res = await response.json();
            return res;
        } catch (error) {
            console.log("getUser", error);
        }
    };
    const handleDelete = async(id) =>{
        try {
           const response = await fetch(`https://orion2-0.onrender.com/admin/user/delete/${id}`,{
            method: "DELETE",
            headers:{
             Authorization:AuthToken   
            }
           }) 
          if (response.ok) 
            toast.success("Delete sucessful")
          getUser()
          } 
         catch (error) {
        console.log("handleDelete",error);
            
        }    
        }  
        
     const handleBlocked = async(id,email) =>{
        setEmail(email)
      const response = await fetch(`https://orion2-0.onrender.com/admin/blocked/${id}`,{
        method: "PATCH",
        headers:{
            "Content-Type" : "application/json",
            Authorization: AuthToken,
        },
        body:JSON.stringify(block)
      })  
      console.log(response);
      settogwhy(true)
      
     }   

    const profileData = async() =>{
       try {
        const response = await fetch("https://orion2-0.onrender.com/admin/profile",{
            method: "GET",
            headers:{
                Authorization: AuthToken
            }
        })
        const obj = await response.json()
        // console.log(obj);
        
        setProfile(obj)
       } catch (error) {
        console.error("profileData",error);
        
       } 
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
    console.log(response);
    settogwhy(false)
    setwhy({whyBkocked : ""})
    }



     useEffect(()=>{
    profileData()
    },[])

    const { data, error, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: getUser,
        refetchInterval: 1
    });
    if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    if (isLoading || !profile) {
        return <Loading/>
    }
         
    const SearchEmail = data.filter((curr)=>(
      curr.email.toLowerCase().includes(search.toLowerCase().trim())
    ))

    return (
        <main>
        {
            // <img src={`https://orion2-0.onrender.com/${Pimg}`} alt="" />
        }
            <section className="UsersData">
                <section className="SearcInput" style={{marginLeft : '3.5%',width: '93%'}}>
                <form >
                <span><FaSearch/></span>
                <input type="text" placeholder="Search Email" value={search} onChange={(e) =>setsearch(e.target.value)}/>
                </form>
        
                </section>
            <h1><FaUser/> Users</h1>
            <footer style={{ position: 'relative',top: "31.5rem"}}>
            <AdminMenu/>
            </footer>
           <div>
            {
            SearchEmail?.map((curr,index)=>{                
            return(
            <li key={index} style={{ display : curr.isBlocked == true   ? `none` : ""}}>
               {
              curr.img.length !== 0  ? <> <img src={`https://orion2-0.onrender.com/${curr.img}`} alt="" /></> : 
             (curr.gender == "male" ? <><img src="https://c4.wallpaperflare.com/wallpaper/777/604/837/cyberpunk-cyberpunk-2077-v-cyberpunk-2077-video-games-wallpaper-preview.jpg" alt="" /></> : <><img src="https://i.pinimg.com/originals/1b/61/26/1b6126773471aa008fa51389f1762dd6.jpg" alt="" /></>)
               }
      
      
       <main
  style={{
    backgroundImage: `linear-gradient(to right, rgba(22, 22, 22, 0.8),
     rgba(22, 22, 22, 0.7)), 
     url(ad${reand + 1}.jpg)`,
  }}
>
             <br /><br />
              <p><span>Firstname :</span> {curr.firstname}</p>
              <p><span>Lastname :</span> {curr.lastname}</p>
              <p><span>Email :</span> {curr.email}</p>
              <p><span>Gender : </span> {curr.gender}</p>
              <NavLink to={`/admin/user/${curr._id}/edit`}>
           <button>Edit</button>
             </NavLink>    
<button onClick={() => handleDelete(curr._id)}>Delete</button>

 <button onClick={() =>handleBlocked(curr._id,curr.email)} style={{marginLeft: "10rem",marginTop: "2rem",backgroundColor :"red"}}>Blockeg</button>           
            </main> 
            </li>
            )  
            })
            }
           </div>
           <br /><br /><br />
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
    );
};
