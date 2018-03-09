// Watcher Id (Primary Auto Increment)
// User Id
// Organization
// Date/Time

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
    return Watcher;
};