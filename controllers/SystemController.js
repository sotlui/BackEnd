const { SystemService } = require('../services');
const System = require('../models/Sistema');
module.exports = {
    insert: async (req, res) => {
        try {
            const system = await SystemService.insert(req.body);
            res.status(201).json(system);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    findAll: async (req, res) => {
        try {
            const system = await SystemService.findAll();
            res.status(201).json(system);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    findOneById: async (req, res) => {
        try {
            const { id } = req.params;
            const system = await SystemService.findOneById(id);
            res.status(201).json(system);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    updateOne: async (req, res) => {
        const { id } = req.params;
        const { body } = req.body;
        try {
            const system = await SystemService.findOneById(id);
            if (!system) res.status(400).json({ message: 'System no found' });
            const updateSystem = await SystemService.updateOne(system, body);
            res.status(201).json(system);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    deleteOne: async (req, res) => {
        const { id } = req.params;
        try {
            const systemExists = await SystemService.findOneById(id);
            if (systemExists) res.status(400).json({ message: 'System not found' });
            await SystemService.deleteOneById(id);
            res.status(204).json();
        } catch (error) {
            res.status(400).json(error);
        }
    }
}