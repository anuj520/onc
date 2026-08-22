const ContectModel = require("./../Models/ContectModel")
const authModel = require("./../Models/authModel")
const googleModel = require("./../Models/googleModel")
const contectController = async(req,res) =>{
 try {
    const response = req.body;
    console.log(req.body);
    const email =  response.email
    const date = response.date
    const message = response.message
    const existingUser = await ContectModel.findOne({email:email});
    if (existingUser) {
      existingUser.message.push(message);
      existingUser.date.push(date)
      await ContectModel.updateOne({email:email},{$set:{seeMessage:false}})
      await existingUser.save();
    return res.status(200).json("Message appended successfully");
    }else{
    await ContectModel.create(response);
    res.status(200).json("message send sucessfully")
    }
 } catch (error) {
    console.error("contectController",error);
    
 }   
}

const getContectEmail = async(req,res)=>{
 try {
   const email = req.params.email;
   const response = await ContectModel.find({email:email});
   res.status(200).json(response)
 } catch (error) {
   console.log("getContectEmail",error);
   
 }  
}

const seeContect = async(req,res) =>{
  const id = req.params.id;
  await ContectModel.updateOne({_id:id},{$set:{seeMessage : false}})
}

//delete message

const editmessage = async(req,res) =>{
const{mess,index} = req.body;
console.log(mess);

const email = req.params.email;
await ContectModel.updateOne({email},{$set:{[`message.${index}`]: mess}})
return res.status(200).json("delete sucessfully")
}




module.exports = {contectController,getContectEmail,seeContect,editmessage}