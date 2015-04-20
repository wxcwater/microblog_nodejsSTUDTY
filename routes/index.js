var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//wxcwater add
router.get('/index',function(req,res,next){
	res.render('index',{title:'microBlog with wxcwater^_^'});
});

router.post('/reg',function(req,res,next){
	//to-do
});

router.get('/login',function(req,res,next){
	//to-do
});

router.post('/login',function(req,res,next){
	//to-do
});

router.get('/logout',function(req,res,next){
	//to-do
});

module.exports = router;
