'use strict';

// Define a model for vendor table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('vendor', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    businessName: {
      type: DataTypes.STRING(150),
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
    federalId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fax: DataTypes.STRING,
    website: DataTypes.STRING,
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    },
    addressline1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressline2: DataTypes.STRING,
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: DataTypes.STRING(50),
    country: DataTypes.STRING(50),
    zipcode: DataTypes.STRING(15),
    comments: DataTypes.STRING,
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
    tableName: 'vendor'
  });

  Model.associate = function (models) {
    this.customerId = this.belongsTo(models.customer);
    this.accountsPayable = this.hasMany(models.accountsPayable);
    this.vendorContact = this.hasMany(models.vendorContact);
    this.invoiceLocation = this.hasOne(models.invoiceLocation);
    this.codeMapping = this.hasMany(models.codeMapping);
    this.projectMapping = this.hasMany(models.projectMapping);
    this.placement = this.hasMany(models.placement);
    this.sow = this.hasMany(models.sow);
    this.vendorDocumentMapping = this.hasMany(models.vendorDocumentMapping);
  };

  // Adding the instance level methods
  Model.prototype.toWeb = function (pw) {
    // convert to json
    let json = this.toJSON();
    return json;
  };

  return Model;
};