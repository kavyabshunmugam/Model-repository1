'use strict';

// Define a model for statusMapping table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('timesheetSettings', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    days: {
      type: DataTypes.STRING(75),
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
    tableName: 'timesheetSettings'
  });

  // Adding a class level method.
  Model.associate = function (models) {
    this.employeeId = this.belongsTo(models.employee);
  };

  // Adding the instance level methods
  Model.prototype.toWeb = function () {
    // convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};