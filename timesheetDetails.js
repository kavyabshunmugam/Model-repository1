'use strict';

// Define a model for timesheetDetails table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('timesheetDetails', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    timesheetId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    placementId: DataTypes.INTEGER,
    sowId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER,
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: false
    },
    reason: DataTypes.STRING,
    description: DataTypes.STRING,
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    isInvoice: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
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
      tableName: 'timesheetDetails'
    });

  // Adding a class level method.
  Model.associate = function (models) {
    this.timesheetId = this.belongsTo(models.timesheet);
    this.placementId = this.belongsTo(models.placement);
    this.projectId = this.belongsTo(models.project);
    this.sowId = this.belongsTo(models.sow);
    this.taskId = this.belongsTo(models.task);
    this.statusId = this.belongsTo(models.status);
  };

  // Adding the instance level methods
  Model.prototype.toWeb = function () {
    // convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};