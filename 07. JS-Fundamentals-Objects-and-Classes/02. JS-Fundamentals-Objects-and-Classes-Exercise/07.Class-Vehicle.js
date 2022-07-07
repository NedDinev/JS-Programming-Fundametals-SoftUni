function solve() {
  class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.parts = parts;
      this.fuel = Number(fuel);
      this.parts.quality = this.parts.engine * this.parts.power;
    }
    drive(lostFuel) {
      return (this.fuel -= lostFuel);
    }
  }
  let parts = { engine: 160, power: 105 };
  let vehicle = new Vehicle("sedan", "Subaru Impreza", parts, 200);
  vehicle.drive(100);
  console.log(vehicle.fuel);
  console.log(vehicle.parts.quality);
  console.log(JSON.stringify(vehicle));
}
solve();
