const express = require('express');
const router = express.Router();

const MongoClient = require("mongodb").MongoClient;

let connection = undefined;

async function getConnection() {

  if (connection && connection.isConnected()) return connection

  const mongoUrl = process.env.MONGO_URL
  const mongoUser = process.env.MONGO_USER
  const mongoPass = process.env.MONGO_PASSWORD

  const client = await MongoClient.connect(mongoUrl, {
    user: mongoUser,
    password: mongoPass,
  });

  connection = client;

  return client;
}


/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const data = await (await (await getConnection()).db('test').collection('users').find({})).toArray()
    res.send(data)
  } catch (e) {
    res.send(e)
  }
});

router.post('/add', async function (req, res, next) {
  console.log(req.body);
  await (await getConnection()).db('test').collection('users').replaceOne({name: req.body.name}, req.body, { upsert: true });
  res.status(200);
  res.end();
})

module.exports = router;
