// A match is a single seat match.  If a user is looking
// for 2 seats, she has 2 watchers.
module.exports = function(sequelize, DataTypes) {
    var Match = sequelize.define("Match", {});
    Match.associate = function(models) {
        Match.belongsTo(models.Watcher);
        Match.belongsTo(models.Ticket);
    };
    return Match;
};