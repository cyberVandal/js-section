const express = require('express');
const app = express();
const user = require('./helpers/user');
const body = require('body-parser');
const port = 8080;


//Startuvanje na Server i na koja porta ke slusha callBack funkcija 
app.listen(port, () => { console.log("My first login/register app is running on port: " + port)});

// Podesuvanje na view engine da bidne ejs 
app.set("view engine", "ejs");

//Body parser
app.use(body.urlencoded({extended: true}))

//Za da moze css da se vcita
//app.use(express.static(__dirname + '/public'));


var user1 = user.create("1","Goran","goran@gmail.com","123");
var user2 = user.create("2","Blazenka", "blazenka@gmail.com", "456");

var niza = [];

niza.push(user1,user2);



//RUTI

app.get('/proba', (req,res)=>{


    res.render("proba", {knigi: niza});


})

app.get('/register', (req,res)=>{

    res.render("register");


})

app.post('/register', (req,res)=>{




})