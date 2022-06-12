require('dotenv').config()
const express = require('express');
const app = express();
app.use(express.json());


app.use('/api/v1/', require('./routes/mainRoute'));
const PORT = process.env.PORT || 4001;
app.listen(PORT, console.log("Server has started at port " + PORT))