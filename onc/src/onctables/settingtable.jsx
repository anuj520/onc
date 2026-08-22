import { useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { Addcompo2 } from "../fav/addcompo2"

export const SettingTable = () =>{
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
    curr.settingetstarted.map((item, num) => (
    num >=1 && num <=3 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+5}</td>
        <td>settin getstarted</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("settingetstarted")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("settingetstarted",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
{
 window.location.pathname == "/setting/Menu" &&
<>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.DynamicMenu.map((item, num) => (
    num >=1 && num <=2 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+6}</td>
        <td>Dynamic Menu</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("DynamicMenu")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("DynamicMenu",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.menutop.map((item, num) => (
    num >=1 && num <=1 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+7}</td>
        <td>menu top</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("menutop")}>Add</button></td>
       <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("menutop",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
</>    
}
{
 window.location.pathname == "/setting/getStarted" &&
<>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.BalancedMode.map((item, num) => (
    num >=1 && num <=2 ?"":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+8}</td>
        <td>Balanced Mode</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("BalancedMode")}>Add</button></td>
       <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("BalancedMode",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.InternetSafetyMode.map((item, num) => (
      num >=1 && num <=3 ?"":
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+9}</td>
        <td>Internet Safety Mode</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("InternetSafetyMode")}>Add</button></td>
       <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("InternetSafetyMode",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
</>    
}
<tbody style={{height:"10vh"}}>

</tbody>
</table>
</section>
</main>
)    
}