import usermodel from "../Model/usermodel.js"
import bcrypt  from 'bcrypt';
import jwt from "jsonwebtoken"
export const registar = async(req,res) => {


 
    const {name ,phone, password,email,adress} = req.body
    try {
     
        //validations
        if (!name) {
          return res.send({ name: "Name is Required" });
        }
        if (!email) {
          return res.send({ error: "Email is Required" });
        }
        if (!password) {
          return res.send({ error: "Password is Required" });
        }
        if (!phone) {
          return res.send({ error: "Phone no is Required" });
        }
        if (!adress) {
          return res.send({ error: "Address is Required" });
        }
        //check user
        const exisitingUser = await usermodel.findOne({ email });
        //exisiting user
        if (exisitingUser) {
          return res.status(200).send({
            success: false,
            message: "Already Register please login",
          });
        }
        //register user
        
        const hashed = await  bcrypt.hash(password, 10)
      
 
        //save
        const user = await new usermodel({
          name,
          email,
          phone,
          adress,
          password:hashed
        }).save();
    
        res.status(201).send({
          success: true,
          message: "User Register Successfully",
          user,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Errro in Registeration",
          error,
        });
      }
}


export const login = async(req,res) => {


    console.log(req.body)
 
    try {
      const {password,email} = req.body
    
        if (!email) {
          return res.send({ error: "Email is Required" });
        }
        if (!password) {
          return res.send({ error: "Password is Required" });
        }
      
        //check user
        const user = await usermodel.findOne({ email });
        console.log(user)
        //exisiting user
        if (!user) {
          return res.status(200).send({
            success: false,
            message: "email is not registared",
          });
        }
        //compare pssowrd   
       
        const match = await bcrypt.compare(password, user.password);
        console.log(match)
        if (!match) {
          return res.status(200).send({
            success: false,
            message: "Invalid Password",
          });
        }
   
          let  token = jwt.sign({_id: user._id},'shhhhh'); 
  
        
          res.status(201).send({
            success: true,
            message: "login  Successfully",
            user : {
                name : user.name,
                email : user.email,
                adress : user.adress,
                phone:  user.phone,
                role : user.role
             
            },
            token,
          });
        
    
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Errro in Registeration",
          error,
        });
      }
}




export const test = async(req,res) => {
    res.status(201).send({
       mssege :  "waa saxan yhay"
      });

}



export const forgetpssword = async(req,res) => {
  try {
    const {email,anser,newpssword} = req.body
     
    
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
   
    if (!newpssword) {
      return res.send({ error: "newpssword is Required" });
    }
  
    //check user
    const user = await usermodel.findOne({email ,anser });
 
    //exisiting user
   
    //compare pssowrd   

    if (!user) {
        return res.status(200).send({
          success: false,
          message: "wrong email",
        });
      }

      const hashed = await  bcrypt.hash(newpssword, 10)
    
     await usermodel.findByIdAndUpdate(user.id ,{password : hashed})
    
      res.status(201).send({
        success: true,
        message: "pssword resaet   Successfully",
       
      });
    

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in in forget psswprd !",
      error,
    });
  }


}



export const updateProfileController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    const user = await usermodel.findById(req.user._id);
    //password
    if (password && password.length < 6) {
      return res.json({ error: "Passsword is required and 6 character long" });
    }
   
    const updatedUser = await usermodel.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: user.password,
        phone: phone || user.phone,
        address: address || user.adress,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Update profile",
      error,
    });
  }
};