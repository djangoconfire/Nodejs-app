var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
  console.log('request was made : ' + req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }else if(req.url === '/api'){
    res.writeHead(200,{'Content-Type':'application/json'});
    var data=[{name :'ritu',age:22},{name:'lalit',age:21}];
    res.end(JSON.stringify(data));
  }else {
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000);
console.log('server running on port 3000');
