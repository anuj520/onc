import { TiTick } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../ContextAPI/ContextAPI";
export const Footer = () =>{
const{data:authData,isLogin} = useAuth()    
    return(
           <section className="footeritem">
                    <div>
                        <h1>Orion GAMES</h1>
                        <p>About Us</p>
                        <p>© 2025 STAR. All Rights Reserved.</p>
                    </div>
                    <div>
                        <h2>View Website in</h2>
                        <p><TiTick style={{fontSize: "1.2rem"}}/> English</p>
                    </div>
                    <div>
                   <NavLink to={'/problem'}> <h1>Need Help?</h1></NavLink>
                        <p>Vist Help Center</p>
                        <p>Shere FaceBool</p>
                    </div>
                    <div>
                   <NavLink to={ authData.email ? `/user/message/${authData.email}` : "/login"} reloadDocument> <h1>Contect Us</h1></NavLink>
                        <p><RiMessage2Fill/></p>
                        <p><FaFacebook/></p>
                    </div>
                </section>
    )
}