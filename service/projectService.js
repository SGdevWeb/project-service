const projectModel = require("../model/projectModel");

const { v4: uuidv4 } = require('uuid');

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
        return { "succes": project }
    } catch (error) {
        return error;
    }
};

module.exports = {
    create,
}