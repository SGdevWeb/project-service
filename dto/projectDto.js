const Joi = require('joi');
const schemaValidator = require('../middleware/shemaValidatorMiddleware');

//shema de de verification des donner en entré de la route
module.exports.create = (req, res, next) => {
    const joiCreateProject = Joi.object({
        name : Joi.string().required().min(3).max(50),
        date_start: Joi.date().iso(),
        date_end : Joi.date().iso(),
        description : Joi.string().required().max(255),
    });
    schemaValidator(req, joiCreateProject, next);
}