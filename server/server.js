const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO=Comunicacion con el backend
//Pemite hacerlo exportable
module.exports.io = socketIO(server); //Inicializar
require('./sockets/socket'); //Para indicar que use el archivo socket.js

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});