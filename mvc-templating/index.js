//js
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
//Routes
app.use('/', require('./routes/login'));
// app.set('view engine', 'ejs');
//Routes
// app.use('/', function(req, res, next){
//     console.log("A new request received at " + Date.now());
//     res.json({
//             "code": "goto api/v1/",
//             "status": "Server Running at port: " + PORT,
//         })
//     next();

    
//  });
const PORT = process.env.PORT || 4001;
app.listen(PORT, console.log("Server has started at port " + PORT))