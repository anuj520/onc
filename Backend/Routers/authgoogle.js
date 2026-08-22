const{Router} = require("express");
const {googleAuth,gNotification,editGoogleUser,googleNotification,clearAllNotification} = require("../Controllers/googleAuth");
const authMiddleware = require("../middleware/authMiddleware");

const router = Router();

//get user
router.get('/google',googleAuth)
//get user
//notification
router.post('/gnotifition',authMiddleware,gNotification)
router.patch('/deleteNoti/:id',authMiddleware,googleNotification)
router.patch('/clearAll/:id',authMiddleware,clearAllNotification)
//notification

//edit
router.patch('/google/edit/:id', authMiddleware, editGoogleUser)
//edit
module.exports = router;