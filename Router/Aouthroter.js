
import express from "express";
import { forgetpssword, login, registar, test, updateProfileController } from "../Controller/Authcontroller.js"
import { isAdmin, requireSignIn } from "../Helpers/Authmiddlwere.js";


const router  = express.Router()




router.post("/registar",registar)
router.post("/login",login)
router.post("/test",requireSignIn, isAdmin ,test)
router.post("/forgot",requireSignIn,forgetpssword)



// protect router when user is logi i n
router.get("/get",requireSignIn, (req,res) => {
    res.status(200).send({
        ok : true

    })
})

// protect router when admin  is logi i n
router.get("/get/admin",requireSignIn,isAdmin, (req,res) => {
    res.status(200).send({
        ok : true

    })
})


router.put("/profile", requireSignIn, updateProfileController);


export default router