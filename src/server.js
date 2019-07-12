const path = require('path');
const express = require('express');

const port = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'bundle.js'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log('This is finally working')
});
