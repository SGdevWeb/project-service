const projectModel = require("../model/projectModel");
const service = require("../service/services");

const create = async (req, res) => {
  try {
    const newProject = await service.project.create({
      ...req.body,
      uuid_user: req.body.user.userId,
    });
    if (newProject.error) throw newProject.error;
    return res.status(201).json({ success: newProject.success });
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  const uuid_project = req.params.uuid;
  const uuid_user = req.body.user.userId;
  const data = req.body;
  try {
    const isOwner = await service.roleProject.isOwner(uuid_user, uuid_project);
    if(isOwner.error) throw isOwner.error;
    if(isOwner.success === false) return res.status(401).json({message : "!owner"});
    const result = await service.project.update(uuid_project, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  create,
  update,
};

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIxaCIsInN1YiI6ImEyZDI3MTM4LTk2NTgtNDQ4Ny1hYjgzLTA4ODI5MWVmMjg0MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjc3NTA1NDcxfQ.a8S1ii-LmSJID7WfuTle9PPfmN6HHS3eGl8hf1ErcGw
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIxaCIsInN1YiI6ImEyZDI3MTM4LTk2NTgtNDQ4Ny1hYjgzLTA4ODI5MWVmMjg0MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjc3NTA1MTcwfQ.CyJGCBrqUjIoRaezLwbchfdXomaxakUncUn0zNWAJ8g
//12af85da-e02e-40c9-a15d-03fc87abde7b
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIxaCIsInN1YiI6ImVkZDUzNDllLTYxNjItNDA0OS1iYWExLTQ4ZWI5NTJkMTRhNyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjc3NTEyNzM4fQ.Grgk8UbM_WuDyGrlIj3ikkKc1osFiOGr0b-_RVHOuoM