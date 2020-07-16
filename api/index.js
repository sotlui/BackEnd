const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')

const api = express();
const PORT = process.env.PORT || 5050;

api.use(cors());
api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

api.get('/', (req, res) => res.send('Hello Back End'));

api.use(errors());

module.exports = { api, PORT };