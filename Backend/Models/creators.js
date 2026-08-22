const{Schema,model} = require("mongoose")

const creatorsSchema = new Schema({
       isRemoved: Boolean,
    img:{
        type:String
    },
    name:{
        type:String
    },
    top:[
   {     img:{
            type:String
        },
        name:{
        type:String
        },
        rating:{
            type:String
        }
    }
    ],
    games:[
        {
            img:{
                type:String
            },
            name:{
           type:String
            },
            rating:{
                type:String
            }
        }
    ]
},{suppressReservedKeysWarning: true })

const creators = new model("creator",creatorsSchema)
module.exports = creators