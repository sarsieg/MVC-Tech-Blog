const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create comment model
class Comment extends Model {}

Comment.init({
    // sequelize figures out the id as a primary key
    id: {}
})