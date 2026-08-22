const{Schema,model} = require("mongoose")

const gamesSchema = new Schema({
       isRemoved: Boolean,
    img:{
        type:String
    },
    img2:{
        type:String
    },
    name:{
        type:String
    },
    Rating:{
        type:String
    },
    summary:{
        type:String
    },
    Downloads:{
        type:String
    },
    Description:{
        type:String
    },
    Screenshots:[
     {
        type:String
     }  
    ],
    Likes:{
type:String
    },
    Dislikes:{
        type:String
    },
    Features:[
        {
            type:String
        }
    ],
    Additionalinformation:{
        type:String
    },
    IARCrating:{
        type:String
    },
    SystemRequirements:[
        {
            Minimum:{
                type:String
            },
            Recommended:{
                type:String
            }
        }
    ],
    version:{
        type:String
    },
    tags:[
        {
       games_count:{
        type:Number,
        },
        id:{
            type:Number
        },
        image_background:{
type:String
        },
        language:{
          type:String  
        },
        name:{
            type:String
        }
     }],
    img3:{
        type:String
    }
},{suppressReservedKeysWarning: true })

const games = new model('game',gamesSchema);
module.exports = games