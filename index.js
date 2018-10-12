const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hey: 'you' });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT);