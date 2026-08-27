import mongoose from "mongoose"
import { Todo } from "../Models/todoModel.js"

export const createTodo = async (req, res) => {
    try {
        const { title, description, isCompleted } = req.body
        if (!title) {
            return res.status(400).json({
                message: "Title is required",
                success: false
            })
        }

        const todo = await Todo.create({
            title,
            description,
            isCompleted,
            userId: req.user._id
        })

        return res.status(201).json({
            message: "Todo created successfully",
            success: true,
            todo
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Failed to create todo",
            success: false
        })
    }
}

export const getTodo = async (req, res) => {
    try {
        const userId = req.user._id
        const todos = await Todo.find({ userId })

        if (!todos || todos.length === 0) {
            return res.status(404).json({
                message: "No Todos Found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Todo fetched successfully",
            success: true,
            todos
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Failed to get Todos",
            success: false
        })
    }
}

export const getTodoById = async (req, res) => {
    try {
        const todoId = req.params.id
        if (!todoId) {
            return res.status(400).json({
                message: "Todo id is required",
                success: false
            })
        }

        if (!mongoose.isValidObjectId(todoId)) {
            return res.status(400).json({
                message: "Invalid Todo ID",
                success: false
            });
        }
        
        const todo = await Todo.findById(todoId)

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found",
                success: false
            })
        }

        if (todo.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "You are not authorized to access this todo",
                success: false
            })
        }

        return res.status(200).json({
            message: "Todo fetched successfully",
            success: true,
            todo
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Failed to get todo",
            success: false
        })
    }
}

export const updateTodo = async (req, res) => {
    try {
        const { title, description, isCompleted } = req.body
        if (!title || isCompleted === undefined) {
            return res.status(400).json({
                message: "Everything is required",
                success: false
            })
        }

        const todoId = req.params.id
        if (!todoId) {
            return res.status(400).json({
                message: "Todo id is requird",
                success: false
            })
        }

        if (!mongoose.isValidObjectId(todoId)) {
            return res.status(400).json({
                message: "Invalid Todo ID",
                success: false
            });
        }

        const todo = await Todo.findById(todoId)
        if (!todo) {
            return res.status(404).json({
                message: "Todo not found",
                success: false
            })
        }

        if (todo.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "You are not authorized to access this todo",
                success: false
            })
        }

        const updatedTodo = await Todo.findByIdAndUpdate(todoId, { title, description, isCompleted }, { new: true })

        return res.status(200).json({
            message: "Todo updated successfully",
            success: true,
            updatedTodo
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Failed to update Todo",
            success: false
        })
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        if (!todoId) {
            return res.status(400).json({
                message: "Todo id is required",
                success: false
            })
        }

        if (!mongoose.isValidObjectId(todoId)) {
            return res.status(400).json({
                message: "Invalid Todo ID",
                success: false
            });
        }

        const todo = await Todo.findById(todoId)
        if (!todo) {
            return res.status(404).json({
                message: "Todo not Found",
                success: false
            })
        }

        if (todo.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "You are not authorized to access this todo",
                success: false
            })
        }

        await Todo.findByIdAndDelete(todoId)
        return res.status(200).json({
            message: "Todo Deleted successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Failed to Delete Todo",
            success: false
        })
    }
}
