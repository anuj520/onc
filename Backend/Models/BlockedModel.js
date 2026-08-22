const{Schema,model} = require("mongoose")

const BlockedSchema = new Schema({
    isRemoved: Boolean,
  email:{
    type:String,
    require:true
  },
  whyBkocked:{
    type:String
  },
  userRequest:[{
    type:String,
    default: ""
  }]  
},{suppressReservedKeysWarning: true })

const Blocked = new model("Blocked",BlockedSchema);

module.exports = Blocked