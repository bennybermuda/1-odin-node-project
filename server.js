var express = require('express');
var app = express();
var port = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('/about', (req, res) => {
    res.sendFile('about.html')
})

app.get('/contact-me', (req, res) => {
    res.sendFile('contact-me.html')
})

app.use((req,res,next) => {
    res.status(404).send('Unable to find the requested resource!');
});

app.listen(port, () => {
    console.log('listening on port ' + port)
})

