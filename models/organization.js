module.exports = function(sequelize, DataTypes) {
    var Organization = sequelize.define("Organization", {
        name: {
            type: DataTypes.STRING
        }
    });
    Organization.associate = function(models) {
        Organization.hasMany(models.Ticket);
        Organization.hasMany(models.Subscription);
        Organization.hasMany(models.Teamfeed);
    }
    return Organization;
};