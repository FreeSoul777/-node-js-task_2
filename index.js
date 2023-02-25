const express = require('express');

const routes = require('./routes.js');

require('./src/database');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3100);