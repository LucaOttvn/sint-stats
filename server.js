const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    });

    const io = new Server(server, {
        cors: {
            origin: ["http://localhost:3000", "http://172.20.10.2:3000", "http://0.0.0.0:3001", "https://sint-stats.onrender.com"],
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    io.on('connection', (socket) => {
        console.log('User connected:', socket.id);

        socket.on('send_message', (message) => {
            io.emit('receive_message', message);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });
    });

    server.listen(3001, '0.0.0.0', () => {  // Add '0.0.0.0' to bind all interfaces
        console.log('> Ready on http://0.0.0.0:3001');
    });

});
