const{Router} = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {contectController,getContectEmail,seeContect, editmessage} = require("../Controllers/ContectController");

const route = Router();

route.post('/contect',authMiddleware,contectController)
route.get('/contectEmail/:email',authMiddleware, getContectEmail)
route.patch('/contectSee/:id',authMiddleware,seeContect)
route.patch('/delete/contect/:email',authMiddleware,editmessage)

module.exports = route