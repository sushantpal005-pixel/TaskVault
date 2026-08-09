import { Todo } from "../Models/todoModel.js"

export const createTodo = async (req, res) => {
    try {
        const {title, description, isCompleted } = req.body 
        if(!title){
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