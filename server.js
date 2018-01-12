const express = require('express');
const app = express();
const PORT = 3001 || process.env.PORT;
app.use(express.static('public'));
app.listen(PORT, console.log('My Movies App on PORT:', PORT));
