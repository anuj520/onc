const oncModel = require("../Models/onc.moel")
const{Router} = require("express")
const togesl = require("../Models/onceditetc.js")
const oncServices = require("./../services/oncServices")
const axios  = require("axios")
const router = Router()


router.post('/edit', async (req, res) => {
  const { email } = req.body;
 if(email == ""){
 return res.status(500).json("email is not difined") 
 }else{ 
 const tog = await togesl.findOneAndUpdate(
  {email},
  {$setOnInsert : {email}},
  {upsert:true,new: true}
 )  
 res.status(200).json({ message: "Done", data: tog });
 }
});



router.patch('/editpatch',async (req,res)=>{
const{edit,email,game,mess,gcoll,home,chat} = req.body;



await togesl.updateOne({email:email},{$set:{togesl:edit}}) 
await togesl.updateOne({email:email},{$set:{toges2:game}})
await togesl.updateOne({email:email},{$set:{toges3:mess}})
await togesl.updateOne({email:email},{$set:{toges4:gcoll}})
await togesl.updateOne({email:email},{$set:{toges5:home}})
await togesl.updateOne({email:email},{$set:{toges6:chat}})
})


router.post('/text',async(req,res)=>{
const {text,transcript,email,id,name} = req.body;

const result = await oncServices(email,name,req,res)

console.log(req.body);
  const url  = await fetch(`https://lingva.ml/api/v1/${text}/en/${encodeURIComponent(transcript)}`);
  const obj = await url.json();
  let trans = obj.translation
 trans.replace(/Rio/g, "")
             .replace(/Yo\./g, "")
             .replace(/,/g, "")
             .replace(/\./g, "");
  console.log("trans",trans);
  
 const respon = await oncModel.findOne({email});
 const tog = await togesl.findOne({email}) 



 let keyword = ""
 let languageKeyword = "" 
 let findkeyword  = ""
 let leftkeyword = ""
 let rightKeyword = ""
 let gameKeyword = ""
 let messageKeyword = ""
 let nameKeyword = ""
 let lastnameKeyword = ""
 let emailKeyword = ""
 let passKeyword = ""
 let genderKeyword = ""

 let gamesSafe = false

  respon?.details.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "details"
   } 
  })

respon?.home.map((item)=>{
if (trans.toLowerCase().includes(item.name) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
keyword =  "home"; 
}
})  
 respon?.about.map((item) => {
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "about";
    }
  });
 respon?.getstart.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "getStart";
    }
 }) 
  respon?.search.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "search"
    }
  })
  respon?.user?.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "profile"
    }
  })
  respon?.notification.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("mat")) {
      keyword = "notification"
    }
  })
  respon?.contect?.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword= "contect"
    }
  })
  respon?.edit?.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "edit"
    }
  })
  respon?.login?.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "login"
    }
  })

    respon?.sign?.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "sign"
    }
  })
  respon?.playblack.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())&& !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "play black"
   } 
  })
    respon?.playtakken.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())&& !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "play takken"
   } 
  })

  //creators
  respon?.creators.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "creators"
    } 
  })
  respon?.AmyHennig.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Amy Hennig"
    } 
  })
   respon?.ShigeruMiyamoto.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Shigeru Miyamoto"
    } 
  })
    respon?.CliffBleszinski.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Cliff Bleszinski"
    } 
  })
    respon?.DavidCage.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "David Cage"
    } 
  })
    respon?.GabeNewell.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Gabe Newell"
    } 
  })
    respon?.TimSchafer.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Tim Schafer"
    } 
  })
    respon?.RichardGarriott.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Richard Garriott"
    } 
  })
    respon?.JonathanBlow.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Jonathan Blow"
    } 
  })
    respon?.BrianFargo.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Brian Fargo"
    } 
  })
    respon?.MarkusNotchPersson.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Markus Notch Persson"
    } 
  })
    respon?.RalphHBaer.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Ralph H. Baer"
    } 
  })
    respon?.JohnCarmack.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "John Carmack"
    } 
  })
    respon?.ToddHoward.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Todd Howard"
    } 
  })
    respon?.JasonJones.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Jason Jones"
    } 
  })
    respon?.YokoTaro.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Yoko Taro"
    } 
  })
    respon?.KenLevine.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Ken Levine"
    } 
  })
    respon?.SidMeier.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Sid Meier"
    } 
  })
    respon?.WillWright.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Will Wright"
    } 
  })
    respon?.SwenVincke.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Swen Vincke"
    } 
  })
    respon?.HideoKojima.map((item)=>{
     if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "Hideo Kojima"
    } 
  })
//creators
//genra

  respon?.battle?.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "battle"
      gamesSafe = true
  }
  })
  respon?.sports.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Sports"
    gamesSafe = true
   } 
  })
    respon?.educational.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Educational"
     gamesSafe = true
   } 
  })
  respon?.bordGame.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Board Games"
     gamesSafe = true
   }
  })
    respon?.story?.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "story"
       gamesSafe = true
  }
  })
  respon?.family.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "family"
     gamesSafe = true
   } 
  })
  respon?.action.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "action"
    gamesSafe = true
   }
  })
    respon?.advancher.map((item)=>{
  if (trans.toLowerCase().includes(item.name) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "advancher"
      gamesSafe = true
  }})
  respon?.casual.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Casual"
    gamesSafe = true
   } 
  })
  respon?.strategy.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "strategy"
    gamesSafe = true
   }
  })
    respon?.card?.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "card"
      gamesSafe = true
  }
  })
  respon?.indie.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Indie"
    gamesSafe = true
   } 
  })
  respon?.multiplayer.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Multiplayer"
    gamesSafe = true
   }
  })
    respon?.shooter.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "shooter"
    gamesSafe = true
   }
  })
    respon?.arcade.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "arcade"
    gamesSafe = true
   }
  })
    respon?.simulation.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "simulation"
    gamesSafe = true
   }
  })
    respon?.platformer.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "platformer"
    gamesSafe = true
   }
  })
    respon?.fighting.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "fighting"
    gamesSafe = true
   }
  })
    respon?.rpg.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "rpg"
    gamesSafe = true
   }
  })
    respon?.racing.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "racing"
    gamesSafe = true
   }
  })
    respon?.puzzle.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "puzzle"
    gamesSafe = true
   }
  })
  respon?.platfrom.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "platfrom"
    }
  })
    respon?.tag.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "tag"
    }
  })

