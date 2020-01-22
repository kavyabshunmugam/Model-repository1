'use strict';

// Define a model for timesheet table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('timesheet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATEONLY,
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
      tableName: 'timesheet'
    });

  // Adding a class level method.
  Model.associate = function (models) {
    this.employeeId = this.belongsTo(models.employee);
    this.statusId = this.belongsTo(models.status);
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