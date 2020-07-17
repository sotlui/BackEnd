const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            mod_name: Joi.string().required(),
        }),
    }),
    findOneById: celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),
    updateOne: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),

        }),
        [Segments.PARAMS]: Joi.object().keys({
            mod_name: Joi.string(),
        }),
    }),
    deleteOne: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),
};