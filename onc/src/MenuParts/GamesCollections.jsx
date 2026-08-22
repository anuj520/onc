import { FaCircleChevronLeft, FaHandPointLeft, FaHandPointRight, FaStar } from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { Menu } from "../HomePart/Menu"
import { FaChevronLeft,FaChevronRight, FaInfo } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Loading } from "../Loading/Loading";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GenraFooter } from "../ApiCollection/genraFooter";
import { useAuth } from "../ContextAPI/ContextAPI";
import { Footer } from "../footer/footer";
import { useAuth2 } from "../ContextAPI/ContectApi2";
import { Someone } from "../fav/Someone";
import { Sonkratos } from "../fav/Sonkratos";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Tablegetonc } from "../StartedPages/tablegetonc";
import { ImCross } from "react-icons/im";
import { Mike } from "../maik/maik";
import { MdRecordVoiceOver, MdVoiceOverOff } from "react-icons/md";
import { OncTrainText } from "../fav/onctrain.text";
import { GamesTable } from "../onctables/gamestable";
import { useQuery } from "@tanstack/react-query";

export const GamesCollections = ()=>{
const[search,setsearch] = useState("")
const[tm,setTime] = useState()
const refs3 = useRef()
const refs = useRef({})
const refs2 = useRef(null)
const navigate = useNavigate()
const[table2 ,settable2] = useState(false)
const[op,setOP] = useState("0")
const {data:authData} = useAuth()
const{start,translation,handleVoice,setTraslation,resetTranscript,setmic} = useAuth2()

const[arrow , setarrow] = useState(() => localStorage.getItem("Gmenu") === "true")
  
useEffect(()=>{
const handleOP =  () =>{
  setOP(refs2.current.scrollLeft == 0 ? "0" : "1")
}

refs2.current?.addEventListener("scroll",handleOP);
return () => {
refs2.current?.removeEventListener("scroll",handleOP)
}
},[])

useEffect(()=>{
localStorage.setItem("Gmenu",arrow)
},[arrow])

const handlecollection = async() =>{
const respon = await fetch("http://localhost:3000/games/collection")
const obj = await respon.json()
return obj
}

const{data,isLoading,error} = useQuery({
queryKey:["get"],
queryFn:handlecollection
})

const SearchArea = data?.filter((curr)=>{
return curr.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())  
})


gsap.registerPlugin(ScrollTrigger)
const{contextSafe} = useGSAP()
const addgsap = contextSafe(()=>{
gsap.from(".list5 .lighting,header .rp",{
  scale: 0,
  rotate: 43,
  ease: "back.out",
  stagger: 0.1,
  duration: 0.7,
  scrollTrigger:{
    trigger: ".list5",
    scroller:"body",
    start: "top 50%",
  }
})

gsap.from(".list3",{
  scale:0,
  stagger: 0.2,
  duration:0.7,
  scrollTrigger:{
    trigger: ".list3",
    scroller: "body",
  }
})
})

useGSAP(()=>{
  addgsap()
},{dependencies:[data]})


