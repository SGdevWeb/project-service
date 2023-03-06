const service = require("../service/services");

const create = async (req, res) => {
  try {
    const { date_start, date_end } = req.body;
    if (date_end && new Date(date_end) < new Date(date_start))
      throw new Error(
        "Il est important de veiller à ce que la date de début du projet soit antérieure à la date de fin."
      );
    if (Date.now() < new Date(date_start))
      throw new Error(
        "Il est essentiel que la date de début du projet soit antérieure a la date d'aujourd'hui."
      );
    const newProject = await service.project.create({
      ...req.body,
      uuid_user: req.body.user.userId,
    });
    if (newProject.error) throw newProject.error;
    return res.status(201).json({ success: newProject.success });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const update = async (req, res) => {
  const uuid_project = req.params.uuid;
  const uuid_user = req.body.user.userId;
  const data = req.body;
  try {
    const isOwner = await service.roleProject.isOwner(uuid_user, uuid_project);
    if (isOwner.error) throw isOwner.error;
    if (isOwner.success === false)
      return res.status(401).json({ message: "!owner" });
    const result = await service.project.update(uuid_project, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const get = async (req, res) => {
  try {
    const project = await service.project.get(req.params.uuid);
    if (project.error) throw project.error;
    return res.status(201).json({ success: project.success });
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

module.exports = {
  create,
  update,
  get,
};
