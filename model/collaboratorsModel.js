const mongoose = require("mongoose");

console.log('peticion al modelo collaboratorsModel')

const roleProjectSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    uuid_project: String,
    uuid_user: String,
    owner: Boolean,
    collaborator: Boolean,
});

module.exports = mongoose.model("role_collaborators", roleProjectSchema);