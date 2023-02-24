const projectModel = require("../model/projectModel");

const { v4: uuidv4 } = require('uuid');

const create = async ({ name, date_start, date_end, description }) => {
    const newProject = new projectModel({
        uuid: uuidv4(),
        name,
        date_start,
        date_end,
        description,
    });

    try {
        const project = await newProject.save();
        return { success: project };
    } catch (error) {
        return { error };
    }
};

module.exports = {
    create,
}