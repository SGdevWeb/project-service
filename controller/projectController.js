const service = require('../service/services');

const create = async (req, res) => {
    const project = await service.project.create(req.body);
    return project.error ?
        res.status(400).json({ error: project.error }) :
        res.status(201).json({ result: project });
}

module.exports = {
    create,
}