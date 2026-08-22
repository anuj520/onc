import { createContext, useContext, useEffect, useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios1 from "axios";
import { Loading } from "../Loading/Loading";
import { useParams } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [buClick, Setnum] = useState(false);
     const unmute = useRef(null)
    const [Scro, setScroll] = useState(false);
    const scroll = useRef(null);
    const[table,settable] = useState(false)
    const[data,setData] = useState([])
    const[token , storetoken] = useState(localStorage.getItem('token'))
  
const storeToken = (serverToken) =>{
    storetoken(serverToken)
    localStorage.setItem('token',serverToken)
}    
   
const isLogin = !!token
const AuthToken = `Bearer ${token}`;  
const Logout = () =>{
 storetoken("")
 localStorage.removeItem('token');
 localStorage.removeItem('img')
 window.location.href = "/login"
}

const block = data.isBlocked;


const userData = async() =>{ 
    try {
        const response = await fetch("http://localhost:3000/user/person/", {
            method: "GET",
            headers: {
                Authorization: AuthToken
            }
        });
        const res = await response.json();
        setData(res);
    } catch (error) {
        console.log("userData", error);
    }
};

useEffect(() => {
    userData();
}, []);


// const audio = useRef(new Audio("./../../public/W.mp3"));
const timeref = useRef(null);
const[currTime,setCurrTime] = useState(0)
const[E , setE] = useState(false)
const[W , setW] = useState(false)
const[P , setP] = useState(false)
const[S , setS] = useState(false)
const[D , setD] = useState(false) //372.623061
const handleTimeUpdate = () =>{
setCurrTime(timeref.current.currentTime)

// if (timeref.current.parentElement.requestFullscreen) {
//     timeref.current.controls = false;
//     timeref.current.parentElement.requestFullscreen();
// }
if (timeref.current.currentTime >= 307.434427 
    && timeref.current.currentTime <= 347.434427 ) {
    timeref.current.playbackRate = 0.25;
    // audio.current.playbackRate = 0.25
    setW(!W)
    setS(false)
    setE(false)
    setD(false)
    setP(false)
}

if (timeref.current.currentTime >= 308.434427 
    && timeref.current.currentTime <= 347.434427) {
 timeref.current.playbackRate = 0.25; 
// audio.current.playbackRate = 0.25
    setE(!E)
    setS(false)
    setD(false)
    setW(false)
    setP(false)
}
if (timeref.current.currentTime >= 311.191449 
    && timeref.current.currentTime <= 347.434427 ) {
 timeref.current.playbackRate = 0.25; 
// audio.current.playbackRate = 0.25
    setP(!P)
    setS(false)
    setE(false)
    setW(false)
    setD(false)
}
if (timeref.current.currentTime >= 327.191449 
    && timeref.current.currentTime <= 347.434427) {
 timeref.current.playbackRate = 0.25; 
// audio.current.playbackRate = 0.25
    setS(!S)
    setD(false)
    setE(false)
    setW(false)
    setP(false)
}
if (timeref.current.currentTime >= 364.821144 
    && timeref.current.currentTime <= 347.434427) {
 timeref.current.playbackRate = 0.25; 
// audio.current.playbackRate = 0.25
    setD(!D)
    setS(false)
    setE(false)
    setW(false)
    setP(false)
}
if (timeref.current.currentTime >=372.623061 && timeref.current.currentTime <=398.064435) {
 timeref.current.playbackRate = 0.25;
// audio.current.playbackRate = 0.25
    setW(!W)
    setS(false)
    setE(false)
    setD(false)
    setP(false)
}
if (timeref.current.currentTime >=384.412966 && timeref.current.currentTime <=398.064435) {
 timeref.current.playbackRate = 0.25; 
// audio.current.playbackRate = 0.25
    setE(!E)
    setS(false)
    setD(false)
    setW(false)
    setP(false)
}
if (timeref.current.currentTime >=430.952066 && timeref.current.currentTime <=470.906474) {
 timeref.current.playbackRate = 0.25; 
// audio.current.playbackRate = 0.25
    setS(!S)
    setD(false)
    setE(false)
    setW(false)
    setP(false)
}
if (timeref.current.currentTime >=441.500929 && timeref.current.currentTime <470.906474) {
 timeref.current.playbackRate = 0.25;   
// audio.current.playbackRate = 0.25
    setP(!P)
    setS(false)
    setE(false)
    setW(false)
    setD(false)
}


if ( timeref.current.currentTime>=610.279224) {
    window.location.reload()
}

}
const handleKeyDown = (event) => {
    if(event.keyCode === 87 &&  timeref.current && timeref.current.currentTime >= 307.434427 
         && timeref.current.currentTime < 308.434427 ){
         timeref.current.playbackRate = 1;
        setW(!W);
    }
    if (event.keyCode === 69 &&  timeref.current && timeref.current.currentTime >= 308.434427 
        && timeref.current.currentTime < 311.191449 ) { 
         timeref.current.playbackRate = 1;
        setE(!E);

    } 
    if(event.keyCode === 80 &&  timeref.current && timeref.current.currentTime >= 311.191449  
        && timeref.current.currentTime < 327.191449 ){
         timeref.current.playbackRate = 1;
        setP(!P);
    }
    if(event.keyCode === 83 &&  timeref.current && timeref.current.currentTime >= 327.191449 
         && timeref.current.currentTime < 374.821144 ){
         timeref.current.playbackRate = 1;
        setS(!S);
    }
    if(event.keyCode === 68 &&  timeref.current && timeref.current.currentTime >= 374.821144 
         && timeref.current.currentTime < 372.623061){
         timeref.current.playbackRate = 1;
        setD(!D);
    }
    if (event.keyCode === 87 &&  timeref.current && timeref.current.currentTime >=372.623061 && 
        timeref.current.currentTime <=398.064435) {
         timeref.current.playbackRate = 1;
        setW(!W);
    }
    if (event.keyCode === 69 &&  timeref.current && timeref.current.currentTime >=384.412966 && timeref.current.currentTime <=398.064435) {
         timeref.current.playbackRate = 1;
        setE(!E);
    }
    if(event.keyCode === 83 &&  timeref.current&& timeref.current.currentTime >=430.952066
        && timeref.current.currentTime <470.906474
    ){
        timeref.current.playbackRate = 1;
       setS(!S);
   }
   if(event.keyCode === 80 &&  timeref.current && timeref.current.currentTime >=440.500929
    && timeref.current.currentTime <470.906474
   ){
     timeref.current.playbackRate = 1
    setP(!P);
}
};
useEffect(()=>{
window.addEventListener('keydown', handleKeyDown);  
return () => {
    window.removeEventListener('keydown', handleKeyDown);
};  
},[handleKeyDown])


const[sirR2,sir]= useState(false)
const RolexSir = () =>{
    timeref2.current.play()
    timeref2.current.muted = false
    sir(!sirR2)
}
const timeref2 = useRef(null);
const[E2 , setE2] = useState(false)
const[W2 , setW2] = useState(false)
const[P2 , setP2] = useState(false)
const[S2 , setS2] = useState(false)
const[D2 , setD2] = useState(false) 

const handleTimeUpdate2 = () =>{
    if (timeref2.current.currentTime >= 4.743535 && timeref2.current.currentTime <= 12.979972) {
        timeref2.current.playbackRate = 0.25;
        setW2(!W2)
        setS2(false)
        setE2(false)
        setD2(false)
        setP2(false)
    }
    if (timeref2.current.currentTime > 12.979972 && timeref2.current.currentTime <= 27.979972) {
        timeref2.current.playbackRate = 0.25;
        setW2(false)
        setS2(false)
        setE2(!E2)
        setD2(false)
        setP2(false)
    }
    if (timeref2.current.currentTime > 27.979972 && timeref2.current.currentTime <= 33.979972) {
        timeref2.current.playbackRate = 0.25;
        setW2(false)
        setS2(!S2)
        setE2(false)
        setD2(false)
        setP2(false)
    }
    if (timeref2.current.currentTime > 33.979972 && timeref2.current.currentTime <= 40.979972) {
        timeref2.current.playbackRate = 0.25;
        setW2(false)
        setS2(false)
        setE2(false)
        setD2(!D2)
        setP2(false)
    }
    if (timeref2.current.currentTime > 40.979972 && timeref2.current.currentTime <= 49.589363) {
        timeref2.current.playbackRate = 0.25;
        setW2(false)
        setS2(false)
        setE2(false)
        setD2(false)
        setP2(!P2)
    }
    if (timeref2.current.currTime > 49.589363) {
        timeref2.current.playbackRate = 0.25
        setW2(!W2)
        setS2(false)
        setE2(false)
        setD2(false)
        setP2(false)
    }
    if (timeref2.current.currentTime > 58.675166) {
        window.location.reload()
    }
    
    
}

const handleKeyDown2 = (event) =>{
    if (event.keyCode !== 87 && event.keyCode !== 69 && event.keyCode !== 83 && event.keyCode !== 68
        && event.keyCode !== 80 && event.keyCode !== 87) {
     return;    
    }

  if (event.keyCode == 87 && timeref2.current && timeref2.current.currentTime >=4.743535 &&  timeref2.current.currentTime <= 12.979972) {
    timeref2.current.playbackRate = 1;
    setW2(!W2)
  }  
  if (event.keyCode == 69 && timeref2.current && timeref2.current.currentTime > 12.979972 && timeref2.current.currentTime <=27.979972) {
    timeref2.current.playbackRate = 1;
    setE2(!E2)
  }
  if (event.keyCode == 83 && timeref2.current && timeref2.current.currentTime > 27.979972 && timeref2.current.currentTime <= 33.979972) {
    timeref2.current.playbackRate = 1; 
    setS2(!S2)
  }
  if(event.keyCode == 68 &&  timeref2.current && timeref2.current.currentTime >= 33.979972
    && timeref2.current.currentTime <= 40.979972){
    timeref2.current.playbackRate = 1;
   setD2(!D2);
}
  if (event.keyCode == 80 && timeref2.current && timeref2.current.currentTime >40.979972 && timeref2.current.currentTime <=49.589363) {
    timeref2.current.playbackRate = 1; 
    setP2(!P2)
  }
  if (event.keyCode == 87 && timeref2.current && timeref2.current.currentTime > 49.589363) {
    timeref2.current.playbackRate = 1;
    setW2(!W2)
  }
}

      
const[play,setplay]= useState(false)
const handlegame = () =>{
    if (timeref.current) {
        timeref.current.play()
        timeref.current.muted = false

    }
    setplay(!play)
} 

const[reand , setRendom] = useState(0)
const getRandomNumber = () => {
const data =  Math.floor(Math.random() * 5) + 1;
 setRendom(data)
};

useEffect(() => {
getRandomNumber();
}, [reand]);

const[time ,settime] = useState(0)
useEffect(() => {
    const setTime = setInterval(() => {
      settime((prevTime) => prevTime + 1);
    }, 3000);
    if (time === 10) {
      clearInterval(setTime);
    }
    return () => clearInterval(setTime);
  }, [time]);


const [HomeTime, setvideoTime] = useState(0.0);
useEffect(() => {
    const setHtome = setInterval(() => {
        setvideoTime((prev) => parseFloat((prev + 0.1).toFixed(1))); 
    }, 11000);
    if (HomeTime >= 10) {
        clearInterval(setHtome);
    }
    return () => clearInterval(setHtome);
}, [HomeTime]);

const[wide, setwide] = useState(false)

localStorage.setItem("wide",wide)

//scroll one remove
 const[op,setOP] = useState(0)
 const[last,setlast] = useState(1)
const scroll2 = useRef(null)

useEffect(()=>{
const handleScroll = () =>{    
const endReatch = scroll2.current.scrollLeft >=(scroll2.current.scrollWidth - scroll2.current.clientWidth-5)    
setOP(scroll2.current.scrollLeft>0 ? "1" :"0");
setlast(endReatch? "0" :"1")
}


scroll2.current?.addEventListener("scroll",handleScroll);
return () => scroll2.current?.addEventListener("scroll",handleScroll)
},[scroll2.current])


useEffect(()=>{
if (!data.email) return; 
const handleedit = async() =>{
const respon = await fetch("http://localhost:3000/onc/edit",{
  method: "POST",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({email:data.email})
})
}
handleedit()


},[data])

useEffect(()=>{
 const handleedit = async() =>{
if (!data.email) {
   return; 
}

const respon = await fetch("http://localhost:3000/onc/editpatch",{
  method: "PATCH",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({edit: false,email:data.email,game:false,mess:false,gcoll:false,home:false,chat:false})
})
}

if (window.location.pathname !== `/edit`
&& window.location.pathname !==`/search`&& window.location.pathname !== `/user/message/${data.email}` &&
window.location.pathname !== `/games` &&
window.location.pathname !== `/games/day`&&
window.location.pathname !== `/games/week`&&
window.location.pathname !== `/games/month` &&
window.location.pathname !== `/worldChat` &&
window.location.pathname !== `/games/year` && window.location.pathname !== "/Home"
) {
handleedit()   
}
  
},[window.location.pathname,data])

//onctrain table
const[trainonc,settraninonc] = useState([])

const handleGets = async () => {
const response = await fetch(`http://localhost:3000/oncUpdate/getorion/${data.email}`);
const obj = await response.json();
settraninonc(obj);
};

useEffect(()=>{
  handleGets()
},[data.email])

const handledeletelog = async(path,log) =>{
const response = await fetch(`http://localhost:3000/oncUpdate/delete`,{
 method:"PATCH",
 headers:{
    "content-Type":"application/json"
 },   
 body:JSON.stringify({path:path,email: data.email,log:log})
})    
if (response.ok) {
handleGets()
}
}

const handledeletefav = async(name) =>{
const response = await fetch(`http://localhost:3000/games/delete/fav`,{
  method:"PATCH",
  headers:{
    "Content-Type" : "application/json"
  },
  body:JSON.stringify({name:name,email:data.email})
})
toast.success("delete sucessfull")
}

return (
    <AuthContext.Provider value={{ buClick, AuthToken, scroll, 
    Scro, 
    handleTimeUpdate, timeref, currTime, E, P, W, S,table,settable, 
    handlegame, play, D, unmute, storeToken, token, scroll2,op,last,handledeletefav,
    Logout, data, isLogin, reand, time, handleTimeUpdate2,HomeTime,timeref2,W2,E2,S2,P2,D2,RolexSir,sirR2
    ,wide,setwide,userData,block,handleKeyDown2,trainonc,handledeletelog,handleGets }}>
        {children}
    </AuthContext.Provider>
);
};
// ok in hindi not write ok


export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext)
    if (!AuthContextValue) {
        throw new Error("Context API failed");
    }
    return AuthContextValue;
};
