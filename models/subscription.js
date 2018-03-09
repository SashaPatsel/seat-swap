module.exports = function(sequelize, DataTypes) {
    var Subscription = sequelize.define("Subscription", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
        },
        organization: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Subscription should belong to a User
    // A Subscription can't be created without a User

    // Subscription.associate = function(models) {
    //     Subscription.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Subscription;
};

// Add to User model:
  // User.associate = function(models) {
  //   // Associating User with Subscriptions
  //   // When an User is deleted, also delete any associated Subscriptions
  //   User.hasMany(models.Subscription, {
  //     onDelete: "cascade"
  //   });
  // };

