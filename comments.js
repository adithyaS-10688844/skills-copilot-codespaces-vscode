//Create Web Server
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var comments = [];
var server = http.createServer(function(req, res){
    var parseUrl = url.parse(req.url, true);
    var pathname = parseUrl.pathname;
    if(pathname === '/'){
        fs.readFile('./index.html', function(err, data){
            if(err){
                console.log(err);
                res.end('Server Error');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }else if(pathname === '/comments'){
        if(req.method === 'GET'){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            var query = parseUrl.query;
            var comment = query.comment;
            if(comment){
                comments.push(comment);
            }
            res.end(comments.join('\n'));
        }else if(req.method === 'POST'){
            var postData = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk){
                postData += chunk;
            });
            req.on('end', function(){
                var query = qs.parse(postData);
                var comment = query.comment;
                comments.push(comment);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end(comments.join('\n'));
            });
        }
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});
server.listen(3000,() =>{
    console.log("running on the port 3000")
});
