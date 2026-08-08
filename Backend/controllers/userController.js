import { User } from "../Models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body
        if (!fullName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({
                message: "Email already exists",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            fullName,
            email,
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

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            })
        }
        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
            return res.status(400).json({
                message: "Incorrect email or password",
                success: false
            })
        }
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        return res.status(200).cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        }).json({
            message: "Login successful",
            success: true,
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Failed to Login",
            success: false
        })
    }
}