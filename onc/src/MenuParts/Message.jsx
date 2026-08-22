import { useQuery } from "@tanstack/react-query"
import { useAuth } from "../ContextAPI/ContextAPI"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading/Loading"
import { useEffect, useState } from "react"
import { IoMdSend } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookMessenger } from "react-icons/fa6";
import { useRef } from "react"
import {motion} from "motion/react"
import { useAuth2 } from "../ContextAPI/ContectApi2"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { TypeAnimation } from "react-type-animation"

export const Message = () =>{
const{email} = useParams()
const refs3 = useRef() 
const{AuthToken,data:authData} = useAuth()
const{translation,resetTranscript,setTraslation,transcript,setmic,mess,setmess} = useAuth2()
const current = new Date()
const refsul = useRef()
const[edit,setedit] = useState({
  edit:"",
  index:""
})

if (!email || !authData) {
  console.log("n0");
  
}

const[user,setuser] = useState({})

useEffect(()=>{
setuser(
  {
    firstname: authData?.firstname || authData.name?.split(' ')[0],
lastname:authData?.lastname || authData.name?.split(' ')[1],
email: authData?.email,
message : `${mess?.message}`,
date: `${current.toLocaleDateString()}-${current.toLocaleTimeString()}`
  }
)
},[authData])


useEffect(()=>{
setuser((prev)=>({
 ...prev,message: `${mess?.message}`   
}))

},[mess.message])

const handleSubmiit = async(e)=>{
      if (e && typeof e.preventDefault === "function") {
    e.preventDefault(); 
  }
  try {
    const response = await fetch("http://localhost:3000/person/contect",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": AuthToken
        },
        body:JSON.stringify(user)
    })
    setmess({message: ""})
    console.log(response);
    
  } catch (error) {
    console.log("handleSubmiit",error);
    
  }  
}
const getmessage = async() =>{
 try {
    const response = await fetch(`http://localhost:3000/person/contectEmail/${email}`,{
        headers:{
            "Authorization": AuthToken
        }
    })
    const obj = await response.json();
    return obj;
 } catch (error) {
    console.error("getmessage",error);
    
 }   
}
const deleteOnemessage = async(e,email,mess,index) =>{
 try {
    e.preventDefault()
  const response = await fetch(`http://localhost:3000/person/delete/contect/${email}`,{
    method:"PATCH",
    headers:{
      "Content-Type": "application/json",
      "Authorization": AuthToken
    },
    body:JSON.stringify({mess,index})
  })
  console.log(response);
  
 } catch (error) {
  console.log(error);
  
 } 
}



useEffect(()=>{
let contect = ""  
let contectTrans = translation.toLowerCase();
if (contectTrans.includes("mess")) {
  let index = contectTrans.indexOf("message")
  contect = translation.slice(index +7)
  .replace(/[.\s]/g, " ")
  .replace(/[?\s]/g, " ")
  .trim()
}

  if (contect) {  
  setmess((prev)=> ({...prev,message:!contect.includes("send")&& !contect.includes("remove") && !contect.includes("message") && contect}))
}
 if(translation.toLowerCase().includes("send")){  
handleSubmiit()
resetTranscript()
setTraslation("")
setmic("")
}
},[translation])

useEffect(()=>{
const handlegmaes = async()=>{  
if (!authData.email) {
  return;
}
const respon = await fetch("http://localhost:3000/onc/edit",{
  method: "POST",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({mess: true,email:authData.email})
})
}
handlegmaes()
},[authData.email])

useEffect(()=>{
 const handleedit = async() =>{
if (!authData.email) {
   return; 
}

const respon = await fetch("http://localhost:3000/onc/editpatch",{
  method: "PATCH",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({edit: false,email:authData.email,game:false,mess:true,gcoll:false,home:false})
})
}

if (window.location.pathname === `/user/message/${authData.email}`) {
handleedit()  

}
  
},[window.location.pathname,authData])



const{data,isLoading,error} = useQuery({
 queryKey:['gets'],
 queryFn: getmessage,
 refetchInterval: 100   
})

useEffect(()=>{
if (refsul.current) {
  refsul.current.scrollTop = refsul.current.scrollHeight
}
},[data])

