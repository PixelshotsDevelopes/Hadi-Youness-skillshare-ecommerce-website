const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require("path");
const port = 3000;
const app = express();

// //setting staticPath and template and partials path using path code module
const staticPath = path.join(__dirname, "../public") //need to change later
const templePath = path.join(__dirname,"views");
const partialPath = path.join(__dirname,"views/partials")

// //MIDDLE_WARE
// //using static files using express.static
// app.use(express.static(staticPath));

// //setting up view engine as ejs
app.set("view engine", "ejs");
app.set("views", templePath);

//register partials we need to require ejs module like require('ejs')

app.get('/',(req, res)=>{
    res.render('home');
})






app.listen(port, ()=>{
    console.log(`express app server started at port ${port}`);
})