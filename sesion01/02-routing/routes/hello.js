// Router es una pieza AISLADA de una aplicacion de express

const express = require('express');
const router = express.Router();

router.get("/hello", function(req, res) {
    res.send("Hello world");
});


module.exports = router;
