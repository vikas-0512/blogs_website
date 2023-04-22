const express=require('express');
const app=express();
const cors=require('cors');
app.use(express.json());
app.use(cors());
app.listen(8001);
const userRouter =require('./routers/userrouter');
const blogsRouter=require('./routers/blogrouter');
app.get('/',(req,res,next)=>{
    console.log('request received');
    next();
})
app.use('/users',userRouter);
app.use('/main',blogsRouter);