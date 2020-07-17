const { ModuloService } = require('../services');

module.exports = {
    insert: async (req, res) => {
        const { mod_name } = req.body;
        try {
            const modExists = await ModuloService.findOneName(mod_name);
            if (modExists) res.status(400).json({ message: 'Modulo already taken' });
            const modulo = await ModuloService.insert(req.body);
            res.status(201).json(modulo);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    findAll: async (req, res) => {
        try {
            const mdulo = await ModuloService.findAll();
            res.status(200).json(modulo);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    findOneById: async (req, res) => {
        try {
            const { id } = req.params;
            const modulo = await ModuloService.findOneById(id);
            res.status(200).json(modulo);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    updateOne: async (req, res) => {
        const { id } = req.body;
        const { body } = req;
        try {
            const modulo = await ModuloService.findOneById(id);
            if (!modulo) res.status(404).json({ message: 'Modulo not found' });
            const updateModulo = await ModuloService.updateOne(modulo, body);
            res.status(200).json(updateModulo);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    deleteOne: async (req, res) => {
        const { id } = req.params;
        try {
            const modulo = await ModuloService.findOneById(id);
            if (!modulo) res.status(404).json({ message: 'Modulo not found' });
            await ModuloService.deleteOneById(id);
            res.status(204).json();
        } catch (error) {
            res.status(400).json(error);
        }
    },
};