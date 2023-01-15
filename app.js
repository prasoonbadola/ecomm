const express =  require('express');

const app = express()

const router = express.Router();

const mongoose = require('mongoose');
const serverless = require('serverless-http');

mongoose.connect("mongodb+srv://prasoon:8561847387@cluster0.5huiky8.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>{
    console.log('DB connected..')
});


router.get('/',(req,res)=>{
    res.send("kdasd");
})

app.use('/.netlify/functions/app',router)


app.listen(3000,()=>{
    console.log("Sevrer is up and running on 3000");
});

module.exports.handler = serverless(app);