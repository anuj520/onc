const{Schema,model} = require("mongoose")

const playsSchema = new Schema({
  isRemoved: Boolean,
    h3:{
       type:String 
    },
    p:{
        type:String
    },
    video:{
        type:String
    }
},{suppressReservedKeysWarning: true })

const play = new model('play',playsSchema);
module.exports = play;