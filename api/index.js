import express from "express";
import mongoose from "mongoose";
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

mongoose
  .connect(
    "mongodb+srv://miraj:miraj12345678@cluster0.l9x2t.mongodb.net/"
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((e) => console.log(e));

const app = express();
app.use(express.json())


app.listen(3000, () => {
  console.log("Server is running on port 3000 ");
});



app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)



// middleware 
app.use((err,req,res,nex) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})