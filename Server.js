const express=require('express');
const app=express();
const signup =require('../Routes/Signup')
const signin =require('../Routes/Signin')

const cors = require('cors');
// const cors = require('cors');

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
    credentials: true // if you need to include credentials (like cookies)
}));

// app.use(cors());


const db=require("../database/Db")

app.use('/new/',signup);
app.use('/signin',signin);

app.get("/",(req,res)=>{
    // console.log(dotenv.mongourl)
    res.send("Server to bn gya successfully")
})

app.listen(3000)