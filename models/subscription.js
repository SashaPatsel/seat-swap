module.exports = function(sequelize, DataTypes) {
    var Subscription = sequelize.define("Subscription", {
        name: {
            type: DataTypes.STRING
        }
    });
    Subscription.associate = function(models) {
        Subscription.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Subscription.hasMany(models.Ticket);
    };
    return Subscription;
};