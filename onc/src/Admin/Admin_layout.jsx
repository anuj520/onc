import { Navigate, NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../ContextAPI/ContextAPI"
import {  FaStar } from "react-icons/fa"
import { FaCircleChevronLeft, FaCircleChevronRight, FaHireAHelper } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import {Footer} from "./../footer/footer"
import { AdminMenu } from "./AdminMenu";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Loading } from "../Loading/Loading";

export const Admin_Layout= () =>{
const{data:authData,isLogin,reand} = useAuth()
const[toogle,setToogle] = useState(false)

const handelToggle = () =>{
  setToogle(!toogle)
}


if (authData == '') {
    return <Loading/>
}
if (!authData.isAdmin || authData == "" && !isLogin || authData.verfication == false) {
 return <Navigate to={'/Home'}/>   
}


    return(
       <main>
<header style={{top: "41.4rem",position:"relative"}}>
<AdminMenu/>
</header>        
<section className="AdminLayout">
  <div>
    <img src="https://wallpaperaccess.com/full/5347098.png" alt="" />
  </div>
<main>
<h1><span>THE</span></h1>
  <h1>ADMiNISTRATO</h1>
  <h1><span>HAS</span></h1>
  <h1>ARRIVED</h1>
</main>
</section>

<section className="ALFeature">
  <div>
    <img src="https://th.bing.com/th/id/OIP.FRjgy24bAxC3Me0kdtY-_AHaLH?rs=1&pid=ImgDetMain" className="al1" />
    <img src="https://th.bing.com/th/id/OIP.1rqts7xa01svnO5_4YmmZQHaNK?rs=1&pid=ImgDetMain" className="al2" />
    <img src="https://th.bing.com/th/id/OIP.FRjgy24bAxC3Me0kdtY-_AHaLH?rs=1&pid=ImgDetMain" className="al3" />
  </div>
  <h2>Featured Games</h2>
</section>

<section className="ALVersion">
  <h2>Current Version 2025-26</h2>
  <div>
    <img src="https://wallpapercave.com/wp/wp2548367.jpg" alt="" />
    <img src="https://wallpapercave.com/wp/wp2548367.jpg" alt="" />
    <img src="https://wallpapercave.com/wp/wp2548367.jpg" alt="" />
    <img src="https://wallpapercave.com/wp/wp2548367.jpg" alt="" />
    <img src="https://wallpapercave.com/wp/wp2548367.jpg" alt="" />
    <img src="https://wallpapercave.com/wp/wp2548367.jpg" alt="" />
    <main style={{height : toogle ? "55vh" : ""}}>
    <img src="https://wallpaperaccess.com/full/9188.jpg" alt="" style={{height : toogle ? "50vh" : ""}}/>
    <img src="https://wallpaperaccess.com/full/9188.jpg" alt="" style={{height : toogle ? "50vh" : ""}}/>
    <img src="https://wallpaperaccess.com/full/9188.jpg" alt="" style={{height : toogle ? "50vh" : ""}}/>
    </main>
       <div onClick={handelToggle}><IoIosArrowDown/></div>
  </div>
</section>
    <br />
       </main>
    )   
   }