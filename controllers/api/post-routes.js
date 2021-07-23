// import the express router object
const router = require('express').Router();
// include required objects for these routes
const { Post, User, Comment } = require('../../models');
// import sequelize connection to the database
const sequelize = require('../../config/connection');
// import loggedIn authenticator 
const withAuth = require('../../utils/auth');