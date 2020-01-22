'use strict';

// Define a model for vendor_document_mapping table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('vendorDocumentMapping', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    vendorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    documentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    documentTypeId: {
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
    tableName: 'vendorDocumentMapping'
  });

  // Adding a class level method.
  Model.associate = function (models) {
    this.vendorId = this.belongsTo(models.vendor);
    this.documentId = this.belongsTo(models.document);
    this.documentTypeId = this.belongsTo(models.documentType);
  };

  // Adding the instance level methods
  Model.prototype.toWeb = function () {
    // convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};