import mongoose from "mongoose"
import { User } from "./userModel"

const todoModel = mongoose.Schema({
    title: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
        required: true
    },
    isCompleted: {
        type: "Boolean",
        default: false,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true})

export const Todo = mongoose.model("Todo", todoModel)

