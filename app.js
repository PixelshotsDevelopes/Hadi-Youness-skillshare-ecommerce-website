const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const port = 3000;
const app = express();

app.get('/',(req, res)=>{
    res.send('hello world')
})






app.listen(port, ()=>{
    console.log(`express app server started at port ${port}`);
})