//genra  
  respon?.close.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "close"
   } 
  })
  respon?.down.map((item)=>{    
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "down"
    }
  })
  respon?.up.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "up"
    }
  })
  respon?.logout.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "logout"
    }
  })

  respon?.whatName.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "whatName"
    }
  })
  respon?.whatEamil.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "whatEamil"
    }
  })
  respon?.yourName.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "yourName"
    }
  })
  respon?.language.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      let index = trans.toLowerCase().indexOf(item.name.toLowerCase())
      languageKeyword = trans.slice(index) ;
      keyword = "language"     
    }
  })
  respon?.find.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    let index = trans.toLowerCase().indexOf(item.name.toLowerCase());
     findkeyword = trans.slice(index)
      keyword = "find" 
    }
  })
  respon?.leftScroll.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      let index = trans.toLowerCase().indexOf(item.name.toLowerCase());
      leftkeyword = trans.slice(index);
      keyword = "left"
    }
  })
  respon?.rightScroll.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("will wright") && !trans.toLowerCase().includes("mat")) {
      let index = trans.toLowerCase().indexOf(item.name.toLowerCase())
      rightKeyword = trans.slice(index);
      keyword = "right"
    }
  })
  respon?.top.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "top"
  }
  })
  respon?.all.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "all"
  }
  })
  respon?.description.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "description"
   } 
  })
  respon?.category.map((item) =>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "category"
    }
  })
  if (tog?.toges2) {
  respon?.game.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase())) {
      let index = trans.toLowerCase().indexOf(item.name.toLowerCase())
      gameKeyword = trans.slice(index)
      keyword = "game"
    }
  })
}  
  respon?.add.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase())&& !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "add"
    }
  })
  respon?.mess.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase())) {
      let index = trans.toLowerCase().indexOf(item.name.toLowerCase());
      messageKeyword = trans.slice(index);
      keyword =  "message"
    }
  })
  if (email !== undefined && tog?.togesl) {
  respon?.name1.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) ) {
      let index = trans.toLowerCase().indexOf(item.name.toLowerCase());
       nameKeyword  = trans.slice(index);
       keyword = "name"
    }
  })
  respon?.lastname.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) ) {
      let index = trans.toLowerCase().indexOf(item.name.toLowerCase())
      lastnameKeyword = trans.slice(index);
      keyword = "lastname"
    }
  })
  respon?.password.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase())) {
      let index = trans.toLowerCase().indexOf(item.name.toLowerCase())
      passKeyword = trans.slice(index);
      keyword = "password"
    }
  })
  respon?.gender.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      let index = trans.toLowerCase().includes(item.name.toLowerCase())
      genderKeyword = trans.slice(index)
      keyword = "gender"
    }
  })
  respon?.submit.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "submit"
   } 
  })
  }  
  respon?.remove.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {     
      keyword = "removeall"
    }
  })
  respon?.tap.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "tap"
    }
  })
  if(tog?.toges5){
  respon?.marvalrivales.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "marval rivales"
   } 
  })
    respon?.valorant.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "valorant"
   } 
  })
    respon?.spiderman.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "spiderman"
   } 
  })
    respon?.rdr2.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "rdr2"
   } 
  })
  respon?.blackmithwokong.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "blackmithwokong"
   } 
  })
  respon?.godofwar.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "godofwar"
   }  
  }) 
  respon?.wwe.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "wwe"
  }  
  })
    respon?.TheLostLegacy.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Uncharted The Lost Legacy"  
  }  
  })
      respon?.NARAKABLADEPOINT.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "NARAKA BLADEPOINT"  
  }  
  })
  respon?.ForzaHorizon5.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Forza Horizon 5"  
  }  
  })
}

  if (tog?.toges4) {
  respon?.marvalrivales.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "marval rivales"
   } 
  })
    respon?.valorant.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "valorant"
   } 
  })
    respon?.spiderman.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "spiderman"
   } 
  })
    respon?.rdr2.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "rdr2"
   } 
  })
  respon?.LegendZelda.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Legend Zelda"
   }  
  })
  respon?.Cyberpunk.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Cyberpunk 2077"
   } 
  })
  respon?.indianajones.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "indiana jones"
   } 
  })
  respon?.palworld.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "palworld"
   } 
  })
  respon?.ride5.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
   keyword = "ride 5" 
  }  
  })
  respon?.EternalStrands.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Eternal Strands"  
  }  
  })
     respon?.TacticalBreachWizards.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Clair Obscur: Expedition 33:"  
  }  
  })
    respon?.KillKnight.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Kill Knight"  
  }  
  })
    respon?.DragonsDogma2.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Dragon's Dogma 2"  
  }  
  })
    respon?.AstroBot.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Astro Bot"  
  }  
  })
  respon?.infinity.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "infinity nikki"  
  }  
  })
    respon?.EldenRing.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Elden Ring: Shadow of the Erdtree"  
  }  
  })
    respon?.MetaphorReFantazio.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Metaphor: ReFantazio"  
  }  
  })
    respon?.FinalFantasy.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Final Fantasy VII Rebirth"  
  }  
  })
    respon?.SlayPrincess.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Slay the Princess – The Pristine Cut"  
  }  
  })
    respon?.Wanderstop.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Wanderstop"  
  }  
  })
    respon?.EASPORTSFC.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "F1 25"  
  }  
  })
    respon?.Beaconfire.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Beacon-fire: Project Salvation Belles"  
  }  
  })
    respon?.EASPORTS.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "EA SPORTS™ Madden NFL 25"  
  }  
  })
    respon?.StarWarsOutlaws.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Star Wars Outlaws"  
  }  
  })
    respon?.wwe.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "wwe"
  }  
  })
    respon?.TankHead.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "TankHead"  
  }  
  })
    respon?.EmpiretheAnts.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Empire of the Ants"  
  }  
  })
    respon?.CarXDrift.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "CarX Drift Racing Online"  
  }  
  })
    respon?.OrcsMustDie.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Orcs Must Die! Deathtrap"  
  }  
  })
      respon?.inZOI.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "inZOI"  
  }  
  })
    respon?.Assassin.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Assassin's Creed Shadows"  
  }  
  })
    respon?.FragPunk.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "FragPunk"  
  }  
  })
    respon?.PrincePersia.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Prince of Persia"  
  }  
  })
    respon?.SavagePlanet.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Revenge of the Savage Planet"  
  }  
  })
    respon?.TalestheShire.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Tales of the Shire"  
  }  
  })
    respon?.KillingFloor.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Killing Floor 3"  
  }  
  })
    respon?.Atofall.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Atofall"  
  }  
  })
    respon?.MonsterHunter.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Monster Hunter Wilds"  
  }  
  })
    respon?.TwoPointMuseum.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Two Point Museum"  
  }  
  })
    respon?.MetalGear.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Metal Gear Solid Delta: Snake Eater"  
  }  
  })
    respon?.Borderlands4.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Borderlands 4"  
  }  
  })
    respon?.TheAlters.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "The Alters"  
  }  
  })
    respon?.Kingmakers.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Kingmakers"  
  }  
  })
    respon?.SplitFiction.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Split Fiction"  
  }  
  })
    respon?.Skate4.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Skate 4"  
  }  
  })
    respon?.TheOuterWorlds.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "The Outer Worlds 2"  
  }  
  })
    respon?.ClashOfClans.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Clash Of Clans"  
  }  
  })
    respon?.TombRaider.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Tomb Raider"  
  }  
  })
    respon?.LifeStrange.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Life is Strange"  
  }  
  })
    respon?.Firewatch.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Firewatch"  
  }  
  })
    respon?.TheLegendZelda.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "The Legend of Zelda: Breath of the Wild"  
  }  
  })
    respon?.Horizon.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Horizon Zero Dawn"  
  }  
  })
    respon?.AWayOut.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "A Way Out"  
  }  
  })
    respon?.AdventuresofPip.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Adventures of Pip"  
  }  
  })
    respon?.Journey.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Journey"  
  }  
  })
    respon?.ShadowColossus.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Lego Voyagers"  
  }  
  })
      respon?.rdr2.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "rdr2"
   } 
  })
    respon?.FarCry5.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "FarCry5"  
  }  
  })
    respon?.DeathStranding.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "DeathStranding"  
  }  
  })
    respon?.WitchIt.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "gost of yotel"  
  }  
  })
    respon?.FarmingSimulator.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "FarmingSimulator"  
  }  
  })
    respon?.ZenlessZoneZero.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Hell Is Us"  
  }  
  })
    respon?.NARAKABLADEPOINT.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "NARAKA BLADEPOINT"  
  }  
  })
      respon?.ApexLegends.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Apex Legends"
   } 
  })
    respon?.AmongUs.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Among Us"  
  }  
  })
  respon?.fc25.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "fc25"  
  }  
  })
    respon?.Satisfactory.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Satisfactory"  
  }  
  })
    respon?.BloonsTD.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Bloons TD 6"  
  }  
  })
    respon?.MovingOut.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Moving Out"  
  }  
  })
    respon?.SidMeier.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Sid Meier’s Civilization® VI Platinum Edition"  
  }  
  })
    respon?.LeagueofLegends.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "League of Legends"  
  }  
  })
    respon?.Chivalry2.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Chivalry 2"  
  }  
  })

    respon?.Magic.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Magic: The Gathering Arena"  
  }  
  })
    respon?.CounterStrike.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Counter-Strike 2 & GO"  
  }  
  })
    respon?.Minecraft.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Minecraft"  
  }  
  })
  respon?.GrandTheftAutoOnline.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Grand Theft Auto Online"  
  }  
  })
    respon?.ROBLOX.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "ROBLOX"  
  }  
  })
    respon?.TheSims4.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "The Sims 4"  
  }  
  })
    respon?.Dota2.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Dota 2"  
  }  
  })
    respon?.CallofDuty.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Call of Duty: Modern Warfare"  
  }  
  })
      respon?.PUBGBATTLEGROUNDS.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "PUBG BATTLEGROUNDS"  
  }  
  })
      respon?.HELLDIVERS2.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "HELLDIVERS 2"  
  }  
  })
      respon?.GrandTheftAutoV.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Grand Theft Auto V"  
  }  
  })
      respon?.DeltaForce.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Delta Force"  
  }  
  })
      respon?.PathofExile2.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Path of Exile 2"  
  }  
  })
      respon?.RocketLeague.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "RocketLeague"  
  }  
  })
      respon?.Rust.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Rust"  
  }  
  })
      respon?.Overwatch2.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Overwatch2"  
  }  
  })
      respon?.DiabloIV.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "DiabloIV"  
  }  
  })
      respon?.TomClancy.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Tom Clancy's Rainbow Six: Siege"  
  }  
  })
      respon?.TheElder.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "TheElderScrollsVI"  
  }  
  })
      respon?.StarWars.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Battlefield 6"  
  }  
  })
      respon?.MarvelsWolverine.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Marvel’s Wolverine"  
  }  
  })
      respon?.Fable.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Fable"  
  }  
  })
      respon?.Avowed.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Avowed"  
  }  
  })
      respon?.SenuaSaga.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Senua’s Saga: Hellblade II"  
  }  
  })
      respon?.MetroidPrime.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Metroid Prime 4"  
  }  
  })
      respon?.Civilization7.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Civilization 7"  
  }  
  })
      respon?.ItTakesTwo.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "It Takes Two"  
  }  
  })
      respon?.Diablo4.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Diablo 4"  
  }  
  })

      respon?.BaldurGate3.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Baldur's Gate 3"  
  }  
  })
      respon?.TheLastOfUs.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "The Last Of Us"  
  }  
  })
      respon?.GenshinImpact.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Little Nightmares 3"  
  }  
  })
  respon?.KingdomDeliverance2.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Kingdom Come: Deliverance 2"  
  }  
  })
      respon?.CallWarzone.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Call of Duty: Warzone"  
  }  
  })
  respon?.freefire.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "free fire"  
  }  
  })
    respon?.Warframe.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Warframe"
   } 
  })
    respon?.Destiny2.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Destiny 2"  
  }  
  })
      respon?.TeamFortress2.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "TeamFortress2"  
  }  
  })
      respon?.Hearthstone.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Hearthstone"  
  }  
  })
    respon?.GTA.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "GTA"
   } 
  })

      respon?.Paladins.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Paladins"  
  }  
  })
      respon?.Dauntless.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Dauntless"  
  }  
  })
        respon?.Smite.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Smite"  
  }  
  })
        respon?.WorldofTanks.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "World of Tanks"  
  }  
  })
        respon?.WarThunder.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "War Thunder"  
  }  
  })
        respon?.StarWars.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Star Wars: The Old Republic"  
  }  
  })
        respon?.BladeSoul.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Blade & Soul"  
  }  
  })
        respon?.MetaphorReFantazio.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Metaphor: ReFantazio"  
  }  
  })
        respon?.FinalFantasy.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Final Fantasy VII Rebirth"  
  }  
  })
        respon?.SlaythePrinces.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Slay the Princess – The Pristine Cut"  
  }  
  })
        respon?.UFO50.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "UFO 50"  
  }  
  })
        respon?.AnimalWell.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Animal Well"  
  }  
  })
        respon?.Satisfactory.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Satisfactory"  
  }  
  })
        respon?.Dauntless.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Dauntless"  
  }  
  })
    respon?.fornight.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "fornight"
   } 
  })
        respon?.Balatro.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Portal 2"  
  }  
  })
  respon?.Tsukihime.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Asphalt 9"  
  }  
  })
        respon?.LastUsPartII.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "The Last of Us Part II Remastered"  
  }  
  })
        respon?.Tekken8.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Tekken 8"  
  }  
  })
        respon?.Tsukihime.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Tsukihime"  
  }  
  })
        respon?.LikeaDragon.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Like a Dragon: Infinite Wealth"  
  }  
  })
        respon?.CastlevaniaDominus.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Castlevania Dominus Collection"  
  }  
  })
        respon?.Lorelei.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Lorelei and the Laser Eyes"  
  }  
  })
        respon?.TacticalBreachWizards.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Tactical Breach Wizards"  
  }  
  })
        respon?.ThankGoodness.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Thank Goodness You’re Here!"  
  }  
  })
        respon?.DoomEternal.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Doom Eternal"  
  }  
  })
        respon?.MetalGearSolidV.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Metal Gear Solid V: The Phantom Pain"  
  }  
  })
        respon?.Mirage.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Assassin's Creed Mirage"  
  }  
  })
        respon?.ArmoredCoreVI.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Armored Core VI"  
  }  
  })
        respon?.TheFirstDescendant.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "The First Descendant"  
  }  
  })
        respon?.AvatarPandora.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Avatar: Frontiers of Pandora"  
  }  
  })
  respon?.TheMidnightWalk.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "The Midnight Walk"  
  }  
  })
   respon?.XKO.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "XKO"
   } 
  })
        respon?.XX30.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "30XX"  
  }  
  })
        respon?.RealmsRuin.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Realms of Ruin"  
  }  
  })
          respon?.GTASanAndreas.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "GTA San Andreas"  
  }  
  })
  respon?.DuneAwakening.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "DuneAwakening"  
  }  
  })
          respon?.Uncharted4.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Uncharted4"  
  }  
  })
          respon?.TheLostLegacy.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "Uncharted The Lost Legacy"  
  }  
  })
          respon?.RealmsRuin.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
  keyword = "RealmsRuin"  
  }  
  })
       respon?.day.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "day"
   }  
  })
  respon?.week.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "week"
   }  
  })
    respon?.month.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "month"
   }  
  })
    respon?.year.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "year"
   }  
  })
       respon?.right5.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "right 5"
   }  
  })
     respon?.left5.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "left 5"
   }  
  })
         respon?.right6.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "right 6"
   }  
  })
     respon?.left6.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "left 6"
   }  
  })
       respon?.right7.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "right 7"
   }  
  })
     respon?.left7.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "left 7"
   }  
  })
       respon?.right8.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "right 8"
   }  
  })
     respon?.left8.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "left 8"
   }  
  })
  }  

    respon?.open.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "open"
   } 
  })

