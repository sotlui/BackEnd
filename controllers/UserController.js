const { UserService } = require('../services');
module.exports = {
    insert: async (req, res) => {
        const { use_user } = req.body;
        try {
            const userExists = await UserService.findOneByUser(use_user);
            if (userExists) res.status(400).json({ message: 'User already taken' });
            const user = await UserService.insert(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    findAll: async (req, res) => {
        try {
            const user = await UserService.findAll();
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    findOneById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UserService.findOneById(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    updateOne: async (req, res) => {
        const { id } = req.params;
        const { body } = req.body;
        try {
            const user = await UserService.findOneById(id);
            if (!user) res.status(400).json({ message: 'User not found' });
            const updateUser = await UserService.updateOne(user, body)
            res.status(200).json(updateUser);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    deleteOne: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await UserService.findOneById(id);
            if (!user) res.status(404).json({ message: 'User not found' });
            await UserService.deleteOneById(id);
            res.status(204).json();
        } catch (error) {
            res.status(400).json(error);
        }
    }
}