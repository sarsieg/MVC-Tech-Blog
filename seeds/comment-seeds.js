const { Comment } = require('../models');

const commentData = [{
        comment_text: "Just keep pushing!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Maybe talking to a tutor could be helpful!",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "You can do this!",
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: "I have worked so hard for this!",
        user_id: 4,
        post_id: 4
    },
];

// edit more than one record at a him by utilizing bulkCreate
// we will use the above array of objects to seed our database with sample comments
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;