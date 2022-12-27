var express = require('express');
var router = express.Router();
var config = require('./dbconfig');
var sql = require('mssql');

/* GET insert product page. */
var express = require('express');
var router = express.Router();


/* GET insert product page. */
router.get('/', function(req, res, next) {
    res.render('supsold', { title: 'Insert Products', userID: req.session.userID, isAdmin: req.session.isAdmin, message: req.flash('message')});
});

module.exports = router;
