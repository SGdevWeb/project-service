const collaboratorsModel = require("../model/roleProjectModel");

const { v4: uuidv4 } = require('uuid');

const { default: mongoose } = require("mongoose");

const create = async ({ uuid_project, uuid_user, owner, collaborator}) => {

    // console.log('service:', uuid_project, uuid_user, owner, collaborator)
    try {
    const newRole = new collaboratorsModel({
      _id: mongoose.Types.ObjectId(),
        uuid: uuidv4(),
        uuid_project,
        uuid_user,
        owner,
        collaborator,
    });



    const project = await newRole.save();
    return { success: project };
  } catch (error) {
    console.log("Error al guardar nuevo colaborador:", error);
    return { error };
  }
};

module.exports = {
    create,
};