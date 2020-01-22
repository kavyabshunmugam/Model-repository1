'use strict';

// Define a model for statusMapping table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('statusMapping', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    statusCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    statusId: {
      type: DataTypes.INTEGER,
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
    tableName: 'statusMapping'
  });

  // Adding a class level method.
  Model.associate = function (models) {
    this.statusCategoryId = this.belongsTo(models.statusCategory);
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