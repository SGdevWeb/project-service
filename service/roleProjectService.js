const roleProjectModel = require("../model/roleProjectModel");
const { v4: uuidv4 } = require("uuid");
const { checkPreferences } = require("joi");

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

const isOwner = async (uuid_user, uuid_project) => {
  try {
    const owner = await roleProjectModel.findOne({
      uuid_project: uuid_project,
      uuid_user: uuid_user,
      owner: true,
    });
    console.log(uuid_user, owner);
    return { success: !!owner };
  } catch (error) {
    return { error };
  }
};

module.exports = {
  create,
  isOwner,
};
