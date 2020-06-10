const express = require('express');
require('dotenv').config()
const routes = require("./src/routes")
const port = process.env.PORT || 3000;

const app = express();

app.use(routes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})


