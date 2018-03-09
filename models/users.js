module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
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

    // User.associate = function(models) {
    //     User.hasMany(models.Subscription);
    // };

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