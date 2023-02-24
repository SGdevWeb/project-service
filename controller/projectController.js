const service = require('../service/services');

const create = async (req, res) => {
    try {
        const newProject = await service.project.create(req.body);
        if (newProject.error) throw project.error;
        const project = newProject.success;

        const newRoleProject = await service.roleProject.create({
            uuid_project: project.uuid,
            uuid_user: req.body.user.userId,
            owner: true,
            collaborator: false
        });
        if (newRoleProject.error) throw newRoleProject.error;
        
        return res.status(201).json({ success: { project, role_project: newRoleProject.success } });
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

module.exports = {
    create,
}