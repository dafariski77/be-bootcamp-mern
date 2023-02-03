const nodemailer = require("nodemailer");
const { gmail, password } = require("../../config");
const Mustache = require("mustache");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: gmail,
    pass: password,
  },
});

const otpMail = async (email, data) => {
  try {
    let template = fs.readFileSync("app/views/email/otp.html", "utf-8");

    let message = {
      from: gmail,
      to: email,
      subject: "Your OTP",
      html: Mustache.render(template, data),
    };

    return await transporter.sendMail(message);
  } catch (err) {
    console.log(err);
  }
};

const invoiceMail = async (email, data) => {
  try {
    let template = fs.readFileSync("app/views/email/otp.html", "utf-8");

    let message = {
      from: gmail,
      to: email,
      subject: "Invoice Voucher",
      html: Mustache.render(template, data),
    };

    return await transporter.sendMail(message);
  } catch (err) {
    console.log(err);
  }
};


module.exports = { otpMail, invoiceMail };
