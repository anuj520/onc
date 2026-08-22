const games  = require('../Models/games')
const genra = require("./../Models/genra")
const creatoes = require('./../Models/creators')
const ChampitionSchema = require('./../Models/chanmpition')
const plays = require('./../Models/play')
const collgame = require("./../Models/collectiongame")
const { Router } = require("express");
const play = require('./../Models/play')
const heart = require('../Models/heart')

const route = Router();
//game
route.get('/pc',async(req,res)=>{
    const response = await games.find({});
res.status(200).json(response)
})

route.get('/pc/:id',async(req,res)=>{
   const id  = req.params.id 
   const response = await games.findOne({name:id})  
   res.status(200).json(response)
})


///game

//genra
route.get('/genra',async(req,res)=>{
const response = await genra.find({});
res.status(200).json(response)    
})

route.get('/g/:name',async(req,res)=>{
const name  = req.params.name;
const response = await genra.findOne({name:name})
res.status(200).json(response)    
})


route.patch('/like', async (req, res) => {
  const { name, like, topname } = req.body;

  try {
    const response = await genra.updateOne(
      { name: name },
      [
        {
          $set: {
            top: {
              $map: {
                input: "$top",
                as: "item",
                in: {
                  $cond: [
                    { $eq: ["$$item.name", topname] },
                    { $mergeObjects: ["$$item", { like: like }] },
                    "$$item"
                  ]
                }
              }
            }
          }
        },
        {
          $set: {
            games: {
              $map: {
                input: "$games", 
                as: "item",
                in: {
                  $cond: [
                    { $eq: ["$$item.name", topname] },
                    { $mergeObjects: ["$$item", { like: like }] },
                    "$$item"
                  ]
                }
              }
            }
          }
        },
      ]
    );

    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});


//heart
route.post('/heart',async(req,res) =>{
const{name,rating,like,back,png,email} = req.body;

console.log(req.body);

if (!like) {
  await heart.updateOne(
    { email },
    { $pull: { game: { name} } }  // match on only key fields
  )
}
const isExits = await heart.findOne({ "game.name": name })
const isEmail = await heart.findOne({email:email})

if (isEmail && like && !isExits) {
  await heart.updateOne({email:email},{$push:{game:{name,rating,like,back,png}}})
}else if(!isEmail){
const response = await heart.create({
  email: email,
  name:name,
  rating:rating,
  like:like,
  back : back,
  png: png
})  
return res.status(200).json("create xusessfully")
}else{
return res.status(400).json("error")
}
})

route.patch('/delete/fav',async(req,res) =>{
const{name,email} = req.body;
await heart.updateOne({email},{$pull: {game:{name}}})
return res.status(200).json("delete sucessfully")
})


route.get('/heartGet/:email',async(req,res)=>{
const email = req.params.email 
const response = await heart.findOne({email});
 return res.status(200).json(response)   
})
//heart


//genra//

//creators
route.get('/creators',async(req,res)=>{
 const response =  await creatoes.find({})
 res.status(200).json(response)  
})

route.get('/creators/:id',async(req,res)=>{
    const id = req.params.id
  const response = await creatoes.findOne({name:id})
  res.status(200).json(response)  
})

//creators

//chamption
route.get('/chamption',async(req,res)=>{
 const response = await ChampitionSchema.find({})
 res.status(200).json(response)   
})

route.get('/chamption/:id',async(req,res)=>{
 const id = req.params.id;
 const response = await ChampitionSchema.findOne({_id:id});
 res.status(200).json(response)   
})
//chamption

//play

route.get('/play/:id',async(req,res)=>{
try {
  const id = req.params.id;
  const response = await play.findOne({_id:id});
res.status(200).json(response)
} catch (error) {
 console.error("play",error.message);
  
}
})

route.get("/collection",async(req,res)=>{
const collection = await collgame.find({});
return res.status(200).json(collection)
})

//play
module.exports = route