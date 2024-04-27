/*
code by Aditya Gupta
For Contact Mail me on => ad1123itya@gmail.com
Find me on instagram _its._.aadi
*/

const express = require('express');
const app = express();
const path = require('path');

const usermodel = require('./models/user');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');





app.get('/', async function (req, res) {
    let task = await usermodel.find();
    res.render('index', {task});
});

app.get('/delete/:id', async function (req, res) {
    let task = await usermodel.findOneAndDelete({_id: req.params.id});
    res.redirect('/');
});
app.get('/edit/:id', async function (req, res) {
    let task = await usermodel.findOne({_id: req.params.id});
    res.render('edit', {task});
});

app.post('/update/:id', async function (req, res) {
    let {task, discription} = req.body;
    let updatetask = await usermodel.findOneAndUpdate({_id: req.params.id}, {task, discription});
    res.redirect('/');
});


app.post('/create', async function (req, res) {
    let {task, discription} = req.body;
    let createtask = await usermodel.create({
        task,
        discription
    });
    res.redirect("/");
});




app.listen(3000, function () {
    console.log('now its running');
});