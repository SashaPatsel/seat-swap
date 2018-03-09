

module.exports = function(sequelize, DataTypes) {
  var Tickets = sequelize.define("Tickets", {
    ticketId: { 
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true 
    },
    userId: DataTypes.INTEGER,
    subId: DataTypes.INTEGER,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    org: DataTypes.STRING,
    seatSec: DataTypes.INTEGER,
    seatRow: DataTypes.STRING,
    seatNum: DataTypes.INTEGER,
    tixStatus: DataTypes.STRING,
    subscription: {type: DataTypes.BOOLEAN, defaultValue: false}
  });
  return Tickets;
};
