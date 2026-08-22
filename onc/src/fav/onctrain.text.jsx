import { useQuery } from "@tanstack/react-query";
import { Loading } from "../Loading/Loading";
import { useEffect, useState } from "react";
import { Addcompo } from "./addcompo";
import { useAuth } from "../ContextAPI/ContextAPI";

export const OncTrainText = () => {
const[val,setvalue] = useState("")
const{trainonc,handledeletelog} = useAuth()

if (!trainonc) return <Loading />;
  
  return (
    <section className="OncTrainText" >
      <main  style={{
    overflow: val? "hidden": ""
  }}>
        {val !== "" ? 
        <Addcompo val={val} setvalue={setvalue}/>:
         <>
        <table>
          <thead>
            <tr className="thead">
              <th>No.</th>
              <th className="pathtrain">Path</th>
              <th className="pathtrain2">Name</th>
              <th className="pathtrain3">Update</th>
              <th>Delete</th>
            </tr>
          </thead>
<tbody>
  {trainonc.map((curr, index) =>  
    curr.home.map((item, num) => (
      <tr key={`home-${index}-${num}`}>
        <td>{num> 0 ? "." : num+1}</td>
        <td className="tdname">{num == 0 && "Home"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("home")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("home",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>  
    curr.getstart.map((item, num) => (
      <tr key={`getstart-${index}-${num}`}>
        <td>{num> 0 ? "." : num+1}</td>
        <td className="tdname">{num == 0 && "Getstart"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("getstart")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto" }}
        onClick={num >5 ?()=>handledeletelog("getstart",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.about.map((item, num) => (
      <tr key={`about-${index}-${num}`}>
        <td>{num> 0 ? "." : num+2}</td>
        <td className="tdname">{num == 0 && "About"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("about")}>Add</button></td>
      <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("about",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.category.map((item, num) => (
      <tr key={`genra-${index}-${num}`}>
        <td>{num> 0 ? "." : num+3}</td>
        <td className="tdname">{num == 0 && "Category"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("category")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto" }}
        onClick={num >5 ?()=>handledeletelog("genra",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.search.map((item, num) => (
      <tr key={`search-${index}-${num}`}>
        <td>{num> 0 ? "." : num+4}</td>
        <td className="tdname">{num == 0 && "Search"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("search")}>Add</button></td>
   <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("search",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.user.map((item, num) => (
      <tr key={`user-${index}-${num}`}>
        <td>{num> 0 ? "." : num+5}</td>
        <td className="tdname">{num == 0 && "Profile"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("user")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("user",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.notification.map((item, num) => (
      <tr key={`notification-${index}-${num}`}>
        <td>{num> 0 ? "." : num+6}</td>
        <td className="tdname">{num == 0 && "Notification"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("notification")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("notification",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.contect.map((item, num) => (
      <tr key={`message-${index}-${num}`}>
        <td>{num> 0 ? "." : num+7}</td>
        <td className="tdname">{num == 0 && "Message"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("contect")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("message",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.close.map((item, num) => (
      <tr key={`close-${index}-${num}`}>
        <td>{num> 0 ? "." : num+8}</td>
        <td className="tdname">{num == 0 && "Close"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("close")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto" }}
        onClick={num >2 ?()=>handledeletelog("close",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.ok.map((item, num) => (
      <tr key={`ok-${index}-${num}`}>
        <td>{num> 0 ? "." : num+9}</td>
        <td className="tdname">{num == 0 && "Ok"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("ok")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto" }}
        onClick={num >0 ?()=>handledeletelog("ok",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.skip.map((item, num) => (
      <tr key={`skip-${index}-${num}`}>
        <td>{num> 0 ? "." : num+10}</td>
        <td className="tdname">{num == 0 && "Skip"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("skip")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto" }}
        onClick={num >0 ?()=>handledeletelog("skip",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.down.map((item, num) => (
      <tr key={`down-${index}-${num}`}>
       <td>{num> 0 ? "." : num+12}</td>
        <td className="tdname">{num == 0 && "Down"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("down")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=6? "#2d0e0aff":"",cursor: num <=6 && "auto" }}
        onClick={num >6 ?()=>handledeletelog("down",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.edit.map((item, num) => (
      <tr key={`keep-${index}-${num}`}>
        <td>{num> 0 ? "." : num+12}</td>
        <td className="tdname">{num == 0 && "Edit"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("edit")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto" }}
        onClick={num >2 ?()=>handledeletelog("edit",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.login.map((item, num) => (
      <tr key={`down-${index}-${num}`}>
       <td>{num> 0 ? "." : num+13}</td>
        <td className="tdname">{num == 0 && "Login"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("login")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto" }}
        onClick={num >0 ?()=>handledeletelog("login",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.games.map((item, num) => (
      <tr key={`games-${index}-${num}`}>
        <td>{num> 0 ? "." : num+14}</td>
        <td className="tdname">{num == 0 && "Games"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("games")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto" }}
        onClick={num >2 ?()=>handledeletelog("games",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.sign.map((item, num) => (
      <tr key={`sign-${index}-${num}`}>
       <td>{num> 0 ? "." : num+15}</td>
        <td className="tdname">{num == 0 && "Sign"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("sign")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto" }}
        onClick={num >2 ?()=>handledeletelog("sign",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.playblack.map((item, num) => (
      <tr key={`playblack-${index}-${num}`}>
        <td>{num> 0 ? "." : num+16}</td>
        <td className="tdname">{num == 0 && "Playblack"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("playblack")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto" }}
        onClick={num >2 ?()=>handledeletelog("playblack",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.playtakken.map((item, num) => (
      <tr key={`playtakken-${index}-${num}`}>
       <td>{num> 0 ? "." : num+17}</td>
        <td className="tdname">{num == 0 && "PlayTakken"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("playtakken")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto" }}
        onClick={num >2 ?()=>handledeletelog("playtakken",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.creators.map((item, num) => (
      <tr key={`creators-${index}-${num}`}>
        <td>{num> 0 ? "." : num+18}</td>
        <td className="tdname">{num == 0 && "Creators"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("creators")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("creators",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.AmyHennig.map((item, num) => (
      <tr key={`AmyHennig-${index}-${num}`}>
       <td>{num> 0 ? "." : num+19}</td>
        <td className="tdname">{num == 0 && "AmyHennig"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("AmyHennig")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("AmyHennig",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.ShigeruMiyamoto.map((item, num) => (
      <tr key={`ShigeruMiyamoto-${index}-${num}`}>
        <td>{num> 0 ? "." : num+20}</td>
        <td className="tdname">{num == 0 && "Shigeru Miyamoto"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("ShigeruMiyamoto")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("ShigeruMiyamoto",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.CliffBleszinski.map((item, num) => (
      <tr key={`CliffBleszinski-${index}-${num}`}>
       <td>{num> 0 ? "." : num+21}</td>
        <td className="tdname">{num == 0 && "Cliff Bleszinski"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("CliffBleszinski")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("CliffBleszinski",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.DavidCage.map((item, num) => (
      <tr key={`DavidCage-${index}-${num}`}>
        <td>{num> 0 ? "." : num+22}</td>
        <td className="tdname">{num == 0 && "David Cage"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("DavidCage")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("DavidCage",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.GabeNewell.map((item, num) => (
      <tr key={`GabeNewell-${index}-${num}`}>
       <td>{num> 0 ? "." : num+23}</td>
        <td className="tdname">{num == 0 && "Gabe Newell"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("GabeNewell")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("GabeNewell",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.TimSchafer.map((item, num) => (
      <tr key={`TimSchafer-${index}-${num}`}>
        <td>{num> 0 ? "." : num+24}</td>
        <td className="tdname">{num == 0 && "Tim Schafer"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("TimSchafer")}>Add</button></td>
         <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("TimSchafer",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.RichardGarriott.map((item, num) => (
      <tr key={`RichardGarriott-${index}-${num}`}>
       <td>{num> 0 ? "." : num+25}</td>
        <td className="tdname">{num == 0 && "Richard Garriott"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("RichardGarriott")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("RichardGarriott",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.JonathanBlow.map((item, num) => (
      <tr key={`JonathanBlow-${index}-${num}`}>
        <td>{num> 0 ? "." : num+26}</td>
        <td className="tdname">{num == 0 && "Jonathan Blow"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("JonathanBlow")}>Add</button></td>
         <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("JonathanBlow",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.BrianFargo.map((item, num) => (
      <tr key={`BrianFargo-${index}-${num}`}>
       <td>{num> 0 ? "." : num+27}</td>
        <td className="tdname">{num == 0 && "Brian Fargo"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("BrianFargo")}>Add</button></td>
         <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("BrianFargo",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.MarkusNotchPersson.map((item, num) => (
      <tr key={`MarkusNotchPersson-${index}-${num}`}>
        <td>{num> 0 ? "." : num+28}</td>
        <td className="tdname">{num == 0 && "Markus Notch Persson"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("MarkusNotchPersson")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("MarkusNotchPersson",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.RalphHBaer.map((item, num) => (
      <tr key={`RalphHBaer-${index}-${num}`}>
       <td>{num> 0 ? "." : num+29}</td>
        <td className="tdname">{num == 0 && "RalphH Baer"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("RalphHBaer")}>Add</button></td>
         <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("RalphHBaer",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.JohnCarmack.map((item, num) => (
      <tr key={`JohnCarmack-${index}-${num}`}>
        <td>{num> 0 ? "." : num+30}</td>
        <td className="tdname">{num == 0 && "John Carmack"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("JohnCarmack")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("JohnCarmack",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.ToddHoward.map((item, num) => (
      <tr key={`ToddHoward-${index}-${num}`}>
       <td>{num> 0 ? "." : num+31}</td>
        <td className="tdname">{num == 0 && "Todd Howard"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("ToddHoward")}>Add</button></td>
       <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("ToddHoward",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.JasonJones.map((item, num) => (
      <tr key={`JasonJones-${index}-${num}`}>
        <td>{num> 0 ? "." : num+32}</td>
        <td className="tdname">{num == 0 && "Jason Jones"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("JasonJones")}>Add</button></td>
  <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("JasonJones",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.YokoTaro.map((item, num) => (
      <tr key={`YokoTaro-${index}-${num}`}>
       <td>{num> 0 ? "." : num+33}</td>
        <td className="tdname">{num == 0 && "Yoko Taro"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("YokoTaro")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("YokoTaro",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.KenLevine.map((item, num) => (
      <tr key={`KenLevine-${index}-${num}`}>
        <td>{num> 0 ? "." : num+34}</td>
        <td className="tdname">{num == 0 && "Ken Levine"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("KenLevine")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("KenLevine",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.SidMeier.map((item, num) => (
      <tr key={`SidMeier-${index}-${num}`}>
       <td>{num> 0 ? "." : num+35}</td>
        <td className="tdname">{num == 0 && "SidMeier"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("SidMeier")}>Add</button></td>
         <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto" }}
        onClick={num >2 ?()=>handledeletelog("SidMeier",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.WillWright.map((item, num) => (
      <tr key={`WillWright-${index}-${num}`}>
        <td>{num> 0 ? "." : num+36}</td>
        <td className="tdname">{num == 0 && "Will Wright"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("WillWright")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("WillWright",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.SwenVincke.map((item, num) => (
      <tr key={`SwenVincke-${index}-${num}`}>
       <td>{num> 0 ? "." : num+37}</td>
        <td className="tdname">{num == 0 && "Swen Vincke"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("SwenVincke")}>Add</button></td>
               <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("SwenVincke",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.HideoKojima.map((item, num) => (
      <tr key={`HideoKojima-${index}-${num}`}>
        <td>{num> 0 ? "." : num+38}</td>
        <td className="tdname">{num == 0 && "Hideo Kojima"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("HideoKojima")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("HideoKojima",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.battle.map((item, num) => (
      <tr key={`battle-${index}-${num}`}>
       <td>{num> 0 ? "." : num+39}</td>
        <td className="tdname">{num == 0 && "Battle Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("battle")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("battle",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.sports.map((item, num) => (
      <tr key={`sports-${index}-${num}`}>
        <td>{num> 0 ? "." : num+40}</td>
        <td className="tdname">{num == 0 && "sports Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("sports")}>Add</button></td>
       <td><button className="deletetext"
        style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto" }}
        onClick={num >5 ?()=>handledeletelog("sports",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.educational.map((item, num) => (
      <tr key={`educational-${index}-${num}`}>
       <td>{num> 0 ? "." : num+41}</td>
        <td className="tdname">{num == 0 && "educational Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("educational")}>Add</button></td>
         <td><button className="deletetext"
        style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto" }}
        onClick={num >5 ?()=>handledeletelog("educational",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.bordGame.map((item, num) => (
      <tr key={`bordGame-${index}-${num}`}>
        <td>{num> 0 ? "." : num+42}</td>
        <td className="tdname">{num == 0 && "bord Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("bordGame")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("bordGame",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.story.map((item, num) => (
      <tr key={`story-${index}-${num}`}>
       <td>{num> 0 ? "." : num+43}</td>
        <td className="tdname">{num == 0 && "Stroy Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("story")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=6? "#2d0e0aff":"",cursor: num <=6 && "auto" }}
        onClick={num >6 ?()=>handledeletelog("story",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.family.map((item, num) => (
      <tr key={`family-${index}-${num}`}>
        <td>{num> 0 ? "." : num+44}</td>
        <td className="tdname">{num == 0 && "family Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("family")}>Add</button></td>
       <td><button className="deletetext"
        style={{backgroundColor: num <=6? "#2d0e0aff":"",cursor: num <=6 && "auto" }}
        onClick={num >6 ?()=>handledeletelog("family",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.action.map((item, num) => (
      <tr key={`action-${index}-${num}`}>
       <td>{num> 0 ? "." : num+45}</td>
        <td className="tdname">{num == 0 && "Action Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("action")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto" }}
        onClick={num >2 ?()=>handledeletelog("action",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.advancher.map((item, num) => (
      <tr key={`advancher-${index}-${num}`}>
        <td>{num> 0 ? "." : num+46}</td>
        <td className="tdname">{num == 0 && "advancher Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("advancher")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("advancher",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.casual.map((item, num) => (
      <tr key={`casual-${index}-${num}`}>
       <td>{num> 0 ? "." : num+46}</td>
        <td className="tdname">{num == 0 && "casual Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("casual")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto" }}
        onClick={num >5 ?()=>handledeletelog("casual",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.strategy.map((item, num) => (
      <tr key={`strategy-${index}-${num}`}>
        <td>{num> 0 ? "." : num+47}</td>
        <td className="tdname">{num == 0 && "strategy Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("strategy")}>Add</button></td>
       <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("strategy",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.card.map((item, num) => (
      <tr key={`card-${index}-${num}`}>
       <td>{num> 0 ? "." : num+48}</td>
        <td className="tdname">{num == 0 && "card Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("card")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("card",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.indie.map((item, num) => (
      <tr key={`indie-${index}-${num}`}>
        <td>{num> 0 ? "." : num+49}</td>
        <td className="tdname">{num == 0 && "indie Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("indie")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("indie",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.multiplayer.map((item, num) => (
      <tr key={`multiplayer-${index}-${num}`}>
       <td>{num> 0 ? "." : num+50}</td>
        <td className="tdname">{num == 0 && "multiplayer Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("multiplayer")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto" }}
        onClick={num >2 ?()=>handledeletelog("multiplayer",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.shooter.map((item, num) => (
      <tr key={`shooter-${index}-${num}`}>
        <td>{num> 0 ? "." : num+51}</td>
        <td className="tdname">{num == 0 && "shooter troy Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("shooter")}>Add</button></td>
         <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto" }}
        onClick={num >2 ?()=>handledeletelog("shooter",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.arcade.map((item, num) => (
      <tr key={`arcade-${index}-${num}`}>
       <td>{num> 0 ? "." : num+52}</td>
        <td className="tdname">{num == 0 && "Arcade Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("arcade")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto" }}
        onClick={num >5 ?()=>handledeletelog("arcade",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.simulation.map((item, num) => (
      <tr key={`simulation-${index}-${num}`}>
        <td>{num> 0 ? "." : num+53}</td>
        <td className="tdname">{num == 0 && "Simulation Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("simulation")}>Add</button></td>
      <td><button className="deletetext"
        style={{backgroundColor: num <=4? "#2d0e0aff":"",cursor: num <=4 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("simulation",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.platformer.map((item, num) => (
      <tr key={`platformer-${index}-${num}`}>
       <td>{num> 0 ? "." : num+54}</td>
        <td className="tdname">{num == 0 && "platformer Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("platformer")}>Add</button></td>
                   <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto" }}
        onClick={num >1 ?()=>handledeletelog("platformer",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.fighting.map((item, num) => (
      <tr key={`fighting-${index}-${num}`}>
        <td>{num> 0 ? "." : num+55}</td>
        <td className="tdname">{num == 0 && "fighting Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("fighting")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("fighting",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.rpg.map((item, num) => (
      <tr key={`rpg-${index}-${num}`}>
       <td>{num> 0 ? "." : num+56}</td>
        <td className="tdname">{num == 0 && "RPG Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("rpg")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("rpg",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.racing.map((item, num) => (
      <tr key={`racing-${index}-${num}`}>
        <td>{num> 0 ? "." : num+57}</td>
        <td className="tdname">{num == 0 && "Racing Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("racing")}>Add</button></td>
                   <td><button className="deletetext"
        style={{backgroundColor: num <=3? "#2d0e0aff":"",cursor: num <=3 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("racing",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.puzzle.map((item, num) => (
      <tr key={`puzzle-${index}-${num}`}>
       <td>{num> 0 ? "." : num+58}</td>
        <td className="tdname">{num == 0 && "puzzle Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("puzzle")}>Add</button></td>
            <td><button className="deletetext"
        style={{backgroundColor: num <=2? "#2d0e0aff":"",cursor: num <=2 && "auto" }}
        onClick={num >2 ?()=>handledeletelog("puzzle",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.platfrom.map((item, num) => (
      <tr key={`platfrom-${index}-${num}`}>
        <td>{num> 0 ? "." : num+59}</td>
        <td className="tdname">{num == 0 && "platfrom Game"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("platfrom")}>Add</button></td>
            <td><button className="deletetext"
        style={{backgroundColor: num <=5? "#2d0e0aff":"",cursor: num <=5 && "auto" }}
        onClick={num >5 ?()=>handledeletelog("platfrom",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.tag.map((item, num) => (
      <tr key={`tag-${index}-${num}`}>
       <td>{num> 0 ? "." : num+60}</td>
        <td className="tdname">{num == 0 && "tag"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("tag")}>Add</button></td>
            <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto" }}
        onClick={num >1 ?()=>handledeletelog("tag",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.whatName.map((item, num) => (
      <tr key={`whatName-${index}-${num}`}>
        <td>{num> 0 ? "." : num+61}</td>
        <td className="tdname">{num == 0 && "what is my name"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("whatName")}>Add</button></td>
           <td><button className="deletetext"
        style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto" }}
        onClick={num >0 ?()=>handledeletelog("whatName",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.whatEamil.map((item, num) => (
      <tr key={`whatEamil-${index}-${num}`}>
       <td>{num> 0 ? "." : num+62}</td>
        <td className="tdname">{num == 0 && "what is my email"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("whatEamil")}>Add</button></td>
          <td><button className="deletetext"
        style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto" }}
        onClick={num >0 ?()=>handledeletelog("whatEamil",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.yourName.map((item, num) => (
      <tr key={`yourName-${index}-${num}`}>
        <td>{num> 0 ? "." : num+63}</td>
        <td className="tdname">{num == 0 && "what is your name"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("yourName")}>Add</button></td>
            <td><button className="deletetext"
        style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto" }}
        onClick={num >0 ?()=>handledeletelog("yourName",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.language.map((item, num) => (
      <tr key={`language-${index}-${num}`}>
       <td>{num> 0 ? "." : num+64}</td>
        <td className="tdname">{num == 0 && "Language"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name} name</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("language")}>Add</button></td>
               <td><button className="deletetext"
        style={{backgroundColor: num <=0? "#2d0e0aff":"",cursor: num <=0 && "auto" }}
        onClick={num >0 ?()=>handledeletelog("language",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.find.map((item, num) => (
      <tr key={`find-${index}-${num}`}>
        <td>{num> 0 ? "." : num+65}</td>
        <td className="tdname">{num == 0 && "Find"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name} game name</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("find")}>Add</button></td>
               <td><button className="deletetext"
        style={{backgroundColor: num <5? "#2d0e0aff":"",cursor: num <5 && "auto" }}
        onClick={num >4 ?()=>handledeletelog("find",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.remove.map((item, num) => (
      <tr key={`remove-${index}-${num}`}>
       <td>{num> 0 ? "." : num+66}</td>
        <td className="tdname">{num == 0 && "remove"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("remove")}>Add</button></td>
               <td><button className="deletetext"
        style={{backgroundColor: num <2? "#2d0e0aff":"",cursor: num <2 && "auto" }}
        onClick={num >1 ?()=>handledeletelog("remove",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.settting.map((item, num) => (
      <tr key={`settting-${index}-${num}`}>
        <td>{num> 0 ? "." : num+67}</td>
        <td className="tdname">{num == 0 && "settting"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button nClick={()=> setvalue("settting")}>Add</button></td>
               <td><button className="deletetext"
        style={{backgroundColor: num <2? "#2d0e0aff":"",cursor: num <2 && "auto" }}
        onClick={num >1 ?()=>handledeletelog("settting",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.settingetstarted.map((item, num) => (
      <tr key={`settingetstarted-${index}-${num}`}>
       <td>{num> 0 ? "." : num+68}</td>
        <td className="tdname">{num == 0 && "settin getstarted"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("settingetstarted")}>Add</button></td>
               <td><button className="deletetext"
        style={{backgroundColor: num <4? "#2d0e0aff":"",cursor: num <4 && "auto" }}
        onClick={num >3 ?()=>handledeletelog("settingetstarted",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
<tbody>
  {trainonc.map((curr, index) =>
    curr.trynow.map((item, num) => (
      <tr key={`trynow-${index}-${num}`}>
        <td>{num> 0 ? "." : num+69}</td>
        <td className="tdname">{num == 0 && "trynow"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("trynow")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <2? "#2d0e0aff":"",cursor: num <1 && "auto" }}
        onClick={num >1 ?()=>handledeletelog("trynow",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>

<tbody>
  {trainonc.map((curr, index) =>
    curr.world.map((item, num) => (
      <tr key={`world-${index}-${num}`}>
       <td>{num> 0 ? "." : num+70}</td>
        <td className="tdname">{num == 0 && "world"}</td>
        <td>
          <div className="scrollonctrain">
            <span className="pathover">{item.name}</span>
          </div>
        </td>
        <td><button onClick={()=> setvalue("world")}>Add</button></td>
        <td><button className="deletetext"
        style={{backgroundColor: num <=1? "#2d0e0aff":"",cursor: num <=1 && "auto" }}
        onClick={num >1 ?()=>handledeletelog("world",item.name):undefined}>Delete</button></td>
      </tr>
    ))
  )}
</tbody>
{
    window.location.pathname !== "/worldChat" && window.location.pathname !== "problem" &&
 <tr>
    <td style={{height:"10vh"}}></td>
  </tr>
}

        </table>
       </>}
      </main>
    </section>
  );
};
