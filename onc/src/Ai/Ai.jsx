import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Menu } from "../HomePart/Menu";
import { useAuth } from "../ContextAPI/ContextAPI";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { Aimenu } from "../HomePart/AiMenu";


export const Ai = () => { 
  const [size, setSize] = useState(false);
  const{reand} = useAuth()     
    const{transcript,resetTranscript,handleSubmit,load,list,findes,setAi,ai} = useAuth2() 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAi((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    setSize(true);
  };

// console.log(list);


  
  return (
    <header>
      <div style={{transform: "rotate(90deg)",width: "50%",top: "23rem",position: "relative",marginLeft :"-13rem"}} className="AiA">
      <Aimenu/>
      </div>
    <main>
    <section className="AiRoute">
     <main>
     {list.map((item, index) => (
  <section key={index}>
    <ul>
      <br />
      <div> 
      <li>{item}</li>
         </div>   
    </ul>
    <br />
    <div>
    <p>{findes[index]}</p>
    </div>
  </section>
))}
    {
          load == true  ? <>
              <dd style={{transform: "scale(0.8)"}}>
              <h1>Loading..</h1>
            </dd>
            </> :<></>
    }
      <div>
        <form onSubmit={handleSubmit}>
          <img src="Ai.png" alt="" />
          <textarea
            type="text"
            placeholder="Enter Your Prompt"
            value={ai.prompt}
            name="prompt"
            onChange={handleChange}
            onClick={handleClick}
            className={size ? "big" : ""}
          />
          <button type="submit"><FaArrowUp /></button>
        </form>
      </div>
      </main>
    </section>
    {
      J25.slice(reand-1,reand).map((curr,index)=>{
   return(
    <footer className="AiFimg" key={index}>
    <img src={curr.img} alt="" />
  </footer>
   )
      })
    }
    </main>
    </header>
  );
};