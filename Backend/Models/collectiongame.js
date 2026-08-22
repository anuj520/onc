const{Schema,model} = require("mongoose");

const collectionSchema = new Schema({
    isRemoved: Boolean,
img:{
    type:String
},
img3:{
    type:String
},
Rating:{
    type:String
},
para:{
    type:String
},
name:{
    type:String
},
})

const collection = new model("collection",collectionSchema);

module.exports = collection;