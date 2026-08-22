import { BsPersonCircle } from "react-icons/bs";
import { useAuth } from "../ContextAPI/ContextAPI";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Menu } from "../HomePart/Menu";
import { useEffect, useState } from "react";
import { FaCamera, FaFacebookMessenger, FaInfo } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import axios from "axios";
import { Footer } from "../footer/footer";
import { Loading } from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { PersonBlocked } from "./../Error/PersonBlocked"
import { useRef } from "react";
import {motion} from "motion/react"
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SettingTable } from "../onctables/settingtable";
import { ImCross } from "react-icons/im";
import { ProfileTable } from "../onctables/profiletable";

export const User = () => {
  const { Logout, data: authData,reand,AuthToken,userData,isLogin } = useAuth();
  const{translation,handleVoice,setTraslation,setmic,resetTranscript} = useAuth2()
  const [file, setFile] = useState(null);
  const[table2,settable2] = useState(false)
  const refs3 = useRef()
  const[object,setobj] = useState([])
  const click = useRef(null)
  const navigate = useNavigate()
  const [data, setData] = useState(localStorage.getItem('img'));

  const handleData = async () => {
const formData = new FormData();
formData.append('file', file);
formData.append('email',authData.email)

await axios.patch(`http://localhost:3000/profileEdit/${authData.email}`, formData)
  .then((res) => {
console.log(res.data.img);
console.log(res);
setData(res.data.img);
localStorage.setItem('img', res.data.img);
  userData()
  })
  .catch((err) => {
console.log(err);
  });
  };

  const getmessage = async() =>{
try {
   const response = await fetch(`http://localhost:3000/person/contectEmail/${authData.email}`,{
   headers:{
   "Authorization": AuthToken
   }
   })
   const obj = await response.json();
   setobj(obj);
   
} catch (error) {
   console.error("getmessage",error);
   
}   
   }   

const handleView = async(id) =>{
try {
  const response = await fetch(`http://localhost:3000/user/notiview/${id}`,{
   method : "PATCH",
headers:{
  Authorization:AuthToken
}
  })
  console.log(response);
  userData()
  
} catch (error) {
  console.log(error);
  
}
}

const handkeSeContect = async(id)=>{
  const res = await fetch(`http://localhost:3000/person/contectSee/${id}`,{
  method: "PATCH",
  headers:{
Authorization:AuthToken
  }
  })
  console.log(res);
  
  userData()
}

const handleClo = () =>{
  console.log("ss");
  
}

useEffect(() => {
  if (translation.toLowerCase().includes("add")) {
handleData()
  }
}, [translation]);

  useEffect(()=>{
  if (translation == "logout") {
      Logout()
      handleVoice("Logout done")
       window.location.reload()
}
},[translation])

useEffect(()=>{
if (translation == "details") {
  settable2(true)
   resetTranscript();
 setmic("")
setTraslation("")
handleVoice("gmaes details table")
} else if(translation == "close info")
  settable2(false)
   resetTranscript();
 setmic("")
setTraslation("")
},[translation])


const{contextSafe} = useGSAP()

const addgsap = contextSafe(()=>{
  gsap.from(".user .NoticationMessage svg",{
opacity:0,
stagger:0.2,
duration:0.7,
ease:"back.out"
  })
  gsap.from(".user .info img,.h1user",{
scale:0,
stagger:0.2,
duration:0.5
  })
})


useGSAP(()=>{
addgsap()
},{scope:".user",dependencies: [authData]})

if (!isLogin) {
  navigate("/login")
}

   useEffect(()=>{
  getmessage()
 
  },[authData.email])

  if (authData.isBlocked) {
return <PersonBlocked/>
  }
  
 const rolex = !authData.img || (Array.isArray(authData.img) && authData.img.length === 0);
 let ismenu = localStorage.getItem("isMenu2")
 let ismenu2 = localStorage.getItem("isMenu")
  

const varients = {
  hidden: {scale:0},
  visible:{scale:1,transition:{duration:0.7,ease:"easeInOut",type:"spring",damping:15,stiffness:300}}
}

if (authData.length == 0) {
 return <Loading/> 
}

if (table2 == true && refs3.current) {
 document.body.style.overflow = "hidden"; 
 refs3.current.style.filter = "blur(10px)"
}else if(refs3.current){
  document.body.style.overflow = "auto"
  refs3.current.style.filter = "none"
}


  return (
<>
     <div className="onctraninmenu2" style={{zIndex:"9999999999999999",marginTop:"-3%"}}>
          {table2 ?
          <>
        <div className="svhmenufont">  <ImCross onClick={()=>settable2(false)}/>   </div>  
          <br /><br />
          <ProfileTable/>
          </>: 
        <div className="svhmenufont" > <FaInfo onClick={()=>settable2(true)}/> </div>
            }
      </div > 
 
<main
ref={refs3}
style={{
  marginTop: ismenu == "true" && ismenu2 == "true" ? "-0%" : 
  ismenu == "true" ? "4%" :  
  ismenu2 == "true" ? "0.2%" : ""
  }}
>
  <section className="user">

  <div className="NoticationMessage">
{
  authData.notification !== '' ? <div className="message0" style={{opacity: !authData.view ? "0" :"1"}}>1</div>: ""  

}
<NavLink to={'notification'}> 
<motion.dd
variants={varients}
initial="hidden"
animate="visible"
   whileHover={{scale:1.082}}
 whileTap={{scale:1}}
><IoMdNotifications onClick={() =>handleView(authData._id)}/>
</motion.dd></NavLink>

 <NavLink to={`message/${authData.email}`} onClick={() =>handkeSeContect(object[0]._id)}> 
 <motion.dd
 initial="hidden"
 animate="visible"
 whileHover={{scale:1.082}}
 whileTap={{scale:1}}
 >
  <FaFacebookMessenger/>
  </motion.dd></NavLink>

 {
  object.length != '' ? <div className="message1" style={{opacity: !object[0].seeMessage ? "0" :"1"}}>1</div>:""  
}
  </div>
<section className="info" >
  <form>
{rolex ? 
  <>
  <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Download-Image.png" alt="" className="userBackimg" />
<label style={{marginLeft: !file && "-31%"}}> <span>{file ?file.length < 17 ? file.name : `${file.name.slice(0,17)}..`: <FaCamera/>}</span>
<input type="file" onChange={(e) => setFile(e.target.files[0])}   />
</label>
<motion.button 
initial="hidden"
variants={varients}
animate="visible"
whileTap={{scale:1}}
whileHover={{scale:1.033}}
className="imgaddbutton"
  role="button" 
  type="button"  
  onClick={handleData}>
  ADD
</motion.button>
  </>:
  <>
  {authData? <img src={`http://localhost:3000/${authData.img[0]}`} className="userBackimg" />:
 <>
   <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Download-Image.png" alt="" className="userBackimg" />
<label style={{marginLeft: !file && "-31%"}}> <span>{file ?file.length < 17 ? file.name : `${file.name.slice(0,17)}..`: <FaCamera/>}</span>
<input type="file" onChange={(e) => setFile(e.target.files[0])} />
</label>
<motion.button 
  initial="hidden"
  variants={varients}
  animate="visible"
  whileHover={{scale:1.033}}
  whileTap={{scale:1}}
  role="button" 
  type="button"  
  onClick={handleData}>
  ADD
</motion.button> </>}
  </>
}


  </form>
  <div>
<main>
  <h1 className="h1user">
<span>Name</span> : {authData.firstname ? authData.firstname : authData.name?.split(' ')[0]}
  </h1>
  <h1 className="h1user">
<span>LastName</span> : {authData.lastname ? authData.lastname : authData.firstname ? authData.firstname : authData.name?.split(' ')[1]}
  </h1>
  <h1 className="h1user">
<span>Email</span> : {authData.email}
  </h1>
  <h1 className="h1user">
<span>Gender</span> : {authData.gender ? authData.gender : "Add please"}
  </h1>
  
  <div className="mainbuttoncontroler">
<NavLink to={`/login`}>
<motion.div className="boderbutton"
onClick={Logout}
initial="hidden"
animate="visible"
variants={varients}
  whileHover={{scale:1.033}}
  whileTap={{scale:1}}
>
  <button style={{backgroundColor: "#ff6600"}}
  >Logout</button>
</motion.div>

</NavLink>
<NavLink to={`/edit`} reloadDocument>
  <motion.div className="boderbutton"
  initial="hidden"
  variants={varients}
  animate="visible"
  whileHover={{scale:1.033}}
  whileTap={{scale:1}}
  >
  <button>Edit</button>
</motion.div>
</NavLink>
  </div>

</main>
  </div>
</section>
<div style={{ marginTop: "-13rem" }}>
  <Menu data={authData} />
</div>
  </section><br /><br />
  <Footer />
  <Outlet/>
</main>
</>   
  );
};
