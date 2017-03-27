var fs=require('fs');

var myReadStream=fs.createReadStream('readme.txt','utf8');

var myWriteStream=fs.createWriteStream(__dirname + '/writeMe.txt');

// using pipe
myReadStream.pipe(myWriteStream);

// myReadStream.on('data',function(chunk){
//   console.log('new chunk recieved');
//   // console.log(chunk);
//   myWriteStream.write(chunk);
// });
