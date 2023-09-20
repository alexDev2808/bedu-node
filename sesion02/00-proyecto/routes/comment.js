const express = require('express');
const router = express.Router();


router.get("/getComments", function(req, res) {
    res.json([])
})


module.exports = router;