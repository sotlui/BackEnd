const { Menu } = require('../models');

module.exports = {
    insert: (body) => {
        console.log(body);

        return new Menu(body).save()
    },
    findAll: () => Menu.find({ is_active: true }),
    findOneById: (id) => Menu.findById({ _id: id, is_active: true }),
    findOneName: (men_name) => Menu.findOne({ men_name, is_active: true }),
    updateOne: (menu, body) => {
        Object.assign(user, body);
        return menu.save();
    },
    deleteOne: (id) => Menu.findByIdAndDelete(id),
}