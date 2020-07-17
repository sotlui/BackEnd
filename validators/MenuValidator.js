const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            men_name: Joi.string().required(),
            men_uri: Joi.string().required(),
            men_priority: Joi.string().required(),
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
            men_name: Joi.string().required(),
            men_uri: Joi.string().required(),
            men_priority: Joi.string().required(),
        }),
    }),
    deleteOne: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),

};