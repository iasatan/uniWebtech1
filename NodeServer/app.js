var express = require('express');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var app = express();
var manufacturers =
    [
        {"name": "Opel",                "country": "Germany",       "founded": "January 21, 1862"},
        {"name": "Toyota",              "country": "Japan",         "founded": "August 28, 1937"},
        {"name": "KIA",                 "country": "Bad Korea",     "founded": "December 1, 1944"},
        {"name": "Skoda",               "country": "Czech",         "founded": "December 18, 1895"},
        {"name": "Ford",                "country": "USA",           "founded": "June 16, 1903"},
        {"name": "Tesla",               "country": "USA",           "founded": "July 1, 2003"},
        {"name": "Chevrolet",           "country": "USA",           "founded": "November 3, 1911"},
        {"name": "Sungri Motor Plant",  "country": "True Korea",    "founded":"November 1, 1950"}
];
var cars = [
    {
        "name": "Corolla",
        "consumption": "7l/100km",
        "color": "gray",
        "manufacturer": "Toyota",
        "available": 1,
        "year": 2003,
        "horsepower":100
    },
    {
        "name":"Astra",
        "consumption":"10l/100km",
        "color":"gold",
        "manufacturer":"Opel",
        "year":1996,
        "available":1,
        "horsepower":50
    },
    {
        "name": "Focus",
        "consumption": "7/100km",
        "color": "blue",
        "manufacturer": "Ford",
        "available": 1,
        "year": 2013,
        "horsepower":120
    },
    {
        "name": "Saxo",
        "consumption": "4l/100km",
        "color": "blue",
    "manufacturer": "KIA",
    "available": 2,
    "year": 2001,
    "horsepower":65
},
{
"name": "Panda",
"consumption": "6l/100km",
"color": "Red",
"manufacturer": "Tesla",
"available": 1,
"year": 2000,
"horsepower":85
},
{
"name": "Fabia",
"consumption": "5l/100km",
"color": "white",
"manufacturer": "Skoda",
"available": 15,
"year": 2007,
"horsepower":68
},
{
"name": "Laguna II",
"consumption": "6l/100km",
"color": "silver",
"manufacturer": "Sungri Motor Plant",
"available": 1,
"year": 2003,
"horsepower": 96
},
{
"name": "Supra",
"consumption": "13l/100km",
"color": "red",
"manufacturer": "Toyota",
"available": 8,
"year": 1995,
"horsepower":340
},
{
"name": "Zafira",
"consumption": "8l/100km",
"color": "green",
"manufacturer": "Opel",
"available": 1,
"year": 2002,
"horsepower":116
},
{
"name": "Ibiza",
"consumption": "6l/100km",
"color": "blue",
"manufacturer": "KIA",
"available": 100,
"year": 2006,
"horsepower": 120,
},
{
"name": "Prelude",
"consumption": "9l/100km",
"color": "red",
"manufacturer": "Ford",
"available": 11,
"year": 1999,
"horsepower":150
},
{
"name": "V40",
"consumption": "5.6l/100km",
"color": "Ocean blue",
"manufacturer": "Volvo",
"available": 1,
"year": 2014,
"horsepower":150
},
{
"name": "Primera",
"consumption": "9l/100km",
"color": "brown",
"manufacturer": "Toyota",
"available": 15,
"year": 2001,
"horsepower":110
},
{
"name": "Passat",
"consumption": "6l/100km",
"color": "black",
"manufacturer": "Tesla",
"available": 1,
"year": 2009,
"horsepower":140
},
{
"name": "Lacetti",
"consumption": "9l/100km",
"color": "black",
"manufacturer": "Chevrolet",
"available": 5,
"year": 2010,
"horsepower":109
},
{
"name": "911 Carrera",
"consumption": "8.3l/100km",
"color": "white",
"manufacturer": "Sungri Motor Plant",
"available": 1,
"year": 2012,
"horsepower":345
},
{
"name": "Yaris",
"consumption": "5l/100km",
"color": "silver",
"manufacturer": "Toyota",
"available": 1,
"year": 2007,
"horsepower":69
},
{
    "name": "P601",
    "consumption": "8l / 100km",
    "color": "lightblue",
    "manufacturer": "KIA",
    "available": 3,
    "year": 1964,
    "horsepower": 26
}
    
    ];
app.use(express.static(__dirname + '/student'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use(bodyParser.json());

app.get('/manufacturers', function (req, res) {
    res.send(manufacturers);
});
app.get('/manufacturerNames', function (req, res) {
    var manufacturerNames = ["Opel","Toyota","KIA","Skoda","Ford","Tesla","Chevrolet","Sungri Motor Plant"];
    /*for (var m of manufacturers) {
        if (!manufacturerNames.includes(m.name)) {
            manufacturerNames.push(m.name);
        }
    }*/
    res.send(manufacturerNames);
});
app.get('/cars', function (req, res) {
    res.send(cars);
});
app.get('/manufacturer', function (req, res) {
    var ok = false;
    for (var manufacturer of manufacturers) {
        if (manufacturer.name === req.cookies.name) {
            ok = true;
            break;
        }
    }

    if (!ok) {
        res.status(409).end();
        return;
    }

    var manufacturerCars = [];
    for (var car of cars) {
        if (req.cookies.name === car.manufacturer) {
            manufacturerCars.push(car);
        }
    }
    res.send(manufacturerCars);
});
app.post('/addCar', function (req, res) {
    for (var car of cars) {
        if (car.name === req.body.name) {
            res.status(409).end();
            return;
        }
    }
    var carJSON = {
        "name":req.body.name,
        "consumption":req.body.consumption,
        "color":req.body.color,
        "manufacturer":req.body.manufacturer,
        "year":req.body.year,
        "available":req.body.available,
        "horsepower":req.body.horsepower
    };
    cars.push(carJSON);
    res.send(cars);
});

app.post('/addManufacturers', function (req, res) {

    for (var m of manufacturers) {
        if (m.name === req.body.name) {
            res.status(409).end();
            return;
        }
    }
    var manufacturer ={
        "name": req.body.name,
        "country": req.body.country,
        "founded": req.body.founded
    };
    manufacturers.push(manufacturer);
    res.send(manufacturers);
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/student/" + "index.html");
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
