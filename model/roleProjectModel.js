const mongoose = require("mongoose");

const roleProjectSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    uuid_project: String,
    uuid_user: String,
    owner: Boolean,
    collaborator: Boolean,
});

module.exports = mongoose.model("role_project", roleProjectSchema);