const genratedAi = require("../services/AiService");

const AiController = async(req,res) =>{
 try {
    const{promt} = req.query;
    const results = await genratedAi(promt)
    return res.send(results)
 } catch (error) {
    console.error("AiController",error.message);
 }   
}

module.exports = AiController
