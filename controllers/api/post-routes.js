// import the express router object
const router = require('express').Router();
// include required objects for these routes
const { Post, User, Comment } = require('../../models');
// import sequelize connection to the database
const sequelize = require('../../config/connection');
// import loggedIn authenticator 
const withAuth = require('../../utils/auth');

// when post is added find all its content and post it in reverse
router.get('/', (req, res) => {
    console.log('================');
    Post.findAll({
            attributes: ['id',
                'title',
                'content',
                'created_at'
            ],
            order: [
                ['created_at', 'DESC']
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(dbPostData => res.json(dbPostData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});