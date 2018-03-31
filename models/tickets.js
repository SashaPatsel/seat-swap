module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        seatSec: DataTypes.INTEGER,
        seatRow: DataTypes.STRING,
        seatNum: DataTypes.INTEGER,
        eventTitle: DataTypes.STRING,
        status: {
            type: DataTypes.ENUM('available', 'flexible', "locked", "gone"),
            
        },
        subscription: { 
            type: DataTypes.BOOLEAN, defaultValue: false 
        }
    });
    Ticket.associate = function(models) {
        Ticket.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Ticket.belongsTo(models.Subscription);
        Ticket.belongsTo(models.Organization);
        Ticket.hasMany(models.Match);        
    };
    return Ticket;
};