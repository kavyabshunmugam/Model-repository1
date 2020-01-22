const getStatus = async function (status) {
  [err, status] = await to(Status.findOne({
    where: {
      name: status
    }
  }));
  if (err) TE(err.error.message);
  return status.id;
}
module.exports.getStatus = getStatus;

const getModuleAccessList = async function (customerId, roleId) {
  [err, moduleAccess] = await to(RoleBasedMenu.findAll({
    where: {
      customerId: customerId,
      roleId: roleId
    },
    include: {
      model: MenuItem
    }
  }));
  if (err) TE(err.error.message);
  return moduleAccess;
};
module.exports.getModuleAccessList = getModuleAccessList;