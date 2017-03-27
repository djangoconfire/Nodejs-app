var events=require('events');
var util=require('util');

var person=function(name){
  this.name=name;
};

util.inherits(person,events.EventEmitter);

var ritu=new person('ritu');
var katrina=new person('katrina');
var raj=new person('raj');

var people=[ritu,katrina,raj];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ' said: ' + msg);
    });
});

ritu.emit('speak','hi whatsapp');
