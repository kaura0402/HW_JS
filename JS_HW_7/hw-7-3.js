class Cinderellas {
    constructor(name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

class Prince {
    constructor(name, age, sizeChoes) {
        this.name = name;
        this.age = age
        this.sizeChoes = sizeChoes;
    }

    findCinderella(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.sizeFoot === this.sizeChoes) { // Assuming the shoe size of Cinderella is 37
                return cinderella;
            }
        }
        return null;
    }
    findCinderellaFind(cinderellas) {
        return cinderellas.find(cinderella => cinderella.sizeFoot === this.sizeChoes);
    }
}

let cinderella1 = new Cinderellas("Cinderella 1", 20, 38)
let cinderella2 = new Cinderellas("Cinderella 2", 22, 36)
let cinderella3 = new Cinderellas("Cinderella 3", 19, 37)
let cinderella4 = new Cinderellas("Cinderella 4", 21, 39)
let cinderella5 = new Cinderellas("Cinderella 5", 18, 38)
let cinderella6 = new Cinderellas("Cinderella 6", 23, 39)
let cinderella7 = new Cinderellas("Cinderella 7", 25, 40)
let cinderella8 = new Cinderellas("Cinderella 8", 24, 38)
let cinderella9 = new Cinderellas("Cinderella 9", 26, 38)
let cinderella10 = new Cinderellas("Cinderella 10", 27, 45)
let cinderellas = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6,
    cinderella7, cinderella8, cinderella9, cinderella10];
console.log(cinderellas);
let prince = new Prince("Prince Charming", 25, 37);
console.log(prince);
let princes = [prince];
console.log(princes);
console.log(prince.findCinderella(cinderellas));
console.log(prince.findCinderellaFind(cinderellas));

