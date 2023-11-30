
import CategoryModel from "../Model/CategoryModel.js";
import slugify from "slugify"

export   const caterogryCreate =async (req,res) => {
    try {
        const {name } = req.body
         
        
        if (!name) {
          return res.send({ error: "name is Required" });
        }
       
      
        //check user
        const categoryExissting  = await CategoryModel.findOne({name});
     
        //exisiting user
       
        //compare pssowrd   
    
        if (categoryExissting) {
            return res.status(200).send({
              success: false,
              message: "categroy exsisting..",
            });
          }
    
          const category = await new CategoryModel({
            name,
            slug: slugify(name),
          }).save();
        
          res.status(201).send({
            success: true,
            message: "new category created",
            category
           
          });
        
    
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Errro in in category !",
          error,
        });
      }
    

}  




export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating category",
    });
  }
};



export const categoryControlller = async (req, res) => {
    try {
      const category = await CategoryModel.find({});
      res.status(200).send({
        success: true,
        message: "All Categories List",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all categories",
      });
    }
  };




  export const singleCategoryController = async (req, res) => {
    try {
      const {id} = req.params.id
      const category = await CategoryModel.findOne(id);
      res.status(200).send({
        success: true,
        message: "Get SIngle Category SUccessfully",
        category,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single Category",
      });
    }
  };
  
  export const deleteCategoryCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await CategoryModel.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting category",
        error,
      });
    }
  };