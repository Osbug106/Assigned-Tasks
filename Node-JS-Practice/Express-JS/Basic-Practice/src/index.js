const express = require("express");
const path = require('path');
const app = express();
const port = 8080;

var myLogger = function (req, res, next) {
    console.log('Middleware 1');
    next();
}
var myLogger2 = function (req, res, next) {
    console.log('Middleware 2');
    next();
}

/*Middlewear*/
//Method 1: Multiple calls
// app.use(myLogger1);
// app.use(myLogger2);

//Method 2: Invoking multiple functions in single Middleware
// app.use(myLogger, myLogger2);

//Method 3: Passing array of functions to Middleware
// var funs = [myLogger, myLogger2];
// app.use(funs);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/about.html"));
});

app.listen(port, () => {
    console.log(`Listening to port ${port}...`);
});


module.exports = app; //using it in Express-JS/Get-Post-Put-Delete/GPPD.js
