import { useAuth } from "../ContextAPI/ContextAPI";
import J27 from "./../../public/J27.json"

export const Loading = () => {  
  const{reand} = useAuth()
    return (
      <>
        <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
        {
          J27.slice(reand-1,reand).map((curr,index)=>{
           return(
            <ul key={index}>
              <img src={curr.img} className={`blockMithLo`} style={{marginLeft: curr.id == 2 ? "-20rem" : "",filter: `drop-shadow(5px 5px 20px ${curr.color}`}}/>  
            </ul>
           ) 
          })
        }      
  

        <section>
            <div className="item" style={{ "--position": 1 }}>
              <img src="https://www.ixpap.com/images/2023/12/GTA-6-Wallpaper-8.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src="https://assets-prd.ignimgs.com/2024/08/19/inzoi-1724077347474.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/sharedimages/2024/05/the-alters-game.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/04/ghost-of-yotei-tag-page-cover-art.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src="https://cdn.cdkeys.com/500x706/media/catalog/product/k/i/killing_floor_3.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src="https://www.giantbomb.com/a/uploads/original/33/338034/3471225-7852879518-afb0c.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/dhk4wdb-24aadc49-3279-431b-9ad9-a77b7224a3c8.jpg/v1/fill/w_1192,h_670,q_70,strp/assassin_s_creed_shadows_animated_wallpaper_by_favorisxp_dhk4wdb-pre.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src="https://wallpaperaccess.com/full/2529751.jpg" alt="" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src="https://tse3.mm.bing.net/th/id/OIP.0OFjbU3Eb6ox9ff4F-gKfwHaJ3?cb=iwp2&rs=1&pid=ImgDetMain" alt="" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img src="https://assets-prd.ignimgs.com/2024/12/04/infinitynicky-1733342500890.jpg" alt="" />
            </div>
            </section>
          </div>
        </div>
      </>
    );
  };
  