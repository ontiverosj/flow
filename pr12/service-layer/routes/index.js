var express = require('express');
var router = express.Router();

const  usersController = require( '../controllers/usersController');



/* GET home page. */
router.get('/',  async function(request, response, next) {
   let data = await usersController.index(request)
  console.log(data)
   response.render('index', { title: 'Express', data })
});

module.exports = router;
