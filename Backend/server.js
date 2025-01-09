const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const newsRoutes = require('./routes/news-routes');
const usersRoutes = require('./routes/user-routes');
const postRoutes = require('./routes/post-routes')

const app = express();

app.use(express.json());

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next()
});

app.use('/api/news', newsRoutes); // => /api/news...
app.use('/api/users', usersRoutes);
app.use('/api/post', postRoutes)


mongoose
  .connect('mongodb+srv://Batsuren:Batamar30@cluster0.4qmc5.mongodb.net/gandan?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(5000);
  })
  .catch( err => {
    console.log(err);
  });

