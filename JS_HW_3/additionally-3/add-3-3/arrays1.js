let array = [];
for (let i = 0; i < 100; i+=2) {
    array.push(i);
}
for (let i = 1; i < 100; i+=2) {
    array.push(i);
}
for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 101));
}
for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    array.push(randomNumber);
}

for (let i in array) {
    if (i % 3 === 0) {
    console.log(array[i]);
}}
console.log('-----------------<br>');
for (let i in array) {
    if((i % 3 === 0) && (array[i] % 2 === 0)) {
        console.log(array[i]);
    }
}
console.log('-----------------<br>');
arrayNew = [];
for (let i in array) {
    if ((i % 3 === 0) && (array[i] % 2 === 0)) {
        arrayNew.push(array[i]);
    }
}
console.log(arrayNew);
console.log('-----------------<br>');

for (let i = 0; i < array.length-1; i++) {
    if (array[i+1] % 2 === 0) {
        console.log(array[i]);
    }
}
