require('dotenv').config();
const express = require('express');
const mongoConnect = require('./src/db/index');

const routes = require('./src/routes/index');

mongoConnect();
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json({ extended: false }));
app.use('/api/users', routes);

// app.use(routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
