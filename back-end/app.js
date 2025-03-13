const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Yay! Databse connected successfully.");    
}).catch(err => {
  console.log('Bruh! Could not connect to the database.', err);
  process.exit();
});

const PostRoutes = require('./app/routes/post');
app.use('/api/posts', PostRoutes);

const UserRoutes = require('./app/routes/user');
app.use('/api/users', UserRoutes);

app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Project OSA Landing page!',
  });
});

app.listen(port, (request, respond) => {
  console.log(`Yay! Our server is live on ${port}`);
});
