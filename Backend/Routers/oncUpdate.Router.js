const{Router} = require("express");
const oncModel = require("./../Models/onc.moel")
const router = Router();


router.patch('/', async (req, res) => {
  const { route, arr,email } = req.body;
  console.log(req.body);
  
if (route && !Array.isArray(arr)) {
   return res.status(404).json({error: "Missing route of arr"}) 
}

const isExits = await oncModel.findOne({email:email});

const kk = Object.values(isExits._doc)
.filter(item =>Array.isArray(item))
.flatMap(arr => arr.map(item => item.name))
.filter(Boolean);


const newItem = arr
  .filter(item => typeof item === "string" && item.trim() !== "" &&  !kk.includes(item.trim()))
  .map((item => ({name: item.replace(/\./g,"")})))



try {
const response = await oncModel.updateOne({email:email},
{ $push: { [route]: { $each: newItem } } }      
)    
return res.status(200).json(response)
} catch (error) {
 return res.status(500).json({error: "Update failed", detail: error.message})   
}
});

router.get('/getorion/:email',async(req,res)=>{  
const email = req.params.email  
const response = await oncModel.find({email});
if (!response && response.length !== 0) {
  return res.status(200).json("no data found")
}
return res.status(200).json(response)
})

router.patch('/delete',async(req,res)=>{
const{path,email,log} = req.body;
const response = await oncModel.updateOne({email},{$pull:{[path]:{name:log}}})
console.log(response);
return res.status(200).json(response)

})



module.exports = router