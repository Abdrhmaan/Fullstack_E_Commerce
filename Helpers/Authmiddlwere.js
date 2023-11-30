
import jwt from "jsonwebtoken"
import usermodel from "../Model/usermodel.js";


// kani waa inaa hubiso qofku inoo login yahay 

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is missing' });
      }
 
    const decode = jwt.verify(
        token,
        'shhhhh'
       
      );
      console.log(decode)
     
      req.user = decode;
    

  
    next()
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};



export const isAdmin = async (req, res, next) => {

 
   
    
      try {
        const user = await usermodel.findById(req.user._id);
        console.log(user)
        if (user.role !== 1) {
          return res.status(401).send({
            success: false,
            message: "UnAuthorized Access",
          });
        } else {
          next();
        }
      } catch (error) {
        console.log(error);
        res.status(401).send({
          success: false,
          error,
          message: "Error in admin middelware",
        });
      }
   
     
      

      
}
      
