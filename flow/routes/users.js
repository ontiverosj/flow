var express = require('express');
var router = express.Router();

const client= require('../database/client')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  await client.connect()
  const db = client.db(process.env.MONGODB_DB_NAME)

  const results = await db.collection('users').find({}).toArray()

  res.json(results)
});

module.exports = router;
