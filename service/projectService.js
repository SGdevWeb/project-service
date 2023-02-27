const projectModel = require("../model/projectModel");

const { v4: uuidv4 } = require("uuid");
const roleProjectModel = require("../model/roleProjectModel");
const { default: mongoose } = require("mongoose");

const create = async ({
  name,
  date_start,
  date_end,
  description,
  uuid_user,
}) => {
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

const update = async (uuid, data) => {
  try {
    const project = await projectModel.findOne({ uuid });
    if (!project) {
      throw new Error("Project not found");
    }

    project.name = data.name || project.name;
    project.date_start = data.date_start || project.date_start;
    project.date_end = data.date_end || project.date_end;
    project.description = data.description || project.description;

    const roleProject = await roleProjectModel.findOne({
      uuid_project: project.uuid,
    });

    if (!roleProject) {
      throw new Error("RoleProject not found");
    }
    roleProject.owner = data.owner || roleProject.owner;
    roleProject.collaborator = data.collaborator || roleProject.collaborator;

    await project.save();
    await roleProject.save();
    return { success: project };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  create,
  update,
};
