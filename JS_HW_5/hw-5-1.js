// ----------------------------------------------/#I2XsG6f
let rectangle= (a, b) => a * b;
console.log(rectangle(5, 10));
// ===============================================#ETGAxbEn8l
let circle = r => Math.PI * r * r;
console.log(circle(10).toFixed(2));
// ================================================#Mbiz5K4yFe7
let cylinder = (r, h) => 2 * Math.PI * r * (r + h);
console.log(cylinder(10, 20).toFixed(2));
// ================================================#SIdMd0hQ
let arr = (...args) => args;
let arr1 = arr(1, 2, 3, 4, 5);
for (let i of arr1) {
    console.log(i);}
// ================================================#59g0IsA
let paragraf = (...args) => '<p>' + args.join(' ') + '</p>';
document.write(paragraf('Hello World This is a paragraph'));

// ================================================#hOL6126
let ul_li = list => `<ul>
    <li>${list}</li>,
    <li>${list}</li>,
    <li>${list}</li>,
    </ul>`;
document.write(ul_li('This is a list'));
// ================================================#0Kxco1edSN
let listUl = (text, t) => {
    let ul = '<ul>';
    for (let i = 0; i < t; i++) {
        ul += `<li>${text}</li>`;
    }
    ul += '</ul>';
    return ul;
};
document.write(listUl('This is a text', 5))
// ================================================ #gEFoxMMO
let listMix = (...args) => {
    document.write('<ul>');
    for (let arg of args) {
        document.write('<li>' + arg + '</li>');
    }
    document.write('</ul>');
}
let mix1 = ['hello', true, 4, false, 6, 'owu', 'com', 'ua', 'owu', true];
listMix(...mix1);
// ================================================#bovDJDTIjt
let users1 =(use)=> {
    for (const us of use) {
        document.write(`<div > ${us.id}  ${us.name}  ${us.age} </div>`);
    }
}
users1([{id: 1, name: 'John', age: 25},
    {id: 2, name: 'Jane', age: 30},
    {id: 3, name: 'Mike', age: 35}]);
// ================================================#pghbnSB
let min = (...args) => {
    let minValue = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] < minValue) {
            minValue = args[i];
        }
    }return minValue;
}
let arr11 = [41, 32, 53, 64, 15];
document.write(min(...arr11));
// ================================================#EKRNVPM
document.write('<br>');
let summa1 = (...args) => {
    let sumalValue = 0;
    for (let i = 0; i < args.length; i++) {
        sumalValue += args[i];
    }return sumalValue;
}
let arr12 = [41, 32, 53, 64, 15];
document.write(summa1(...arr12));
// ================================================#I2XsG6f
document.write('<br>');
let swap = (arrr, index1, index2) => {
    temp = arrr[index1];
    arrr[index1] = arrr[index2];
    arrr[index2] = temp;
    return arrr;
}
document.write(swap([11,22,33,44],0,1))
// ================================================#mkGDenYnNjn
document.write('<br>');

let exchange =(sumUAH,currencyValues,exchangeCurrency) =>{
    for (values of currencyValues) {
        if (values.currency === exchangeCurrency) {
            document.write(( sumUAH / values.value).toFixed(2));
        }
    }
}
exchange(10000,[{currency:'USD',value:40},
    {currency:'EUR',value:42}],'USD')// => 2100