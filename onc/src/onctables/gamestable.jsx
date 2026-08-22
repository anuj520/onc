import { useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { Addcompo2 } from "../fav/addcompo2"

export const GamesTable = () =>{
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
{/* //left right */}
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left1.map((item, num) => (
     num >=1 && num <=1 ?"":
<>
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
        onClick={num >1 ?()=>handledeletelog("left1",item.name):undefined}>Delete</button></td>
      </tr>
      </> 
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.right1.map((item,num)=>(
     num >=1 && num <=1 ?"":
<>
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
        onClick={num >1 ?()=>handledeletelog("right1",item.name):undefined}>Delete</button></td>
</tr>  
</>  
))
    ))
}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left2.map((item, num) => (
           num >=1 && num <=2 ?"":
<>
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+7}</td>
        <td>left2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left2")}>Add</button></td>
 <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
        onClick={num >2 ?()=>handledeletelog("left2",item.name):undefined}>Delete</button></td>
      </tr>
</>      
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.right2.map((item,num)=>(
 num >=1 && num <=2 ?"":
<>
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +8}</td>
<td>right2</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("right2")}>Add</button></td>
 <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
        onClick={num >2 ?()=>handledeletelog("right2",item.name):undefined}>Delete</button></td>
</tr>   
</> 
))
    ))
}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left3.map((item, num) => (
    num >=1 && num <=1 ?"":
<>      
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+9}</td>
        <td>left3</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left3")}>Add</button></td>
 <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
        onClick={num >1 ?()=>handledeletelog("left3",item.name):undefined}>Delete</button></td>
      </tr>
      </>
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.right3.map((item,num)=>(
num >=1 && num <=1 ?"":
<>
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +10}</td>
<td>right3</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("right3")}>Add</button></td>
 <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
        onClick={num >1 ?()=>handledeletelog("right3",item.name):undefined}>Delete</button></td>
</tr> 
</>   
))
    ))
}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left4.map((item, num) => (
           num >=1 && num <=1 ?"":
<>   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+11}</td>
        <td>left4</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left4")}>Add</button></td>
 <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
        onClick={num >1 ?()=>handledeletelog("left4",item.name):undefined}>Delete</button></td>
      </tr>
      </>
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.right4.map((item,num)=>(
           num >=1 && num <=1 ?"":
<>  
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +12}</td>
<td>right4</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("right4")}>Add</button></td>
 <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("right4",item.name):undefined}>Delete</button></td>
</tr>    
</>
))
    ))
}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left5.map((item, num) => (
           num >=1 && num <=1 ?"":
<>      
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+13}</td>
        <td>left5</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left5")}>Add</button></td>
 <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("left5",item.name):undefined}>Delete</button></td>
      </tr>
 </>     
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.right5.map((item,num)=>(
           num >=1 && num <=1 ?"":
<>
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +14}</td>
<td>right5</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("right5")}>Add</button></td>
 <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("right5",item.name):undefined}>Delete</button></td>
</tr> 
</>   
))
    ))
}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left6.map((item, num) => (
           num >=1 && num <=1 ?"":
<>     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+15}</td>
        <td>left6</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left6")}>Add</button></td>
       <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("left6",item.name):undefined}>Delete</button></td>
      </tr>
</>      
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.right6.map((item,num)=>(
           num >=1 && num <=1 ?"":
<>  
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +16}</td>
<td>right6</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("right6")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("right6",item.name):undefined}>Delete</button></td>
</tr>   
</> 
))
    ))
}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left7.map((item, num) => (
           num >=1 && num <=1 ?"":
<>      
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+17}</td>
        <td>left7</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left7")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("left7",item.name):undefined}>Delete</button></td>
      </tr>
</>      
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.right7.map((item,num)=>(
   num >=1 && num <=1 ?"":
<>
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +18}</td>
<td>right7</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("right7")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("right7",item.name):undefined}>Delete</button></td>
</tr>    
</>
))
    ))
}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.left8.map((item, num) => (
           num >=1 && num <=1 ?"":
<>      
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+19}</td>
        <td>left8</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("left8")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("left8",item.name):undefined}>Delete</button></td>
      </tr>
