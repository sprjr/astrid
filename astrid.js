// code might be typed in this file soon™

var restify = require('restify');
var request = require('request');

var server = restify.createServer();

server.get(/^\/([a-zA-Z0-9_\.~-]+)\/(.*)/, proxy);

server.listen(3001, function () {
    console.log('proxying on %d', 3001);
});


// Alpha stuff
function proxy (req, res, next) {
    var base = req.params[0];
    var path = req.params[1];
    var port = 3000;
    var uri = 'http://' + base + ':' + port + '/' + path;

    console.log('proxying uri: ' + uri);

    request(uri).pipe(res);
}
