const { validationResult } = require("express-validator");
const authModel = require("./../Models/authModel");
const userProblem = require("./../Models/userProblem")
const googleModel = require("./../Models/googleModel")
const createUser = require("./../services/authServices");
const nodemailer = require("nodemailer")
const bcryptJs = require("bcryptjs")
const forgetEmail = require("./../Models/forgetEmailpin")
const BlockdModel = require("./../Models/BlockedModel")
const pin = require("./../Models/pinmodel")

const authSignUp = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const { email, password, firstname, lastname, gender } = req.body;

    const extisEmail = await authModel.findOne({email:email});
    const exitGoogle = await googleModel.findOne({email:email})

    if (extisEmail || exitGoogle) {
     return res.status(400).json("Email already exits")
    }

 
    try {
        const hashPassword = await authModel.hashPassword(password);

        const user = await createUser({
            email,
            password: hashPassword,
            firstname,
            lastname,
            gender,
        });
        delete user._doc.password;
        const token = user.generateAuthToken();

        return res.status(200).json({ token, user });

    } catch (error) {
        console.log("authSignUp", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

const authLogin = async(req,res) =>{
 const errorr = validationResult(req);
 if (!errorr.isEmpty()) {
    return res.status(400).json({errorr:errorr.array()})
 } 
 const{email,password} = req.body;

 const user  = await authModel.findOne({email}).select("+password")
 if (!user) {
    return res.status(200).json({msg : "Invalid Credentials"})
 }

 const isMatch = await user.comparePassword(password);
 if (!isMatch) {
    return res.status(400).json({msg :"password invalid"})
 }

 delete user._doc.password;
 const token =  user.generateAuthToken();
 return res.status(200).json({user,token})

}

const getUserData = (req,res) =>{
try {
    const user = req.user;
    res.status(200).json(user)   
} catch (error) {
    console.error("getUserData",error);
    
}
}

const updateUser = async(req,res)=>{
 try {
    const id = req.params.id;
    const updateData = req.body;
       if(updateData.gender !== "male" && updateData.gender !== "female" && updateData.gender !== "other"){
   return res.status(400).json({error: "gender is not valid"}) 
  }
  if(updateData.firstname.length < 3 || updateData.lastname.length < 3){
   return res.status(400).json({error: "Name must be at least 3 characters"}) 
  } 
    await authModel.updateOne({_id:id},{$set:updateData});
    return res.status(200).json("update Sucessully")
 } catch (error) {
    console.error("updateUser",error.message);
    
 }   
}

//notification
const notification = async(req,res) =>{
 try {
    const {notification,date,view} = req.body
    const response = await authModel.updateMany({},{$push:{notification: notification,date:date}});
  await authModel.updateMany({},{$set :{view : view}})  
    return res.status(200).json(response);
 } catch (error) {
    console.log("notification",error.message);
    return res.status(400).json(error.message);
 }   
}

const deletenotification = async(req,res)=>{
 try {
   const id = req.params.id;
   const {noti} = req.body  
   await authModel.updateOne({_id:id},{$pull:{notification:noti}})
   return res.status(200).json("delete Sucessfully")
 } catch (error) {
   console.error("deletenotification",error);
   
 }  
}
const getPrblem = async(req,res) =>{
 try {
    const email = req.params.email;
    const response = await userProblem.findOne({email:email});
    if (!response || response.length == 0) {
        return res.status(400).json("No Problem foind")
    }
 return res.status(200).json(response)
 } catch (error) {
    console.error("getPrblem",error); 
 }   
}

//notification View
const handleView = async(req,res) =>{
const id  = req.params.id;
 await authModel.updateOne({_id:id},{$set:{view:false}})  
 await googleModel.updateOne({_id:id},{$set:{view:false}})

 
}
//notification view

//Blocked
const requestRouter = async(req,res) =>{
const email = req.params.email;
const{userRequest} = req.body

if (email) {
   await BlockdModel.updateOne({email:email},{$push:{userRequest : userRequest}})
   return res.status(200).json("request send Sucessfully") 
}else{
   return res.status(400).json("somthing was rong")
}
}
//Blocked

//nodemaile
const handlenodemailer = async(req,res) =>{
const{verify,pins} = req.body   
try {
   const auth = nodemailer.createTransport({
   service: "gmail",
   secure :true,
   port: 465,
   auth:{
      user:"eoriongame@gmail.com",
      pass:"fllg llpw ftve efzp"
   }
})
const receiver = ({
   from : "eoriongame@gmail.com",
   to: verify,
   subject: "Orion — Verification Code",
   text: `Hello,

You are trying to create an account on Orion.  
Please use the OTP below to verify your email address:

${pins}

If you did not request to create an Orion account, please ignore this email.

Thank you,  
The Orion Team  
https://orion.example.com`
})

await auth.sendMail(receiver)
console.log("sucess");
return res.status(200).json("mail send")


} catch (error) {
console.log(error);
res.end()
   
}   

}

//handlepin

const handlePin = async(req,res) =>{
const{verify,pins,tog} = req.body;
const isExite = await pin.findOne({verify:verify});
if (isExite) {
await pin.updateOne({verify:verify},{$unset:{verify,pins,tog}})
await pin.create({
   verify:verify,
   pins:pins,
})
}else{
await pin.create({
   verify:verify,
   pins:pins,
})
}
return res.status(200).json("add sucessfully")
}

const handlegets = async(req,res) =>{
const{email} = req.params   
const response = await pin.findOne({verify:email})  
if (response) {
  return res.status(200).json(response) ;
}else{
   return res.status(400).json("no data found")
}
}

//check email

const handlecheck = async(req,res) =>{
const{verify,pins,tog} = req.body;
const cheek = await pin.findOne({verify:verify})

if (!cheek) {
   return res.status(400).json("Email is not Exits")
}

if (cheek.pins == pins) {   
await pin.updateOne({verify:verify},{$set:{tog:tog}})   
return res.status(200).json("Email valid sucessfully") 
}else{
  return res.status(400).json("pin is not match")   
}
}

//forget email
const handleforgetEmail = async(req,res) =>{
try {
const{email,pins} = req.body
const auth = await nodemailer.createTransport({
service:"gmail",
port:465,
secure:true,
auth:{
user: "eoriongame@gmail.com",
pass:"fllg llpw ftve efzp",}
})  

 const resevier = {
from:"eoriongame@gmail.com",
to:email,
subject:`Orion Security Code: ${pins}`,
text:`Hi,

You requested to reset your PIN for Orion. Use the OTP below to set a new PIN:

${pins}

This code will expire in 10 minutes. If you did not request this, please ignore this email or contact our support.

Thanks,
The Orion Team
https://orion.example.com`
}

const info = await auth.sendMail(resevier);
console.log("sucess forget");

return res.status(200).json({msg:"check your email"})
} catch (error) {
   console.log(error); 
} 
}



const checkEmail = async(req,res) =>{
const{email,pins} = req.body

const isExite = await authModel.findOne({email:email})

const updateforget = await forgetEmail.findOne({email:email})

if (!isExite) {
 return  res.status(400).json({msg:"Email is not Exits"})
}else if (updateforget) {
await forgetEmail.updateOne({email:email},{$unset:{email,pins}})
await forgetEmail.create({
   email:email,
   pins:pins
})
}else{
   await forgetEmail.create({
   email:email,
   pins:pins
})
}
  
return res.status(200).json({msg:"Cheek your Email"}) 
}

const checkforgetpin = async(req,res) =>{
const{email,pins} = req.body;

const isExite = await forgetEmail.findOne({email:email});


if (!isExite) {
 return res.status(200).json({msg:"pin is not match"})  
}else if(isExite.pins == pins){
return res.status(200).json({msg: "Email valid sucessfully"}) 
}else{
 return res.status(500).json({msg:"Email and pin not found"})  
}
}

//mangae new password
const changePassword = async(req,res) =>{
const{email,password} = req.body;
const pass = await authModel.findOne({email:email})

if (pass) {
let changepass = await bcryptJs.hash(password,10)   
const response = await authModel.updateOne({email:email},{$set:{password:changepass}})
console.log(response);
return res.status(200).json("password change sucessfully")
}else{
return res.status(400).json("password not change")   
}


}

module.exports = {authSignUp,authLogin,getUserData,handleView,changePassword,handlegets,
   updateUser,notification,getPrblem,deletenotification,requestRouter,handlenodemailer,handlePin,handlecheck,handleforgetEmail,checkforgetpin,checkEmail};
