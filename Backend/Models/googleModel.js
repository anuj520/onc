const{Schema,model} = require("mongoose")

const googleSchema = new Schema({
     isRemoved: Boolean,
  firstname:{
    type:String
  },
  lastname:{
  type:String
  },
  email:{
    type:String
  },
  gender:{
    default: '',
    type:String
  } ,
  image:{
    type:String
  }, 
  notification:[{
    default: '',
    type:String
  }],
  img:[
    {
      type:String
    }
  ],
  date:[
    {
      type :String
    }
  ],
  view:{
    type:Boolean,
    default:false
  },
  isBlocked:{
    type:Boolean,
    default: false
  },
  verfication:{
    type:Boolean,
    default: false
  },
isAdmin:{
  type:Boolean,
  default:false
},
google:{
  type:Boolean,
  default:true
}

},{suppressReservedKeysWarning: true })

const googleauth = new model("googleauth",googleSchema)
module.exports = googleauth