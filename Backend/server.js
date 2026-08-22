const express = require('express');
const cors = require('cors');
const connection = require("./DB/db")
const authUser = require('./Routers/authRouter')
const gameRoute = require("./Routers/data")
const googleAuth = require("./Routers/authgoogle")
const multer = require('multer')
const personRouter = require("./Routers/personContect")
const path = require("path")
const punycode  =  require("punycode");
const user_Problem = require('./Models/userProblem')
const authMiddleware = require('./middleware/authMiddleware');
const AiRouete = require("./Routers/AiRoute")
const adminRoute = require('./Routers/AdminRoute')
const profileModel = require('./Models/authModel')
const oncRouter = require('./Routers/oncRouter')
const{Server}  = require("socket.io")
const {createServer} = require("http")
const googleModel = require("./Models/googleModel")
const oncUpdate = require("./Routers/oncUpdate.Router")
const  bodyParser  =  require("body-parser");

const PORT = 3000;
const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});
app.use(cors())
app.use(bodyParser.json({ limit: "1mb" }));
app.use(express.static(path.resolve('./public')));
app.use(express.static(path.resolve('./useProblem/')))
app.use(express.json())

app.use('/games',gameRoute)
app.use('/user',authUser)
app.use('/person',personRouter)
app.use('/auth', googleAuth)
app.use('/Ai',AiRouete)
app.use('/admin',adminRoute)
app.use('/onc',oncRouter)
app.use('/oncUpdate',oncUpdate)
   
//userImg   

const storage = multer.diskStorage({
    destination: function(req,file,cd){
        cd(null,path.resolve('./public/'))
    },
    filename: function(req,file,cd){
        const filename = `${file.originalname}`;
        cd(null,filename)
    }
})

const upload =  multer({storage:storage})

app.patch('/profileEdit/:email',upload.single('file'),async(req,res)=>{
  const id = req.params.email;
  const upDatedata = req.file?.filename

  console.log(upDatedata);
  
try {
  const response = await googleModel.updateOne(
    { email: id },
    { $set: { img: upDatedata } } 
  );
  if (response.modifiedCount === 0) {
    throw new Error("google update faild")
  }
  return res.status(200).json(response)
} catch (error) {
  try {
    const response = await profileModel.updateOne(
      { email: id },
      { $set: { img: upDatedata } } 
    );

    if (response.modifiedCount === 0) {
      throw new Error("auth update faild")
    }
    return res.status(200).json(response)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({error : "Both updation is falid"})
    
  }
}
})


//problem
const userStorage = multer.diskStorage({
  destination:function(req,file,cd){
    cd(null,path.resolve('./useProblem/'))
  },
  filename:function(req,file,cd){
  const filename = `${Date.now()}-${file.originalname}`;
  cd(null,filename)  
  }
})

const userP = multer({storage:userStorage})

app.patch('/blogEdit/:id',authMiddleware,userP.single('file'),async(req,res)=>{
  try {
    const id = req.params.id;
    const RImg = req.file?  req.file.filename  : "No"
    const {Reply,Rdate} =  req.body
    
    console.log(req.body ,req.file?  req.file.filename  : [] );
    

    const response = await user_Problem.updateOne({_id:id},  {$push: {
      Reply: Reply,
      RImg: RImg || "No",
      Rdate: Rdate
    }
})
    res.status(200).json("update Sucessfully")
  } catch (error) {
    console.log("blogEdit",error.message);
    
  }
})



app.post('/blog', authMiddleware, userP.single('file'), async (req, res) => {
  try {
    const { firstname, lastname, email, problem,Date } = req.body;

    console.log(req.body);
     
   if (problem == ' ') {
    return res.status(500).json("fill problem properli")
   }

    const existingUser = await user_Problem.findOne({ email: email });

    if (existingUser) {
      existingUser.problem.push(problem); 
      existingUser.Date.push(Date)
      if (req.file) {
        existingUser.image.push(req.file.filename); 
      }else{
        existingUser.image.push("No"); 
      }
      await existingUser.save(); 
    } else {
    await user_Problem.create({
        image: req.file ? [req.file.filename] : ["No"],
        firstname,
        lastname,
        email,
        problem: [problem] ,
        Date : [Date]
      });
    }
    console.log(req.file);
    
    res.status(200).json("Problem sent successfully");
  } catch (error) {
    console.error(error.message); // Log the error for debugging
    if (error.message == "user_Problem validation failed: problem.1: Path `problem.1` is required.") {
     return res.status(400).json("Fill properli"); 
    }
  }
});



io.on("connection", (socket) => {
  socket.emit("welcome", "Welcome to Rolex!");

  // socket.on("msg", (text, user) => {
  //   const payload = {
  //     text,
  //     user,
  //     time: new Date().toISOString(),
  //   };
  //   io.emit("msg", payload); // Send to all users
  // });

 socket.on('msg',(text,user)=>{
  const payload = { 
  text,
  user,
  time: new Date().toISOString(),
 }
 io.emit("msg",payload)
 })

  socket.on("disconnect", () => {
    // console.log("User disconnected:", socket.id);
  });
});
app.get('/',(req,res)=>{
  res.send("Socket.Io in running")  
})




connection().then(() =>{
httpServer.listen(PORT,()=>{
console.log(`server listrn on Poret on ${PORT}`);   
})
})