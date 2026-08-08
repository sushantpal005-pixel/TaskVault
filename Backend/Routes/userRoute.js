import express from "express"
import { login, register } from "../Controllers/userController.js"

const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(login)

export default router