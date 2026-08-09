import mongoose from "mongoose"
//import { User } from "./userModel.js"

const todoModel = mongoose.Schema({
    title: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
    },
    isCompleted: {
        type: "Boolean",
        default: false,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps: true})

export const Todo = mongoose.model("Todo", todoModel)

