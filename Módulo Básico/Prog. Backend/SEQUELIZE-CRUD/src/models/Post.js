const db = require('./db');

const Post = db.sequelize.define('posts', {

    title: {
        type: db.Sequelize.STRING,
        required: true
    },
    content: {
        type: db.Sequelize.TEXT,
        required: true
    }, 
        tableName: 'posts'
 
});

module.exports = Post;

const User = require('./User');
Post.belongsToMany(User, {foreignKey: 'postId', through: 'userPost'});

//Post.sync({force: true})