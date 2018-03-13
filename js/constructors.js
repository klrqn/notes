// Constructors in JS

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// create a new instance of the constructor
var myCar = new Car;

// add a property to the instance
myCar.color = "red";


// add parameters to constructor
var Car2 = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};

var myCar2 = new Car2(4, 6, 1);
return 0;
