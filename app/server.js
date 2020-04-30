const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/', routes);

app.listen(8000);