const{contextSafe} = useGSAP()

const addgsap = contextSafe(()=>{
  gsap.from(".Message .maninmessage",{
    opacity:0,
    duration:0.5,
    stagger: 0.2,
  })
})


useGSAP(()=>{
addgsap()
},{scope:".Message",dependencies:[data]})


if(isLoading || !authData || authData.length == 0){
return <Loading/>
}
if(error) return <div>{error}</div>

const varients = {
  hidden: {scale:0},
  visible:{scale:1,transition:{type:"spring",duration:0.7,ease:"easeInOut",damping:15,stiffness:300}}
} 



return(
<main>
<section className="Message">
  <div></div>
<footer>
  {
data.map((curr,index)=>{
 return(
<ul key={index} ref={refsul}>
{
curr.message?.map((mess,key)=>{
  
 return(   <main key={key} className="maninmessage">

<pre>{curr.date[key]}</pre> 
<div>
<li> 
{authData.img.length !==0 ?  <img src={`http://localhost:3000/${authData.img[0]}`} alt="" /> : <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Download-Image.png" alt="" /> }  
    <p><span>{mess}</span></p>
 
    <motion.button onClick={()=>setedit({edit:mess,index:key})}
    initial="hidden"
    variants={varients}
    animate="visible"
    whileHover={{scale: 1.2}}
    whileTap={{scale:1}}  
    >
      <MdModeEditOutline/>
      </motion.button>
     </li></div> 
     
{data[0]?.Replay[key] ? 

<div>
<pre>{curr.Rdate[index]}</pre>
<dd> 
<img src="https://th.bing.com/th/id/OIP.XKdZgJT9MaVBqYDg-5JlvgAAAA?rs=1&pid=ImgDetMain" alt="" />
<p>{data[0]?.Replay[key]}</p>  
  <br />
</dd> </div>:  ""}
  
                </main>
               )    
            })
            }
            {/* /end/  */}
            <br />
                </ul>
             )   
            })
          }  
            {
              data.length == 0 &&<>
    <ul>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Contact Us Today',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Contact Us Anytime',
        1000,
        'Contact Us Now',
        1000,
        'Contact Us Easily',
        1000
      ]}
      wrapper="span"
      speed={50}
      className="EnterSomeproblem"
      repeat={Infinity}
    />
    </ul>
              </>
            }
        </footer>

   <section className={`${mess.message.length >=64 ? "bigtextarea" : ""}`}>
    <FaFacebookMessenger/>
<form onSubmit={handleSubmiit}>

<motion.textarea 
       initial="hidden"
 variants={varients}
 animate="visible"
 whileTap={{scale:0.93}}
  placeholder="Enter Message" 
  value={mess.message}  
  onChange={(e) =>{    
  setmess((prev) => ({ ...mess, message: e.target.value }))
  if (e.target.value.length === 0) {
    resetTranscript();
    setTraslation("")
  }
  }} 
/>
   <motion.button type="Submit"
       initial="hidden"
 variants={varients}
 animate="visible"
 whileHover={{scale: 1.1}}
 whileTap={{scale:1}}
   ><IoMdSend/></motion.button>     
</form> 
   </section>

 {
  edit.index !== "" &&
  <>
    <div className="editinput">
    <form onSubmit={(e)=>deleteOnemessage(e,authData.email,edit.edit,edit.index)}>
       <motion.div className="crossedit" onClick={()=>setedit({index:""})}
              initial="hidden"
 variants={varients}
 animate="visible"
 whileHover={{scale: 1.2}}
 whileTap={{scale:1}}
        ><RxCross2/></motion.div>  
      <motion.input 
      
initial="hidden"
 variants={varients}
 animate="visible"
 whileTap={{scale:0.99}}

      type="text" value={edit.edit} onChange={(e)=>setedit({...edit,edit:e.target.value})}/>
      <motion.button className="sendedit" type="submit"

initial="hidden"
 variants={varients}
 animate="visible"
 whileHover={{scale: 1.1}}
 whileTap={{scale:1}}

      ><IoMdSend/></motion.button>
    </form>
   </div>
  </>
 }
 
    </section>
    
    </main>
)    
}