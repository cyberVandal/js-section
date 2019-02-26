const express = require('express');
const app = express();

const port = 8080;


//Startuvanje na Server i na koja porta ke slusha callBack funkcija 
app.listen(port, () => { console.log("My first login/register app is running on port: " + port)});

// Podesuvanje na view engine da bidne ejs 
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get('/home', (req,res)=>{


    res.render("home");


})

app.get('/register', (req,res)=>{

    res.render("register");


})