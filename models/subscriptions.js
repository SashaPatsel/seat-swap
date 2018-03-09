// Subscription Id(Primary Auto Increment)
// User Id
// Subscription Name(friendly handle)
// Org: (SF Operas, SF Giants, Warriors)



module.exports = function(sequelize, DataTypes) {
    var Subscription = sequelize.define("Subscription", {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
        },
        organization: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
                len: [1, 140]
            }
        }
    });
    return Subscription;
};