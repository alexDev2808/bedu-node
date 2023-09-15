require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json()); // middleware para entender req.body en formato json

const articleRouter = require('./routes/article');
const userRouter = require('./routes/user');
const commentRouter = require('./routes/comment');

app.use(articleRouter);
app.use(userRouter);
app.use(commentRouter);


app.listen(process.env.SERVER_PORT, function() {
    console.log("> Escuchando puerto " + process.env.SERVER_PORT);
})