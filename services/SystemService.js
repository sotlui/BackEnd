const { System } = require('../models');

module.exports = {
    insert: (body) => new System(body).save(),
    findAll: () => System.find({ is_active: true }),
    findOneById: (id) => System.findById({ _id: id, is_active: true }),
    updateOne: (system, body) => {
        Object.assign(system, body);
        return system.save();
    },
    deleteOneById: (id) => User.findByIdAndDelete(id),
}