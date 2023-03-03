const projectModel = require('../model/projectModel');
const service = require('../service/services');

const create = async (req, res) => {
    try {
        const { date_start, date_end } = req.body;
        if (date_end && new Date(date_end) < new Date(date_start)) 
            throw new Error("Il est important de veiller à ce que la date de début du projet soit antérieure à la date de fin.");
        if (Date.now() < new Date(date_start)) 
            throw new Error("Il est essentiel que la date de début du projet soit antérieure a la date d'aujourd'hui.");
        const newProject = await service.project.create({ ...req.body, uuid_user: req.body.user.userId });
        if (newProject.error) throw newProject.error;
        return res.status(201).json({ success: newProject.success });
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    create,
};