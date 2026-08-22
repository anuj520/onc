import { FaHireAHelper, FaHome, FaUser } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { MdBlock } from "react-icons/md";
import { NavLink } from "react-router-dom"
import { IoMdNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";
export const AdminMenu = () =>{
return(
    <main>
          <ul className="AdminMenu">
    <NavLink to={'/users'} reloadDocument> <li><FaUser/> </li> </NavLink>
    <NavLink to={'/googleUsers'} reloadDocument> <li><FcGoogle/> </li> </NavLink>
    <NavLink to={'/ContectUser'} reloadDocument> <li><MdMessage/> </li> </NavLink>
    <NavLink to={'/userProblem'} reloadDocument> <li><FaHireAHelper/> </li> </NavLink>
    <NavLink to={'/notificationAdmin'} reloadDocument> <li><IoMdNotifications/> </li> </NavLink>
    <NavLink to={'/Block'} reloadDocument> <li><MdBlock/> </li> </NavLink>
    <NavLink to={'/Home'} reloadDocument> <li><FaHome/></li> </NavLink>
     </ul>
    </main>
)    
}