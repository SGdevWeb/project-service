const Joi = require('joi');
const schemaValidator = require('../middleware/schemaValidatorMiddleware');

//shema de de verification des donner en entré de la route
const create = (req, res, next) => {
    const joiCreateProject = Joi.object({
        name : Joi.string().required().min(3).max(50),
        date_start: Joi.date().required().iso(),
        date_end : Joi.date().iso(),
        description : Joi.string().required().max(255),
        user: Joi.object().required(),
        //type : Joi.string().required().length(32),
    });
    schemaValidator(req, joiCreateProject, next);
}

const get = (req, res, next) => {
    const joiParams = Joi.object({
      uuid: Joi.string().guid({ version: "uuidv4" }).required(),
    });
  
    const { error: paramsError } = joiParams.validate(req.params);
    if (paramsError) {
      return res.status(400).json({ error: paramsError.details[0].message });
    }
    next();
}

module.exports = {
    create,
    get,
}