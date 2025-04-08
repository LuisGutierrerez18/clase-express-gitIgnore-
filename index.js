const http = require('http');
const express = require('express');
const app = express();

//Middleware
app.use(request, response, next => {
    console.log('Autenticacion');
    next(); //Le permite a la peticion avanzar hacia el siguiente middleware
}); 

app.use(request, response, next => {
    console.log('Middleware 2');
    express.response
});

const server = http.createServer(request, response => {
    console.log(request.url);
});

app.listen(3000);