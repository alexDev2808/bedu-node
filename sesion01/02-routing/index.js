const express = require('express');
const app = express();

const helloRouter = require('./routes/hello');
const byeRouter = require('./routes/bye');

// Instalando los multiples routers en una sola app
// Plot Twist: En express TODO es un middleware
app.use(helloRouter);
app.use(byeRouter);

app.listen(8080, function() {
    console.log("Escuchando en el puerto 8080");
});