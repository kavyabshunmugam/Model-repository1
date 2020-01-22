'use strict';

// Define a model for roleBasedMenu table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('roleBasedMenu', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // permissionId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    menuItemId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isPermission: DataTypes.BOOLEAN,
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
    tableName: 'roleBasedMenu'
  });

  // Adding a class level method.
  Model.associate = function (models) {
    this.customerId = this.belongsTo(models.customer);
    // this.permissionId = this.belongsTo(models.permission);
    this.roleId = this.belongsTo(models.role);
    this.menuItemId = this.belongsTo(models.menuItem);
  };

  // Adding the instance level methods
  Model.prototype.toWeb = function () {
    // convert to json data
    let json = this.toJSON();
    return json;
  };

  return Model;
};