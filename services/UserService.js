const { User } = require('../models');
module.exports = {
    insert: (body) => new User(body).save(),
    findAll: () => User.find({ is_active: true }),
    findOneById: (id) => User.findById({ id, is_active: true }),
    findOneByUser: (use_user) => User.findOne({ use_user, is_active: true }),
    updateOne: (user, bory) => {
        Object.assign(user, bory);
        return user.save();
    },
    deleteOneById: (id) => User.deleteOneById(id),
};