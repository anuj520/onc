const { Schema, model } = require("mongoose");
const bcryptJs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authSchema = new Schema({
      isRemoved: Boolean,
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be 5 characters']
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    gender: {
        type: String,
    },
    notification:[
   {  type:String,   
    default:''
}
    ],
    isBlocked:{
       type:Boolean,
       default: false
    },
    date:[
        {
     type:String,
     default : ''
        }
    ],
    img:[
        {
            type:String
        }
    ],
    view:{
   type:Boolean,
   default : false
    },
    seeMessage:{
        type:Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    verfication:{
        type:Boolean,
        default: false
    }
}, { timestamps: true },{ suppressReservedKeysWarning: true });

// Secure password with bcrypt
authSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET || "Hello");
    return token;
}

authSchema.methods.comparePassword = async function (password) {
    const results = await bcryptJs.compare(password, this.password);
    return results;
}

authSchema.statics.hashPassword = async function (password) {
    return await bcryptJs.hash(password, 10);
}

const User = model("User", authSchema);
module.exports = User;
