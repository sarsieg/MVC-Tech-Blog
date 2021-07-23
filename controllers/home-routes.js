// imports our connections
const sequelize = require('../config/connection');
// imports our 3 model object files
const { Post, User, Comment } = require('../models');
// imports express' router object
const router = require('express').Router();

router.get('/', async(req, res) => {
    try {
        await res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

// on homepage find all posts
router.get('/', (req, res) => {
    // read the whole table form the db with the findAll method
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })

})