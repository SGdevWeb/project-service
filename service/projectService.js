const projectModel = require("../model/projectModel");

const { v4: uuidv4 } = require('uuid');
const { roleProject } = require("./services");
const roleProjectModel = require("../model/roleProjectModel");
const { mongo, default: mongoose } = require("mongoose");

const create = async ({ name, date_start, date_end, description, uuid_user }) => {

    const objectIdRoleProject = new mongoose.Types.ObjectId();

    const newProject = new projectModel({
        uuid: uuidv4(),
        name,
        date_start,
        date_end,
        description,
        users: [objectIdRoleProject],
    });

    const newRoleProject = new roleProjectModel({
        _id: objectIdRoleProject,
        uuid_project: newProject._id,
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