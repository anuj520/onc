import { useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { Addcompo2 } from "../fav/addcompo2"

export const GenraTable = ({genra}) =>{
const { trainonc,handledeletelog,data:authdata } = useAuth()
const[val,setvalue] = useState("")    
return(
<main>
{
  val !=="" &&
  <Addcompo2 val={val} setvalue={setvalue}/>
} 
<section className="tbaleoncpagetrain" style={{height:"99vh"}}>
<table>
<thead>
<tr>
<th>Filed</th>
<th>Name</th>
<th>Log</th>
<th>Add</th>
<th>Delete</th>
</tr>
</thead>
{
 genra == "genra" ?
<>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.details.map((item, num) => (
     num >=1 && num <=6 ? "" : 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+1}</td>
        <td>Details</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("details")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=6? "#2d0e0aff":"",cursor: num <=6 && "auto",color: num<=6 &&"#606d6dff" }}
onClick={num >6?()=>handledeletelog("details",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.cancal.map((item, num) => (
    num >=1 && num <5 ? "" :   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+2}</td>
        <td>Cancal</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("cancal")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto",color: num<=5 &&"#706d6dff" }}
onClick={num >5?()=>handledeletelog("cancal",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.down.map((item, num) => (
    num >=1 && num <6 ? "" :   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+3}</td>
        <td>Down</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("down")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=6? "#2d0e0aff":"",cursor: num <=6 && "auto",color: num<=6 &&"#706d6dff" }}
onClick={num >6?()=>handledeletelog("cancal",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.up.map((item, num) => (
    num >=1 && num <=3 ? "" :   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+4}</td>
        <td>Up</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("up")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("up",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.battle.map((item, num) => (
    num >=1 && num <=9 ? "" :       
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+5}</td>
        <td>Battle Royal</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("battle")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=9? "#2d0e0aff":"",cursor: num <=9 && "auto",color: num<=9 &&"#706d6dff" }}
onClick={num >9?()=>handledeletelog("battle",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.sports.map((item, num) => (
     num >=1 && num <=12 ? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+6}</td>
        <td>Sports</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("sports")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=12? "#2d0e0aff":"",cursor: num <=12 && "auto",color: num<=12 &&"#706d6dff" }}
onClick={num >12?()=>handledeletelog("sports",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.educational.map((item, num) => (
     num >=1 && num <=11 ? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+7}</td>
        <td>Educational</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("educational")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=11? "#2d0e0aff":"",cursor: num <=11 && "auto",color: num<=11 &&"#706d6dff" }}
onClick={num >11?()=>handledeletelog("educational",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.bordGame.map((item, num) => (
      num >=1 && num <=9 ? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+8}</td>
        <td>Bord Game</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("bordGame")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=9? "#2d0e0aff":"",cursor: num <=9 && "auto",color: num<=9 &&"#706d6dff" }}
onClick={num >9?()=>handledeletelog("bordGame",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.story.map((item, num) => (
      num >=1 && num <=13 ? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+9}</td>
        <td>Story</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("story")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=13? "#2d0e0aff":"",cursor: num <=13 && "auto",color: num<=13 &&"#706d6dff" }}
onClick={num >13?()=>handledeletelog("story",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.family.map((item, num) => (
     num >=1 && num <=13 ? "" :   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+10}</td>
        <td>Family</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("family")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=13? "#2d0e0aff":"",cursor: num <=13 && "auto",color: num<=13 &&"#706d6dff" }}
onClick={num >13?()=>handledeletelog("family",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.action.map((item, num) => (
      num >=1 && num <=5 ? "" :  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+11}</td>
        <td>Action</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("action")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto",color: num<=5 &&"#706d6dff" }}
onClick={num >5?()=>handledeletelog("action",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.advancher.map((item, num) => (
     num >=1 && num <=9 ? "" :    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+12}</td>
        <td>Advancher</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("advancher")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=9? "#2d0e0aff":"",cursor: num <=9 && "auto",color: num<=9 &&"#706d6dff" }}
onClick={num >9?()=>handledeletelog("advancher",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.casual.map((item, num) => (
     num >=1 && num <=11 ? "" :    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+13}</td>
        <td>casual</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("casual")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=11? "#2d0e0aff":"",cursor: num <=11 && "auto",color: num<=11 &&"#706d6dff" }}
onClick={num >11?()=>handledeletelog("casual",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.strategy.map((item, num) => (
    num >=1 && num <=9 ? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+14}</td>
        <td>strategy</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("strategy")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=9? "#2d0e0aff":"",cursor: num <=9 && "auto",color: num<=9 &&"#706d6dff" }}
onClick={num >9?()=>handledeletelog("strategy",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.indie.map((item, num) => (
    num >=1 && num <=7 ? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+15}</td>
        <td>indie</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("indie")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=7? "#2d0e0aff":"",cursor: num <=7 && "auto",color: num<=7 &&"#706d6dff" }}
onClick={num >7?()=>handledeletelog("indie",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.card.map((item, num) => (
    num >=1 && num <=9 ? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+16}</td>
        <td>card</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("card")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=9? "#2d0e0aff":"",cursor: num <=9 && "auto",color: num<=9 &&"#706d6dff" }}
onClick={num >9?()=>handledeletelog("card",item.name):undefined}>Delete</button></td>
       </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.multiplayer.map((item, num) => (
    num >=1 && num <=5 ? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+17}</td>
        <td>multiplayer</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("multiplayer")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto",color: num<=5 &&"#706d6dff" }}
onClick={num >5?()=>handledeletelog("multiplayer",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.arcade.map((item, num) => (
    num >=1 && num <=11 ? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+18}</td>
        <td>arcade</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("arcade")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=11? "#2d0e0aff":"",cursor: num <=11 && "auto",color: num<=11 &&"#706d6dff" }}
onClick={num >11?()=>handledeletelog("arcade",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.simulation.map((item, num) => (
    num >=1 && num <=7? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+19}</td>
        <td>simulation</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("simulation")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=7? "#2d0e0aff":"",cursor: num <=7 && "auto",color: num<=7 &&"#706d6dff" }}
onClick={num >7?()=>handledeletelog("simulation",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.platformer.map((item, num) => (
     num >=1 && num <=3? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+20}</td>
        <td>platformer</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("platformer")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("platformer",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.fighting.map((item, num) => (
     num >=1 && num <=7? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+21}</td>
        <td>fighting</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("fighting")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=7? "#2d0e0aff":"",cursor: num <=7 && "auto",color: num<=7 &&"#706d6dff" }}
onClick={num >7?()=>handledeletelog("platformer",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.rpg.map((item, num) => (
     num >=1 && num <=7? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+22}</td>
        <td>rpg</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("rpg")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=7? "#2d0e0aff":"",cursor: num <=7 && "auto",color: num<=7 &&"#706d6dff" }}
onClick={num >7?()=>handledeletelog("rpg",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.racing.map((item, num) => (
     num >=1 && num <=7? "" :     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+23}</td>
        <td>racing</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("racing")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=7? "#2d0e0aff":"",cursor: num <=7 && "auto",color: num<=7 &&"#706d6dff" }}
onClick={num >7?()=>handledeletelog("racing",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.shooter.map((item, num) => (
    num >=1 && num <=5? "" :  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+24}</td>
        <td>shooter</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("shooter")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto",color: num<=5 &&"#706d6dff" }}
onClick={num >5?()=>handledeletelog("shooter",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.puzzle.map((item, num) => (
    num >=1 && num <=5? "" :  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+25}</td>
        <td>puzzle</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("puzzle")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto",color: num<=5 &&"#706d6dff" }}
onClick={num >5?()=>handledeletelog("puzzle",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
</> : <>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.details.map((item, num) => (
     num >=1 && num <=6 ? "" : 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+1}</td>
        <td>Details</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("details")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=6? "#2d0e0aff":"",cursor: num <=6 && "auto",color: num<=6 &&"#606d6dff" }}
onClick={num >6?()=>handledeletelog("details",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.cancal.map((item, num) => (
    num >=1 && num <5 ? "" :   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+2}</td>
        <td>Cancal</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("cancal")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto",color: num<=5 &&"#706d6dff" }}
onClick={num >5?()=>handledeletelog("cancal",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.down.map((item, num) => (
    num >=1 && num <6 ? "" :   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+3}</td>
        <td>Down</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("down")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=6? "#2d0e0aff":"",cursor: num <=6 && "auto",color: num<=6 &&"#706d6dff" }}
onClick={num >6?()=>handledeletelog("cancal",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.up.map((item, num) => (
    num >=1 && num <=3 ? "" :   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+4}</td>
        <td>Up</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("up")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("up",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
{/* //left right */}
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left1.map((item, num) => (
    num >=1 && num <=1? "" :  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+5}</td>
        <td>left1</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left1")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("left1",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.right1.map((item,num)=>(
  num >=1 && num <=1? "" : 
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +6}</td>
<td>right1</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("right1")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("right1",item.name):undefined}>Delete</button></td>
</tr>    
))
    ))
}
</tbody>

<tbody>
    {
trainonc.map((curr,index)=>(
curr.top.map((item,num)=>(
 num >=1 && num <=1? "" :   
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +7}</td>
<td>top</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("top")}>Add</button></td>
    <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("top",item.name):undefined}>Delete</button></td>
</tr>    
))
    ))
}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.all.map((item,num)=>(
 num >=1 && num <=1? "" :   
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +8}</td>
<td>all</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("all")}>Add</button></td>
    <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("all",item.name):undefined}>Delete</button></td>
</tr>    
))
    ))
}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.open.map((item,num)=>(
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +9}</td>
<td>open</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name} gmae name</span>
          </div>
</td>
<td><button onClick={()=> setvalue("open")}>Add</button></td>
    <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("open",item.name):undefined}>Delete</button></td>
</tr>    
))
    ))
}

</tbody>
</>
}
</table>
</section>
</main>
)    
}