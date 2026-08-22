const authModel = require("./../Models/authModel");
const multer = require("multer");
const path = require("path");

const createUser = async ({email, password, firstname, lastname, gender}) => {
    if (!email || !password || !firstname || !lastname || !gender ) {
        throw new Error("All fields are required");
    }
        try {
            const user = await authModel.create({
                email,
                password,
                firstname,
                lastname,
                gender,
                
            });
            return user
        } catch (error) {
         throw new Error(error)
        }
    };


module.exports = createUser;
