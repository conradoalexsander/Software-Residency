const db = require('./db');

const Post = db.sequelize.define('posts', {

    title: {
        type: db.Sequelize.STRING,
        required: true
    },
    content: {
        type: db.Sequelize.TEXT,
        required: true
    }

});

module.exports = Post;

const User = require('./User');
Post.belongsTo(User, {foreignKey: 'user_id', sourceKey: 'id'});

//Post.sync({force: true})