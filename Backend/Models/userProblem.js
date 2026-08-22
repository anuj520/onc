const{Schema,model} = require("mongoose");

const userProblem = new Schema({
  isRemoved: Boolean,
  image:[
    {
      type:String,
      required: true
    }
  ],
  firstname:{
    type:String,
    required: true
  },
  lastname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  problem:[
    {
    type:String,
    required:true
    }
  ],
  
  Date:[
    {
      type:String,
      default: ''
    }
  ],

  Reply:[
 {
  type:String,
 }
  ],
  RImg:[
    {
      type:String,
    }
  ],
  Rdate:[
    {
      type:String,
      default: ''
    }
  ]
}, {suppressReservedKeysWarning: true })

const user_Problem = new model("user_Problem",userProblem);
module.exports = user_Problem;