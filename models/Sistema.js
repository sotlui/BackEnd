const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const { Schema } = mongoose;

const systemSchema = new Schema({
    is_active: {
        type: Boolean,
        default: true,
    },
    sys_name: {
        type: String,
        required: true,
        trim: true,
    },
     permissions: {
        type: String,
        enum: ['PUBLIC', 'PRIVATE'],
        default: 'PUBLIC',
    }, 
}, { timestamps: true, versionKey: false });

const System = mongoose.model('System', systemSchema, 'Systems');

module.exports = { System, systemSchema };