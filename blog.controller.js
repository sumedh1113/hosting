const Blog = require("./blog")

exports.readBlogs = async (req, res) => {
    const result = await Blog.find()
    res.json({ message: "blog fetch success", result })
}
exports.createBlogs = async (req, res) => {
    await Blog.create(req.body)
    res.status(201).json({ message: "blog create success" })
}
exports.updateBlogs = async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.bid, req.body)
    res.json({ message: "blog update success" })
}
exports.deleteBlogs = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.bid)
    res.json({ message: "blog delete success" })
}