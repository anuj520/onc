const{Schema,model} = require("mongoose");

const pinSchema = new Schema({
 verify:{
    type:String,
    required:true
 },
 pins:{
    type:Number,
    required:true
 },
 tog:{
   type:Boolean,
   default:false
 }   
})

const pin = new model("pin",pinSchema);

module.exports = pin;