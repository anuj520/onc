const usersModel = require('./../Models/authModel');
const googleModel = require('./../Models/googleModel')
const userContect = require('./../Models/ContectModel');
const allProblems = require('./../Models/userProblem');
const { notification } = require('./AuthController');
const BlockdModel = require("./../Models/BlockedModel")

const getUsers = async(req,res) =>{
 try {
    const response = await usersModel.find({})
    if(response.length == 0 || !response) return res.status(401).json("no user found");
    res.status(200).json(response)  
} catch (error) {
    error("getUsers",error.message)
 }   
}

const userDelete = async(req,res) =>{
try {
    const id = req.params.id;
    await usersModel.deleteOne({_id:id}) 
    res.status(200).json("User Delete Sucessfully") 
} catch (error) {
 console.error("userDelete",error);
    
}
}

const getUserId = async(req,res) =>{
  try {
    const id = req.params.id;
  const response =  await usersModel.findOne({_id:id})
    res.status(200).json(response)
  } catch (error) {
    console.error("getUserId",error);
    
  }  
}

const upDateUser = async(req,res)=>{
 try {
    const id = req.params.id;
    const userData = req.body;

    const updateData = await usersModel.updateOne({_id:id},{$set:userData})
    res.status(200).json(updateData);
 } catch (error) {
   console.error("upDateUser",error);
    
 }   
}

const getgoogleUser = async(req,res) =>{
try {
 const response = await googleModel.find({})
 if(!response || response.length == 0) return res.status(401).json("No User Found !")
return res.status(200).json(response) 
} catch (error) {
 console.error("getgoogleUser",error);
    
}
}

const googleUserDelate = async(req,res) =>{
try {
  const id = req.params.id;
    await googleModel.deleteOne({_id:id})
   res.status(200).json("User Delete Sucessfull")
} catch (error) {
console.error("googleUserDelate",error);
}    
}

const getAllContect = async(req,res)=>{
try {
    const response = await userContect.find({})
    if(!response || response.length == 0) return res.status(401).json("No Contect Found !")
   return res.status(200).json(response)
} catch (error) {
  console.error("getAllContect",error);
    
}
}

const contectDelete = async(req,res)=>{
 try {
    const id = req.params.id;
    await userContect.deleteOne({_id:id})
    res.status(200).json("Contect Delete Sucessfull")
 } catch (error) {
    console.error("contectDelete",error);  
 }   
}

const userContectFind = async(req,res)=>{
try {
    const id = req.params.id
  const response = await userContect.findOne({_id:id});
 return res.status(200).json(response)  
} catch (error) {
 console.error("userContect",error);
 
}    
}

const replayContect = async(req,res)=>{
  try {
    const id = req.params.id;
    const {Replay,Rdate} = req.body;
    
    const response = await userContect.updateOne({_id:id},{$push:{Replay:Replay,Rdate: Rdate}})
    await userContect.updateOne({_id:id},{$set:{seeMessage:true}})
 return  res.status(200).json("update Sucessfully")
  } catch (error) {
    console.error("replayContect",error);
    
  }  
}

const getAllblogs = async(req,res)=>{
try {
  const response = await allProblems.find({})
  if(!response || response.length == 0) return res.status(401).json("No Blogs find")
  return res.status(200).json(response)
} catch (error) {
  console.error("getAllblogs",error.message);
  
}
}

const blogsDelete = async(req,res)=>{
try {
  const id = req.params.id;
  await allProblems.deleteOne({_id:id});
  return res.status(200).json("blogs delete Sucessfully")
} catch (error) {
  console.error("blogsDelete",error);
} 
}

const blockedUser = async(req,res) =>{
  try {
      const id = req.params.id;
      const{isBlocked} = req.body;
       console.log(isBlocked);

    let isExits = await usersModel.findOne({_id:id}) || await googleModel.findOne({_id:id})
       
    let updateResult = await usersModel.updateOne(
      { _id: id },
      { $set: { isBlocked } }
    );

    if (updateResult.matchedCount === 0) {
      updateResult = await googleModel.updateOne(
        { _id: id },
        { $set: { isBlocked } }

      );
      if (updateResult.matchedCount === 0) {
        return res.status(404).json({ message: "User not found in both models" });
      }
    }
    if (isBlocked == false) {
      await BlockdModel.deleteOne({email:isExits.email})
    return res.status(200).json("delete sucessfully")
    }
      
    res.status(200).json({ message: "User status updated successfully" });
  } catch (error) {
    console.log("blockedUser",error.message);
    return res.status(400).json({"blockedUser": error.message})  
  }    
  }


  const deleteNotification = async (req, res) => {
    try {
      const index = parseInt(req.params.id);
      await usersModel.updateOne({}, { $unset: { [`notification.${index}`]: "" } });
      await googleModel.updateOne({}, { $unset: { [`notification.${index}`]: "" } });
      return res.status(200).json("Deleted successfully");
    } catch (error) {
      console.error(error.message);
      return res.status(500).json("An error occurred");
    }
  };

 const clearNotification = async(req,res) =>{
 try {
  await usersModel.updateMany({},{$set : {notification : [] , date : []}})
  await googleModel.updateMany({},{$set : {notification : [] , date : []}})
 
res.status(200).json("clear All  Sucessfully")
} catch (error) {
  console.error(error);
  
 } 
 }

//verfifation
const verficationAD = async(req,res) =>{
  try {
    const id = req.params.id;
    const{num,count1} = req.body 
       
if (count1 == 6) {
  await usersModel.updateOne({_id:id},{$set:{isAdmin : false}})
  await googleModel.updateOne({_id:id},{$set:{isAdmin :false}})

  return res.status(400).json({msg:"You are not a Admin"})
}
    if (num !== 1175 || usersModel.isAdmin == false || googleModel.isAdmin == false) {
    return res.status(400).json({msg: "Incorrect PIN"})
    }else{
      await usersModel.updateOne({_id:id},{$set:{verfication: true}})
      await googleModel.updateOne({_id:id},{$set:{verfication:true}})
      return res.status(200).json({msg: "You are the administrator."})
    }    
  } catch (error) {
    console.error(error.message);
    
  }  
 } 
 //

 //BlockedIsBlocked
const whyitBlocked = async(req,res) =>{
const email = req.params.email;
const{whyBkocked} = req.body
console.log(email);

if (!email) {
  return res.status(403).json("No userFound")  
}else{
  const response = await BlockdModel.create({
    email:email,
    whyBkocked,
  })
  console.log(response);
  return res.status(200).json(response)
}

}

const findBlocked = async(req,res)=>{
 const email = req.params.email
 const response = await BlockdModel.findOne({email:email})
 if (!response) {
  return res.status(400).json("No user Found")
 }else{
  return res.status(200).json(response)
 }
}
 //WhyBlocked


module.exports = {getUsers,userDelete,getUserId,upDateUser,getgoogleUser,googleUserDelate,getAllContect,contectDelete,userContectFind
 ,replayContect,getAllblogs,blogsDelete,blockedUser,deleteNotification,clearNotification,verficationAD,whyitBlocked,findBlocked 
}