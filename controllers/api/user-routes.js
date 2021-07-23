const router = require('express').Router();
// imports user, post, and comment models to use with our routes
const { User, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
            attributes: { exclude: ['[password'] }
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});