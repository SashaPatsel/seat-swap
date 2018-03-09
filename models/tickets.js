Ticket Id (Primary Auto Increment)
User Id
Subscription Id
Date/time
Seat Section
Seat Row
Seat Number
Ticket Status (Available, Flex, Not Available, Gone)
Source: Subscription, non-subscription

module.exports = function(sequelize, DataTypes) {
  var Tickets = sequelize.define("Tickets", {
    ticketId: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
    userId: DataTypes.INTEGER,
    subId: DataTypes.INTEGER,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    seatSec: DataTypes.INTEGER,
    seatRow: DataTypes.INTEGER,
    seatNum: DataTypes.INTEGER,
    tixStatus: DataTypes.STRING,
    subscription: {type: DataTypes.BOOLEAN, defaultValue: false}
  });
  return Tickets;
};
