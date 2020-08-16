var http = require('http');
var url = require('url');
var fs = require('fs');
var success = 200;
var port = 8080;

http.createServer(function(req,res) {
    var q = url.parse(req.url, true);
    if (q.pathname == '/') {
        q.pathname += 'index.html'
    }
    var filename = "." + q.pathname;
    fs.readFile(filename, (err, data) => {
        if (err) {
            fs.readFile("./404.html", (err,data) => {
                res.end(data);
            })
        } else {
            res.writeHead(success, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
}).listen(port);

console.log('listening on port ' + port)