import express from 'express'
import dotenv from "dotenv"
import userRoute from "./Routes/userRoute.js"
import todoRoute from "./Routes/todoRoute.js"
import connectDB from './Config/db.js'
import cookieParser from 'cookie-parser'
import cors from "cors"
import path from "path"

dotenv.config({})

connectDB()

const app = express()

const PORT = process.env.PORT || 8080 

const _dirname = path.resolve()

app.use(express.json());
app.use(cookieParser())
app.use(cors({origin:'https://taskvault-q0fl.onrender.com', credentials: true}))

app.use("/api/v1/user", userRoute)
app.use("/api/v1/todo", todoRoute)

app.use(express.static(path.join(_dirname, "/Frontend/dist")))
app.use((_, res) => {
    res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`)
})
