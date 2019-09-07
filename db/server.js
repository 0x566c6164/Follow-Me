require('dotenv').config();
const express = require('express');
const jsonServer = require('json-server');

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_ADDRESS); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  next();
});

app.use('/api', jsonServer.router('db.json'));

const port = process.env.PORT;
app.listen(port, () => {
  console.log('DB running on port ' + port);
});