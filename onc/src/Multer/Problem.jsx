import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { Footer } from "../footer/footer"
import { toast } from "react-toastify";
import { IoMdSend } from "react-icons/io";
import { Menu } from "../HomePart/Menu"
import {useQuery} from  "@tanstack/react-query"
import { Loading } from "../Loading/Loading"
import { NavLink, useNavigate } from "react-router-dom"
import { FaCamera } from "react-icons/fa";
import { Aimenu } from "../HomePart/AiMenu"
import {motion} from "motion/react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Mike } from "../maik/maik"
import { MdNotificationsActive, MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md"
import { OncTrainText } from "../fav/onctrain.text"
import { ImCross } from "react-icons/im"
import { FaInfo } from "react-icons/fa6"
import { LuMessageCircleWarning } from "react-icons/lu"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { Abouttable } from "../onctables/abouttable"

export const Problem = () =>{
  const{data,reand,AuthToken,isLogin,settable,table} = useAuth()
      const{start,translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()  
    const[table2,settable2] = useState(false)
    const refs3 = useRef()
  const[Res,setRes] = useState()
 const[file,setfile] = useState(null)  
 const[obj2,setObj] = useState([])
 const navigate = useNavigate()
 const[problem,setproblem] = useState('')
 const refs = useRef()


const handleGetProblem = async(email) =>{
const response = await fetch(`http://localhost:3000/user/Profile/${email}`,{
  headers:{
    Authorization: AuthToken
  }
}) 
const obj = await response.json();
setObj(obj); 
}

const current = new Date()

const handleUpdate = async(e) =>{
  if(e && typeof e.preventDefault === "function"){
    e.preventDefault()
  }
  const fromData = new FormData()
  fromData.append("file",file !== null ? file : "No")
  
  fromData.append("firstname",data.firstname? data.firstname :data.name.split(' ')[0])
  fromData.append("lastname",data.lastname ?data.lastname: data.name.split(' ')[1])
  fromData.append("email",data.email)
  fromData.append("problem",problem)  
  fromData.append("Date",`${current.toLocaleDateString()} ${current.toLocaleTimeString()}`)
    
  if (problem == '') {
    alert("fill properli")
  }


 const res =  await axios.post("http://localhost:3000/blog",fromData,{
    headers:{
    "Authorization"  :AuthToken
    }
  })
    console.log(res);
    if (problem == '') {
      alert("fill properli")
    }
   handleGetProblem(data.email) 
   setproblem('')
   setfile(null);
}
  useEffect(()=>{
  if (translation == "info") {
    settable(true)
    handleVoice("orion information table")
    resetTranscript();
   setmic("")
  setTraslation("")
  }else if(translation == "close info"){
   settable(false)
   resetTranscript();
   setmic("")
  setTraslation("")
  }
  },[translation])

useEffect(()=>{
let chat = "";
let chates = translation.toLowerCase();
if (chates.includes("chat")) {
  let index = chates.indexOf("chat");
  chat = translation.toLowerCase().slice(index + 10)
  .replace(/[.\s]/g, " ")
  .replace(/[?\s]/g, " ")
}
if (chat && !chat.includes("cut") && !chat.includes("send") && !chat.includes("cut")) {
 setproblem(chat) 
}
if (translation.toLowerCase().includes("send") ||chat.includes("send")) {
  handleUpdate()
 resetTranscript()
  setTraslation("")
  setmic("")
}
if (translation == "cut" || chat.includes("cut")) {
  setproblem("")
   resetTranscript()
  setTraslation("")
  setmic("")
}
},[translation])

useEffect(()=>{
handleGetProblem(data.email)
},[data.email])

useEffect(()=>{
if (refs.current) {
setTimeout(() => {
    refs.current.scrollTop = refs.current.scrollHeight; 
}, 2000);
} 
},[obj2])

const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
} 
let mic = localStorage.getItem("togvoic") 

if (!isLogin) {
  navigate("/login")
}

const{contextSafe} = useGSAP();

const addgsap = contextSafe(()=>{
 gsap.from(".Problem",{
  y: 175,
  opacity:0,
  duration:.5,
  ease:"back.out"
 }) 
})

useGSAP(()=>{
 addgsap() 
},{scope:"body",dependencies: [obj2]})


if (obj2 ==[] || obj2.length == 0) {
  return <Loading/>
}


 return(
<>
<div className="mikevoice" style={{zIndex:"99999999999999999999999999999999999999999999999999999",marginTop:"21%"}}>
      <Mike/>
        <div className="buttonmic">
          {mic== "true" ?
      <MdRecordVoiceOver onClick={handlemics}/>
       : 
       <MdVoiceOverOff  onClick={()=> start()}/>
      }
          </div>    
</div>
 <div className="onctraninmenu" style={{zIndex:"999999999"}}>
      {table ?
      <>
    <div className="svhmenufont">  <ImCross onClick={()=>settable(false)}/>   </div>  
      <OncTrainText/>
      </>: 
    <div className="svhmenufont"> <FaInfo onClick={()=>settable(true)}/> </div>
        }
      </div>
<div className="userivolment" style={{zIndex:"9999999999999999999"}}>
  <LuMessageCircleWarning/>
  <MdNotificationsActive/>
</div>

 <div className="onctraninmenu2" style={{zIndex:"999"}}>
      {table2 ?
      <>
    <div className="svhmenufont" style={{marginTop:"-3%"}}>  <ImCross onClick={()=>settable2(false)}/>   </div>  
      <br /><br />
      <Abouttable/>
      </>: 
    <div className="svhmenufont" style={{marginTop:"-3%"}}> <FaInfo onClick={()=>settable2(true)}/> </div>
        }
      </div>  
    <main ref={refs3}>
        <section className="Problem">
         <NavLink to={'/user'}> <div className="useringoproblems">
          {data.img?.length !==0 ? 
            <motion.img src={`http://localhost:3000/${data.img}`} alt=""   animate={{scale:1,transition:{ease:"easeInOut",duration:0.7,damping:15,stiffness:300,type:"spring"}}}
         whileHover={{scale:1.030}}
         whileTap={{scale:1}} />
            : 
            <motion.img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Download-Image.png"   
            animate={{scale:1,transition:{ease:"easeInOut",duration:0.7,damping:15,stiffness:300,type:"spring"}}}
         whileHover={{scale:1.030}}
         whileTap={{scale:1}}/>
          }
            <motion.div className="nameemailinproblem"
             animate={{scale:1,transition:{ease:"easeInOut",duration:0.7,damping:15,stiffness:300,type:"spring"}}}
         whileHover={{scale:1.020}}
         whileTap={{scale:1}}
            >
              <p>{data.firstname? data.firstname : data.name?.split(' ')[0]}</p>
              <p>{data.email}</p>
            </motion.div>
          </div></NavLink>
      {/* //messsagesection    */}
 <main ref={refs}>
{
  obj2?.problem?.map((item,kitem)=>{
  return(
    <li key={kitem}>
     <div className="userimsageandimages">
      {
        obj2.Date[kitem] && <>
        <p className="DateP">{obj2.Date[kitem]}</p>
        </>
      }
       {
  obj2.image[kitem] && obj2.image[kitem] !== "No"&& 
   <img src={`http://localhost:3000/${obj2.image[kitem]}`} alt="" />
  }
   <dd> 
   <div className="itemsetproblem">
    <p><span>You: </span> {item}</p>
  </div>   
    </dd>
    </div> 
    
    {/* //replay */}
  <div className="replaymessageadminma">
    {
        obj2.Rdate[kitem] && 
        <p className="DateR">{obj2.Rdate[kitem]}</p>   
      }
     {
      obj2.Reply[kitem] && <>
     <footer>
      <div className="fixedwidethreplayproblem">
      <p><span>Admin: </span> {obj2.Reply[kitem]}</p> 
      </div>
     </footer>
     </>}
     {
  obj2.RImg[kitem] && obj2.RImg[kitem] !== "No" && 
   <img src={`http://localhost:3000/${obj2.RImg[kitem]}`} className="Rimg"/>
    }
     </div>    
    </li>
  )  
  })
}
          </main>
          
            <form>
              <motion.div className="updoadfilebutton"
                animate={{scale:1,transition:{ease:"easeInOut",duration:0.7,damping:15,stiffness:300,type:"spring"}}}
         whileHover={{scale:1.030}}
         whileTap={{scale:1}}
              >
                <label><span>{file ? file.name.length> 17 && `${file.name.slice(0,17)}..` :<FaCamera/>}</span>
            <input type="file" onChange={(e) =>setfile(e.target.files[0])} required/>
            {/* <span>{file?file.name:"No file chosen"}</span> */}
              </label>
              </motion.div>

            <motion.textarea type="text" value={problem} onChange={(e) => setproblem(e.target.value)} placeholder="Enter Problem" required
            style={{marginLeft:file?.name && "17%",width: file?.name && "75%"}} 
                animate={{scale:1,transition:{ease:"easeInOut",duration:0.7,damping:15,stiffness:300,type:"spring"}}}
         whileTap={{scale:0.99}}
              />
            <motion.button  role="button" type="submit" onClick={(e) =>handleUpdate(e)}
            animate={{scale:1,transition:{ease:"easeInOut",duration:0.7,damping:15,stiffness:300,type:"spring"}}}
         whileHover={{scale:1.1}}
         whileTap={{scale:1}}
              ><IoMdSend/></motion.button>
            </form>
            
        </section><br /><br /><br />
        <Footer/>
    </main>
</>     
 )   
}
