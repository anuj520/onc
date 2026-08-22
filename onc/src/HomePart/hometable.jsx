import { useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { Addcompo } from "../fav/addcompo"
import { Addcompo2 } from "../fav/addcompo2"

export const HomeTable = () =>{
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
<th>LOG</th>
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
    curr.open.map((item, num) => (
    num >=1 && num <=1 ?"":  
      <tr key={`home-${index}-${num}`} className="tbodytr">
        <td>{num> 0 ? "." : num+3}</td>
        <td>Open</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("open")}>Add</button></td>
      <td><button className="deletetext"
        style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num <=0 && "#5b5858ff"}}
        onClick={num >0 ?()=>handledeletelog("open",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.blackmithwokong.map((item, num) => (
      num >=1 && num <=2 ?"":
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+6}</td>
        <td>black mith wokong</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("blackmithwokong")}>Add</button></td>
      <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num <=2 && "#5b5858ff"}}
        onClick={num >2 ?()=>handledeletelog("blackmithwokong",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.rdr2.map((item, num) => (
    num >=1 && num <=3 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+7}</td>
        <td>RDR2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("rdr2")}>Add</button></td>
      <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num <=3 && "#5b5858ff"}}
        onClick={num >3 ?()=>handledeletelog("rdr2",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.spiderman.map((item, num) => (
    num >=1 && num <=1 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+8}</td>
        <td>spider man</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("spiderman")}>Add</button></td>
      <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num <=1 && "#5b5858ff"}}
        onClick={num >1 ?()=>handledeletelog("spiderman",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.marvalrivales.map((item, num) => (
    num >=1 && num <=1 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+9}</td>
         <td>Marval Rivales</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("marvalrivales")}>Add</button></td>
      <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num <=1 && "#5b5858ff"}}
        onClick={num >1 ?()=>handledeletelog("marvalrivales",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.valorant.map((item, num) => (
    num >=1 && num <=2 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+10}</td>
        <td>Valorant</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("valorant")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num <=2 && "#5b5858ff"}}
        onClick={num >2 ?()=>handledeletelog("valorant",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.godofwar.map((item, num) => (
    num >=1 && num <=1 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+11}</td>
        <td>God of war</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("godofwar")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num <=2 && "#5b5858ff"}}
        onClick={num >2 ?()=>handledeletelog("godofwar",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.wwe.map((item, num) => (
    num >=1 && num <=2 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+12}</td>
        <td>WWE</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("wwe")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num <=2 && "#5b5858ff"}}
        onClick={num >2 ?()=>handledeletelog("wwe",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.NARAKABLADEPOINT.map((item, num) => (
    num >=1 && num <=2 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+13}</td>
        <td>NARAKA BLADEPOINT</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("wwe")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num <=2 && "#5b5858ff"}}
        onClick={num >2 ?()=>handledeletelog("wwe",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.TheLostLegacy.map((item, num) => (
    num >=1 && num <=1 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+14}</td>
        <td>The Lost Legacy</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("wwe")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num <=1 && "#5b5858ff"}}
        onClick={num >1 ?()=>handledeletelog("wwe",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.ForzaHorizon5.map((item, num) => (
    num >=1 && num <=1 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+15}</td>
        <td>Forza Horizon 5</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("wwe")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num <=1 && "#5b5858ff"}}
        onClick={num >1 ?()=>handledeletelog("wwe",item.name):""}>Delete</button></td>
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