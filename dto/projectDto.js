const Joi = require('joi');
const schemaValidator = require('../middleware/shemaValidatorMiddleware');

//shema de de verification des donner en entré de la route
const create = (req, res, next) => {
    const joiCreateProject = Joi.object({
        name : Joi.string().required().min(3).max(50),
        date_start: Joi.date().required().iso(),
        date_end : Joi.date().iso(),
        description : Joi.string().required().max(255),
        //type : Joi.string().required().length(32),
    });
    schemaValidator(req, joiCreateProject, next);
}

const update = (req, res, next) => {
    const joiUpdateProject = Joi.object({
        uuid : Joi.string().required().length(32), 
        name : Joi.string().required().min(3).max(50),
        date_start: Joi.date().required().iso(),
        date_end : Joi.date().iso(),
        description : Joi.string().required().max(255),
    });
    schemaValidator(req, joiUpdateProject, next);
}

module.exports = {
    create,
    update
}