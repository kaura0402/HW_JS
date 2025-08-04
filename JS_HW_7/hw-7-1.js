// ==   ====    ===================================  #XjJuucOMR0
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users =[]
users.push(new User(1, 'User1', 'Surname1', 'user1@mail', 1234567890),
            new User(2, 'User2', 'Surname2', 'user2@mail', 1234567891),
            new User(3, 'User3', 'Surname3', 'user3@mail', 1234567892),
            new User(4, 'User4', 'Surname4', 'user4@mail', 1234567893),
            new User(5, 'User5', 'Surname5', 'user5@mail', 1234567894),
            new User(6, 'User6', 'Surname6', 'user6@mail', 1234567895),
            new User(7, 'User7', 'Surname7', 'user7@mail', 1234567896),
            new User(8, 'User8', 'Surname8', 'user8@mail', 1234567897),
            new User(9, 'User9', 'Surname9', 'user9@mail', 1234567898),
            new User(10, 'User10', 'Surname10', 'user10@mail', 1234567899));
console.log(users);

// ===    ===    ===================================  #2ikXsE2WiKZ
console.log(users.filter(    user => user.id % 2 === 0))
// ===    ===    ===================================  #pOeHKct/
console.log(users.sort(    (a, b) => a.id - b.id))
// ===    ===    ===================================  #nkMXISv


function Clients(id, name, surname, email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let client = [];
client.push(new Clients(1, 'Client1', 'Surname1', 'client1@mail', 1234567890, {item: ['item1', 'item2']}),
            new Clients(2, 'Client2', 'Surname2', 'client2@mail', 1234567891, {item: ['item4', 'item5', 'item6', 'item8', 'item9']}),
            new Clients(3, 'Client3', 'Surname3', 'client3@mail', 1234567892, {item: ['item7']}),
            new Clients(4, 'Client4', 'Surname4', 'client4@mail', 1234567893, {item: ['item10', 'item11', 'item12', 'item3']}),
            new Clients(5, 'Client5', 'Surname5', 'client5@mail', 1234567894, {item: ['item13', 'item14', 'item15', 'item18']}),
            new Clients(6, 'Client6', 'Surname6', 'client6@mail', 1234567895, {item: ['item16', 'item17']}),
            new Clients(7, 'Client7', 'Surname7', 'client7@mail', 1234567896, {item: ['item19', 'item20', 'item21', 'item24']}),
            new Clients(8, 'Client8', 'Surname8', 'client8@mail', 1234567897, {item: ['item28', 'item29','item25', 'item22', 'item23']}),
            new Clients(9, 'Client9', 'Surname9', 'client9@mail', 1234567898, {item: ['item26', 'item27']}),
            new Clients(10, 'Client10', 'Surname10', 'client10@mail', 1234567899, {item: [ 'item30']}));

console.log(client);
// ===    ===    ===================================  #8abtVjRv
console.log(client.sort((a, b) => a.order.item.length - b.order.item.length))
// ===    ===    ===================================  #vV9a6584I5

function Cars(model, maker, year, maxSpeed, capacity){
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = capacity;
    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed}  на годину`);
    }
    this.info = function(){
        console.log(`Модель: ${this.model}, Виробник: ${this.maker}, Рік випуску: ${this.year},
         Максимальна швидкість: ${this.maxSpeed} км/год, Об'ем двигуна: ${this.engineCapacity}`);
    }
    this.newSpeed = function(newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log(`Нова максимальна швидкість: ${this.maxSpeed} км/год`);
    }
    this.changeYear = function (changeYear) {
        this.year = changeYear;
        console.log(`Новий рік випуску: ${this.year}`);
    }
    this.addDriver = function(driver) {
        this.driver = driver;
        console.log(driver);
    }
}
let car = new Cars('Audi', 'Germany', 2010, 300, 2.0 );
car.drive();
car.info();
car.changeYear(2015);
car.newSpeed(50);
car.addDriver({name: 'John', age: 30, exp: 5});
console.log(car);
// ===================   #5kla3yMpgp



