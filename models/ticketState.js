module.exports = function(sequelize, DataTypes) {
    var TicketState = sequelize.define("TicketState", {
        states: {
            type: DataTypes.STRING
            // values: ['active', 'flex', 'locked', "gone"]
        }
    });
    return TicketState;
};