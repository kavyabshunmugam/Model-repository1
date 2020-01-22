'use strict';

// Define a model for subscription table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('subscription', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    monthly: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    yearly: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    modified: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    tableName: 'subscription'
  });

  // Adding a class level method.
  Model.associate = function (models) {
    this.customerSubscription = this.hasMany(models.customerSubscription);
  };

  // Adding the instance level methods
  Model.prototype.toWeb = function () {
    // convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};