require('dotenv').config();
const express = require('express');
const mongoConnect = require('./src/db/index');

const routes = require('./src/routes');

mongoConnect();
const port = process.env.PORT || 3000;
const app = express();

app.use(routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
