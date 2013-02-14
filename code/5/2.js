// inheritance

Function.method('inherits', function (Parent) {
    this.prototype = new Parent(  );
    return this;
});

// esoteric pseudo-classical style through inherits and the method method

var Vehicle = function () { 
    this.on = false; 
}.method('start', function() {
    this.on = true;
}).method('stop', function() {
    this.on = false;
});


var Car = function(model) {
    this.model = model;
}.inherits(Vehicle)
.method('drive', function() {
    if (this.on) {
        console.log('vroom');
    } else {
        console.log('not started yet');
    }
});

var jetta = new Car('volkswagen');
jetta.drive();
jetta.start();
jetta.drive();