const adminMiddleware = async(req,res,next)=>{
  try {
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
    return res.status(400).json("Admin not find!")   
    }
    next()
  } catch (error) {
    console.error("adminMiddleware",error.message);
    
  }  
}

module.exports = adminMiddleware