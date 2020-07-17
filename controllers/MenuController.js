const { MenuService } = require('../services');

module.exports = {
    insert: async (req, res) => {
        const { men_name } = req.body;       
        try {
            const menExists = await MenuService.findOneName(men_name);
            if (menExists) res.status(400).json({ message: 'Menu already taken' });
            const menu = await MenuService.insert(req.body);
            res.status(201).json(menu);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    findAll: async (req, res) => {
        try {
            const menu = await MenuService.findAll();
            res.status(200).json(menu);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    findOneById: async (req, res) => {
        try {
            const { id } = req.params;
            const menu = await MenuService.findOneById(id);
            res.status(200).json(menu);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    updateOne: async (req, res) => {
        const { id } = req.body;
        const { body } = req;
        try {
            const menu = await MenuService.findOneById(id);
            if (!menu) res.status(404).json({ message: 'Menu not found' });
            const updateMenu = await MenuService.updateOne(menu, body);
            res.status(200).json(updateMenu);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    deleteOne: async (req, res) => {
        const { id } = req.params;
        try {
            const menu = await MenuService.findOneById(id);
            if (!menu) res.status(404).json({ message: 'Menu not found' });
            await MenuService.deleteOneById(id);
            res.status(204).json();
        } catch (error) {
            res.status(400).json(error);
        }
    },
};
