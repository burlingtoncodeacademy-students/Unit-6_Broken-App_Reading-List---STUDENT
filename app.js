require('dotenv');
const express = require('express');
const app = express();
const PORT = env.PORT || 4000;

const { db } = require('./db');
const { today } = require('./helpers')
const validateSession = required('./middlewares');
const { user, book } = require('./controllers');

app.use(today);
app.use(json());

app.use('/user', user);
app.use(validateSession);
app.use('/book', book);

const server = async () => {
    db();

    app.listen(PORT, () => {
        console.log(`Running on: ${PORT}`);
    });
}

server();
