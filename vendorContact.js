'use strict';

// Define a model for vendorContact table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('vendorContact', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    vendorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contactNumber: {
      type: DataTypes.BIGINT(12),
      allowNull: false
    },
    designation: DataTypes.STRING(50),
    gender: DataTypes.STRING(15),
    isPrimary: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: DataTypes.STRING(50),
    country: DataTypes.STRING(50),
    zipcode: DataTypes.STRING(15),
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
    tableName: 'vendorContact'
  });

  Model.associate = function (models) {
    this.vendorId = this.belongsTo(models.vendor);
  };

  // Adding the instance level methods
  Model.prototype.toWeb = function (pw) {
    // convert to json
    let json = this.toJSON();
    return json;
  };

  return Model;
};