const Joi = require('joi');
const schemaValidator = require('../middleware/schemaValidatorMiddleware');

//shema de de verification des donner en entré de la route
const post = (req, res, next) => {
    const post = Joi.object({
        uuid: Joi.string(),
        comment: Joi.string().required().min(2).max(500),
        uuid_user: Joi.string().required(),
        uuid_project: Joi.string().required(),
        avatar: Joi.string(),
        username: Joi.string()
    });
    schemaValidator(req, post, next);
}

const update = (req, res, next) => {
    const update = Joi.object({
        uuid: Joi.string(),
        comment: Joi.string().required().min(2).max(500),
        uuid_user: Joi.string().required(),
    });
    schemaValidator(req, update, next);
}

module.exports = {
    post,
    update,
}