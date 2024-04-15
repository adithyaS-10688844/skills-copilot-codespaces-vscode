// Create Web Server
// Create Web Server
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.send('Comments Page');
});

app.listen(port, () => {
  console.log(`Web Server is running on port ${port}`);
});
// Path: index.js
