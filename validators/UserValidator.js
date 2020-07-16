const { celebrate, Join, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            use_user: Joi.string().required(),
            use_password: Joi.string().required(),
        }),
    }),

    findOneId: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),

    updateOne: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),

        }),
        [Segments.PARAMS]: Joi.object().keys({
            use_name: Joi.string(),
            use_password: Joi.string(),
        }),
    }),

    deleteOne: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),
};