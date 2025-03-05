const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8800
const app = express()
app.use(express.json())
app.use("/api/contacts",require("./requests/contacts"))
app.listen(PORT,()=>{
console.log(`Server is running on ${PORT} port`)
})