if(tog?.toges2){
  respon?.fornight.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "fornight"
   } 
  })
  respon?.XKO.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "XKO"
   } 
  })
    respon?.ApexLegends.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Apex Legends"
   } 
  })
    respon?.Warframe.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Warframe"
   } 
  })
    respon?.Tales.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Tales"
   } 
  })
    respon?.DeadorAlive.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "DeadorAlive"
   } 
  })
    respon?.GranblueFant.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "GranblueFant"
   } 
  })
    respon?.GTA.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "GTA"
   } 
  })
    respon?.inZOI.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "inZOI"
   } 
  })
    respon?.Fable.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Fable"
   } 
  })
    respon?.Marvel.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Marvel"
   } 
  })
      respon?.Star.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Star"
   } 
  })
      respon?.Warhammer.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Warhammer"
   } 
  })
      respon?.Onimusha.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Onimusha"
   } 
  })
    respon?.valorant.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase())  && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "valorant"
   } 
  })

      respon?.Saros.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Saros"
   } 
  })
      respon?.Witcher.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Witcher"
   } 
  })
   respon?.Project.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Project"
   } 
  })
  respon?.cancal.map((item)=>{
  if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "cancal"
  }  
  })
}
    respon?.left1.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "left 1"
   }  
  })
    respon?.right1.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "right 1"
   }  
  })
      respon?.right2.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "right 2"
   }  
  })
     respon?.left2.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "left 2"
   }  
  })
   respon?.right3.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "right 3"
   }  
  })
     respon?.left3.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "left 3"
   }  
  })
         respon?.right4.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "right 4"
   }  
  })
     respon?.left4.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "left 4"
   }  
  })
    respon?.SystemRequirements.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "System Requirements"
   }  
  })
     respon?.Additionalinformation.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Additional information"
   }  
  })
  
  respon?.DynamicMenu.map((item)=>{
       if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Dynamic Menu"
   } 
  })
    respon?.menutop.map((item)=>{
       if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "menu top"
   } 
  })
      respon?.settting.map((item)=>{
      if (trans.toLowerCase().includes(item.name.toLowerCase())
     && !trans.toLowerCase().includes("setting getstarted") 
    &&!trans.toLowerCase().includes("not")
    && !trans.toLowerCase().includes("setting Started")
   && !trans.toLowerCase().includes("setting Start")
    && !trans.toLowerCase().includes("mat")) {
    keyword = "setting"
   } 
  })
     respon?.settingetstarted.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "setting getstarted"
   } 
  })
  respon?.BalancedMode.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Balanced Mode"
   } 
  })
    respon?.InternetSafetyMode.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "Internet Safety Mode"
   } 
  })
   respon?.send.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "send"
   }
   })
   respon?.trynow.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "trynow"
   } 
   })
   respon?.world.map((item)=>{
    if(trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")){
    keyword="world"
    }
   })
