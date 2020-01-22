const validator = require('validator');
var crypto = require("crypto");
const template = require('../constants/template');
/**
 * Async function to checking the email and password for login.
 * If email and password is match then return the user.
 * @param userAccountInfo //containes the email and password
 */
const authUser = async function (userAccountInfo) {
  let emailId = userAccountInfo.email;
  let user;
  //Check the given email is valid email
  if (validator.isEmail(emailId)) {

    //findOne method to find the user for the given email id.
    [err, user] = await to(Employee.findOne({
      where: { email: emailId, isActive: 1 },
      attributes: { exclude: ['dateOfBirth', 'dateOfJoin', 'gender', 'maritalStatus', 'resetPasswordExpires', 'resetPasswordToken', 'created', 'modified'] },
      include: {
        model: Role,
        attributes: ['id', 'name']
      },
      include: {
        model: Customer,
        include: [{
          model: CustomerSubscription,
          attributes: ['customerId', 'expiryDate']
        }]
      }
    }));
    if (err) TE(err.message);

  } else {
    TE(ERROR.invalid_email);
  }
  if (!user) TE(ERROR.invalid_credentials);

  //For comparing the given password to the user instance
  [err, user] = await to(user.comparePassword(userAccountInfo.password));

  if (err) TE(err.message);

  return user;
}
module.exports.authUser = authUser;

const userCredential = async function (userData) {
  let userInfo = userData;
  let err, user;
  let token, credentialLink, mailOption;
  token = crypto.randomBytes(20).toString('hex');
  if (validator.isEmail(userInfo.email)) {
    [err, user] = await to(Employee.findOne({
      where: { email: userInfo.email }
    }));
    if (err) TE(err.error.message);
  } else {
    TE(ERROR.invalid_email);
  }
  if (user) {
    [err, emailUpdate] = await to(Employee.update({
      resetPasswordToken: token,
      resetPasswordExpires: Date.now() + 86400000
    },
      {
        where: {
          email: userInfo.email
        }
      }));
    if (err) TE(err.error.message);
    if (emailUpdate) {
      mailOption = {
        to: userInfo.email,
        subject: userInfo.type === 'Activation' ? 'Create your account' : 'Reset your password',
        html: userInfo.type === 'Activation' ? eval('`' + template.invitation + '`') : eval('`' + template.forgotPassword + '`')
      };
      [err, credentialLink] = await to(mailService.sendEmail(mailOption));
      if (err) TE(err.message);
      if (credentialLink) {
        return credentialLink;
      }
    }
  } else {
    TE(ERROR.user_not_found);
  }
}
module.exports.userCredential = userCredential;