//------------------------------------------ #I2XsG6f
function rectangle(a, b) {
    let area = a * b;
    return area;
}

console.log(rectangle(10, 20));
// #ETGAxbEn8l
//------------------------------------------ #ETGAxbEn8l
function circle(r) {
    let area = Math.PI * r * r;
    return area.toFixed(2);
}

console.log(circle(10));

// ------------------------------------------#Mbiz5K4yFe7
function cylinder(r, h) {
    let area = 2 * Math.PI * r * (r + h);
    return area.toFixed(2);
}

console.log(cylinder(10, 20));

//------------------------------------------ #SIdMd0hQ
function arr(...args) {
    for (let i of args) {
        console.log(i);
    }
}

console.log(arr(1, 2, 3, 4, 5));

//============================================== #59g0IsA
function paragraf(...args) {
    document.write('<p>' + args + '</p>');
}

let text = 'Hello World This is a paragraph';
paragraf(text);

//---------------------------------------------- #hOL6126
function ul_li(list) {
    document.write('<ul>',
        '<li>' + list + '</li>',
        '<li>' + list + '</li>',
        '<li>' + list + '</li>',
        '</ul>')
}

let text1 = 'This is a list';
ul_li(text1);

// ----------------------------------------------#0Kxco1edSN
function listUl(text, t) {
    document.write('<ul>');
    for (let i = 0; i < t; i++) {
        document.write('<li>' + text + '</li>');
    }
    document.write('</ul>');
}

let text2 = 'This is a list__2';
listUl(text2, 5);

// ----------------------------------------------#gEFoxMMO
function listMix(...args) {
    document.write('<ul>');
    for (let arg of args) {
        document.write('<li>' + arg + '</li>');
    }
    document.write('</ul>');
}

let mix1 = ['hello', true, 4, false, 6, 'owu', 'com', 'ua', 'owu', true];
listMix(...mix1);

//============================================== #bovDJDTIjt
function users1(use) {
    for (const us of use) {
        document.write(`<div > ${us.id}  ${us.name}  ${us.age} </div>`);
    }
}
users1([{id: 1, name: 'John', age: 25},
        {id: 2, name: 'Jane', age: 30},
         {id: 3, name: 'Mike', age: 35}]);
//---------------------------------------------- #pghbnSB
function max(array) {
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;
}
document.write(max([13, 42, 43, 34, 15]));
document.write('<br>');
//---------------------------------------------- #EKRNVPM
function suma(array1) {
    let sum = 0;
    for (let k of array1) {
        sum += k;
    }
    return sum;
}
document.write(suma([21, 52, 31, 48, 35]));
// ----------------------------------------------#kpsbSQCt2Lf
document.write('<br>');
function swap(arr1, index1, index2) {
    let temp = arr1[index1];
    arr1[index1] = arr1[index2];
    arr1[index2] = temp;
    document.write(arr1);
};
swap([11, 22, 33, 44, 55], 0, 1)
// ----------------------------------------------#mkGDenYnNjn.html
document.write('<br>');
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (values of currencyValues) {
        if (values.currency === exchangeCurrency) {
            document.write(( sumUAH / values.value).toFixed(2));
        }
    }
}
exchange(10000,[{currency:'USD',value:25},
                                        {currency:'EUR',value:42}],'EUR')// => 2100