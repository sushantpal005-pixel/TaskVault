import express from 'express'
import dotenv from "dotenv"
import userRoute from "./Routes/userRoute.js"
import connectDB from './config/db.js'

dotenv.config({})

connectDB()

const app = express()

const PORT = process.env.PORT || 8080 

app.use(express.json());

app.use("/api/v1/user", userRoute)

console.log("Starting server...");
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`)
})
