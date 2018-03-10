module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        userName: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        authMethod: {
            type: DataTypes.STRING
        },
        socialID: {
            type: DataTypes.STRING
        }
    });

    return User;
};


// Users (subscribers)
// User Id (Primary Auto Increment)
// Password
// Username (Unique)
// Email address
// First Name
// Last Name
// Auth Method (?)
// Twitter Handle
// Facebook Handle
// Google Handle