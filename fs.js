var fs=require('fs');

// reading a file using sync method
var readme=fs.readFileSync('readme.txt','utf8');
// console.log(readme);

fs.writeFileSync('writeMe.txt',readme);

// using aync method
fs.readFile('readme.txt','utf8',function(err,data){
  console.log(data);
  fs.writeFile('writeMe.txt',data);
});
