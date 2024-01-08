// console.log('Hi');
const express = require('express');

const app = express(); //by calling this fucntion we set up a server

app.set('view engine','ejs');

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.use(logger); if we want to use it everywhere
// logger can be passed to each route 

// app.get("/",logger,(req,res) => {
//     console.log('Here');
//     res.render('index', {text90 : "world"});
//     //res.download('server.js');
//     //res.status(500).send('Hi');// .json({message : error});
//     // res.sendStatus(500);
//     // res.send('Hi');
// });

const userRouter = require('./routes/users');
app.use('/users', userRouter);

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}

app.listen(3000);