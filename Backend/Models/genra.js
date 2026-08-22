const{Schema,model} = require('mongoose')

const genraSchema = new Schema({
     isRemoved: Boolean,
  name:{
    type:String
  } ,
  img:{
    type:String
  },
  top:[
    {
       name:{
        type:String
       },
       img:{
        type:String
       },
       rating:{
        type:String
       },
       like:{
        type:Boolean,
        default: false
       }
    }
  ],
  games:[
   {
    name:{
        type:String
    },
    img:{
        type:String
    },
    rating:{
        type:String
    },
    like:{
      type:Boolean,
      default: false
    }
   } 
  ]  
},{suppressReservedKeysWarning: true })

const ganra = new model("ganra",genraSchema)

module.exports = ganra;