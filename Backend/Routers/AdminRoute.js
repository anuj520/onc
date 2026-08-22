const{Router} = require('express')
const adminMiddleware = require('../middleware/adminMiddleware')
const authMiddleware = require('../middleware/authMiddleware')
const {getUsers,userDelete,getUserId,upDateUser,getgoogleUser
,googleUserDelate,getAllContect,contectDelete,userContectFind,
deleteNotification,clearNotification,verficationAD
,replayContect,getAllblogs,blogsDelete,blockedUser,whyitBlocked,  
findBlocked
} = require('../Controllers/AdminController')

const router = Router()
///user
router.get('/user',authMiddleware,adminMiddleware,getUsers)
router.delete('/user/delete/:id',authMiddleware,adminMiddleware,userDelete)
router.get('/user/:id',authMiddleware,adminMiddleware,getUserId)
router.patch('/user/update/:id',authMiddleware,adminMiddleware,upDateUser)
///user

//google
router.get('/googleUser',authMiddleware,adminMiddleware,getgoogleUser)
router.delete('/googleUser/delete/:id',authMiddleware,adminMiddleware,googleUserDelate)
//google

//message
router.get("/allcontect",authMiddleware,adminMiddleware,getAllContect)
router.delete('/delete/contect/:id',authMiddleware,adminMiddleware,contectDelete)
router.get('/contect/:id',authMiddleware,adminMiddleware,userContectFind)
router.patch('/contect/update/:id',authMiddleware,adminMiddleware,replayContect)
//message

//problem
router.get('/allBlog',authMiddleware,adminMiddleware,getAllblogs)
router.delete('/delete/blog/:id',authMiddleware,adminMiddleware,blogsDelete)
//problem

//blocked
router.patch('/blocked/:id',authMiddleware,adminMiddleware,blockedUser)
router.post('/request/:email',authMiddleware,adminMiddleware,whyitBlocked)
router.get('/blockedRequest/:email',authMiddleware,findBlocked)
//blocked

//All notification
router.patch('/notificationD/:id',authMiddleware,adminMiddleware,deleteNotification)

//clear
router.patch('/clearNoti',authMiddleware,adminMiddleware,clearNotification)
//All notification

//verficationAD
router.patch("/verficationAD/:id",authMiddleware,adminMiddleware,verficationAD)
//verficationAD
module.exports = router