const express = require('express');
const router = express.Router();

router.get("/bye", function(req, res) {
    res.send("Byeee!");
});

module.exports = router;
