const express=require('express');
const {PrismaClient}=require('@prisma/client')
const router=express.Router();
const prisma=new PrismaClient();

router.get('/getusers',async (req,res)=>{
     const data=await prisma.Users.findMany();
     res.json(data);
})

router.post('/adduser',async(req,res)=>{
     const data=await prisma.Users.create({
          data: {
               username: req.body.username,
               password: req.body.password
          }
     })
     res.status(200).json({
          message: 'user added successfully'
     })
})

router.post('/validate',async (req,res)=>{
     const details=await prisma.Users.findMany({
          where: {
               username: req.body.username,
               password: req.body.password
          }
     })
     res.status(200).json(details);
})

module.exports=router;