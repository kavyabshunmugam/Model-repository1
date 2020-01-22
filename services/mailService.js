var nodemailer = require("nodemailer");
const sendEmail = async function (mailData) {
  // smtpTransport = nodemailer.createTransport({
  //   host: CONFIG.mail_server,
  //   port: CONFIG.mail_server_port,
  //   secureConnection: true,
  //   auth: {
  //     user: CONFIG.mail_server_username,
  //     pass: CONFIG.mail_server_password,
  //   }
  //   // tls: {
  //   //   rejectUnauthorized: false
  //   // }
  // });
  var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'mazhilstudio@gmail.com',
      pass: 'mazhil123',
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  var mailOptions = {
    // from: "Centizen <info@centizen.net>",
    from: 'Centizen <mazhilstudio@gmail.com>',
    to: mailData.to,
    subject: mailData.subject,
    html: mailData.html,
  };
  if (mailData && mailData.attachments) {
    mailOptions['attachments'] = mailData.attachments;
  }
  [err, response] = await to(smtpTransport.sendMail(mailOptions));
  console.log('error in mail', err);
  if (err) TE(err.message);
  return response;
}
module.exports.sendEmail = sendEmail;