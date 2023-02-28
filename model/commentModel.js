const mongoose = require("mongoose");
const schema = mongoose.Schema

const commentSchema = schema({
    comment: String,
    uuid_user: String,
    uuid_projet: String
}, {
    timestamps: true
})

module.exports = mongoose.model("comment", commentSchema)