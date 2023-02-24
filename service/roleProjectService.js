const roleProjectModel = require("../model/roleProjectModel");

const create = async ({ uuid_project, uuid_user, owner, collaborator }) => {
    const newRoleProject = new roleProjectModel({
        uuid_project,
        uuid_user,
        owner,
        collaborator,
    });

    try {
        const roleProject = await newRoleProject.save();
        return { success: roleProject };
    } catch (error) {
        return { error };
    }
};

module.exports = {
    create,
}