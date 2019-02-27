const express = require('express');
const app = express();
const port = 3000;
const myParser = require('body-parser');
const user = require('./helpers/users');


app.listen(port, ()=>{console.log('RABOTI NA '+port)});


app.set("view engine", "ejs");
app.use(myParser.urlencoded({extended: true}));
//Za css da moze da go ufrlime
app.use(express.static(__dirname + '/public'));


var user1 = new user.create("0","Goran", "goran@gmail.com", "123", ["Zagubeniot simbol", "Kalugerot", "Dijamnatsko Liderstvo"]);
var user2 = new  user.create("1","Kristina", "kristina@gmail.com", "456", ["Arhitekt", "Karloson Leta", "Zoki Poki"]);

var useri = [];

useri.push(user1, user2);


app.get('/home', (req,res)=>{

    res.render("home");


});

app.get('/login', (req,res)=>{

    res.render("login");

});

app.get('/register', (req,res)=>{

    res.render("register");

});

app.post('/login', (req,res)=>{

    var email = req.body.email;
    var pass = req.body.pass;

    
    var flag=false;
    for(let i = 0; i < useri.length; i++){

        if(useri[i].email === email && useri[i].pass === pass){
            flag = true;
            res.render("myProfile", {username: useri[i]});
            break;

        }


    }
    if(!flag){

        res.redirect('/login');
    }

});

app.get('/myBooks', (req,res)=>{

    var i = req.query.id;
    res.render("myBooks", {knigi: useri[i].knigi})

});

app.post('/register', (req,res)=>{

    var username = req.body.username;
    var email = req.body.email;
    var pass = req.body.pass;
    var lista = req.body.lista;
    var knigi=[];
   
    knigi = lista.split(',');

    var flag = false;
    for(let i = 0 ; i < useri.length ; i++) {
        if(useri[i].email === email) {
            res.redirect('/error');
            flag = true;
            break;
        }
    }
    if(!flag) {
        var id = useri.length;
        var newUser = new user.create(id, username, email, pass, knigi);
        useri.push(newUser);
        res.redirect('/login')
    }


});

app.get('/error', (req,res)=>{

    res.render("error");
});



