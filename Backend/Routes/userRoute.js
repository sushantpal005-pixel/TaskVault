import express from "express"
import { getProfile, login, logout, register } from "../Controllers/userController.js"
import { isAuthenticated } from "../Middlewares/isAuthenticated.js"

const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/getProfile").get(isAuthenticated, getProfile)

export default router