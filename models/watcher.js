module.exports = function(sequelize, DataTypes) {
    var Watcher = sequelize.define("Watcher", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        organization: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    // Watcher should belong to a User
    // A Watcher can't be created without a User

    // Watcher.associate = function(models) {
    //     Watcher.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Watcher;
};

// Add to User model:
  // User.associate = function(models) {
  //   // Associating User with Watcher
  //   // When a User is deleted, also delete any associated Watchers
  //   User.hasMany(models.Watchers, {
  //     onDelete: "cascade"
  //   });
  // };