const express=require ('express');
const app=express();
const mongoose =require('mongoose')
const dotenv=require('dotenv');
dotenv.config();
const RouteFile=require('./Routes/User')
app.use(express.json());
app.use('/api/data',RouteFile);

mongoose.connect(process.env.ConUrl)
.then(()=>console.log("connection Successful"))
.catch((err)=>console.log(err));

app.listen(3000,()=>{
console.log("server is working")
});























// const express = require('express');
// const mongoose = require('mongoose');
// const url = 'mongodb+srv://admin:admin1234@cluster0.izehvtc.mongodb.net/Ecom?retryWrites=true&w=majority';

// mongoose.connect(url);

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number
// });

// const main = async () => {
//     const productModel = mongoose.model('products', productSchema);
//     let data = await productModel.insertMany([
//         {
//             name: "I phone 21",
//             price: 1000
//         },
//         {
//             name: "I phone 22",
//             price: 1000
//         }

//     ]);
//     let result =await data.save();
//     console.log(data);

// }

// // main();

// const updatedb = async () => {

//     let productModel = mongoose.model('products', productSchema);
//     let data = await productModel.updateOne(
//         {name: "I phone 21" },
//         {
//             $set: { price: 700 }
//         }

//     )
//     console.log(data);
// }

// // updatedb();


// const finddb = async () => {

//     let productModel = mongoose.model('products', productSchema);
//     let data = await productModel.find()
//     console.log(data);
// }

// finddb();


