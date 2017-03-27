var fs=require('fs');

// using aync method

// removing a file
fs.unlink('writeMe.txt');

fs.mkdir('stuff',function(){
  fs.readFile('readme.txt','utf8',function(err,data){
    fs.writeFile('./stuff/writeMe.txt',data);
  });
});
