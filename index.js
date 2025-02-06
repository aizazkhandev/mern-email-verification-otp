import express from "express";
import dotenv from "dotenv";
import DBConnection from "./Libs/db.js";
import AuthRoutes from "./Routes/auth.routes.js";
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
DBConnection();

// Routes
app.use("/auth", AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
