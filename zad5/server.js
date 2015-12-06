var express = require('express'),
    bodyParser = require('body-parser');
/// http://expressjs.com/api.html

var app = express(),
    numbers = [];

app.use(express.static(__dirname + '/'));
app.use(bodyParser.text()); // parse text

//GET /today returns date in string
app.get('/today', function (req, res) {
    setTimeout(function () {
        res.send((new Date()).toLocaleDateString());
    }, 1000);
});

//POST /numbers should save number for later
app.get('/numbers', function (req, res) {
    numbers.append((req.body).parseInt());
    setTimeout(function () {
        res.send(numbers);
    }, 1000);
});
//GET /numbers should return comma separated list of numbers

app.get('/numbers', function (req, res) {
    list = '';
    for(var i = 0; i < numbers.length-1; i++) {
        list += numbers[i] + ', ';
    }
    list += numbers[numbers.length-1]
    setTimeout(function () {
        res.send(sum.toString());
    }, 1000);
});


// DELETE /numbers should
app.delete('/numbers', function (req, res) {
    numbers = [];
    res.send(numbers);
});

//GET /sum should return sum of stored numbers
app.get('/numbers', function (req, res) {
    var sum = 0 ;
    for(var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    setTimeout(function () {
        res.send(sum.toString());
    }, 1000);
});




app.listen(8080, function () {
    console.log('Server is running on localhost:' + this.address().port);
});
