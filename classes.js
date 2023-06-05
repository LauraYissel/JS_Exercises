class Car {
  constructor(model, speed, senority) {
    this.model = model;
    this.speed = speed;
    this.senority = senority;
  }

  moreSpeed() {
    this.speed += 1;
  }

  minusSpeed() {
    this.speed -= 1;
  }
}

var car1 = new Car("Audi", 200, 2011);

console.log(car1);

car1.moreSpeed();

console.log(car1);


