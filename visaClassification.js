'use strict';

// Define a model for visaClassification table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('visaClassification', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
    tableName: 'visaClassification'
  });

  Model.associate = function (models) {
    this.customerId = this.belongsTo(models.customer);
    this.h1b = this.hasMany(models.h1b);
    this.lca = this.hasMany(models.lca);
  };

  // Adding the instance level methods
  Model.prototype.toWeb = function (pw) {
    // convert to json
    let json = this.toJSON();
    return json;
  };

  return Model;
};