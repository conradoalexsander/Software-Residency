const db = require('../models/db');

const User = require('../models/User');

module.exports = {
    //LISTAGEM GERAL E POR ID (USERS)

    async index(req, res) {
        const user = await User.findAll({});
        return res.json(user);
    },

    async show(req, res) {
        const user = await User.findByPk(req.params.id);
        return res.json(user);
    },

    async store(req, res) {
        const user = await User.create(req.body);
        return res.json(user);
    },


    async update(req, res) {
        const user = await User.findByPk(req.params.id);

        await user.update(req.body);

        return res.json(user);
    },


    async delete(req, res) {
        const user = await User.findByPk(req.params.id);

        await user.destroy();

        return res.send();
    }

}