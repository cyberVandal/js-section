const http = require('http');
const url = require('url');
const fs = require('fs');

 




 fs.readFile("users.json", "utf-8", (err, data) => {
    if(err) {
        throw err;
    } else {
       var parsedJSON = JSON.parse(data);
       var iminja ="";

       for(let i = 0 ; i < parsedJSON.length; i++) {
           if(parsedJSON[i]) {

               iminja += " "+ parsedJSON[i].name;
               
           }
       }
       // console.log(iminja);

       http.createServer((request, response) => {
        
        if(request.url === "/home") {
           
            response.writeHead(200,"OK");
            response.write(iminja);
            response.end();
        } else {
            response.writeHead(400,"OK");
            response.write("Error");
            response.end();
        }
    
    }).listen(3000);

      
    }
});




     

 
