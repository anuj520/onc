const{Schema,model} = require("mongoose");

const SchemaEdits = new Schema({
togesl:{
    type: Boolean,
    default: false
},
toges2:{
type:Boolean,
default: false
},
toges3:{
type:Boolean,
default: false
},
toges4:{
type:Boolean,
default: false
},
toges5:{
type:Boolean,
default:false    
},
toges6:{
type:Boolean,
default:false    
},
email:{
    type: String,
    required: true
}
})

const togesl = new model("togesl",SchemaEdits)
module.exports = togesl