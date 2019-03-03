const { io } = require('../server'); //exportamos la variable io

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion',
        descripcion: 'Es nuevo'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        //client.emit('enviarMensaje', data);
        client.broadcast.emit('enviarMensaje', data); //Para enviar mensaje a varios
        /* if (mensaje.usuario) {
             callback({
                 resp: 'Todo salio bien!'
             });
         } else {
             callback({
                 resp: 'Todo salio mal!!'
             });
         }*/

    });

});