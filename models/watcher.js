module.exports = function(sequelize, DataTypes) {
    var Watcher = sequelize.define("Watcher", {
        eventDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    Watcher.associate = function(models) {
        Watcher.hasOne(models.User);
        Watcher.hasOne(models.Organization);
    };

    return Watcher;
};