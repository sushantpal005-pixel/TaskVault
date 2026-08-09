import express from "express"
import { isAuthenticated } from "../Middlewares/isAuthenticated.js"
import { createTodo } from "../Controllers/todoController.js"


const router = express.Router()

router.route("/create").post(isAuthenticated, createTodo)

export default router