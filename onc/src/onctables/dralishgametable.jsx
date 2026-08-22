import { useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"

export const DetalishTable = () =>{
const { trainonc,handledeletelog,data:authdata } = useAuth()
const[val,setvalue] = useState("")    
return(
<main>
{
  val !=="" &&
  <Addcompo val={val} setvalue={setvalue}/>
} 
<section className="tbaleoncpagetrain" style={{height:"99vh",zIndex:"999999999999999999999999999",position:"relative"}}>
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

<tbody>
  {trainonc.map((curr, index) =>  
    curr.details.map((item, num) => (
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
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("open",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.cancal.map((item, num) => (
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
onClick={num >5?()=>handledeletelog("cancal",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.down.map((item, num) => (
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
onClick={num >6?()=>handledeletelog("cancal",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.up.map((item, num) => (
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
onClick={num >3?()=>handledeletelog("up",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.top.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+5}</td>
        <td>top</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("top")}>Add</button></td>
 <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("top",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.all.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+6}</td>
        <td>all</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("all")}>Add</button></td>
 <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("all",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.open.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+7}</td>
        <td>open</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("open")}>Add</button></td>
 <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("open",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.description.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+8}</td>
        <td>description</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("description")}>Add</button></td>
       <td><button className="deletetext"
style={{backgroundColor: num <=6? "#2d0e0aff":"",cursor: num <=6 && "auto",color: num<=6 &&"#706d6dff" }}
onClick={num >6?()=>handledeletelog("description",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.SystemRequirements.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+9}</td>
        <td>System Requirements</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue(item.name)}>Add</button></td>
       <td><button className="deletetext"
style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto",color: num<=4 &&"#706d6dff" }}
onClick={num >4?()=>handledeletelog("description",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Additionalinformation.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+10}</td>
        <td>Additional information</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Additionalinformation")}>Add</button></td>
    <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("Additionalinformation",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left1.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+11}</td>
        <td>left1</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left1")}>Add</button></td>
    <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("left1",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.right1.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+12}</td>
        <td>right1</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("right1")}>Add</button></td>
    <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("left1",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left2.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+13}</td>
        <td>left2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left2")}>Add</button></td>
    <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("left2",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.right2.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+14}</td>
        <td>right2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("right2")}>Add</button></td>
          <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("right2",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left3.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+15}</td>
        <td>left3</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left3")}>Add</button></td>
            <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("left3",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.right3.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+16}</td>
        <td>right3</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("right3")}>Add</button></td>
            <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("right3",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left4.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+17}</td>
        <td>left4</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left4")}>Add</button></td>
            <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("left4",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.right4.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+18}</td>
        <td>right4</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("right4")}>Add</button></td>
            <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("right4",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody style={{height:"10vh"}}>

</tbody>
</table>
</section>
</main>
)    
}