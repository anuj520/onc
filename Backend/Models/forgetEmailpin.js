const{Schema,model} = require("mongoose");

const forgetSchema = new Schema({
email:{
  type:String,
  required: true  
},
pins:{
 type:Number,
 required:true   
}    
})

const forgetEmail = new model("forgetEmail",forgetSchema);

module.exports = forgetEmail