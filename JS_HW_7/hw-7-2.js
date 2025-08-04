class Cars{
    constructor(model, maker, year, maxSpeed, ingCapacity) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.ingCapacity = ingCapacity;
    }
    drive() {
        return`Ця ${this.maker} машина  ${this.model} їде з максимальною швидкістю ${this.maxSpeed} км/г.`;
    }
    getInfo() {
        return `Модель: ${this.model}, Виробник:  ${this.maker}, Рік випуску: ${this.year}, Максимальна швидкість: ${this.maxSpeed} км/г, Об'єм двигуна: ${this.ingCapacity} л.`;
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
        return `Максимальна швидкість збільшена до ${this.maxSpeed} км/г.`;
    }
    changeYear(newYear) {
        this.year = newYear;
        return `Рік випуску змінено на ${this.year}.`;
    }
    addDriver(driver) {
        this.driver = driver;
        return driver;
    }
}
let car1 = new Cars('Audi', 'Неметчина', 2021, 300, 2.0);
console.log(car1);
console.log(car1.drive());
let car2 = new Cars('Model S', 'USA', 2020, 250, '120kw');
console.log(car2);
console.log(car2.getInfo());
console.log(car2.increaseMaxSpeed(20));
console.log(car2);
console.log(car2.addDriver({name: 'Ivan', age: 30, experience: '5 років'}));
console.log(car2);