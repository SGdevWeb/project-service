const service = require('../service/services');

const create = async (req, res) => {
    const project = await service.project.create(req.body);
    return project.error ?
        res.status(400).json({ error: project.error }) :
        res.status(201).json({ result: project });
}

const update = async (req, res) => {
    const uuid = req.params.uuid;
    const { name, date_start, date_end, description } = req.body;
    const data = { name, date_start, date_end, description };
    try {
      const result = await service.project.update(uuid, data);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  };

module.exports = {
    create,
    update
}