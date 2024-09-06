const express = require('express');
const bodyParser = require('body-parser');
const port = 5035;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Databse connected successfully.");    
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});

const PostRoutes = require('./app/routes/post.js');
app.use('/api/posts', PostRoutes);

app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Project Support',
  });
});

app.listen(port, (request, respond) => {
  console.log(`Our server is live on ${port}. Yay!`);
});
