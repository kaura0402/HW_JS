// ===============================6. Є масив з числами [100,250,50,168,120,345,188],
let arr =  [100,250,50,168,120,345,188];
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let average = sum / arr.length;
console.log(average.toFixed(2));

// ================7. Створити масив з рандомними значеннями

let array = [];
let array5 = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 101));
}
for (let i in array) {
    array5.push(array[i]*5);
}
console.log(array5);
// 8. Створити масив з будь-якими
mix_dig = []
let mix = ['hello', 3, 4, 5, 6, 'owu', 'com', 'ua', 'owu',true];
for (let dig of mix) {
    if (typeof dig === 'number') {
        mix_dig.push(dig);
    }
}
console.log(mix_dig);