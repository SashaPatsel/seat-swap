module.exports = function(sequelize, DataTypes) {
    var Teamfeed = sequelize.define("Teamfeed", {
        comment: {
            type: DataTypes.TEXT
        }
    });
    Teamfeed.associate = function(models) {
        Teamfeed.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

    };
    return Teamfeed;
};