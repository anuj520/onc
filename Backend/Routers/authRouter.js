const { Router } = require("express");
const { body } = require("express-validator");
const {authSignUp,authLogin, getUserData,updateUser,handleView,
notification,getPrblem,deletenotification,requestRouter,
handlenodemailer,
handlePin,
handlecheck,
handleforgetEmail,
checkforgetpin,
checkEmail,
changePassword,
handlegets} = require("../Controllers/AuthController");
const authMiddleware = require("../middleware/authMiddleware");
const router = Router();

router.post('/signUp', [
    body('email').isEmail().isLength({max: 22}).withMessage("Email is not valid"),
    body('password').isLength({ min: 6, max : 30}).withMessage("Password must be at least 6 characters"),
    body('firstname').isLength({ min: 3,max:10 }).withMessage("Firstname must be at least 3 characters"),
    body('lastname').isLength({ min: 3 ,max :13}).withMessage("Lastname must be at least 3 characters"),
    body('gender').isIn(["male", "female", "other"]).withMessage("Gender must be one of 'male', 'female', or 'other'")
], authSignUp);

router.post('/login', [
    body('email').isEmail().withMessage("Email is not valid"),
    body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
], authLogin);


//user
router.get('/person',authMiddleware,getUserData)
//user

//edit
router.patch('/edit/:id',authMiddleware,updateUser)
//edit

//notification
router.post('/notification',authMiddleware,notification)
router.patch('/notificattion/delete/:id',authMiddleware,deletenotification)
router.patch('/notiview/:id',authMiddleware,handleView)
//notification

//Problem
router.get('/Profile/:email',authMiddleware,getPrblem)
//Problem

//Blocked
router.patch('/Userrequest/:email',authMiddleware,requestRouter)
//Blocked

//nodemailer
router.patch('/nodemailer',handlenodemailer)
router.post("/handlePin",handlePin)
router.get("/handlegets/:email",handlegets)
router.post("/pincheek",handlecheck)

//forgetPassword
router.patch("/forgetpassword",handleforgetEmail)
router.post("/cheekemailpin",checkEmail)
router.post("/findemailpin",checkforgetpin)
router.post("/changePassword",changePassword)
//nodemailer

module.exports = router;
