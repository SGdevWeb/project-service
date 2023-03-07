const Joi = require('joi');
const schemaValidator = require('../middleware/schemaValidatorMiddleware');

//shema de de verification des donner en entré de la route
const create = (req, res, next) => {
    const joiCreateCollaborators = Joi.object({
        project_uuid : Joi.string().required().min(3).max(50),
        collaborators:  Joi.array(),
      
    });
    schemaValidator(req, joiCreateCollaborators, next);
}

module.exports = {
    create,
}