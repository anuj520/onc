import { useState } from "react";
import { useAuth } from "../ContextAPI/ContextAPI"
import { Addcompo } from "../fav/addcompo";

export const Tablegetonc = ({login,sinup,emailverfy,pinverfy,chexkemail,getStart}) => {
const { trainonc,handledeletelog,data:authdata } = useAuth()
const[val,setvalue] = useState("")

return (
<main>
{
  val !=="" &&
  <Addcompo val={val} setvalue={setvalue}/>
}  
<section className="tbaleoncpagetrain">
<table>
<thead>
<tr className="trtable2onc">
<th>Filed</th>
<th>Name</th>
<th>Log</th>
<th>Add</th>
<th>Delete</th>
</tr>
</thead>

{
  login == "login" && 
  <>
<tbody>
  <tr>
    <td>1</td>
<td className="tdname">info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">information</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>

  <tbody>
  <tr>
    <td>2</td>
<td className="tdname">close info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">cancel</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>   
  <tbody>
      <tr className="tbodytr">
        <td>2</td>
        <td>Email</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">email</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
        <td>3</td>
        <td>Password</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">password</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>
<tbody>
      <tr className="tbodytr">
        <td>4</td>
        <td>Remove</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">remove</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
        <td>5</td>
        <td>Submit</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">submit</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>
  </>
}


{
  sinup == "sinup" &&
  <>
<tbody>
  <tr>
    <td>1</td>
<td className="tdname">info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">information</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>

  <tbody>
  <tr>
    <td>2</td>
<td className="tdname">close info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">cancel</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>   
<tbody>
      <tr className="tbodytr">
        <td>3</td>
        <td>Firstname</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">firstname</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>
<tbody>
      <tr className="tbodytr">
        <td>4</td>
        <td>Lastname</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">lastname</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
        <td>5</td>
        <td>Email</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">email</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
        <td>6</td>
        <td>Password</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">password</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
        <td>7</td>
        <td>Gender</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">gender</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
        <td>8</td>
        <td>filed name Remove</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">remove</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
        <td>9</td>
        <td>Submit</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">submit</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>
</>
}

{
  emailverfy == "emailverfy" &&
 <>
<tbody>
  <tr>
    <td>1</td>
<td className="tdname">info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">information</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>

  <tbody>
  <tr>
    <td>2</td>
<td className="tdname">close info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">cancel</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody> 
   <tbody>
      <tr className="tbodytr">
        <td>3</td>
        <td>Email</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">email</span>
          </div>
        </td>
        <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
         <td>4</td>
        <td>Verify</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">verify</span>
          </div>
        </td>
        <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
         <td>5</td>
        <td>Remove</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">remove email</span>
          </div>
        </td>
        <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

 </>
}
{
  pinverfy == "pinverfy" &&
 <>
<tbody>
  <tr>
    <td>1</td>
<td className="tdname">info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">information</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>

  <tbody>
  <tr>
    <td>2</td>
<td className="tdname">close info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">cancel</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody> 
   <tbody>
      <tr className="tbodytr">
        <td>3</td>
        <td>OTP</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">otp</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
        <td>4</td>
        <td>Verify</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">verify</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
        <td>5</td>
        <td>Remove</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">remove</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
        <td>6</td>
        <td>Back</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">back</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>
 </>
}
{
  chexkemail == "chexkemail" &&
  <>
<tbody>
  <tr>
    <td>1</td>
<td className="tdname">info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">information</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>

  <tbody>
  <tr>
    <td>2</td>
<td className="tdname">close info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">cancel</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>  
    <tbody>
      <tr className="tbodytr">
        <td>3</td>
        <td>Password</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">password</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

    <tbody>
      <tr className="tbodytr">
        <td>4</td>
        <td>Confirm</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">confirm</span>
          </div>
        </td>
         <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>
  <tbody>
      <tr className="tbodytr">
        <td>5</td>
        <td>Remove</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">remove filed name</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>

<tbody>
      <tr className="tbodytr">
        <td>6</td>
        <td>Submit</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">submit</span>
          </div>
        </td>
       <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
      </tr>
</tbody>
  </>
}


{
  authdata.email == undefined  && getStart == "getStart" ?
  <>
<tbody>
  <tr>
    <td>1</td>
<td className="tdname">info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">information</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>

  <tbody>
  <tr>
    <td>2</td>
<td className="tdname">close info</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">cancel</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>

  <tbody>
  <tr>
    <td>3</td>
<td className="tdname">tap</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">tap</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>
  <tbody>
  <tr>
 <td>4</td>
<td>Down</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">down</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>
  <tbody>
  <tr>
 <td>5</td>    
<td>Up</td>
<td>
     <div className="scrollonctrain">
        <span className="pathover">up</span>
          </div>
</td>
    <td><button style={{backgroundColor:"#0b315bff",color:"#5f5959ff",cursor:"auto"}}>Add</button></td>
        <td><button className="deletetext" style={{backgroundColor:"#2d0e0aff",cursor: "auto",color:"#5f5959ff" }}>Delete</button></td>
</tr> 
</tbody>
  </>:
authdata.email !== undefined ?   
  <>
  <tbody>
  {trainonc.map((curr, index) =>  
    curr.tap.map((item, num) => (
    num >=1 && num <=6 ?"":  
      <tr key={`home-${index}-${num}`} className="tbodytr">
        <td>{num> 0 ? "" : num+1}</td>
        <td className="tdname">{num == 0 && "Tap"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("tap")}>Add</button></td>
     <td><button className="deletetext"
        style={{backgroundColor: num <=6? "#2d0e0aff":"",cursor: num <=6 && "auto",color: num <=6 && "#5f5959ff"}}
        onClick={num >6 ?()=>handledeletelog("tap",item.name):""}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
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
  </>:""
}


</table>
</section>
</main>
    )
}