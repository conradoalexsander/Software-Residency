const db = require('../models/db');

const Post = require('../models/Post');

module.exports = {

    async index(req, res) {
        const post = await Post.findAll({});

        return res.json(post);
    },

    async indexPosts(req, res) {
        const post = await Post.findAll({
            where: 
                {
                    user_id: req.params.userId,
                }

            });
            
        return res.json(post);
    },


    async show(req, res) {
        const post = await Post.findByPk(req.params.id);
        return res.json(post);
    },


    async store(req, res) {
        const post = await Post.create(req.body);
        return res.json(post);
    },


    async update(req, res) {
        const post = await Post.findByPk(req.params.id);

        await post.update(req.body);

        return res.json(post);
    },


    async delete(req, res) {
        const post = await Post.findByPk(req.params.id);

        await post.destroy();

        return res.send();
    }
}

   // Post.sync({force: true});