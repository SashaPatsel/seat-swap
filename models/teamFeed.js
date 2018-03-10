module.exports = function(sequelize, DataTypes) {
    var TeamFeed = sequelize.define("TeamFeed", {
        // commentId: {
        //   type: DataTypes.INT,
        //   allowNull: false,
        //   validate: {
        //     len: [1]
        //   }

        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
            //    references: {
            //   // This is a reference to another model
            //   model: User,

            //   // This is the column name of the referenced model
            //   key: 'id',

            //   // This declares when to check the foreign key constraint. PostgreSQL only.
            //   deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            // }
        },
        organisationId: {
            type: DataTypes.INTEGER,

        },
        text: {
            type: DataTypes.TEXT,

        }
    });
    //   TeamFeed should belong to a User
    // A TeamFeed can't be created without a User

    // TeamFeed.associate = function(models) {
    //     TeamFeed.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return TeamFeed;
};