const{Schema,model} = require("mongoose");

const HeartSchema = new Schema({
       isRemoved: Boolean,
email:{
 type:String
},      
game:[{
   name:{
    type:String
   },
      rating:{
    type:String
   },
    like:{
    type:Boolean
   },
    back:{
    type:String
   },  
    png:{
    type:String
   },  
}]


},{suppressReservedKeysWarning: true })

const heart = new model("heart",HeartSchema)

module.exports = heart;