module.exports = function(sequelize, DataTypes) {
    var Watcher = sequelize.define("Watcher", {
        eventDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        numberOfSeats: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Watcher.associate = function(models) {

        Watcher.belongsTo(models.Organization);
        Watcher.belongsTo(models.User);
        Watcher.hasMany(models.Match);
    };
    return Watcher;
};