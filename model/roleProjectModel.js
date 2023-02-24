const mongoose = require("mongoose");

//schema de la data des collections
const roleProjectSchema = mongoose.Schema({
    uuid_project: String,
    uuid_user: String,
    owner: Boolean,
    collaborator: Boolean,
});

//nom de la collection  = nom du model+s exemple nom du model : project, nom de la collections : projects
module.exports = mongoose.model("role_project", roleProjectSchema);
