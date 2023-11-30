
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import authrotes from "./Router/Aouthroter.js"
import category from "./Router/CategoryRouter.js"
import producte from "./Router/ProducteRouter.js"


import cors from "cors"
dotenv.config()

// initial express
const app = express();
app.use(express.json())

//datase connection
mongoose.connect(process.env.Mongodb)
.then((re) => {
    console.log("connected")
})

.catch((e) => {
    console.log(e)
})
app.use(cors())
app.use("/" , authrotes)
app.use("/" , category)
app.use("/" , producte)

app.get("/" , (req,res) => {
    res.status(200).json({mssege : "cde"})
})






app.listen(9800 , () => {
    console.log("xaancde")
})