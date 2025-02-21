const mongoose = require("mongoose")

module.exports = mongoose.model("blogs", new mongoose.Schema({
    title: { type: String, require: true },
    desc: { type: String, require: true },
    hero: { type: String, require: true },
}))