//Create Web Server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

//GET Request
app.get('/comments', (req, res) => {
  fs.readFile(path.join(__dirname, '../database/comments.json'), (err, data) => {
    if (err) {
      console.log('Error reading file: ', err);
    } else {
      res.send(data);
    }
  });
});

//POST Request
app.post('/comments', (req, res) => {
  fs.readFile(path.join(__dirname, '../database/comments.json'), (err, data) => {
    if (err) {
      console.log('Error reading file: ', err);
    } else {
      let comments = JSON.parse(data);
      comments.push(req.body);

      fs.writeFile(path.join(__dirname, '../database/comments.json'), JSON.stringify(comments), (err) => {
        if (err) {
          console.log('Error writing file: ', err);
        } else {
          res.send('Comment added!');
        }
      });
    }
  });
});

//Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});