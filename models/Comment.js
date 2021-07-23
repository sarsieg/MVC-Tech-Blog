const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create comment model
class Comment extends Model {}

Comment.init({
    // sequelize figures out the id as a primary key
    id: {
        // set our value types
        type: DataTypes.INTEGER,
        primaryKey: true,
        // make column auto increment
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        validate: {
            len: [3]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});
module.exports = Comment;