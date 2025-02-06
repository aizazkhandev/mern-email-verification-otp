import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "aizazmalak63@gmail.com",
    pass: "axrk hldo eeom kkgr",
  },
});