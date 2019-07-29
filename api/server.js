const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const appRouter = require('./appRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api', appRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Droom API' });
});

module.exports = server;
