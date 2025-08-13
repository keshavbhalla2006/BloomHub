// server.js
const express = require('express');
const path = require('path');

const app = express();

// Serve all files from the current directory (your template folder)
app.use(express.static(path.join(__dirname)));

// Choose your own port here (3000 is common, but you can change to 5500, 8080, etc.)
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`🚀 BloomHub server running at http://localhost:${PORT}`);
});
