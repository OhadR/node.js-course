function Engine() {
    this.hp = 256;
}

Engine.prototype.start = function () {
    console.log("Engine with " + this.hp + " hp has been started...");
}

function Car() {
    this.name = "wv";
    this.engine = new Engine();
}

Car.prototype.start = function () {
    if (this.engine) {
        this.engine.start();
    }
}

function Driver() {
    this.name = "tom";
    this.car = new Car();
}

Driver.prototype.drive = function () {
    if (this.car) {
        this.car.start();
    }
}

var driver = new Driver();
driver.drive();

// Engine with 256 hp has been started...