const projectModel = require("../model/projectModel");

const { v4: uuidv4 } = require('uuid');
const roleProjectModel = require("../model/roleProjectModel");

const create = async ({ name, date_start, date_end, description, uuid_user }) => {

    const newProject = new projectModel({
        uuid: uuidv4(),
        name,
        date_start,
        date_end,
        description,
    });

    const newRoleProject = new roleProjectModel({
        uuid_project: newProject.uuid,
        uuid_user,
        owner: true,
        collaborator: false,
    });

    try {
        await newRoleProject.save();
        const project = await newProject.save();
        return { success: project };
    } catch (error) {
        return { error };
    }
};

module.exports = {
    create,
};