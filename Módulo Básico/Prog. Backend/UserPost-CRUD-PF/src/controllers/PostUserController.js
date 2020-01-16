const db = require('../models/db');

const Post = require('../models/Post');

module.exports = {
    async index(req, res) {
        const postUser = await Post.findAll({
            where: 
                {user_id: req.params.userId
                }
            });
            
        return res.json(postUser);
    },
}