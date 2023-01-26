const nodemailer = require("nodemailer");
require("dotenv").config();
const sendEmail = async (subject, message, sent_from) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: "5000",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASS,
    },
  });

  const options = {
    from: sent_from,
    to: "delanoigbinoba@gmail.com",
    subject: subject,
    html: message,
  };

  // Send Email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
