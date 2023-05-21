//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class MercurySedan {
    constructor(make, model, year, color, mileage) {
      super(make, model, year, color, mileage)
      this.maximumPassengers = 5
      this.passengers = 0
      this.numberOfWheels = 4
      this.maximumSpeed = 160
      this.fuel = 10
      this.scheduleService = false
    }
    loadPassenger(num) {
        if (this.passengers < this.maximumPassengers) {
            console.log("there is more space on this car")
        }
        else if (this.passengers = this.maximumPassengers) {
            console.log("the car has reached maximum capacity")
        }
        else if (this.passengers > this.maximumPassengers) {
            console.log("You won't be able to travel with so many passengers!")
        }
    }
    start() {
        if (this.fuel > 0) {
            return this.start = true;
        }
    }
    scheduleService(mileage) {
        if (this.mileage > 30000) {
            return this.scheduleService = true
        }
        else if (this.mileage < 30000) {
            console.log("Your car doesn't need any maintenance at the moment")
        }
    }
}
    










//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
