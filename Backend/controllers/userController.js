import { User } from "../Models/userModel.js";
import bcrypt from "bcrypt"

export const register = async (req, res) => {
    try {
        const { fullName, username, password} = req.body
        if(!fullName || !username || !password) {
            return res.status(400).json({
                message: "All fields are required",
            })
        }

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({message: "Username already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            fullName, 
            username,
            password: hashedPassword
        })

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            message: "Failed to register",
            success: false
        })
    }
}