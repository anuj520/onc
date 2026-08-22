import { useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { Addcompo2 } from "../fav/addcompo2"

export const SearchTable = () =>{
const { trainonc,handledeletelog,data:authdata } = useAuth()
const[val,setvalue] = useState("")    
return(
<main>
{
  val !=="" &&
  <Addcompo2 val={val} setvalue={setvalue}/>
} 
<section className="tbaleoncpagetrain">
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
        num >=1 && num <=4 ? "":
        <> 
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
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto",color: num<=4 &&"#706d6dff"}}
        onClick={num >4 ?()=>handledeletelog("cancal",item.name):undefined}>Delete</button></td>
      </tr>
       </>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.down.map((item, num) => (
         num >=1 && num<=6 ? "":
          <> 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+3}</td>
        <td>Down</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue(item.name)}>Add</button></td>
 <td><button className="deletetext"
        style={{backgroundColor: num <=6? "#2d0e0aff":"",cursor: num <=6 && "auto",color: num<=6 &&"#706d6dff"}}
        onClick={num >6 ?()=>handledeletelog("cancal",item.name):undefined}>Delete</button></td>
      </tr>
        </>
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.up.map((item,num)=>(
num >=1 && num <=3 ?"":
<>  
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +4}</td>
<td>Up</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("up")}>Add</button></td>
 <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff"}}
        onClick={num >3 ?()=>handledeletelog("up",item.name):undefined}>Delete</button></td>
</tr>    
</>
))
    ))
}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.valorant.map((item, num) => (
    num >=1 && num <=3 ?"":  
      <tr key={`home-${index}-${num}`} className="tbodytr">
        <td>{num> 0 ? "." : num+5}</td>
         <td>Valorant</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("valorant")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num <=3 && "#5b5a5aff" }}
        onClick={num >3 ?()=>handledeletelog("valorant",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.XKO.map((item, num) => (
       num >=1 && num <=2 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+6}</td>
        <td>XKO</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("XKO")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num <=2 && "#5b5a5aff" }}
        onClick={num >2 ?()=>handledeletelog("XKO",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.ApexLegends.map((item, num) => (
     num >=1 && num <=3 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+7}</td>
        <td>Apex Legends</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("ApexLegends")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num <=3 && "#5b5a5aff" }}
        onClick={num >3 ?()=>handledeletelog("ApexLegends",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.Warframe.map((item, num) => (
     num >=1 && num <=1 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+8}</td>
         <td>Warframe</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Warframe")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num <=1 && "#5b5a5aff" }}
        onClick={num >1 ?()=>handledeletelog("Warframe",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.Tales.map((item, num) => (
     num >=1 && num <=3 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+9}</td>
        <td>Tales</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Tales")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num <=3 && "#5b5a5aff" }}
        onClick={num >3 ?()=>handledeletelog("Tales",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.DeadorAlive.map((item, num) => (
     num >=1 && num <=3 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+10}</td>
        <td>Deador Alive</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("DeadorAlive")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num <=3 && "#5b5a5aff" }}
        onClick={num >3 ?()=>handledeletelog("GranblueFant",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.GranblueFant.map((item, num) => (
     num >=1 && num <=3 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+11}</td>
        <td>Granblue Fant</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("GranblueFant")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num <=3 && "#5b5a5aff" }}
        onClick={num >3 ?()=>handledeletelog("GranblueFant",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.GTA.map((item, num) => (
     num >=1 && num <=4 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+12}</td>
        <td>GTA</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("GTA")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto",color: num <=4 && "#5b5a5aff" }}
        onClick={num >4 ?()=>handledeletelog("GTA",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.inZOI.map((item, num) => (
     num >=1 && num <=2 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+13}</td>
        <td>inZOI</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("inZOI")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num <=2 && "#5b5a5aff",color: num <=1 && "#5b5a5aff" }}
        onClick={num >2 ?()=>handledeletelog("inZOI",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Fable.map((item, num) => (
     num >=1 && num <=1 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+14}</td>
        <td>Fable</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Fable")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num <=0 && "#5b5a5aff" }}
        onClick={num >0 ?()=>handledeletelog("Fable",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Marvel.map((item, num) => (
        num >=1 && num <=2 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+15}</td>
        <td>Marvel</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Marvel")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num <=2 && "#5b5a5aff" }}
        onClick={num >2 ?()=>handledeletelog("Marvel",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Star.map((item, num) => (
      num >=1 && num <=2 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+16}</td>
        <td>Star</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Star")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num <=2 && "#5b5a5aff" }}
        onClick={num >2 ?()=>handledeletelog("Star",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Warhammer.map((item, num) => (
      num >=1 && num <=3 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+17}</td>
        <td>Warhammer</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Warhammer")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num <=3 && "#5b5a5aff" }}
        onClick={num >3 ?()=>handledeletelog("Onimusha",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Onimusha.map((item, num) => (
      num >=1 && num <=2 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+18}</td>
        <td>Onimusha</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Onimusha")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num <=2 && "#5b5a5aff" }}
        onClick={num >2 ?()=>handledeletelog("Onimusha",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.Saros.map((item, num) => (
      num >=1 && num <=1 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+19}</td>
        <td>Saros</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Saros")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num <=1 && "#5b5a5aff" }}
        onClick={num >1 ?()=>handledeletelog("Saros",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.Witcher.map((item, num) => (
      num >=1 && num <=1 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+20}</td>
        <td>Witcher</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Witcher")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num <=1 && "#5b5a5aff"}}
        onClick={num >1 ?()=>handledeletelog("Witcher",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.Project.map((item, num) => (
      num >=1 && num <=2 ?"":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+21}</td>
        <td>Project</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Project")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num <=2 && "#5b5a5aff" }}
        onClick={num >2 ?()=>handledeletelog("Project",item.name):""}>Delete</button></td>
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