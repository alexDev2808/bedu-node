const express = require('express');
const router = express.Router();


router.get("/getUsers", function(req, res) {
    res.json([]);
})


module.exports = router;