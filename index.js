const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
require("dotenv").config()


const app = express()
app.use(express.json())
app.use(cors(
    { origin: "http://localhost:5173", credentials: true }
))
app.use(express.static("dist"))

app.use("/api/blog", require("./blog.route"))
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"))
    // res.status(404).json({ message: "resource not found" })
})
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT, console.log("server running"))
})