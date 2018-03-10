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
    User.associate = function(models) {
        User.hasMany(models.Watcher);
        User.hasMany(models.Teamfeed);
        User.hasMany(models.Subscription);
        User.hasMany(models.Ticket);
    };
    return User;
};