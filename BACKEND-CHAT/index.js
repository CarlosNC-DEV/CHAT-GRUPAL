import app from './src/app.js';
import { PORT } from './src/config.js';

import { Server as SocketServerIo} from 'socket.io';
import http from 'http';
import socket from './src/socket.js';

const server = http.createServer(app);

const httpServer = server.listen(PORT, ()=>{
    console.log(`Servidor corriendo el puerto ${PORT}`);
})

const io = new SocketServerIo(httpServer, {
    cors:{
        origin: '*'
    }
})
socket(io);