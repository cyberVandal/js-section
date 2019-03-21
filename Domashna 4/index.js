const express = require('express');
const app = express();
const fetch = require('node-fetch');

const port = 3000;


app.set('view engine','ejs');
app.listen(port, ()=>{console.log("RABOTI NA: "+port)});


app.get('/', (req, res) => {
    fetch('https://dog.ceo/api/breed/retriever/golden/images')
    .then(res => res.json())
    .then(json => {
        res.render('index', { dogs: json})
    })
})