if(tog?.toges6){
    respon?.one.map((item)=>{
    if(trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")){
    keyword="one"
    }
   })
    respon?.two.map((item)=>{
    if(trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")){
    keyword="two"
    }
   })
    respon?.three.map((item)=>{
    if(trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")){
    keyword="three"
    }
   })
    respon?.four.map((item)=>{
    if(trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")){
    keyword="four"
    }
   })
    respon?.five.map((item)=>{
    if(trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")){
    keyword="five"
    }
   })
    respon?.six.map((item)=>{
    if(trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")){
    keyword="six"
    }
   })
    respon?.seven.map((item)=>{
    if(trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")){
    keyword="seven"
    }
   })
    respon?.eight.map((item)=>{
    if(trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")){
    keyword="eight"
    }
   })
    respon?.nine.map((item)=>{
    if(trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")){
    keyword="nine"
    }
   })
    respon?.ten.map((item)=>{
    if(trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")){
    keyword="ten"
    }
   })
  } 
    respon?.cut.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
      keyword = "cut"
    }
  })
   respon?.chat.map((item)=>{
    if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("world chat") && !trans.toLowerCase().includes("universal chat") && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat") && !trans.toLowerCase().includes("send")) {
    keyword = "chat"
   } 
   })
   respon?.skip.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "skip"
   } 
   })
   respon?.ok.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("yoko") && !trans.toLowerCase().includes("mat")) {
    keyword = "ok"
   } 
   })
   if (!gamesSafe) {
     respon?.games.map((item)=>{
   if (trans.toLowerCase().includes(item.name.toLowerCase()) && !trans.toLowerCase().includes("not") && !trans.toLowerCase().includes("mat")) {
    keyword = "games"
   } 
  })
   }
    


 switch(keyword){
  case "home" :
 return res.status(200).json({home :"/home"})  


case "about":
return res.status(200).json({home :"/about"})

case "search":
  return res.status(200).json({home :"/search"}) 
case "getStart":
  return res.status(200).json({home:"/"})
case "profile":
  return res.status(200).json({home: "/user"})  

case "notification":
  return res.status(200).json({home :"/user/notification"})  

  case "contect":
    return res.status(200).json({home :`/user/message/${email}`})
  case  "edit":
    return res.status(200).json({home : `/edit`})
  case "login":
    return res.status(200).json({home: "/login"}) 
  case "sign":
    return res.status(200).json({home: "/signUp"})   
  case "battle" :
    return res.status(200).json({home : "/genreD/Battle%20Royale"})
  case  "category":      
  return res.status(200).json({home : "/genra"}) 
  case "platfrom":
  return res.status(200).json({home: "/platfrom"})  
  case "tag":
  return res.status(200).json({home:"/tag"})  
  case "creators":
  return res.status(200).json({home:"/creators"})  
   case  "Sports":      
  return res.status(200).json({home : "/genreD/Sports"}) 
   case  "Educational":      
  return res.status(200).json({home : "/genreD/Educational"}) 
   case  "Board Games":      
  return res.status(200).json({home : "/genreD/Board%20Games"}) 
   case  "story":      
  return res.status(200).json({home : "/genreD/Story"}) 
   case  "family":      
  return res.status(200).json({home : "/genreD/Family"}) 
   case  "action":      
  return res.status(200).json({home : "/genreD/Action"}) 
   case  "advancher":      
  return res.status(200).json({home : "/genreD/Adventure"}) 
   case  "Casual":      
  return res.status(200).json({home : "/genreD/Casual"}) 
   case  "strategy":      
  return res.status(200).json({home : "/genreD/Strategy"}) 
   case  "Indie":      
  return res.status(200).json({home : "/genreD/Indie"}) 
   case  "card":      
  return res.status(200).json({home : "/genreD/Card"}) 
   case  "Multiplayer":      
  return res.status(200).json({home : "/genreD/Massively%20Multiplayer"}) 
   case  "arcade":      
  return res.status(200).json({home : "/genreD/Arcade"}) 
   case  "simulation":      
  return res.status(200).json({home : "/genreD/Simulation"}) 
   case  "platformer":      
  return res.status(200).json({home : "/genreD/Platformer"}) 
   case  "fighting":      
  return res.status(200).json({home : "/genreD/fighting"}) 
   case  "rpg":      
  return res.status(200).json({home : "/genreD/RPG"}) 
   case  "racing":      
  return res.status(200).json({home : "/genreD/Racing"}) 
   case  "shooter":      
  return res.status(200).json({home : "/genreD/Shooter"}) 
   case  "puzzle":      
  return res.status(200).json({home : "/genreD/Puzzle"}) 
   case  "puzzle":      
  return res.status(200).json({home : "/genreD/Puzzle"}) 
  case "category":
  return res.status(200).json({home:"/category"}) 
  case "Amy Hennig":
  return res.status(200).json({home:"/creator/Amy%20Hennig"})
   case "Shigeru Miyamoto":
  return res.status(200).json({home:"/creator/Shigeru%20Miyamoto"})
   case "Cliff Bleszinski":
  return res.status(200).json({home:"/creator/Cliff%20Bleszinski"})  
   case "David Cage":
  return res.status(200).json({home:"/creator/David%20Cage"})
   case "Gabe Newell":
  return res.status(200).json({home:"/creator/Gabe%20Newell"})
   case "Tim Schafer":
  return res.status(200).json({home:"/creator/Tim%20Schafer"})
   case "Richard Garriott":
  return res.status(200).json({home:"/creator/Richard%20Garriott"})
   case "Jonathan Blow":
  return res.status(200).json({home:"/creator/Jonathan%20Blow"})
   case "Brian Fargo":
  return res.status(200).json({home:"/creator/Brian%20Fargo"})
   case "Markus Notch Persson":
  return res.status(200).json({home:"/creator/Markus Notch Persson"})
   case "Ralph H. Baer":
  return res.status(200).json({home:"/creator/Ralph H. Baer"})
   case "John Carmack":
  return res.status(200).json({home:"/creator/John Carmack"})
   case "Todd Howard":
  return res.status(200).json({home:"/creator/Todd Howard"})
   case "Jason Jones":
  return res.status(200).json({home:"/creator/Jason Jones"})
   case "Yoko Taro":
  return res.status(200).json({home:"/creator/Yoko Taro"})
   case "Ken Levine":
  return res.status(200).json({home:"/creator/Ken Levine"})
   case "Sid Meier":
  return res.status(200).json({home:"/creator/Sid Meier"})
   case "Will Wright":
  return res.status(200).json({home:"/creator/Will Wright"})
   case "wen Vincke":
  return res.status(200).json({home:"/creator/wen Vincke"})
   case "Hideo Kojima":
  return res.status(200).json({home:"/creator/Hideo Kojima"})
  case "setting":
  return res.status(200).json({home:"/setting/Menu"}) 
  case "setting getstarted":
  return res.status(200).json({home: "/setting/getStarted"})   
  case "play black" :
  return res.status(200).json({home:"/try/67acd5e6b47d4a438d581c57"}) 
   case "play takken" :
  return res.status(200).json({home:"/try2/679107379c965c44fa976828"}) 
  case "trynow":
  return res.status(200).json({home:"/trynow"})
  case "world": 
  return res.status(200).json({home:"/worldChat"}) 
    ///Route OFF
  case "one":
  return res.status(200).json({onctranc:"one"})  
  case "two":
  return res.status(200).json({onctranc:"two"}) 
  case "three":
  return res.status(200).json({onctranc:"three"}) 
  case "four":
  return res.status(200).json({onctranc:"four"}) 
  case "five":
  return res.status(200).json({onctranc:"five"}) 
  case "six":
  return res.status(200).json({onctranc:"six"}) 
  case "seven":
  return res.status(200).json({onctranc:"seven"}) 
  case "eight":
  return res.status(200).json({onctranc:"eight"}) 
  case "nine":
  return res.status(200).json({onctranc:"nine"}) 
  case "ten":
  return res.status(200).json({onctranc:"ten"})   
  case "chat":
  return res.status(200).json({onctranc:`chat ${trans}`})     
  case "Dynamic Menu":
   return res.status(200).json({onctranc:"Dynamic Menu"}) 
  case "send":
   return res.status(200).json({onctranc:"send"})   
   case "menu top":
   return res.status(200).json({onctranc:"menu top"}) 
   case "Balanced Mode":
   return res.status(200).json({onctranc:"Balanced Mode"}) 
   case "Internet Safety Mode":
   return res.status(200).json({onctranc:"Internet Safety Mode"}) 
  case "close":
    return res.status(200).json({onctranc: "close"}) 
  case "down":
    return res.status(200).json({onctranc: "down"}) 
  case "up" :
    return res.status(200).json({onctranc :"up"})  
  case "infinity nikki":
    return res.status(200).json({onctranc :"infinity nikki"}) 
  case "The Legend of Zelda: Breath of the Wild":
    return res.status(200).json({onctranc:"The Legend of Zelda: Breath of the Wild"})     
  case "logout":
    return res.status(200).json({onctranc :"logout"}) 
  case "cut":
    return res.status(200).json({onctranc :"cut"})  
  case "whatName":
    return res.status(200).json({onctranc : "whatName"})
  case "whatEamil":   
    return res.status(200).json({onctranc :"whatEamil"})
  case "yourName":
    return res.status(200).json({onctranc :"yourName"})  
  case "language":
   return res.status(200).json({onctranc : `${languageKeyword}`})  
  case "find":
    return res.status(200).json({onctranc :`${findkeyword}`}) 
  case  "left":
    return res.status(200).json({onctranc : `${leftkeyword}`})  
  case "right":
    return res.status(200).json({onctranc : `${rightKeyword}`})  
  case "top":
    return res.status(200).json({onctranc : "top"});
  case "all":
    return res.status(200).json({onctranc : "all"})
  case "Forza Horizon 5":
   return res.status(200).json({onctranc : "Forza Horizon 5"})   
  case "description":
  return res.status(200).json({onctranc :"description"})  
  case "System Requirements":
  return res.status(200).json({onctranc :"System Requirements"})  
  case "Additional information":
  return res.status(200).json({onctranc :"Additional information"})      
  case "game":
    return res.status(200).json({onctranc : `${gameKeyword}`}) 
  case "add" :
    return res.status(200).json({onctranc : "add"})   
  case "message":
    return res.status(200).json({onctranc : `${messageKeyword}`})  
  case "name":
    return res.status(200).json({onctranc : `${nameKeyword}`})   
  case "lastname":
    return res.status(200).json({onctranc: `${lastnameKeyword}`})
  case "password":
    return res.status(200).json({onctranc : `${passKeyword}`}) 
  case  "gender":
   return res.status(200).json({onctranc : `${genderKeyword}`}) 
  case "submit":
    return res.status(200).json({onctranc : "submit"})       
  case "removeall":
    return res.status(200).json({onctranc: "remove"})
  case "tap":  
  return res.status(200).json({onctranc:"tap"})
  case "details":
    return res.status(200).json({onctranc: "details"})
  case "open":
    return res.status(200).json({onctranc: `open ${trans}`})  
    case "blackmithwokong":
    return res.status(200).json({onctranc: "black mith wokong"}) 
    case "rdr2":
    return res.status(200).json({onctranc: "red dead redemption"}) 
    case "spiderman":
    return res.status(200).json({onctranc: "marval spider man 2"}) 
    case "valorant":
    return res.status(200).json({onctranc: "Valorant"})
    case "marval rivales":
    return res.status(200).json({onctranc: "Marval rivales"})
    case "Project":
    return  res.status(200).json({onctranc:"Project Witches"})  
    case "Witcher":
    return res.status(200).json({onctranc:"The Witcher 4"})  
    case "Saros":
    return res.status(200).json({onctranc:"Saros"})
    case "DiabloIV":
    return res.status(200).json({onctranc:"Diablo IV"})      
    case "Onimusha":
    return res.status(200).json({onctranc:"Onimusha: Way of the Sword"})  
    case "Warhammer":
    return res.status(200).json({onctranc:"Warhammer 40,000: Boltgun 2"})    
    case "Star":  
    return res.status(200).json({onctranc:"Star Wars: Zero Company"}) 
    case "fc25":
    return res.status(200).json({onctranc:"fc 25"})    
    case "Marvel":
    return res.status(200).json({onctranc:"Marvel 1943: Rise of Hydra"})  
    case "Fable":
    return res.status(200).json({onctranc:"Fable"}) 
    case "Hearthstone":
    return res.status(200).json({onctranc:"Hear the stone"})   
    case "gost of yotel": 
    return res.status(200).json({onctranc:"gost of yotel"})
    case "inZOI":
    return res.status(200).json({onctranc:"inZOI"})  
    case "GTA":
    return res.status(200).json({onctranc:"Grand Theft Auto VI"})  
    case "GranblueFant":
    return res.status(200).json({onctranc:"Granblue Fantasy"})  
    case "DeadorAlive":
    return res.status(200).json({onctranc:"Dead or Alive 6"})  
    case "Tales":
    return res.status(200).json({onctranc:"Tales"})  
    case "Warframe":
    return res.status(200).json({onctranc:"Warframe"})  
    case "Apex Legends":
    return res.status(200).json({onctranc:"Apex Legends"})  
    case "XKO":
    return res.status(200).json({onctranc:"2XKO"})  
    case "fornight":
    return res.status(200).json({onctranc:"Fortnite"}) 
    case "cancal":
    return res.status(200).json({onctranc:"cancal"})  
    case "godofwar":
    return res.status(200).json({onctranc:"god of war"})  
    case "wwe":
    return res.status(200).json({onctranc:"wwe"})  
    case "ride 5":
    return res.status(200).json({onctranc:"ride 5"})   
    case "palworld":
    return res.status(200).json({onctranc:"palworld"})  
    case "indiana jones":
    return res.status(200).json({onctranc:"indiana jones"})  
    case "Cyberpunk 2077":
    return res.status(200).json({onctranc:"Cyberpunk 2077"})   
    case "games":
    return res.status(200).json({home:"/games"})  
    case "Eternal Strands":
    return res.status(200).json({onctranc:"Eternal Strands"}) 
    case "Clair Obscur: Expedition 33:":
    return res.status(200).json({onctranc:"Clair Obscur: Expedition 33:"})   
     case "Kill Knight":
    return res.status(200).json({onctranc:"Kill Knight"})
     case "Dragon's Dogma 2":
    return res.status(200).json({onctranc:"Dragon's Dogma 2"})
     case "Astro Bot":
    return res.status(200).json({onctranc:"Astro Bot"})
     case "Elden Ring: Shadow of the Erdtree":
    return res.status(200).json({onctranc:"Elden Ring: Shadow of the Erdtree"})
     case "Metaphor: ReFantazio":
    return res.status(200).json({onctranc:"Metaphor: ReFantazio"})
     case "Final Fantasy VII Rebirth":
    return res.status(200).json({onctranc:"Final Fantasy VII Rebirth"})
     case "Slay the Princess – The Pristine Cut":
    return res.status(200).json({onctranc:"Slay the Princess – The Pristine Cut"})
    case "Overwatch2":
    return res.status(200).json({onctranc:"Overwatch 2"}) 
    case "free fire":
    return res.status(200).json({onctranc:"free fire"}) 
    case "TeamFortress2":
    return res.status(200).json({onctranc:"Team Fortress 2"}) 
    case "Grand Theft Auto Online":
    return res.status(200).json({onctranc:"Grand Theft Auto Online"})      
     case "Wanderstop":  
    return res.status(200).json({onctranc:"Wanderstop"})
     case "EA SPORTS FC™ 25 Standard Edition":
    return res.status(200).json({onctranc:"EA SPORTS FC™ 25 Standard Edition"})
     case "Beacon-fire: Project Salvation Belles":
    return res.status(200).json({onctranc:"Beacon-fire: Project Salvation Belles"})
     case "EA SPORTS™ Madden NFL 25":
    return res.status(200).json({onctranc:"EA SPORTS™ Madden NFL 25"})
    case "Asphalt 9" :
    return res.status(200).json({onctranc:"Asphalt 9"})  
     case "Star Wars Outlaws":
    return res.status(200).json({onctranc:"Star Wars Outlaws"})
     case "mpire of the Ants":
    return res.status(200).json({onctranc:"mpire of the Ants"})
     case "CarX Drift Racing Online":
    return res.status(200).json({onctranc:"CarX Drift Racing Online"})
     case "Orcs Must Die! Deathtrap":
    return res.status(200).json({onctranc:"Orcs Must Die! Deathtrap"})
     case "Assassin's Creed Shadows":
    return res.status(200).json({onctranc:"Assassin's Creed Shadows"})
    case "Uncharted4":
  return res.status(200).json({onctranc:"Uncharted 4"})  
     case "FragPunk":
    return res.status(200).json({onctranc:"FragPunk"})
     case "PrincePersia":
    return res.status(200).json({onctranc:"PrincePersia"})
     case "Revenge of the Savage Planet":
    return res.status(200).json({onctranc:"Revenge of the Savage Planet"})
     case "Tales of the Shire":
    return res.status(200).json({onctranc:"Tales of the Shire"})
     case "Killing Floor 3":
    return res.status(200).json({onctranc:"Killing Floor 3"})
     case "Atofall":
    return res.status(200).json({onctranc:"Atofall"})
     case "Monster Hunter Wilds":
    return res.status(200).json({onctranc:"Monster Hunter Wilds"})
     case "Two Point Museum":
    return res.status(200).json({onctranc:"Two Point Museum"})
     case "Metal Gear Solid Delta: Snake Eater":
    return res.status(200).json({onctranc:"Metal Gear Solid Delta: Snake Eater"})
     case "Borderlands 4":
    return res.status(200).json({onctranc:"Borderlands 4"})
     case "The Alters":
    return res.status(200).json({onctranc:"The Alters"})
     case "Kingmakers":
    return res.status(200).json({onctranc:"Kingmakers"})
     case "Split Fiction":
    return res.status(200).json({onctranc:"Split Fiction"})
     case "Skate 4":
    return res.status(200).json({onctranc:"Skate 4"})
     case "The Outer Worlds 2":
    return res.status(200).json({onctranc:"The Outer Worlds 2"})
     case "Clash Of Clans":
    return res.status(200).json({onctranc:"Clash Of Clans"})
     case "Assassin's Creed Odyssey":
    return res.status(200).json({onctranc:"Assassin's Creed Odyssey"})
     case "Tomb Raider":
    return res.status(200).json({onctranc:"Tomb Raider"})
     case "Life is Strange":
    return res.status(200).json({onctranc:"Life is Strange"})
    case "The Midnight Walk":  
    return res.status(200).json({onctranc:"The Midnight Walk"})  
     case "Firewatch":
    return res.status(200).json({onctranc:"Firewatch"})
     case "The Legend of Zelda":
    return res.status(200).json({onctranc:"The Legend of Zelda"})
     case "Horizon Zero Dawn":
    return res.status(200).json({onctranc:"Horizon Zero Dawn"})
     case "A Way Out":
    return res.status(200).json({onctranc:"A Way Out"})
     case "Adventures of Pip":
    return res.status(200).json({onctranc:"Adventures of Pip"})
     case "Lego Voyagers":
    return res.status(200).json({onctranc:"Lego Voyagers"})
    case "Kingdom Come: Deliverance 2":
    return res.status(200).json({onctranc:"Kingdom Come: Deliverance 2"})  
     case "FarCry5":
    return res.status(200).json({onctranc:"FarCry 5"})
    case "Marvel’s Wolverine":
    return res.status(200).json({onctranc:"Marvel’s Wolverine"}) 
    case "Rust":
    return res.status(200).json({onctranc:"Rust"})  
     case "Death Stranding":
    return res.status(200).json({onctranc:"Death Stranding"})
     case "Witch It":
    return res.status(200).json({onctranc:"Witch It"})
     case "Farming Simulator":
    return res.status(200).json({onctranc:"Farming Simulator"})
     case "Hell Is Us":
    return res.status(200).json({onctranc:"Hell Is Us"})
     case "NARAKA BLADEPOINT":
    return res.status(200).json({onctranc:"NARAKA BLADEPOINT"})
     case "F1 25":
    return res.status(200).json({onctranc:"F1 25"})
     case "Among Us":
    return res.status(200).json({onctranc:"Among Us"})
     case "Satisfactory":
    return res.status(200).json({onctranc:"Satisfactory"})
     case "Bloons TD 6":
    return res.status(200).json({onctranc:"Bloons TD 6"})
     case "Moving Out":
    return res.status(200).json({onctranc:"Moving Out"})
     case "Sid Meiers":
    return res.status(200).json({onctranc:"Sid Meiers"})
     case "League of Legends":
    return res.status(200).json({onctranc:"League of Legends"})
     case "Chivalry 2":
    return res.status(200).json({onctranc:"Chivalry 2"})
    case "Empire of the Ants":
    return res.status(200).json({onctranc:"Empire of the Ants"})
    case "Magic: The Gathering Arena":
    return res.status(200).json({onctranc:"Magic: The Gathering Arena"})
    case "Counter-Strike 2 & GO":
    return res.status(200).json({onctranc:"Counter-Strike 2 & GO"})
    case "Minecraft":
    return res.status(200).json({onctranc:"Minecraft"})
    case "ROBLOX":
    return res.status(200).json({onctranc:"ROBLOX"})
    case "DeathStranding":
    return res.status(200).json({onctranc:"Death Stranding"}) 
   case "The Sims 4":
    return res.status(200).json({onctranc:"The Sims 4"})
    case "Dota 2":
    return res.status(200).json({onctranc:"Dota 2"})
    case "Call of Duty: Modern Warfare":
    return res.status(200).json({onctranc:"Call of Duty: Modern Warfare"})
    case "PUBG BATTLEGROUNDS":
    return res.status(200).json({onctranc:"PUBG BATTLEGROUNDS"})
    case "HELLDIVERS 2":
    return res.status(200).json({onctranc:"HELLDIVERS 2"})
    case "Grand Theft Auto V":
    return res.status(200).json({onctranc:"Grand Theft Auto V"})
    case "Delta Force":
     return res.status(200).json({onctranc:"Delta Force: Hawk Ops"})
     case "Path of Exile 2":
    return res.status(200).json({onctranc:"Path of Exile 2"})
    case "Rocket League":
    return res.status(200).json({onctranc:"Rocket League"})
    case "Overwatch 2":
    return res.status(200).json({onctranc:"Overwatch 2"})
    case "Diablo IV":
    return res.status(200).json({onctranc:"Diablo IV"})
    case "Tom Clancy's Rainbow Six: Siege":
    return res.status(200).json({onctranc:"Tom Clancy's Rainbow Six: Siege"})
   case "The Elder Scrolls VI":
    return res.status(200).json({onctranc:"The Elder Scrolls VI"})
    case "Battlefield 6":
    return res.status(200).json({onctranc:"Battlefield 6"})
    case "Marvels Wolverine":
    return res.status(200).json({onctranc:"Marvels Wolverine"})
    case "Fable":
    return res.status(200).json({onctranc:"Fable"})
    case "Avowed":
    return res.status(200).json({onctranc:"Avowed"})
    case "Senua’s Saga: Hellblade II":
    return res.status(200).json({onctranc:"Senua’s Saga: Hellblade II"})
    case "Metroid Prime 4":
    return res.status(200).json({onctranc:"Metroid Prime 4"})
     case "Civilization 7":
    return res.status(200).json({onctranc:"Civilization 7"})
    case "It Takes Two":
    return res.status(200).json({onctranc:"It Takes Two"})
    case "Diablo 4":
    return res.status(200).json({onctranc:"Diablo 4"})
    case "Baldur's Gate 3":
    return res.status(200).json({onctranc:"Baldur's Gate 3"})
    case "The Last Of Us":
    return res.status(200).json({onctranc:"The Last Of Us"})
   case "Little Nightmares 3":
    return res.status(200).json({onctranc:"Little Nightmares 3"})
    case "Call of Duty: Warzone":
    return res.status(200).json({onctranc:"Call of Duty: Warzone"})
    case "Destiny 2":
    return res.status(200).json({onctranc:"Destiny 2"})
    case "DuneAwakening":
    return res.status(200).json({onctranc:"Dune Awakening"})  
    case "Team Fortress 2":
    return res.status(200).json({onctranc:"Team Fortress 2"})
    case "Hearth stone":
    return res.status(200).json({onctranc:"Hearth stone"})
    case "Paladins":
    return res.status(200).json({onctranc:"Paladins"})
    case "Dauntless":
    return res.status(200).json({onctranc:"Dauntless"})
     case "Smite":
    return res.status(200).json({onctranc:"Smite"})
    case "World of Tanks":
    return res.status(200).json({onctranc:"World of Tanks"})
    case "War Thunder":
    return res.status(200).json({onctranc:"War Thunder"})
    case "Star Wars: The Old Republic":
    return res.status(200).json({onctranc:"Star Wars: The Old Republic"})
    case "Blade & Soul":
    return res.status(200).json({onctranc:"Blade & Soul"})
    case "Prince of Persia":
    return res.status(200).json({onctranc:"Prince of Persia"})  
   case "Metaphor: ReFantazio":
    return res.status(200).json({onctranc:"Metaphor: ReFantazio"})
    case "Final Fantasy VII Rebirth":
    return res.status(200).json({onctranc:"Final Fantasy VII Rebirth"})
    case "Slay the Princess – The Pristine Cut":
    return res.status(200).json({onctranc:"Slay the Princess – The Pristine Cut"})
    case "UFO 50":
    return res.status(200).json({onctranc:"UFO 50"})
    case "Animal Well":
    return res.status(200).json({onctranc:"Animal Well"})
    case "Satisfactory":
    return res.status(200).json({onctranc:"Satisfactory"})
    case "Dauntless":
    return res.status(200).json({onctranc:"Dauntless"})
    case "Portal 2":
    return res.status(200).json({onctranc:"Portal 2"})
    case "The Last of Us Part II Remastered":
    return res.status(200).json({onctranc:"The Last of Us Part II Remastered"})
    case "Tekken 8":
    return res.status(200).json({onctranc:"Tekken 8"})
    case "Tsukihime":
    return res.status(200).json({onctranc:"Tsukihime"})
    case "RocketLeague":
    return res.status(200).json({onctranc:"Rocket League"})  
    case "Like a Dragon: Infinite Wealth":
    return res.status(200).json({onctranc:"Like a Dragon: Infinite Wealth"})
    case "Castlevania Dominus Collection":
    return res.status(200).json({onctranc:"Castlevania Dominus Collection"})
    case "Lorelei and the Laser Eyes":
    return res.status(200).json({onctranc:"Lorelei and the Laser Eyes"})

    case "Thank Goodness You’re Here!":
    return res.status(200).json({onctranc:"Thank Goodness You’re Here!"})
    case "Doom Eternal":
    return res.status(200).json({onctranc:"Doom Eternal"})
    case "Metal Gear Solid V: The Phantom Pain":
    return res.status(200).json({onctranc:"Metal Gear Solid V: The Phantom Pain"})
    case "Assassin's Creed Mirage":
    return res.status(200).json({onctranc:"Assassin's Creed Mirage"})
    case "Armored Core VI":
    return res.status(200).json({onctranc:"Armored Core VI"})
     case "FarmingSimulator":
     return res.status(200).json({onctranc:"Farming Simulator"})  
    case "The First Descendant":
    return res.status(200).json({onctranc:"The First Descendant"})
    case "Avatar: Frontiers of Pandora":
    return res.status(200).json({onctranc:"Avatar: Frontiers of Pandora"})
    case "30XX":
    return res.status(200).json({onctranc:"30XX"})
    case "Realms of Ruin":
    return res.status(200).json({onctranc:"Realms of Ruin"})
    case "GTA San Andreas":
    return res.status(200).json({onctranc:"GTA San Andreas"})
    case "Uncharted 4":
    return res.status(200).json({onctranc:"Uncharted 4"})
    case "Uncharted The Lost Legacy":
    return res.status(200).json({onctranc:"Uncharted The Lost Legacy"})
    case "RealmsRuin":
    return res.status(200).json({onctranc:"Realms of Ruin"})
    case "Journey":
    return res.status(200).json({onctranc:"Journey"})  
    case "TankHead":
    return res.status(200).json({onctranc:"Tank Head"})  
    case "right 1":
    return res.status(200).json({onctranc:"right 1"})
    case "left 1":
    return res.status(200).json({onctranc:"left 1"}) 
     case "right 2":
    return res.status(200).json({onctranc:"right 2"})
    case "left 2":
    return res.status(200).json({onctranc:"left 2"}) 
     case "right 3":
    return res.status(200).json({onctranc:"right 3"})
    case "left 3":
    return res.status(200).json({onctranc:"left 3"}) 
     case "right 4":
    return res.status(200).json({onctranc:"right 4"})
    case "left 4":
    return res.status(200).json({onctranc:"left 4"}) 
     case "right 5":
    return res.status(200).json({onctranc:"right 5"})
    case "left 5":
    return res.status(200).json({onctranc:"left 5"}) 
     case "right 6":
    return res.status(200).json({onctranc:"right 6"})
    case "left 6":
    return res.status(200).json({onctranc:"left 6"}) 
     case "right 7":
    return res.status(200).json({onctranc:"right 7"})
    case "left 7":
    return res.status(200).json({onctranc:"left 7"}) 
     case "right 8":
    return res.status(200).json({onctranc:"right 8"})
    case "left 8":
    return res.status(200).json({onctranc:"left 8"}) 

    case "day":
    return res.status(200).json({onctranc:"day"}) 
    case "month":
    return res.status(200).json({onctranc:"month"})
    case "week":
    return res.status(200).json({onctranc:"week"}) 
    case "year":
    return res.status(200).json({onctranc:"year"}) 
    case "skip":
    return res.status(200).json({onctranc:"skip"})   
    case "ok":
    return res.status(200).json({onctranc:"ok"})  
  default:
  }
   
  if (trans.toLowerCase().includes("name") && !trans.toLowerCase().includes("last name") &&  email == undefined ) {
    let index = trans.toLowerCase().indexOf("name");
    let nameOpkey = trans.slice(index)
    return res.status(200).json({onctranc : `${nameOpkey}`})
  }
  if (trans.toLowerCase().includes("last name") && email == undefined) {
    let index = trans.toLowerCase().indexOf("last name");
    let lastnameOPkey = trans.slice(index);
    return res.status(200).json({onctranc : `${lastnameOPkey}`})
  }
  if (trans.toLowerCase().includes("email") && email == undefined) {
    let index = trans.toLowerCase().indexOf("email");
    let emailOpkey = trans.slice(index);
    return res.status(200).json({onctranc: `${emailOpkey}`})
  }
  if (trans.toLowerCase().includes("password") && email == undefined) {
    let index = trans.toLowerCase().indexOf("password");
    let passopKey = trans.slice(index);
    return res.status(200).json({onctranc : `${passopKey}`})
  }
  if (trans.toLowerCase().includes("gender") && email == undefined) {
    let index = trans.toLowerCase().indexOf("gender");
    let genderOpkey = trans.slice(index);
    return res.status(200).json({onctranc : `${genderOpkey}`})
  }
  if (trans.toLowerCase().includes("submit") && email == undefined) {
    return res.status(200).json({onctranc : "submit"})  
  }
  if (trans.toLowerCase().includes("remove") && email == undefined) {
    return res.status(200).json({onctranc: "remove"})
  }
    if (trans.toLowerCase().includes("tap") && trans.toLowerCase().includes("tab") && email == undefined) {
    return res.status(200).json({onctranc: "tap"})
  }
    if (trans.toLowerCase().includes("down") && email == undefined) {
    return res.status(200).json({onctranc: "down"})
  }
    if (trans.toLowerCase().includes("up") && email == undefined) {
    return res.status(200).json({onctranc: "up"})
  }
    if (trans.toLowerCase().includes("up") && email == undefined) {
    return res.status(200).json({onctranc: "up"})
  }
    if (trans.toLowerCase().includes("information") || trans.toLowerCase().includes("features") && email == undefined) {
    return res.status(200).json({onctranc: "info"})
  }
  if (trans.toLowerCase().includes("cancel") || trans.toLowerCase().includes("close features") || trans.toLowerCase().includes("close information") && email == undefined) {
  return res.status(200).json({onctranc: "close info"})
  }
  if (trans.toLowerCase().includes("close") && !trans.toLowerCase().includes("close information") && !trans.toLowerCase().includes("close features") && email == undefined) {
  return res.status(200).json({onctranc: "close"})
  }
  if (trans.toLowerCase().includes("verify") && email == undefined) {
    return res.status(200).json({onctranc:"verify"})
  }
  if(trans.toLowerCase().includes("otp") && email == undefined){
    let otp = trans.toLowerCase()
   return res.status(200).json({onctranc:`${otp}`})
  }
  if(trans.toLowerCase().includes("back") && !trans.toLowerCase().includes("not") && email == undefined){
return res.status(200).json({onctranc:`back`})
  }
  if (trans.toLowerCase().includes("confirm")&& email == undefined) {
    let confirm = trans.toLowerCase()
   return res.status(200).json({onctranc:`${confirm}`}) 
  }
  return res.status(200).json(trans)  
}) 


module.exports = router;