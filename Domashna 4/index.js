const express = require('express');
const app = express();
const fetch = require('node-fetch');

const port = 3000;


app.set('view-engine','ejs');
app.listen(port, ()=>{console.log("RABOTI NA: "+port)});
