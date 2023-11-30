import express from "express";

const router  = express.Router()
import { isAdmin, requireSignIn } from "../Helpers/Authmiddlwere.js";
import { categoryControlller, caterogryCreate, deleteCategoryCOntroller, singleCategoryController, updateCategoryController,  } from "../Controller/CategoryController.js";





//create Category
router.post("/createcategory" , requireSignIn, isAdmin, caterogryCreate)



//update Category


router.put("/updated/:id" , requireSignIn, isAdmin, updateCategoryController)


router.get("/getcategory",categoryControlller)
router.get("/singleCategory/:id" , singleCategoryController)
router.delete("/dlletd/:id" ,requireSignIn,isAdmin, deleteCategoryCOntroller)


export default router