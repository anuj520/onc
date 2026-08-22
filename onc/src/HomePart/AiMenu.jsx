import { NavLink } from "react-router-dom";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { SiAmazongames } from "react-icons/si";
import { GiLaurelsTrophy } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { FaCircleInfo } from "react-icons/fa6";
import { useAuth } from "../ContextAPI/ContextAPI";
import { IoMdCreate } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { AiFillWechat } from "react-icons/ai";
export const Aimenu = ()=>{
    const{handleButtonClick,buttonH,data:authdata}= useAuth() 
    let isGame = localStorage.getItem("isGame") 
 return(   
    <section className="HPart2">
               <div>
        <NavLink to={'/Home'} reloadDocument><FaHome onClick={() =>{handleNavigate();handleButtonClick()}}
         onMouseEnter={buttonH}
         /></NavLink> 
   
        <NavLink to={'/search'} reloadDocument><CiSearch
        onClick={handleButtonClick}
        onMouseEnter={buttonH}
        /></NavLink>  
   
          <NavLink to={'/games'} reloadDocument><SiAmazongames
          onClick={handleButtonClick}
          onMouseEnter={buttonH}
          /></NavLink> 
   
              {authdata.img?.length == 0 || authdata == "Unauthorized: Invalid Token"? <>
               <NavLink to={'/user'} reloadDocument><FaRegUserCircle 
                 onClick={handleButtonClick}
                 onMouseEnter={buttonH}
                 /></NavLink>            
               </> : 
           <NavLink to={'/user'} reloadDocument>  <img src={`http://localhost:3000/${authdata.img}`} 
           onClick={handleButtonClick}
           onMouseEnter={buttonH}
           /></NavLink> 
   }
         <NavLink to={'/champion'} reloadDocument><GiLaurelsTrophy
         onClick={handleButtonClick}
         onMouseEnter={buttonH}
         /></NavLink> 
   
         <NavLink to={'/setting'} >  <CiSettings
           onClick={handleButtonClick}
           onMouseEnter={buttonH}
         /></NavLink>
   
           <NavLink to={'/About'} reloadDocument> <FaCircleInfo
           onClick={handleButtonClick}
           onMouseEnter={buttonH}
           /></NavLink> 
   
           <NavLink to={'/creators'} reloadDocument><IoMdCreate
           onClick={handleButtonClick}
           onMouseEnter={buttonH}
           /> </NavLink> 
   {
     isGame == "true" ?
     "":
     <NavLink to={'/trynow'} reloadDocument><IoGameController
           onClick={handleButtonClick}
           onMouseEnter={buttonH}
           /> </NavLink>
   }
           
           <NavLink to={'/worldChat'}reloadDocument ><AiFillWechat
           onClick={handleButtonClick}
           onMouseEnter={buttonH}
           /></NavLink> 
               </div>
             </section>
 )
}