</>      
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.right8.map((item,num)=>(
           num >=1 && num <=1 ?"":
<>  
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +20}</td>
<td>right8</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("right8")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("right8",item.name):undefined}>Delete</button></td>
</tr>    
</>
))
    ))
}
</tbody>

{/* //days//week//year//month// */}
<tbody>
  {trainonc.map((curr, index) =>  
    curr.day.map((item, num) => (
      num >=1 && num <=2 ? "":
      <> 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+21}</td>
        <td>day</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue(item.name)}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >2 ?()=>handledeletelog("day",item.name):undefined}>Delete</button></td>
      </tr>
      </>
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.week.map((item,num)=>(
num >=1 && num <=1 ? "":
<>   
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +22}</td>
<td>week</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("week")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("week",item.name):undefined}>Delete</button></td>
</tr> 
</>   
))
    ))
}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.month.map((item, num) => (
  num >=1 && num <=1 ? "":
      <>       
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+23}</td>
        <td>month</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("month")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("month",item.name):undefined}>Delete</button></td>
      </tr>
      </>
    ))
  )}
</tbody>
<tbody>
    {
trainonc.map((curr,index)=>(
curr.year.map((item,num)=>(
num >=1  && num <=1 ? "":  
<tr key={`up-${index} - ${num}`}>
<td>{num>0 ? "":num +24}</td>
<td>year</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">{item.name}</span>
          </div>
</td>
<td><button onClick={()=> setvalue("year")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("year",item.name):undefined}>Delete</button></td>
</tr>    
))
    ))
}
</tbody>



{/* //games */}

