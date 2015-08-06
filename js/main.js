//Part 1
var Car = function(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.state = "off";
  this.color = color;
  this.previous_owners = [];
  this.current_owner = "manufactor";
};


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

Car.prototype.park = function () {
  if(this.state === "off") {
    console.log("Parked!");
  } else {
    console.log("Sorry, the car is still on.");
  }
};


//Part 2










});