useEffect(()=>{
switch(translation){
case "day":
navigate('/games/day')
window.scrollTo({
top:window.innerHeight * 2.2,
behavior:"smooth"  
})
handleVoice('top day game')  
break
case "week":
navigate('/games/week')
window.scrollTo({
top:window.innerHeight * 3,
behavior:"smooth"  
})
handleVoice('top week game')  
break
case "month":
navigate('/games/month')
window.scrollTo({
top:window.innerHeight * 2.2,
behavior:"smooth"  
})
handleVoice('top month game')  
break
case "year":
navigate('/games/year')
window.scrollTo({
top:window.innerHeight * 2.2,
behavior:"smooth"  
})
handleVoice('top year game')  
break


  //games 
 case "Grand Theft Auto Online":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Uncharted The Lost Legacy":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Uncharted 4":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "GTA San Andreas":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Valorant":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break  
case "Realms of Ruin":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "wwe":
navigate(`/gamesD/${translation} 2k24`)
handleVoice(`the ${translation} 2k24`)
window.location.reload()
break
case "30XX":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Avatar: Frontiers of Pandora":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "The First Descendant":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Armored Core VI":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Assassin's Creed Mirage":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Metal Gear Solid V: The Phantom Pain":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Doom Eternal":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Thank Goodness You’re Here!":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Clair Obscur: Expedition 33:":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Lorelei and the Laser Eyes":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Castlevania Dominus Collection":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Like a Dragon: Infinite Wealth":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Tsukihime":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Tekken 8":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "The Last of Us Part II Remastered":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Balatro":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Animal Well":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "UFO 50":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Slay the Princess – The Pristine Cut":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Final Fantasy VII Rebirth":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Metaphor: ReFantazio":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "red dead redemption":
navigate(`/gamesD/red dead redemption 2`)
handleVoice(`the red dead redemption 2`)
window.location.reload()
break  
case "Blade & Soul":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Star Wars: The Old Republic":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "War Thunder":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "World of Tanks":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Smite":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Dauntless":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Paladins":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Hear the stone":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "fc 25":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break  
case "Team Fortress 2":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Destiny 2":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Call of Duty: Warzone":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Little Nightmares 3":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "The Last Of Us":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Baldur's Gate 3":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Apex Legends":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break  
case "Asphalt 9":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break  
case "free fire":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break    
case "Diablo 4":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "It Takes Two":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Civilization 7":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "indiana jones":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Metroid Prime 4":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Senua’s Saga: Hellblade II":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Avowed":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Fable":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Marvels Wolverine":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Battlefield 6":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "The Elder Scrolls VI":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Tom Clancy's Rainbow Six: Siege":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Diablo IV":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Overwatch 2":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Rust":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Rocket League":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Path of Exile 2":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Delta Force":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Grand Theft Auto V":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "HELLDIVERS 2":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "PUBG BATTLEGROUNDS":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Call of Duty: Modern Warfare":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Dota 2":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "The Sims 4":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "ROBLOX":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Minecraft":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Counter-Strike 2 & GO":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Magic: The Gathering Arena":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Chivalry 2":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "League of Legends":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Sid Meiers":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Moving Out":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Bloons TD 6":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Satisfactory":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Among Us":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "EA SPORTS FC™ 24 Standard Edition":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "NARAKA BLADEPOINT":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "2XKO":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break   
case "Farming Simulator":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Witch It":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Death Stranding":
navigate(`/gamesD/${translation} 2013`)
handleVoice(`the ${translation} 2013`)
window.location.reload()
break
case "Cyberpunk 2077":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()  
break
case "infinity nikki":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()  
break
case "FarCry 5":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Lego Voyagers":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Journey":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Adventures of Pip":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "inZOI":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "marval spider man 2":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()  
break
case "A Way Out":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Horizon Zero Dawn":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Firewatch":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Life is Strange":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Tomb Raider":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "ssassin's Creed Odyssey":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Clash Of Clans":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "The Outer Worlds 2":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Skate 4":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Split Fiction":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Kingmakers":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "The Alters":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Borderlands 4":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Metal Gear Solid Delta: Snake Eater":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Two Point Museum":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Monster Hunter Wilds":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload() 
case "Atofall":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Killing Floor 3":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Tales of the Shire":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Revenge of the Savage Planet":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Prince of Persia":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "The Midnight Walk":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()  
case "FragPunk":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Assassin's Creed Shadows":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Orcs Must Die! Deathtrap":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "CarX Drift Racing Online":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Empire of the Ants":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Star Wars Outlaws":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "EA SPORTS™ Madden NFL 25":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Beacon-fire: Project Salvation Belles":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "EA SPORTS FC™ 25 Standard Edition":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Wanderstop":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Elden Ring: Shadow of the Erdtree":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Astro Bot":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Dragon's Dogma 2":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Kill Knight":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Eternal Strands":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Tank Head":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "Hell Is Us":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break
case "The Legend of Zelda: Breath of the Wild":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break   
case "gost of yotel":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break   
case "F1 25":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break    
case "Marval rivales":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break  
case "Fortnite":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break 
case "Grand Theft Auto VI":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break 
case "Marvel’s Wolverine":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break 
case "Kingdom Come: Deliverance 2":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break 
case "Warframe":
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break     
case "DuneAwakening":    
navigate(`/gamesD/${translation}`)
handleVoice(`the ${translation}`)
window.location.reload()
break 
}
},[translation])


useEffect(()=>{
const handlegmaes = async()=>{  
if (!authData.email) {
  return;
}
const respon = await fetch("http://localhost:3000/onc/edit",{
  method: "POST",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({email:authData.email})
})
}
handlegmaes()
},[authData.email])

