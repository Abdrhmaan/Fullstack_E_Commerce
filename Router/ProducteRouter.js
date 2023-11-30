import formidable from "express-formidable";
import express from "express";
import { isAdmin, requireSignIn } from "../Helpers/Authmiddlwere.js";
import { createProductController, deleteProductController,brainTreePaymentController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController,braintreeTokenController } from "../Controller/ProductController.js";



const router  = express.Router()

router.post(
    "/create-product",

    requireSignIn,
    isAdmin,
    formidable(),
    createProductController
  );


  router.get(
    "/allproducte",
 
    getProductController
  );



  //single product

router.get("/get-product/:slug", getSingleProductController);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get photo

router.get("/product-photo/:pid", productPhotoController);
router.delete("/delteed/:pid", deleteProductController);
router.post("/product-filters", productFiltersController);
router.get("/product-conte", productCountController);


router.get("/product-list/:page", productListController);


router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

  export default router