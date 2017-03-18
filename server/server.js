const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; // heroku port config

console.log(__dirname + '/../public/html');
console.log(publicPath);

var app = express();

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log(`server started on port ${port}`);
});