useEffect(()=>{
 const handleedit = async() =>{
if (!authData.email) {
   return; 
}

const respon = await fetch("http://localhost:3000/onc/editpatch",{
  method: "PATCH",
  headers:{
   "Content-Type" :"application/json" 
  },
  body:JSON.stringify({edit: false,email:authData.email,game:false,mess:false,gcoll:true,home:false})
})
}

if (window.location.pathname === `/games` ||
window.location.pathname === `/games/day`||
window.location.pathname === `/games/week`||
window.location.pathname === `/games/month` ||
window.location.pathname === `/games/year`
) {
handleedit()  

}
  
},[window.location.pathname,authData])


   ///left right scrolling
    let ld = 0
    const scrollRight = (ld) =>{
      const node = refs.current[ld];
      if (node) {
         node.scrollLeft +=1505;
      }
    }
    
    const scrollLeft = (ld) =>{
      const node = refs.current[ld]
      if (node) {
         node.scrollLeft -=1505;
      }
    }

useEffect(()=>{
if (translation.includes("left")) {  
scrollLeft(translation.split(' ')[1] - 1);
handleVoice(translation)  
}else if (translation.includes("right")) {
scrollRight(translation.split(' ')[1] - 1);
handleVoice(translation)  
}
},[translation])    
    
    ///left right scrolling

useEffect(()=>{
if (translation == "details") {
  settable2(true)
   resetTranscript();
 setmic("")
setTraslation("")
handleVoice("gmaes details table")
} else if(translation == "close info")
  settable2(false)
   resetTranscript();
 setmic("")
setTraslation("")
},[translation])


let ismenu = localStorage.getItem("isMenu2")
let ismenu2 = localStorage.getItem("isMenu")
if(isLoading) return <Loading/>
if(error) return <div>{error}</div>

