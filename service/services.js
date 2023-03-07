const project = require("./projectService");
const roleProject = require("./roleProjectService");
const comment = require("./commentService")
const collaborators = require("./collaboratorsService")

module.exports = {
    project,
    roleProject,
    comment,
    collaborators,
};