'use strict';

// Define a model for task table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('task', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    tableName: 'task'
  });

  // Adding a class level method.
  Model.associate = function (models) {
    this.customerId = this.belongsTo(models.customer);
    this.clientTaskMapping = this.hasMany(models.clientTaskMapping);
    this.internalProjectTaskMapping = this.hasMany(models.internalProjectTaskMapping);
    this.timesheetDetails = this.hasMany(models.timesheetDetails);
  };

  // Adding the instance level methods
  Model.prototype.toWeb = function () {
    // convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};