if (table2 == true && refs3.current) {
 document.body.style.overflow = "hidden"; 
 refs3.current.style.filter = "blur(10px)"
}else if(refs3.current){
  document.body.style.overflow = "auto"
  refs3.current.style.filter = "none"
}




 return(
  <>
 <div className="onctraninmenu2" style={{zIndex:"999"}}>
      {table2 ?
      <>
    <div className="svhmenufont" style={{marginTop:"-3%"}}>  <ImCross onClick={()=>settable2(false)}/>   </div>  
      <br /><br />
      <GamesTable/>
      </>: 
    <div className="svhmenufont" style={{marginTop:"-3%"}}> <FaInfo onClick={()=>settable2(true)}/> </div>
        }
      </div>  
  <main className="gameOutlet" ref={refs3} 
  style={{
    marginTop: ismenu == "true" && ismenu2 == "true" ? "0%" : 
    ismenu == "true" ? "4%" :  
    ismenu2 == "true" ? "0.2%" : "",
  }}
  >
     {
      ismenu == "false" ||ismenu == null ? 
      <>
       <br /><br />
      </>
      :""
     }


{
search.length < 2 &&
<Someone/>
}


<section className="list5">
 <h1>Discover Something New</h1> 
      <div className="Gscroll">
   <header
     onClick={() => scrollLeft(ld)}
   ><FaHandPointLeft /></header>
   <header
    onClick={() => scrollRight(ld)}
   > <FaHandPointRight /></header>
       </div>
<ul ref={(el)=> refs.current[ld] = el}>
  {
  [...SearchArea].slice(0,20).reverse().map((curr,index)=>{
   return(
   <NavLink to={`/gamesD/${curr.name}`} reloadDocument><li key={index}>
      <div className="dotdotdiv"></div>
        <div className="lighting">
      <img src={curr.img3} alt="" />
        <div className="shadowdiv"></div>
      </div>
      <section>
        <header><p className="rp">{curr.Rating.slice(0,5)} <FaStar/></p></header>
      </section>
    </li></NavLink> 
   ) 
  })
}
</ul>

 <h1
 style={{marginTop : "-2.5%"}}
 >Actual Games</h1> 
      <div className="Gscroll" >
   <header
     onClick={() => scrollLeft(ld +1)}
   ><FaHandPointLeft /></header>
   <header
    onClick={() => scrollRight(ld +1 )}
   > <FaHandPointRight /></header>
       </div>
<ul ref={(el)=> refs.current[ld+ 1] = el} >
  {
  SearchArea.slice(20,40).map((curr,index)=>{
   return(
   <NavLink to={`/gamesD/${curr.name}`} reloadDocument> <li key={index}>
      <div className="dotdotdiv"></div>
       <div className="lighting">
      <img src={curr.img3} alt="" />
        <div className="shadowdiv"></div>
      </div>
      <section>
        <header><p className="rp">{curr.Rating.slice(0,5)} <FaStar/></p></header>
        <h3>{curr.name.length > 20 ? `${curr.name.slice(0,19)}..` :curr.name }</h3>
      </section>
    </li></NavLink>
   ) 
  })
}
</ul>

</section>

{
  search.length <2 &&
  <>
<section className="list6" >
<ul>
  <h1>Top Views</h1>
 <NavLink to={'day'}> <p>Day</p> </NavLink>
  <NavLink to={'week'}> <p>Week</p> </NavLink>
   <NavLink to={'month'}> <p>Month</p> </NavLink>
   <NavLink to={'year'}> <p>Year</p> </NavLink>
</ul>
<div>
<Outlet/>
</div>
</section>
  </>
}

<section className="list5">   
 <h1>Top New Releases</h1> 
      <div className="Gscroll">
   <header
     onClick={() => scrollLeft(ld +2)}
   ><FaHandPointLeft /></header>
   <header
    onClick={() => scrollRight(ld + 2)}
   > <FaHandPointRight /></header>
       </div>
<ul ref={(el)=> refs.current[ld +2] = el}>
  {
  SearchArea.slice(40,60).map((curr,index)=>{
   return(
  <NavLink to={`/gamesD/${curr.name}`} reloadDocument>  <li key={index}>
      <div className="dotdotdiv"></div>
       <div className="lighting">
      <img src={curr.img3} alt="" />
        <div className="shadowdiv"></div>
      </div>
      <section>
        <header><p className="rp">{curr.Rating.slice(0,5)} <FaStar/></p></header>
        <h3>{curr.name.length > 20 ? `${curr.name.slice(0,19)}..` :curr.name }</h3>
      </section>
    </li></NavLink>
   ) 
  })
}
</ul>
 

 <h1
 style={{marginTop : "-2.5%"}}
 >Top Free to Play</h1> 
      <div className="Gscroll" >
   <header
     onClick={() => scrollLeft(ld +3)}
   ><FaHandPointLeft /></header>
   <header
    onClick={() => scrollRight(ld + 3)}
   > <FaHandPointRight /></header>
       </div>
<ul ref={(el)=> refs.current[ld+3] = el} >
  {
  [...SearchArea].slice(60,80).reverse().map((curr,index)=>{
   return(
<NavLink to={`/gamesD/${curr.name}`} reloadDocument>    <li key={index}>
        <div className="dotdotdiv"></div>
       <div className="lighting">
      <img src={curr.img3} alt="" />
        <div className="shadowdiv"></div>
      </div>
      <section>
        <header><p className="rp">{curr.Rating.slice(0,5)} <FaStar/></p></header>
        <h3>{curr.name.length > 20 ? `${curr.name.slice(0,19)}..` :curr.name }</h3>
      </section>
    </li></NavLink>
   ) 
  })
}
</ul>

</section>
{
  search.length < 2 &&
<>
<br /><br />
<Sonkratos/>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
</>
}

<section className="list5">
 <h1>Top Player Rated</h1> 
      <div className="Gscroll">
   <header
     onClick={() => scrollLeft(ld +4)}
   ><FaHandPointLeft /></header>
   <header
    onClick={() => scrollRight(ld + 4)}
   > <FaHandPointRight /></header>
       </div>
<ul ref={(el)=> refs.current[ld +4] = el}>
  {
  SearchArea.slice(80,100).map((curr,index)=>{
   return(
  <NavLink to={`/gamesD/${curr.name}`} reloadDocument> <li key={index}>
      <div className="dotdotdiv"></div>
       <div className="lighting">
      <img src={curr.img3} alt="" />
        <div className="shadowdiv"></div>
      </div>
      <section>
        <header><p className="rp">{curr.Rating.slice(0,10)} <FaStar/></p></header>
        <h3>{curr.name.length > 20 ? `${curr.name.slice(0,19)}..` :curr.name }</h3>
      </section>
    </li></NavLink>
   ) 
  })
}

</ul>

 <h1
 style={{marginTop : "-2.5%"}}
 >Top Add-Ons</h1> 
      <div className="Gscroll" >
   <header
     onClick={() => scrollLeft(ld +5)}
   ><FaHandPointLeft /></header>
   <header
    onClick={() => scrollRight(ld + 5)}
   > <FaHandPointRight /></header>
       </div>
<ul ref={(el)=> refs.current[ld+5] = el} >
  {
  SearchArea.slice(100,120).map((curr,index)=>{
   return(
  <NavLink to={`/gamesD/${curr.name}`} reloadDocument>  <li key={index}>
      <div className="dotdotdiv"></div>
       <div className="lighting">
      <img src={curr.img3} alt="" />
        <div className="shadowdiv"></div>
      </div>
      <section>
        <header><p className="rp">{curr.Rating.slice(0,5)} <FaStar/></p></header>
        <h3>{curr.name.length > 20 ? `${curr.name.slice(0,19)}..` :curr.name }</h3>
      </section>
    </li></NavLink>
   ) 
  })
}
</ul>
</section>

<section className="list3">

<div>
  <h1>Most Popular</h1>
  {
    SearchArea.slice(120,125).map((curr,index)=>{
    return(
      <NavLink to={`/gamesD/${curr.name}`} reloadDocument>  <section key={index}
      >
         <p><FaStar/> {curr.Rating}</p>
         <h2>{curr.name}</h2>
      <img src={curr.img} alt="" />
      </section></NavLink>
    )  
    })
  }
</div>
<div>
  <h1>Top Upcoming Wishlisted</h1>
  {
    SearchArea.slice(125,130).map((curr,index)=>{
    return(
      <NavLink to={`/gamesD/${curr.name}`} reloadDocument> <section key={index}
      >
         <p><FaStar/> {curr.Rating}</p>
         <h2>{curr.name}</h2>
      <img src={curr.img} alt="" />
      </section></NavLink>
    )  
    })
  }
</div>
<div style={{boxShadow:"none"}}>
  <h1>Top Player Rated</h1>
  {
   SearchArea.slice(130,135).map((curr,index)=>{
    return(
      <NavLink to={`/gamesD/${curr.name}`} reloadDocument>  <section key={index}
      >
         <p><FaStar/>  {curr.Rating}</p>
         <h2>{curr.name.slice(0,29)}...</h2>
      <img src={curr.img} alt="" />
      </section></NavLink>
    )  
    })
  }
</div>

</section>

<section className="list5">

 <h1>Trending</h1> 
      <div className="Gscroll">
   <header
     onClick={() => scrollLeft(ld +7)}
   ><FaHandPointLeft /></header>
   <header
    onClick={() => scrollRight(ld + 7)}
   > <FaHandPointRight /></header>
       </div>
<ul ref={(el)=> refs.current[ld +7] = el}>
  {
  SearchArea.slice(135,155).map((curr,index)=>{
   return(
<NavLink to={`/gamesD/${curr.name}`} reloadDocument>  <li key={index}>
      <div className="dotdotdiv"></div>
       <div className="lighting">
      <img src={curr.img3} alt="" />
        <div className="shadowdiv"></div>
      </div>
      <section>
        <header><p className="rp">{curr.Rating.slice(0,5)} <FaStar/></p></header>
        <h3>{curr.name.length > 20 ? `${curr.name.slice(0,19)}..` :curr.name }</h3>
      </section>
    </li></NavLink> 
   ) 
  })
}
</ul>

 <h1
 style={{marginTop : "-2.5%"}}
 >Recently Updated</h1> 
      <div className="Gscroll" >
   <header
     onClick={() => scrollLeft(ld +8)}
   ><FaHandPointLeft /></header>
   <header
    onClick={() => scrollRight(ld + 8)}
   > <FaHandPointRight /></header>
       </div>
<ul ref={(el)=> refs.current[ld+8] = el} >
  {
  SearchArea.slice(155,175).map((curr,index)=>{
   return(
  <NavLink to={`/gamesD/${curr.name}`} reloadDocument><li key={index}>
      <div className="dotdotdiv"></div>
       <div className="lighting">
      <img src={curr.img3} alt="" />
        <div className="shadowdiv"></div>
      </div>
      <section>
        <header><p className="rp">{curr.Rating.slice(0,5)} <FaStar/></p></header>
        <h3>{curr.name.length > 20 ? `${curr.name.slice(0,19)}..` :curr.name }</h3>
      </section>
    </li></NavLink> 
   ) 
  })
}
</ul>
 
</section>

       <GenraFooter search={search} setsearch={setsearch} arrow={arrow}/>
  </main>
   <div style={{backgroundColor : "#000"}}>
       <br /><br /><br /><br />
       <Footer/> 
   </div>
  </>
 ) 
}