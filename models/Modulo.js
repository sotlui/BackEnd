const mongoose = require('mongoose');

const { Schema } = mongoose;

const moduloSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  mod_name: {
    type: String,
    required: true,
    trim: true,
  },
  mod_status: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true, versionKey: false });

const Modulo = mongoose.model('Modulo', moduloSchema, 'Modulos');

module.exports = Modulo;
