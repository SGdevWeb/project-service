const projectModel = require('../model/projectModel');
const service = require('../service/services');

const create = async (req, res) => {
    try {
        const newProject = await service.project.create({ ...req.body, uuid_user: req.body.user.userId });
        if (newProject.error) throw newProject.error;
        return res.status(201).json({ success: newProject.success });
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    create,
};