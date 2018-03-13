module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
        date: DataTypes.DATE,
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
    };
    return Ticket;
};