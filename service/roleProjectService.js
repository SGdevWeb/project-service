const roleProjectModel = require("../model/roleProjectModel");
const { v4: uuidv4 } = require('uuid');

const create = async ({ uuid_project, uuid_user, owner, collaborator }) => {
    const newRoleProject = new roleProjectModel({
        uuid: uuidv4(),
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