module.exports = function(sequelize, DataTypes) {
  var teamFeed = sequelize.define("teamFeed", {
    // commentId: {
    //   type: DataTypes.INT,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    },
    userId: {
      type: DataTypes.INT,
      allowNull: false,
      references: {
     // This is a reference to another model
     model: Users,

     // This is the column name of the referenced model
     key: 'id',

     // This declares when to check the foreign key constraint. PostgreSQL only.
     deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
   }
    },
    organisationId: {
      type: DataTypes.INT,
      
    }
    text: {
      type: DataTypes.TEXT,
      
    }
  });
  return teamFeed;
};
