var express = require('express');
var router = express.Router();

const database = require('../database/database');
const { response } = require('../app');
//database is an object through the file 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create-user', function(request,response,next) {
  const users = await database.createOne({
    name: "Jake",
    residence: 'State Farm'
  })

response.send('successfully created new user')


})


module.exports = router;
