// const { fstat } = require('fs');
// const os = require('os');
// var directorio = os.homedir();  
// var release = os.release();
// var memoria_libre  = os.freemem();
// console.log(memoria_libre);





// const fs =  require('fs');
// fs.writeFile('./texto.txt', 'linea uno', function(err)
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log('archivo creado');
// });
// console.log('ultima linea de codigo');


// const fs =  require('fs');
// fs.readFile('./texto.txt', function(err, data){
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log(data.toString());
// });




// const http = require('http');
// http.createServer(function(req, res){
//     // res.writeHead(200, { 'Content-type': 'text/html' });
//     res.writeHead(404, { 'Content-type': 'text/plain' });
//     res.write('<h1>hola mundo</h1>');
//     res.end();
// }).listen(3000);



// const colors = require('colors');
// const http = require('http');
// const handleServer = function(req, res)
// {
//     res.writeHead(404, { 'Content-type': 'text/html' });
//     res.write('<h1>hola mundo</h1>');
//     res.end();
// };
// const server = http.createServer(handleServer);

// //poner una funcion a lado se le llama un callback, lo que es una funcion asincrona
// server.listen(3000, function(){
//     console.log('Server on port 3000'.bgYellow.red);
// });
 

// const colors = require('colors');
// const express = require('express');
// const server = express();


// server.get('/', function(request, response){
//     response.send('<h1>Hola mundo con NodeJs y Express');
// });
// server.listen(3000, function(){
//     console.log('Server on port 3000'.red);
// });