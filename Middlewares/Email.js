import { Verification_Email_Template, Welcome_Email_Template } from "../Libs/EmailTemplate.js";
import { transporter } from "./Email.config.js";

export const SendVerificationCode = async (email, verificationCode) => {
  try {
    const response = await transporter.sendMail({
      from: '"Aizaz Khan Full stack developer... 👻" <aizazmalak63@gmail.com>',
      to: email,
      subject: "Verify your Email",
      text: "Verify your Email",
      html: Verification_Email_Template.replace(
        "{verificationCode}",
        verificationCode
      ),
    });
    console.log("Email send Successfully.", response);
  } catch (error) {
    console.log("Error occurred.", error);
  }
};


export const WelcomeEmail = async (email, name) => {
  try {
    const response = await transporter.sendMail({
      from: '"Aizaz Khan Full stack developer... 👻" <aizazmalak63@gmail.com>',
      to: email,
      subject: "Verify your Email",
      text: "Verify your Email",
      html: Welcome_Email_Template.replace("{name}", name),
    });
    console.log("Email send Successfully.", response);
  } catch (error) {
    console.log("Error occurred.", error);
  }
};