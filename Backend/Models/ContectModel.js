const{Schema,model} = require("mongoose")

const ContectSchema = new Schema({
      isRemoved: Boolean,
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
    message:[{
        type:String,
        required:true
    }],
    date:[
        {
            type: String,
            default: ''
        }
    ],
    Replay:[{
        type:String,
        default: ''
    }],
    Rdate:[
        {
            type:String,
            default : ''
        }
    ],
    seeMessage:{
        type:Boolean,
        default:false
      },
},{suppressReservedKeysWarning: true })

const contect = new model("contect",ContectSchema);

module.exports = contect;