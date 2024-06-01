import express from 'express'
import { connectDB } from './db/index.js'


const app = express()

const PORT = 8000


app.use(express.json())

connectDB()



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})




