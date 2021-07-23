// import our 3 models created in other files
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// creates a 1:m association between user and posts
// combines one user to muliple posts and adds a foreign key to target and mulitple association mixins to the source
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// associations where the foreign key for the 1:1 relation exists on the source model
Post.belongsTo(User, {
    // allows us to set source model key 
    // adds foreign key
    // target key for belongsto relation will be the target model primary key
    foreignKey: 'user_id',
    onDelete: "cascade"
});

// adds a foreign key and singular association mixins to the source
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
})
module.exports = { User, Post, Comment };