import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { useAuth } from "../ContextAPI/ContextAPI";
import { Loading } from "../Loading/Loading";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { AdminMenu } from "./AdminMenu";

export const ProblemReplay = () =>{
const {id} = useParams();
const{AuthToken,reand} = useAuth()  
const[file,setfile] = useState(null)
const[problem,setProblem] = useState({
    Reply: ""
})  

const handleProblem = async() =>{
try {
  const response = await fetch('https://orion2-0.onrender.com/admin/allBlog',{
    headers:{
        Authorization: AuthToken,
    }
  })
    const obj = await response.json()
    return obj
} catch (error) {
  console.error("handleProblem",error);
    
}    
}

const currentDate = new Date()

const handleUpdate = async(e) =>{
e.preventDefault();

const fromData = new FormData()
fromData.append("file",file);
fromData.append("Reply",problem.Reply)
fromData.append("Rdate",`${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`)

try {
   const response = await fetch(`https://orion2-0.onrender.com/blogEdit/${id}`,{
    method: "PATCH",
    headers:{
        Authorization: AuthToken
    },
    body:fromData
   }) 
   console.log(response);
   
} catch (error) {
    console.error("handleSubmit",error);
    
}
}




const{data,isLoading,error} = useQuery({
    queryKey: ['gets'],
    queryFn : handleProblem,
    refetchInterval: 100
})

if(isLoading|| data[0] == undefined) return <Loading/>

// console.log(data[0]);

  return(
    <main>

<section className="Problem" style={{backgroundColor : "#0F0F0F"}}>
{
    data.map((curr,index)=>{
      return(
        <section key={index}>
          <div style={{backgroundColor : "#232D3F"}}>
      
            <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Download-Image.png"/>
            <ul>
              <p>{curr.firstname? curr.firstname : curr.name?.split(' ')[0]}</p>
              <p>{curr.email}</p>
            </ul>
          </div>
          <main>

                  {
                    curr?.problem?.map((item,kitem)=>{
                    return(
                      <li key={kitem}>
                        {
                          curr.Date[kitem] && <>
                          <p className="DateP" style={{marginLeft : "49rem"}}>{curr.Date[kitem]}</p> <br />  
                          </>
                        }
                        {
                    curr.image[kitem] && curr.image[kitem] !== "No"? <>
                     <img src={`https://orion2-0.onrender.com/${curr.image[kitem]}`} alt="" style={{marginLeft :"54%"}}/>
                     <br /><br />
                     </>
                     : <></>
                      }
                     <dd style={{marginLeft :"45%"}}>
                
                 <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Download-Image.png" className="Problemimg" />
                                   
                      <p>{item}</p>
                      </dd>
                      
                      {

                          curr.Rdate[kitem] && <>
                          <br /><br />
                          <p className="DateR" style={{position: "relative",left:"-17rem"}}>{curr.Rdate[kitem]}</p>   
                          </>
                        }
                         {
                    curr.RImg[kitem] && curr.RImg[kitem] !== "No"? <>
                     <img src={`https://orion2-0.onrender.com/${curr.RImg[kitem]}`} alt="" />
                     <br /><br />
                     </>
                     : <></>
                      }
                       {
                        curr.Reply[kitem] && <>
                       <footer style={{marginLeft :"2%"}}>
                       <img src="https://th.bing.com/th/id/OIP.XKdZgJT9MaVBqYDg-5JlvgAAAA?rs=1&pid=ImgDetMain" className="Problemimg" />
                        <p>{curr.Reply[kitem]}</p> 
                       </footer>
                       </>}
                    
                      </li>
                    )  
                    })
                
}
          </main>
          </section>   
      )  
    })
}
<form>
            <input type="file" onChange={(e) =>setfile(e.target.files[0])} required/>
            <textarea type="text" value={problem.Reply} onChange={(e)=>setProblem({...problem,Reply:e.target.value})} placeholder="Enter Some Excuse" required />
            <button  role="button" type="submit" onClick={(e) =>handleUpdate(e)}><IoMdSend/></button>
            </form>
            
        </section>
  <footer style={{transform: "rotate(90deg)",width: "50%",top: "-23rem",position: "relative",marginLeft :"-20rem"}} className="AiA">
                      <AdminMenu/>
  </footer>
    </main>
  )  
}