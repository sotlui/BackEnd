const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuSchema = new Schema({
    is_active: {
        type: Boolean,
        default: true,
    },
    men_name: {
        type: String,
        required: true,
        trim: true,
    },
    men_uri: {
        type: String,
        required: true,
        trim: true,
    },
    men_priority: {
        type: String,
        required: true,
        trim: true,
    },
    men_status: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true, versionKey: false });

const Menu = mongoose.model('Menu', menuSchema, 'Menus');

module.exports = Menu;