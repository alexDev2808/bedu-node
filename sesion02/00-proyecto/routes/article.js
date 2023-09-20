const express = require('express');
const router = express.Router();
const { getArticles } = require('../controllers/article');

router.get("/getArticles", getArticles);




module.exports = router;