const axios = require("axios");
const authModel = require('./../Models/authModel')
const googleauth = require("../Models/googleModel");
const { oauth2client } = require("./../util/googlrConfilg");
const jwt = require("jsonwebtoken");

const googleAuth = async (req, res) => {
  try {
    const { code } = req.query;
    console.log(code);
    
    const googleRes = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleRes.tokens);

    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );

    const { email, name, picture,gender } = userRes.data;
    let user = await googleauth.findOne({ email });
    let authUser = await authModel.findOne({email})
    
    if (authUser) {
     return res.status(200).json("Email already exits")
    }      
    if (!user) {
      user = await googleauth.create({
        firstname:name.split(' ')[0],
        lastname:name.split(' ')[1],
        email,
        gender,
        image: picture,
      });
    }

    const { _id } = user;
    const token = jwt.sign(
      { _id, email },
      process.env.JWT_SECRET || "Rolex",
    );

    return res.status(200).json({
      message: "Success",
      token,
      user,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
};

const gNotification = async(req,res) =>{
try {
  const {notification,date,view} = req.body
  const response = await googleauth.updateMany({},{$push:{notification: notification,date:date}});
  await googleauth.updateMany({},{$set:{view:view}})
 return res.status(200).json(response)
} catch (error) {
  console.error("gNotification",error.message);
  return res.status(400).json(error.message)  
}  
}

const googleNotification = async(req,res) =>{
  try {
    const index = parseInt(req.params.id);
    await googleauth.updateOne({},{[`notification.${index}`] : ""})
    return res.status(200).json("Delete Sucessfully")
  } catch (error) {
    console.error(error.message);
    
  }
}

const clearAllNotification = async (req, res) => {
  const id = req.params.id;

  try {
      let extisEmail = await authModel.findOne({ _id: id }) || await googleauth.findOne({ _id: id });

      if (!extisEmail) {
          return res.status(400).json("Please SignUp");
      }
      
      const response = await extisEmail.updateOne(
        { $set: { notification: [], date: [] } }
    );;

      return res.status(200).json(response);
  } catch (error) {
      console.error(error.message);
      return res.status(500).json("An error occurred");
  }
};


const editGoogleUser = async(req,res) =>{
try {
  const id = req.params.id;
  const updateData = req.body
console.log(updateData.firstname.length);

  if(updateData.gender !== "male" && updateData.gender !== "female" && updateData.gender !== "other"){
   return res.status(400).json({error: "gender is not valid"}) 
  }
  if(updateData.firstname.length < 3 || updateData.lastname.length < 3){
   return res.status(400).json({error: "Name must be at least 3 characters"}) 
  }
  
  const response = await googleauth.updateOne({_id:id},{$set:updateData})
  return res.status(200).json(response);
} catch (error) {
  console.error("editGoogleUser",error);
  return res.status(200).json(error.message);
}  
}

module.exports = {gNotification,googleAuth,editGoogleUser,googleNotification,clearAllNotification};
