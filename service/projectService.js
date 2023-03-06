const projectModel = require("../model/projectModel");

const { v4: uuidv4 } = require('uuid');
const roleProjectModel = require("../model/roleProjectModel");
const { default: mongoose } = require("mongoose");

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

const get = async (uuid) => {
    try {
        const project = await projectModel.findOne({uuid:uuid});
        if (project == null) throw new Error("Projet introuvable");
        return { success: project };
    } catch (error) {
        return { error };
    }
}

module.exports = {
    create,
    get,
};