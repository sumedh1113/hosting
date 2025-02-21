const { readBlogs, createBlogs, updateBlogs, deleteBlogs } = require("./blog.controller")

const router = require("express").Router()

router
    .get("/read", readBlogs)
    .post("/create", createBlogs)
    .patch("/update/:bid", updateBlogs)
    .delete("/remove/:bid", deleteBlogs)

module.exports = router