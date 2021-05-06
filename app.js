var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
    myReadStream.pipe(res);
});

server.listen(3000);
console.log('Osluškujem na portu 3000...');