<tbody>
  {trainonc.map((curr, index) =>  
    curr.spiderman.map((item, num) => (
  num >=1  && num <=1 ? "":      
      <tr key={`home-${index}-${num}`} className="tbodytr">
        <td>{num> 0 ? "" : num+25}</td>
        <td>spider man</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("spiderman")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("spiderman",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.EternalStrands.map((item, num) => (
    num >=1  && num <=3 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+26}</td>
        <td>Eternal Strands</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("EternalStrands")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3 ?()=>handledeletelog("EternalStrands",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.OrcsMustDie.map((item, num) => (
      num >=1  && num <=1? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+27}</td>
        <td>Orcs Must Die! Deathtrap</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("OrcsMustDie")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("OrcsMustDie",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.CarXDrift.map((item, num) => (
       num >=1  && num <=3 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+28}</td>
        <td>Car X Drift</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("CarXDrift")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3 ?()=>handledeletelog("CarXDrift",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.EmpiretheAnts.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+29}</td>
        <td>Empire the Ants</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("EmpiretheAnts")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2 ?()=>handledeletelog("EmpiretheAnts",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TankHead.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+30}</td>
        <td>TankHead</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TankHead")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2 ?()=>handledeletelog("TankHead",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.StarWarsOutlaws.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+31}</td>
        <td>Star Wars Outlaws</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("StarWarsOutlaws")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2 ?()=>handledeletelog("StarWarsOutlaws",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.EASPORTS.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+32}</td>
        <td>EASPORTS</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("EASPORTS")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2 ?()=>handledeletelog("EASPORTS",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Beaconfire.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+33}</td>
        <td>Beaconfire</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Beaconfire")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2 ?()=>handledeletelog("Beaconfire",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.EASPORTSFC.map((item, num) => (
       num >=1  && num <=1 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+34}</td>
        <td>F1 25</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("EASPORTSFC")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("EASPORTSFC",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Wanderstop.map((item, num) => (
       num >=1  && num <=3 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+35}</td>
        <td>Wanderstop</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Wanderstop")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3 ?()=>handledeletelog("Wanderstop",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.SlayPrincess.map((item, num) => (
       num >=1  && num <=3 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+36}</td>
        <td>Slay Princess</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("SlayPrincess")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3 ?()=>handledeletelog("SlayPrincess",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.FinalFantasy.map((item, num) => (
       num >=1  && num <=3 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+37}</td>
        <td>Final Fantasy</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("FinalFantasy")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3 ?()=>handledeletelog("FinalFantasy",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.MetaphorReFantazio.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+38}</td>
        <td>Metaphor ReFantazio</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("MetaphorReFantazio")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2 ?()=>handledeletelog("MetaphorReFantazio",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.EldenRing.map((item, num) => (
        num >=1  && num <=3 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+39}</td>
        <td>EldenRing</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("EldenRing")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3 ?()=>handledeletelog("EldenRing",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.AstroBot.map((item, num) => (
       num >=1  && num <=3? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+40}</td>
        <td>AstroBot</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("AstroBot")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3 ?()=>handledeletelog("AstroBot",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.DragonsDogma2.map((item, num) => (
  num >=1  && num <=3 ? "":       
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+41}</td>
        <td>Dragons Dogma 2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("DragonsDogma2")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3 ?()=>handledeletelog("ADragonsDogma2troBot",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.KillKnight.map((item, num) => (
      num >=1  && num <=3 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+42}</td>
        <td>Kill Knight</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("KillKnight")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3 ?()=>handledeletelog("KillKnight",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.TacticalBreachWizards.map((item, num) => (
      num >=1  && num <=2 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+43}</td>
        <td>Tactical Breach Wizards</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("KillKnight")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2 ?()=>handledeletelog("KillKnight",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.DuneAwakening.map((item, num) => (
      num >=1  && num <=1 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+44}</td>
        <td>Dune Awakening</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("KillKnight")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("KillKnight",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>


<tbody>
  {trainonc.map((curr, index) =>  
    curr.inZOI.map((item, num) => (
    num >=1  && num <=2 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+45}</td>
        <td>inZOI</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("inZOI")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2 ?()=>handledeletelog("inZOI",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Assassin.map((item, num) => (
      num >=1  && num <=1 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+46}</td>
        <td>Assassin</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Assassin")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("Assassin",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.FragPunk.map((item, num) => (
    num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+47}</td>
        <td>FragPunk</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("FragPunk")}>Add</button></td>
<td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1 ?()=>handledeletelog("FragPunk",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.PrincePersia.map((item, num) => (
      num >=1  && num <=1 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+48}</td>
        <td>Prince Persia</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("PrincePersia")}>Add</button></td>
  <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("PrincePersia",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.SavagePlanet.map((item, num) => (
    num >=1  && num <=2 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+49}</td>
        <td>Savage Planet</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("SavagePlanet")}>Add</button></td>
  <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("SavagePlanet",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TalestheShire.map((item, num) => (
    num >=1  && num <=3 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+50}</td>
        <td>Tales the Shire</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TalestheShire")}>Add</button></td>
  <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("TalestheShire",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.KillingFloor.map((item, num) => (
    num >=1  && num <=2 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+51}</td>
        <td>Killing Floor</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("KillingFloor")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("KillingFloor",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Atofall.map((item, num) => (
      num >=1  && num <=3 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+52}</td>
        <td>Atofall</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Atofall")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("Atofall",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.MonsterHunter.map((item, num) => (
        num >=1  && num <=4 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+53}</td>
        <td>Monster Hunter</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("MonsterHunter")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto",color: num<=4 &&"#706d6dff" }}
onClick={num >4?()=>handledeletelog("MonsterHunter",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TwoPointMuseum.map((item, num) => (
        num >=1  && num <=3 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+54}</td>
        <td>Two Point Museum</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TwoPointMuseum")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("TwoPointMuseum",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.MetalGear.map((item, num) => (
      num >=1  && num <=2 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+55}</td>
        <td>Metal Gear</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("MetalGear")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("MetalGear",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.Borderlands4.map((item, num) => (
        num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+56}</td>
        <td>Border lands 4</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Borderlands4")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("Borderlands4",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TheAlters.map((item, num) => (
        num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+57}</td>
        <td>The Alters</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TheAlters")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("TheAlters",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Kingmakers.map((item, num) => (
        num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+58}</td>
        <td>King makers</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
    <td><button onClick={()=> setvalue("Kingmakers")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("Kingmakers",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.SplitFiction.map((item, num) => (
        num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+59}</td>
        <td>Split Fiction</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("SplitFiction")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("SplitFiction",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Skate4.map((item, num) => (
       num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+60}</td>
        <td>Skate 4</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Skate4")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("Skate4",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TheOuterWorlds.map((item, num) => (
      num >=1  && num <=3 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+61}</td>
        <td>The Outer Worlds</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TheOuterWorlds")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("TheOuterWorlds",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.ClashOfClans.map((item, num) => (
        num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+62}</td>
        <td>Clash Of Clans</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("ClashOfClans")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("ClashOfClans",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.rdr2.map((item, num) => (
        num >=1  && num <=3 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+63}</td>
        <td>rdr2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("rdr2")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("rdr2",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.infinity.map((item, num) => (
        num >=1  && num <=1 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+65}</td>
        <td>infinity nikki</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("CreedOdyssey")}>Add</button></td>
   <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("CreedOdyssey",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TombRaider.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+66}</td>
        <td>Tomb Raider</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TombRaider")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("TombRaider",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.LifeStrange.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+67}</td>
        <td>Life Strange</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("LifeStrange")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("LifeStrange",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Firewatch.map((item, num) => (
       num >=1  && num <=1 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+68}</td>
        <td>Fire watch</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Firewatch")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Firewatch",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TheLegendZelda.map((item, num) => (
       num >=1  && num <=3 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+69}</td>
        <td>The Legend Zelda</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TheLegendZelda")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("TheLegendZelda",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.Horizon.map((item, num) => (
       num >=1  && num <=1 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+70}</td>
        <td>Horizon</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Horizon")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Horizon",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.AWayOut.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+71}</td>
        <td>AWayOut</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("AWayOut")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("AWayOut",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.AdventuresofPip.map((item, num) => (
     num >=1  && num <=2 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+72}</td>
        <td>Adventures of Pip</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("AdventuresofPip")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("AdventuresofPip",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Journey.map((item, num) => (
     num >=1  && num <=1 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+73}</td>
        <td>Journey</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Journey")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("Journey",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.ShadowColossus.map((item, num) => (
       num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+74}</td>
        <td>Lego Voyagers</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("ShadowColossus")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("ShadowColossus",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.Cyberpunk.map((item, num) => (
       num >=1  && num <=1 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+75}</td>
        <td>Cyberpunk</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Cyberpunk")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Cyberpunk",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.FarCry5.map((item, num) => (
       num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+76}</td>
        <td>FarCry 5</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("FarCry5")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("FarCry5",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.DeathStranding.map((item, num) => (
       num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+77}</td>
        <td>Death Stranding</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("DeathStranding")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("DeathStranding",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.WitchIt.map((item, num) => (
     num >=1  && num <=2 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+78}</td>
        <td>gost of yotel</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("WitchIt")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("WitchIt",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.FarmingSimulator.map((item, num) => (
       num >=1  && num <=3 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+79}</td>
        <td>Farming Simulator</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("FarmingSimulator")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("FarmingSimulator",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.ZenlessZoneZero.map((item, num) => (
       num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+80}</td>
        <td>Hell Is Us</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("ZenlessZoneZero")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("ZenlessZoneZero",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.NARAKABLADEPOINT.map((item, num) => (
     num >=1  && num <=2 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+81}</td>
        <td>NARAKA BLADEPOINT</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("NARAKABLADEPOINT")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("NARAKABLADEPOINT",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.EASPORTSFC.map((item, num) => (
     num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+82}</td>
        <td>EASPORT SFC</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("EASPORTSFC")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("EASPORTSFC",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.HELLDIVERS2.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+83}</td>
        <td>HELLDIVERS 2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("HELLDIVERS2")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("HELLDIVERS2",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.PUBGBATTLEGROUNDS.map((item, num) => (
       num >=1  && num <=1 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+84}</td>
        <td>PUBG BATTLEGROUNDS</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("PUBGBATTLEGROUNDS")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("HELLDIVERS2",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.CallofDuty.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+85}</td>
        <td>Call of Duty</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("CallofDuty")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("CallofDuty",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.valorant.map((item, num) => (
     num >=1  && num <=2 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+86}</td>
        <td>valorant</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("valorant")}>Add</button></td>
         <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("valorant",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Dota2.map((item, num) => (
       num >=1  && num <=1 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+87}</td>
        <td>Dota2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Dota2")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Dota2Dota2",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TheSims4.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+88}</td>
        <td>TheSims 4</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TheSims4")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("TheSims4",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.ROBLOX.map((item, num) => (
      num >=1  && num <=0 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+89}</td>
        <td>ROBLOX</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("ROBLOX")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("ROBLOX",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Minecraft.map((item, num) => (
         num >=1  && num <=0 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+90}</td>
        <td>Minecraft</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Minecraft")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("Minecraft",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.CounterStrike.map((item, num) => (
         num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+91}</td>
        <td>Counter Strike</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("CounterStrike")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("CounterStrike",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Magic.map((item, num) => (
         num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+92}</td>
        <td>Magic</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Magic")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("Magic",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody><tbody>
  {trainonc.map((curr, index) =>  
    curr.Chivalry2.map((item, num) => (
         num >=1  && num <=1 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+93}</td>
        <td>Chivalry 2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Chivalry2")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Chivalry2",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.LeagueofLegends.map((item, num) => (
         num >=1  && num <=4 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+94}</td>
        <td>League of Legends</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("LeagueofLegends")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto",color: num<=4 &&"#706d6dff" }}
onClick={num >4?()=>handledeletelog("LeagueofLegends",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.SidMeier.map((item, num) => (
         num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+95}</td>
        <td>SidMeier</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("SidMeier")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("SidMeier",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.MovingOut.map((item, num) => (
       num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+96}</td>
        <td>Moving Out</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("MovingOut")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("MovingOut",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.BloonsTD.map((item, num) => (
       num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+97}</td>
        <td>Bloons TD</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("BloonsTD")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("BloonsTD",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Satisfactory.map((item, num) => (
       num >=1  && num <=1 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+98}</td>
        <td>Satisfactory</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Satisfactory")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("Satisfactory",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.AmongUs.map((item, num) => (
       num >=1  && num <=1 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+99}</td>
        <td>Among Us</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("AmongUs")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("AmongUs",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.GrandTheftAutoV.map((item, num) => (
       num >=1  && num <=2 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+100}</td>
        <td>Grand Theft Auto V</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("GrandTheftAutoV")}>Add</button></td>
          <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("GrandTheftAutoV",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.DeltaForce.map((item, num) => (
     num >=1  && num <=2 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+99}</td>
        <td>Delta Force</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("DeltaForce")}>Add</button></td>
          <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("DeltaForce",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.PathofExile2.map((item, num) => (
     num >=1  && num <=4 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+9}</td>
        <td>Path of Exile 2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("PathofExile2")}>Add</button></td>
          <td><button className="deletetext"
style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto",color: num<=4 &&"#706d6dff" }}
onClick={num >4?()=>handledeletelog("PathofExile2",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.RocketLeague.map((item, num) => (
     num >=1  && num <=2 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+100}</td>
        <td>Rocket League</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("RocketLeague")}>Add</button></td>
          <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("RocketLeague",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.Rust.map((item, num) => (
     num >=1  && num <=1 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+101}</td>
        <td>Rust</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Rust")}>Add</button></td>
          <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Rust",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Overwatch2.map((item, num) => (
    num >=1  && num <=2 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+102}</td>
        <td>Overwatch 2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Overwatch2")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("Overwatch2",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.DiabloIV.map((item, num) => (
       num >=1  && num <=2 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+103}</td>
        <td>Diablo IV</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("DiabloIV")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("DiabloIV",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TomClancy.map((item, num) => (
      num >=1  && num <=2 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+104}</td>
        <td>Tom Clancy</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TomClancy")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("TomClancy",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TheElder.map((item, num) => (
    num >=1  && num <=3 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+105}</td>
        <td>The Elder</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TheElder")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("TheElder",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.GTA.map((item, num) => (
      num >=1  && num <=4 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+106}</td>
        <td>Grand Theft Auto VI</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("GTA")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("GTA",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.StarWars.map((item, num) => (
    num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+107}</td>
        <td>Battlefield 6</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("StarWars")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("StarWars",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.MarvelsWolverine.map((item, num) => (
      num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+108}</td>
        <td>Marvels Wolverine</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("MarvelsWolverine")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("MarvelsWolverine",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Fable.map((item, num) => (
    num >=1  && num <=0 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+109}</td>
        <td>Fable</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Fable")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("Fable",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.Avowed.map((item, num) => (
       num >=1  && num <=0 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+110}</td>
        <td>Avowed</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Avowed")}>Add</button></td>
    <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("Avowed",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.SenuaSaga.map((item, num) => (
       num >=1  && num <=3 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+111}</td>
        <td>Senua Saga</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("SenuaSaga")}>Add</button></td>
    <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("SenuaSaga",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.MetroidPrime.map((item, num) => (
       num >=1  && num <=3 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+112}</td>
        <td>Metroid Prime</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{"MetroidPrime"}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue(item.name)}>Add</button></td>
    <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("MetroidPrime",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Civilization7.map((item, num) => (
      num >=1  && num <=2 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+113}</td>
        <td>Civilization7</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Civilization7")}>Add</button></td>
    <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("Civilization7",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.ItTakesTwo.map((item, num) => (
     num >=1  && num <=3 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+114}</td>
        <td>It Takes Two</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("ItTakesTwo")}>Add</button></td>
          <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("ItTakesTwo",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Diablo4.map((item, num) => (
     num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+115}</td>
        <td>Diablo 4</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Diablo4")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Diablo4",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.BaldurGate3.map((item, num) => (
     num >=1  && num <=3 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+116}</td>
        <td>Baldur Gate 3</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("BaldurGate3")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("BaldurGate3",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.GenshinImpact.map((item, num) => (
    num >=1  && num <=2 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+117}</td>
        <td>Little Nightmares 3</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("GenshinImpact")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("GenshinImpact",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Warframe.map((item, num) => (
      num >=1  && num <=1 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+118}</td>
        <td>Warframe</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Warframe")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Warframe",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.fornight.map((item, num) => (
      num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+119}</td>
        <td>fornight</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("fornight")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("fornight",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.ApexLegends.map((item, num) => (
      num >=1  && num <=3 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+120}</td>
        <td>Apex Legends</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("ApexLegends")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("ApexLegends",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TheLastOfUs.map((item, num) => (
    num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+121}</td>
        <td>The Last Of Us</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TheLastOfUs")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("TheLastOfUs",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.CallWarzone.map((item, num) => (
      num >=1  && num <=4 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+122}</td>
        <td>Call Warzone</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("CallWarzone")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto",color: num<=4 &&"#706d6dff" }}
onClick={num >4?()=>handledeletelog("CallWarzone",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Destiny2.map((item, num) => (
    num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+123}</td>
        <td>Destiny 2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Destiny2")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("CallWarzone",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TeamFortress2.map((item, num) => (
      num >=1  && num <=3 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+124}</td>
        <td>Team Fortress 2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TeamFortress2")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("TeamFortress2",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Hearthstone.map((item, num) => (
    num >=1  && num <=2 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+125}</td>
        <td>Hearthstone</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Hearthstone")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("Hearthstone",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Paladins.map((item, num) => (
    num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+126}</td>
        <td>Paladins</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Paladins")}>Add</button></td>
        <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Paladins",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Dauntless.map((item, num) => (
    num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+127}</td>
        <td>Dauntless</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Dauntless")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Dauntless",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Smite.map((item, num) => (
      num >=1  && num <=0 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+128}</td>
        <td>Smite</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Smite")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("Smite",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.WorldofTanks.map((item, num) => (
    num >=1  && num <=2 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+129}</td>
        <td>World of Tanks</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("WorldofTanks")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("WorldofTanks",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.WarThunder.map((item, num) => (
      num >=1  && num <=2 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+130}</td>
        <td>War Thunder</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("WarThunder")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("WarThunder",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.StarWars.map((item, num) => (
      num >=1  && num <=1 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+131}</td>
        <td>StarWars</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("StarWars")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("StarWars",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.BladeSoul.map((item, num) => (
      num >=1  && num <=3 ? "":  
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+132}</td>
        <td>BladeSoul</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("BladeSoul")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto",color: num<=3 &&"#706d6dff" }}
onClick={num >3?()=>handledeletelog("BladeSoul",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.SlaythePrinces.map((item, num) => (
    num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+133}</td>
        <td>Slay the Princes</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{"SlaythePrinces"}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue(item.name)}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("BladeSoul",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.UFO50.map((item, num) => (
    num >=1  && num <=4 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+134}</td>
        <td>UFO 50</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("UFO50")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto",color: num<=4 &&"#706d6dff" }}
onClick={num >4?()=>handledeletelog("UFO50",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.AnimalWell.map((item, num) => (
    num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+135}</td>
        <td>Animal Well</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("AnimalWell")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("AnimalWell",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Satisfactory.map((item, num) => (
    num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+136}</td>
        <td>Satis factory</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Satisfactory")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Satisfactory",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Balatro.map((item, num) => (
      num >=1  && num <=1 ? "": 
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+137}</td>
        <td>Portal 2</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Balatro")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("Balatro",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.LastUsPartII.map((item, num) => (
    num >=1  && num <=2 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+138}</td>
        <td>Last Us Part II</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("LastUsPartII")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("LastUsPartII",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Tekken8.map((item, num) => (
    num >=1  && num <=1 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+139}</td>
        <td>Tekken 8</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Tekken8")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Tekken8",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Tsukihime.map((item, num) => (
        num >=1  && num <=1 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+140}</td>
        <td>Asphalt 9</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Tsukihime")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto",color: num<=0 &&"#706d6dff" }}
onClick={num >0?()=>handledeletelog("Tsukihime",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.LikeaDragon.map((item, num) => (
         num >=1  && num <=1 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+141}</td>
        <td>Like a Dragon</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("LikeaDragon")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("LikeaDragon",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.CastlevaniaDominus.map((item, num) => (
        num >=1  && num <=1 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+142}</td>
        <td>Castlevania Dominus</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("CastlevaniaDominus")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("CastlevaniaDominus",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Lorelei.map((item, num) => (
        num >=1  && num <=1 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+143}</td>
        <td>Lorelei</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Lorelei")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Lorelei",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.ThankGoodness.map((item, num) => (
        num >=1  && num <=1 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+144}</td>
        <td>Thank Goodness</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("ThankGoodness")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("ThankGoodness",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.MetalGearSolidV.map((item, num) => (
        num >=1  && num <=3 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+145}</td>
        <td>Metal Gear SolidV</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("MetalGearSolidV")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("MetalGearSolidV",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Mirage.map((item, num) => (
        num >=1  && num <=2 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+146}</td>
        <td>Assassin's Creed Mirage</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Mirage")}>Add</button></td>
      <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("Mirage",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.ArmoredCoreVI.map((item, num) => (
        num >=1  && num <=1 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+147}</td>
        <td>Armored Core VI</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("ArmoredCoreVI")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("ArmoredCoreVI",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TheFirstDescendant.map((item, num) => (
        num >=1  && num <=1 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+148}</td>
        <td>The First Descendant</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TheFirstDescendant")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("TheFirstDescendant",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.AvatarPandora.map((item, num) => (
        num >=1  && num <=1 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+149}</td>
        <td>Avatar Pandora</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("AvatarPandora")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Avatar Pandora",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.XX30.map((item, num) => (
        num >=1  && num <=2 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+150}</td>
        <td>XX30</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("XX30")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("XX30",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.ShadowTactics.map((item, num) => (
        num >=1  && num <=2 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+151}</td>
        <td>Shadow Tactics</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("ShadowTactics")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("ShadowTactics",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.RealmsRuin.map((item, num) => (
          num >=1  && num <=1 ? "":   
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+152}</td>
        <td>Realms Ruin</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("RealmsRuin")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("RealmsRuin",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.GTASanAndreas.map((item, num) => (
        num >=1  && num <=2 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+153}</td>
        <td>GTA San Andreas</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("GTASanAndreas")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("GTASanAndreas",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.Uncharted4.map((item, num) => (
        num >=1  && num <=1 ? "":     
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+154}</td>
        <td>Uncharted 4</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("Uncharted4")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("Uncharted4",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.TheLostLegacy.map((item, num) => (
        num >=1  && num <=1 ? "":         
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+155}</td>
        <td>The Lost Legacy</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("TheLostLegacy")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto",color: num<=1 &&"#706d6dff" }}
onClick={num >1?()=>handledeletelog("TheLostLegacy",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.wwe.map((item, num) => (
     num >=1  && num <=2 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+156}</td>
        <td>wwe 2k24</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("HELLDIVERS2")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("HELLDIVERS2",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.GrandTheftAutoOnline.map((item, num) => (
     num >=1  && num <=2 ? "":    
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "" : num+157}</td>
        <td>Grand Theft Auto Online</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("HELLDIVERS2")}>Add</button></td>
     <td><button className="deletetext"
style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto",color: num<=2 &&"#706d6dff" }}
onClick={num >2?()=>handledeletelog("HELLDIVERS2",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>



</table>
</section>
</main>
)    
}