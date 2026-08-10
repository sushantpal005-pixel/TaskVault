import express from "express"
import { isAuthenticated } from "../Middlewares/isAuthenticated.js"
import { createTodo, deleteTodo, getTodo, getTodoById, updateTodo } from "../Controllers/todoController.js"


const router = express.Router()

router.route("/create").post(isAuthenticated, createTodo)
router.route("/getTodos").get(isAuthenticated, getTodo)
router.route("/getTodo/:id").get(isAuthenticated, getTodoById)
router.route("/update/:id").put(isAuthenticated, updateTodo)
router.route("/delete/:id").delete(isAuthenticated, deleteTodo)

export default router