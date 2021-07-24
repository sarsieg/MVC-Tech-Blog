const { User } = require('../models');

const userData = [{
        username: 'Sarah',
        password: 'Poohisthebest'
    },
    {
        username: 'Scott',
        password: 'Shiaisthebest'
    },
    {
        username: 'Steven',
        password: 'Sadieisthebest'
    },
    {
        username: 'Stan',
        password: 'Stacyisthebest'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;