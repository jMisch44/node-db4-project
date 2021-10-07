const express = require('express');
const recipeRouter = require('./router');

const server = express();

server.use(express.json());
server.use('/api/recipes/', recipeRouter);

server.use('*', (req, res, next) => {
    res.json("wrong url")
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});

module.exports = server;
