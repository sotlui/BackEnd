const { Modulo } = require('../models');

module.exports = {
    insert: (body) => new Modulo(body).save(),
    findAll: () => Modulo.find({ is_active: true }),
    findOneById: (id) => Modulo.findById({ _id: id, is_active: true }),
    findOneName: (mod_name) => Modulo.findOne({ mod_name, is_active: true }),
    updateOne: (modulo, body) => {
        Object.assign(user, body);
        return modulo.save();
    },
    deleteOne: (id) => Modulo.findByIdAndDelete(id),
}