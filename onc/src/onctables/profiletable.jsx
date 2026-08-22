import { useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { Addcompo2 } from "../fav/addcompo2"
export const ProfileTable = () =>{
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
 window.location.pathname == `/edit` ?
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
    curr.name1.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+3}</td>
        <td>name</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("name1")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("name1",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.lastname.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+4}</td>
        <td>lastname</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("lastname")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("lastname",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.password.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+5}</td>
        <td>password</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("password")}>Add</button></td>
           <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("password",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.gender.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+6}</td>
        <td>gender</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("gender")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("gender",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.submit.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+7}</td>
        <td>submit</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("submit")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("submit",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
</>    
:
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
    curr.contect.map((item, num) => (
     num >=1 && num<=3 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+5}</td>
        <td>contect</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("contect")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("contect",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.notification.map((item, num) => (
    num >=1 && num<=4 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+6}</td>
        <td>notification</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("notification")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto",color: num<=4 &&"#706d6dff" }}
onClick={num >4?()=>handledeletelog("notification",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.logout.map((item, num) => (
    num >=1 && num<=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+7}</td>
        <td>logout</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("logout")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("logout",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.edit.map((item, num) => (
    num >=1 && num<=2 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+8}</td>
        <td>edit</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("edit")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("edit",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.mess.map((item, num) => (
    num >=1 && num<=6 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+9}</td>
        <td>message</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name} speek</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("mess")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=6? "#2d0e0aff":"",cursor: num <=6 && "auto",color: num<=6 &&"#706d6dff" }}
onClick={num >6?()=>handledeletelog("mess",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.send.map((item, num) => (
    num >=1 && num<=4 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+10}</td>
        <td>send</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("send")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto",color: num<=4 &&"#706d6dff" }}
onClick={num >4?()=>handledeletelog("send",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
</>}
</table>
</section>
</main>
)    
}