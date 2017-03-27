var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'application/json'});
  // var myReadStream=fs.createReadStream(__dirname + '/index.html');
  // myReadStream.pipe(res);//res is writable stream
  var myobj={
    name:'ritu',
    job:'developer',
    age:22
  }

  res.end(JSON.stringify(myobj))

});

server.listen(3000,'127.0.0.1');
console.log('server running on port 3000');
