const projectModel = require("../model/projectModel");

const { v4: uuidv4 } = require("uuid");

const create = async (data) => {
  //recuperation de chaque donnée (traitement qi besoin)
  const { name, date_start, date_end, description } = data;

  //creation d'un object d'instance model user avec les infos que l'on as besoin
  const project = new projectModel({
    uuid: uuidv4(),
    name,
    date_start,
    date_end,
    description,
  });

  try {
    await project.save();
    return { succes: project };
  } catch (error) {
    return error;
  }
};

//1) Update par rapport aux utilisateurs.

const update = async (uuid, data) => {
  try {
    const project = await projectModel.findOne({ uuid });

    if (!project) {
      throw new Error("Project not found");
    }

    project.name = data.name;
    project.date_start = data.date_start;
    project.date_end = data.date_end;
    project.description = data.description;

    await project.save();

    return { success: project };
  } catch (error) {
    return error;
  }
};

module.exports = {
  create,
  update,
};
