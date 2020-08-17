var express = require('express');
var app = express();
var port = 8080;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('index.html')
})

app.get('/about', function(req, res) {
    res.sendFile('about.html')
})

app.get('/contact-me', function(req, res) {
    res.sendFile('contact-me.html')
})

app.use(function (req,res,next){
    res.status(404).send('Unable to find the requested resource!');
});

app.listen(port, function() {
    console.log('listening on port ' + port)
})

