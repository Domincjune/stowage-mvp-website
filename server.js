const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root or 'public' directory
app.use(express.static(path.join(__dirname))); // Serves images, CSS, JS from project root
// OR if you keep static assets in a 'public' folder:
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log('Server started at http://localhost:' + port);
});
