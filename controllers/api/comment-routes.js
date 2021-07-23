const router = require('express').Router();
// import the comment model for our routes
const { Comment } = require('../../models');
// make sure sequelize connection is working
const sequelize = require('../../config/connection');
// users cant post or update comments if they arent logged in
const withAuth = require('../../utils/auth');

// when a post/:id is viewed, make sure to include/display all its realted comments
router.get('/', (req, res) => {
    Comment.findAll({})
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// click a specific comment
router.get('/:id', (req, res) => {
    Comment.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// when a logged in user posts a comment then store the text and post user ids
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        // builes new comment model instance and saves it
        Comment.create({
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                user_id: req.session.user_id,
            })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
});