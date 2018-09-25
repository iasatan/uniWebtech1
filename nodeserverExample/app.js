var express = require('express');
var bodyParser = require("body-parser");
var fs = require('fs');
var app = express();
var authors = [{"name": "dm"}, {"name": "VARTA"}, {"name": "tulajdonosok"}, {"name": "random2"}, {"name": "random5"}, {"name": "random8"}, {"name": "random11"}, {"name": "asd"}, {"name": "Satan Adam"}, {"name": "Sátán"}];

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
        extended: true
    }
    )
)

;
app.use(bodyParser.json());

app.get('/authors', function (req, res) {
    res.send(authors);
})

app.post('/addAuthor', function (req, res) {

    for (var a of authors) {
        if (a.name === req.body.name) {
            res.status(409).end();
            return;
        }
    }
    var author = {"name": req.body.name}
    authors.push(author);
    res.end();
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
})
