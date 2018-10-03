var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var authors =
    [{"id": 1, "name": "dm", "nationality": "c#", "birthDate": randomDate()},
        {"id": 2, "name": "VARTA", "nationality": "c#", "birthDate": randomDate()},
        {"id": 3, "name": "tulajdonosok", "nationality": ".net", "birthDate": randomDate()},
        {"id": 4, "name": "random2", "nationality": "public", "birthDate": randomDate()},
        {"id": 5, "name": "random5", "nationality": "html", "birthDate": randomDate()},
        {"id": 6, "name": "random8", "nationality": "platform", "birthDate": randomDate()},
        {"id": 7, "name": "random11", "nationality": "webapp", "birthDate": randomDate()},
        {"id": 8, "name": "asd", "nationality": "postman", "birthDate": randomDate()},
        {"id": 9, "name": "Satan Adam", "nationality": "github", "birthDate": randomDate()},
        {"id": 10, "name": "Sátán", "nationality": "timestamp", "birthDate": randomDate()}];

var books = [
    {
        "title": "Das gesunde PLUS",
        "genre": "medical",
        "author": "dm",
        "quantity": 2,
        "available": 0,
        "publisher": "asd@asd.com"
    }, {
        "title": "SUPERLIFE",
        "genre": "electronics",
        "author": "VARTA",
        "quantity": 432,
        "available": 233,
        "publisher": "asd@asd.com"
    }, {
        "title": "meguntam",
        "genre": "random1",
        "author": "random2",
        "quantity": 4,
        "available": 2,
        "publisher": "asd@asd.com"
    }, {
        "title": "random3",
        "genre": "random4",
        "author": "random5",
        "quantity": 4,
        "available": 2,
        "publisher": "asd@asd.com"
    }, {
        "title": "random6",
        "genre": "random7",
        "author": "random8",
        "quantity": 4,
        "available": 2,
        "publisher": "asd@asd.com"
    }, {
        "title": "random9",
        "genre": "random10",
        "author": "random11",
        "quantity": 4,
        "available": 2,
        "publisher": "asd@asd.com"
    }, {
        "title": "Why everybody else is a loser",
        "genre": "tisztelt",
        "author": "Satan Adam",
        "quantity": 0,
        "available": 0,
        "publisher": "asd@asd.com"
    }, {
        "title": "101 reasons why I am better than you",
        "genre": "Fiction",
        "author": "Satan Adam",
        "quantity": 23,
        "available": 22,
        "publisher": "asd@asd.com"
    }, {
        "title": "ékezetes teszt",
        "genre": "teszt",
        "author": "Sátán",
        "quantity": 0,
        "available": 0,
        "publisher": "asd@asd.com"
    }];
//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/student'));

app.use(bodyParser.urlencoded({
    extended: false
}));

function randomDate() {
    var start = new Date(1921, 1, 5);
    var end = new Date(2000, 0, 0);
    var date = new Date(+start + Math.random() * (start - end));
    return date;
}

app.use(bodyParser.json());

app.get('/authors', function (req, res) {
    res.send(authors);
});
app.get('/books', function (req, res) {
    res.send(books);
});
app.post('/addBook', function (req, res) {
    for (var book of books) {
        if (book.title === req.body.title) {
            res.status(409).end();
            return;
        }
    }
    var book = {
        "title": req.body.title,
        "genre": req.body.genre,
        "author": req.body.author,
        "quantity": req.body.quantity,
        "available": req.body.available,
        "publisher": req.body.publisher
    };
    books.push(book);
    res.send(books);
});

app.post('/addAuthor', function (req, res) {

    for (var a of authors) {
        if (a.name === req.body.name) {
            res.status(409).end();
            return;
        }
    }
    console.log(req.body.name);
    var author = {"name": req.body.name, "nationality": req.body.nationality, "birthDate": req.body.birthDate};
    authors.push(author);
    res.send(authors);
    //res.sendFile(__dirname + "/public/" + "index.html");
    //res.redirect("/authors")
});
app.get('/addAuthor', function (req, res) {
    res.sendFile(__dirname + "/public/" + "index.html");
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/" + "index.html");
});

app.post('/', function (req, res) {
    res.sendFile(__dirname + "/public/" + "index.html");
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
