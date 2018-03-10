module.exports = function(sequelize, DataTypes) {
    var Subscription = sequelize.define("Subscription", {
        name: {
            type: DataTypes.STRING
        }
    });

    // Subscription should belong to a User
    // A Subscription can't be created without a User

    Subscription.associate = function(models) {
        Subscription.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Subscription.hasOne(models.Organization);
    };
    return Subscription;
};
