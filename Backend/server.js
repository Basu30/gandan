const express = require('express');
const bodyParser = require('body-parser');

const newsRoutes = require('./routes/news-routes');

const app = express();

app.use(express.json());

app.use('/api/news', newsRoutes); // => /api/news...



app.listen(3000);