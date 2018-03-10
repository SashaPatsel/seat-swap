module.exports = function(sequelize, DataTypes) {
    var Ticket = sequelize.define("Ticket", {
        subId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        seatSec: DataTypes.INTEGER,
        seatRow: DataTypes.STRING,
        seatNum: DataTypes.INTEGER,
        subscription: { type: DataTypes.BOOLEAN, defaultValue: false }
    });
    Ticket.associate = function(models) {
        Ticket.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Ticket.hasOne(models.TicketState);

    };
    return Ticket;
};