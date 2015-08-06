//Part 1
var Car = function(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.state = "off";
  this.color = color;
  this.previous_owners = [];
  this.current_owner = "manufactor";
  this.passengers = [];
};

var newCar = new Car("Ford", "Edge", 2014, "red");
console.log(newCar);
console.log(newCar.sale());

Car.prototype.sale = function(current_owner) {
    this.previous_owners.push(this.current_owner);
    this.current_owner = current_owner;
};

Car.prototype.paint = function(color) {
  this.color = color;
};

Car.prototype.start = function() {
  this.state = "on";
};

Car.prototype.off = function() {
  this.state = "off";
};

Car.prototype.driveTo = function(destination) {
  if(this.state === "on") {
    console.log("Driving to " + destination);
  } else {
    console.log("Sorry, this car is off.");
  }
};

Car.prototype.park = function() {
  if(this.state === "off") {
    console.log("Parked!");
  } else {
    console.log("Sorry, the car is still on.");
  }
};


//Part 2
Car.prototype.pickUp = function(name) {
  if(this.state === "on") {
    this.passengers.push(name);
    console.log("Driving to pick up " + name);
  } else {
    console.log("Sorry, the car is still off.");
  }
};

Car.prototype.dropOff = function(name) {
  var index = this.passengers.indexOf(name);
  if(this.state === "off") {
    console.log("Sorry, the car is still off.");
  } else if(index !== -1) {
    this.passengers.splice(index, 1);
    console.log(name + " has been dropped off.");
  } else {
    console.log("There was no one to drop off.");
  }
};
