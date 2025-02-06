import { SendVerificationCode, WelcomeEmail } from "../Middlewares/Email.js";
import UserModel from "../Models/user.model.js";
import bcryptjs from "bcryptjs";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if ((!name, !email, !password)) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all fields" });
    }

    const ExistUser = await UserModel.findOne({ email });
    if (ExistUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    const hashedPassword = await bcryptjs.hashSync(password, 10);
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
      verificationCode,
    });
    await user.save();
    SendVerificationCode(user.email, verificationCode);
    return res
      .status(200)
      .json({ success: true, message: "User Register Successfully" });
  } catch (error) {
    console.log("Error: ", error);
  }
};

const VerifyEmail = async (req, res) => {
  try {
    const { code } = req.body;
    const user = await UserModel.findOne({
      verificationCode: code,
    });
    if (!user) {
      return res
       .status(400)
       .json({ success: false, message: "Invalid Verification Code" });
    }
    user.isVerified = true;
    user.verificationCode = undefined;
    await user.save();
    await WelcomeEmail(user.email, user.name);
    return res
     .status(200)
     
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export { register, VerifyEmail };
