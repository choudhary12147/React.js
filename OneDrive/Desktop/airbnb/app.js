const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
const port = 8080;
 
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';



async function main() {
     await mongoose.connect(MONGO_URL);
}

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

app.listen(port,()=>{
     console.log(`server is listening to ${port}`);
})


app.get("/",(req,res)=>{
    res.send("hi,i am root");
})

