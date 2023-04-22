const express=require('express');
const {PrismaClient}=require('@prisma/client');
const prisma=new PrismaClient();
const router=express.Router();

router.get('/getblogs/:id',async (req,res)=>{
    const id=parseInt(req.params.id);
    console.log('hello');
    const blogs= await prisma.Blogs.findMany({
        where : {
            userid : id
        }
    })
    res.status(200).json(blogs);
})

router.post('/addblog',async (req,res)=>{
    console.log('in add blog router',req.body);
    await prisma.Blogs.create({
        data: {
            userid: parseInt(req.body.id),
            title: req.body.title,
            body: req.body.body
        }
    })
    res.status(200).json({
        message: "blog added"
    })
})

router.delete('/delblog',async (req,res)=>{
    await prisma.Blogs.delete({
        where : {
            blogid: parseInt(req.body.blogid)
        }
    })
    res.status(200).json({
        message: "deleted successfully"
    })
})
module.exports=router;