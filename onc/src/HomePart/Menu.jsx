import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { SiAmazongames } from "react-icons/si";
import { GiLaurelsTrophy } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { FaCircleInfo, FaV } from "react-icons/fa6";
import { useAuth } from "../ContextAPI/ContextAPI";
import { IoMdCreate } from "react-icons/io";
import { FaInfo } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import { LuMessageCircleWarning } from "react-icons/lu";
import { IoGameController } from "react-icons/io5";
import { AiFillWechat } from "react-icons/ai";
import { MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { PiHeartStraightLight } from "react-icons/pi";
import { MdNotificationsActive } from "react-icons/md";
import { Mike } from "../maik/maik";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { OncTrainText } from "../fav/onctrain.text";
import { useEffect, useState } from "react";
export const Menu = () =>{

  const navigator = useNavigate()
   const{start,translation,setTraslation,resetTranscript,setmic,handleTrain,togvoic} = useAuth2()
const handleNavigate = () =>{
  navigator('/Home')
}

const{handleButtonClick,buttonH,data,table,settable }= useAuth()    

const[filtered,setfiltered] = useState(localStorage.getItem("filtered"));
 const[listen,setlisten] = useState(localStorage.getItem("listen"))
const[open,setOpen] = useState(false)

let ismenu = localStorage.getItem("isMenu2")
let ismenu2 = localStorage.getItem("isMenu")


const handlemics = () =>{
  localStorage.setItem("togvoic",false)
  window.location.reload()
}    

const handlelocal = () =>{
localStorage.removeItem("filtered")
localStorage.removeItem("listen")
setfiltered("");
setlisten("")
}

useEffect(()=>{
if (translation == "info") {
  settable(true)
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
if (translation == "skip") {
 handlelocal() 
}else if (translation == "ok") {
  handleTrain([filtered],listen)
}
},[translation])

if (table == true) {
  document.body.style.overflow = "hidden"
}else{
  document.body.style.overflow = "auto"
}

let mic = localStorage.getItem("togvoic") 

  return(
    <>
    <div className="buttonmic">
    {mic == "true" ?
<MdRecordVoiceOver onClick={handlemics}/>
 : 
 <MdVoiceOverOff  onClick={()=> start()}/>
}
    </div>
{filtered !== null  && filtered !== "" && filtered.length>1 && <>
<div className="yesorno">
<main className="boxtranin">
  <img src="https://res.cloudinary.com/dycmuvzze/image/upload/v1757245924/blackspider_nqa39a.png" alt="" />
<div className="infotrain">
    <h1><span>you say :</span> hello some once {filtered}</h1>
    <p>When you said <span>{filtered}</span> it might have sounded like random words, but to me, it felt like your unique way of saying <span>{listen}</span> Sometimes, we all have our own language—little phrases or codes that carry special meaning. So even though it wasn't the usual greeting, I understood what you meant. It's like a secret way of saying hi without actually saying it, and honestly, that makes it even cooler.</p>
    <h2>what you said was <span>{listen}</span></h2>
<div className="voicebutton">
  <button onClick={()=>handleTrain([filtered],listen)}>ok</button>
<button onClick={handlelocal}>Skip</button>
</div>
</div>
</main>
</div>
</>}

<div className="mikevoice" style={{boder:"12px solid #fff"}}>
      <Mike/>
</div>

  <div className="onctraninmenu">
  {table ?
  <>
<div className="svhmenufont">  <ImCross onClick={()=>settable(false)}/>   </div>  
  <OncTrainText/>
  </>: 
<div className="svhmenufont"> <FaInfo onClick={()=>settable(true)}/> </div>
    }
  </div> 
{
  window.innerWidth <= 850 &&
  <div className="menulandle80px">
   <IoMdMenu onClick={()=>setOpen(!open)}/>
   <dd className={`ddImCross`} style={{visibility: open && "visible"}}>
       <ImCross      onClick={()=>setOpen(false)}/>
   </dd>
</div>
}

<div className="userivolment">
 <NavLink to={`/user/message/${data.email}`}><LuMessageCircleWarning/></NavLink> 
  <NavLink to={`/user/notification`}><MdNotificationsActive/></NavLink>
</div>
 


     <section className={` HPart2 ${ismenu2== "true" && ismenu =="true" ? "menu2" : ismenu2  == "true" ? "botmenu" : ""  } ${open ? "show" :""}`} style={{
     marginTop: ismenu == "true" && ismenu2 == "true" ? "-35.8%" : 
        ismenu == "true" ? "-39.9%" : "",
        boxShadow:ismenu == "true" ? "0px 1px 0px 0px rgba(168, 136, 181, 0.5)" :""
     }}
     onClick={()=>setOpen(false)}
> 

            <div className="handleComplexmenu">
     <NavLink to={'/Home'} reloadDocument> <div className="navname"><FaHome onClick={() =>{handleNavigate();handleButtonClick()}}
      onMouseEnter={buttonH}
      />
        <h1>Home</h1>
      </div>
      </NavLink> 

     <NavLink to={'/search'} reloadDocument> <div className="navname"><CiSearch
     onClick={handleButtonClick}
     onMouseEnter={buttonH}
     />
      <h1>Search</h1>
      </div>  </NavLink>  

       <NavLink to={'/games'} reloadDocument> <div className="navname"><SiAmazongames
       onClick={handleButtonClick}
       onMouseEnter={buttonH}
       />
        <h1>games</h1>
        </div> </NavLink> 

    <NavLink to={'/champion'} reloadDocument> <div className="navname"><GiLaurelsTrophy
      onClick={handleButtonClick}
      onMouseEnter={buttonH}
      />
        <h1>E-sports</h1>
        </div> </NavLink> 

      <NavLink to={'/setting/Menu'} reloadDocument> <div className="navname">  <CiSettings
        onClick={handleButtonClick}
        onMouseEnter={buttonH}
      />
        <h1>Setting</h1>
        </div> </NavLink>


{data.img?.length == 0 || data == "Unauthorized: Invalid Token"? <>
 <NavLink to={'/user'} reloadDocument><div className="navname"><FaRegUserCircle 
   onClick={handleButtonClick}
   onMouseEnter={buttonH}
   />
     <h1>profile</h1>
   </div>
   </NavLink> 
            </> : 
        <NavLink to={'/user'} reloadDocument> <div className="imgprofile"
        style={{position:"relative", top: ismenu== "true" && "3.5rem"}}
        ><img src={`http://localhost:3000/${data.img}`} 
        onClick={handleButtonClick}
        onMouseEnter={buttonH}
        /></div></NavLink> 
}

        <NavLink to={'/About'} reloadDocument> <div className="navname"><FaCircleInfo
        onClick={handleButtonClick}
        onMouseEnter={buttonH}
        />
          <h1>About</h1>
        </div>
        </NavLink> 

        <NavLink to={'/creators'} reloadDocument><div className="navname"><IoMdCreate
        onClick={handleButtonClick}
        onMouseEnter={buttonH}
        /><h1>Creators</h1></div></NavLink> 

  <NavLink to={'/trynow'} reloadDocument><div className="navname"><IoGameController
        onClick={handleButtonClick}
        onMouseEnter={buttonH}
        /><h1>play</h1> </div></NavLink>
        
        <NavLink to={'/worldChat'}reloadDocument ><div className="navname"><AiFillWechat
        onClick={handleButtonClick}
        onMouseEnter={buttonH}
        /><h1>chat</h1></div></NavLink> 

         <NavLink to={'/likes'}reloadDocument ><div className="navname"><PiHeartStraightLight
        onClick={handleButtonClick}
        onMouseEnter={buttonH}
        /><h1>likes</h1></div></NavLink> 
            </div>
          </section>
    </>
  )  
}