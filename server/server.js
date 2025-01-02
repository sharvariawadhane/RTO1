 const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server);

// Mock database
const users = [
    { serviceNumber: '12345', name: 'John Doe', status: 'Processing', location: 'Room 2' },
];

// API Endpoints
app.post('/login', (req, res) => {
    const { serviceNumber, name } = req.body;
    const user = users.find(u => u.serviceNumber === serviceNumber && u.name === name);
    if (user) res.json({ success: true, user });
    else res.status(404).json({ success: false, message: 'User not found' });
});

app.get('/service-status/:serviceNumber', (req, res) => {
    const user = users.find(u => u.serviceNumber === req.params.serviceNumber);
    if (user) res.json(user);
    else res.status(404).json({ success: false, message: 'User not found' });
});

io.on('connection', socket => {
    console.log('A user connected');
    socket.on('disconnect', () => console.log('User disconnected'));
});

server.listen(5000, () => console.log('Server running on port 5000'));

