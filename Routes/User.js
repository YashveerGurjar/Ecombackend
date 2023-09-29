const express=require('express');
const route=express.Router();

route.get('/Home',(req,resp)=>{
    resp.send("Home is here")
});

route.post('/Product',(req,resp)=>{
    const productData=req.body;
    resp.send(productData.name);
});
module.exports=route;