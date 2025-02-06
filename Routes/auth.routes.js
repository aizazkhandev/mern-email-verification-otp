import express from "express";
import { register, VerifyEmail } from "../Controllers/auth.controller.js";

const AuthRoutes = express.Router();

AuthRoutes.post('/register', register)
AuthRoutes.post("/verify-email", VerifyEmail);

export default AuthRoutes;
