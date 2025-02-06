import mongoose from "mongoose";

const DBConnection = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoBD Connected Successfully :)");
  } catch (error) {
    console.log(":( MongoBD Connection failed..!", error);
  }
};

export default DBConnection;
