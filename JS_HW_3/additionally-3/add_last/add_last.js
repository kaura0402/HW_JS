// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого
// циклу скопіювати значення одного масиву в інший.
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.
let array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 101));
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}
let array1 = [];
for (let i = 0; i < array.length; i++) {
    array1.push(array[i]);
}
console.log(array1);


let arr = ['a', 'b', 'c'];
let word = '';
for (let i = 0; i < arr.length; i++) {
    word += arr[i];
}
console.log(word);

i = 0;
word1 = '';
while (i < arr.length) {
    word1     += arr[i];
    i++;
}
console.log(word1);
word2 = '';
for (let letter of arr) {
    word2 += letter;
}
console.log(word2);