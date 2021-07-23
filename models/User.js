const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create user model
class User extends Model {
    // run on instance data to check password
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init({
    id: {
        // use sequelize datatypes object to provide what type of data it is
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // define a password column
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        // validated the length attribute rules set in this model definiton the promse fulfills if validation is successful
        validate: {
            // pw must be >=8 characters
            len: [8]
        }
    }
}, {
    // hooks are callbacks or lifecycle events
    // called before and afters calls in sequelize are executed
    hooks: {
        // arguments to hooks are passed by references, add a default hook to all user models
        async beforeCreate(newUserData) {
            // hook function returns a promise, await make our function wait then reutrn a promise which resolves immediately
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        // always set value on a model before saving
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
    // pass 
})