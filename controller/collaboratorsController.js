const service = require('../service/services');

const create = async (req, res) => {
    // console.log('reqbody',req.body)
    try {
        const { project_uuid, collaborators } = req.body;

        // console.log('controller in', project_uuid, collaborators)

        const promises = collaborators.map(async (uuid_user) => {
            const newCollaborator = await service.collaborators.create({
                uuid_project: project_uuid,
                uuid_user,
                owner: false,
                collaborator: true,
            });
            if (newCollaborator.error) throw newCollaborator.error;
            return newCollaborator.success;
        });

        const createdCollaborators = await Promise.all(promises);
        return res.status(201).json({ success: createdCollaborators });
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    create,
};