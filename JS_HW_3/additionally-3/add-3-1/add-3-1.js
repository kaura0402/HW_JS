// ==========  #WpkK0ZH1  ================
let digit=[1, 2, 3, 4, 5];
console.log(digit);

let string=['ab', 'bd', 'cw', 'dq', 'ed'];
console.log(string);

let array=['asd', 123, 'qwe', 456, true];
console.log(array);

//====     #4aDbSgh   =======================
let hi = [];

hi[0] = 'com';
hi[1] = 'ua';
hi[2] = 'com';
hi[3] = 'ua';
console.log(hi);

//========     #qLQLJSeN7i    ==============
let array1 =  [2,17,13,6,22,31,45,66,100,-18]
// перебрати його циклом while
let i = 0;
while (i < array1.length) {
    console.log(array1[i]);
    i++;
}
console.log('-----------------<br>');
// перебрати його циклом for
for (let i1 = 0; i1 < array1.length; i1++) {
    console.log(array1[i1]);
}
console.log('-----------------<br>');
// перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while (j < array1.length) {
    if (j % 2 === 1) {
        console.log(array1[j]);
    }
    j++;
}
console.log('-----------------<br>');
// перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j1 = 0; j1 < array1.length; j1++) {
    if (j1 % 2 === 1) {
        console.log(array1[j1]);
    }
}
console.log('-----------------<br>');
// перебрати циклом while та вивести  числа тільки парні  значення
k2 = 0;
while (k2 < array1.length) {
    if (array1[k2] % 2 === 0) {
        console.log(array1[k2]);
    }
    k2++;
}
console.log('-----------------<br>');
// перебрати циклом for та вивести  числа тільки парні  значення
for (let k1 = 0; k1 < array1.length; k1++) {
    if (array1[k1] % 2 === 0) {
        console.log(array1[k1]);
    }
}
console.log('-----------------<br>');
// замінити кожне число, кратне 3, на слово “okten”
for (let l = 0; l < array1.length; l++) {
    if (l % 3 === 0) {
        console.log('okten');
    } else {
        console.log(array1[l]);
    }
}
console.log('-----------------<br>');
// 8. вивести масив у зворотньому порядку.
for (let l1 = array1.length - 1; l1 >= 0; l1--) {
    console.log(array1[l1]);
}
console.log('-----------------<br>');
let t=array1.length;
while (t >0) {
    console.log(array1[t-1]);
    t--;
}
console.log('-----------------<br>');
let j3 = 0;
array2 = [];
while (j3 < array1.length) {
    if (j3 % 2 === 1) {
        array2.unshift(array1[j3]);
    }
    j3++;
}console.log(array2);
console.log('-----------------<br>');
array3 = [];
for (let j1 = 0; j1 < array1.length; j1++) {
    if (j1 % 2 === 1) {
        array3.unshift(array1[j1]);
    }}
console.log(array3);
console.log('-----------------<br>');
let k = array1.length-1;
while (k >= 0) {
    if(k % 2 === 0) {
        console.log(array1[k]);
    }
    k--;
}
console.log('-----------------<br>');
for (let k1 = array1.length-1; k1 >= 0; k1--) {
    if (k1 % 2 === 0) {
        console.log(array1[k1]);
    }
}
console.log('-----------------<br>');
for (let l22 = array1.length-1; l22 >= 0; l22--) {
    if (l22 % 3 === 0)  {
        console.log('okten');
    } else {
        console.log(array1[l22]);
    }
}
console.log('----#yHAwJOyiC----<br>');

let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array5.length; i++) {
    console.log(array5[i]);
}
console.log('------#GamKju89ob-----------<br>');
let strings12 = ['hello', 'owu', 'com', 'ua', 'owu', 'com', 'ua', 'owu', 'com', 'ua'];
for(let string12 of strings12){
    console.log(string12);
}
console.log('------#Bm76xmg-----------<br>');
let mix = ['hello', 3, 4, 5, 6, 'owu', 'com', 'ua', 'owu',true];
mix.forEach(asd => {
    console.log(asd);
})
console.log('------#u3vmD0YJXh-----------<br>');
let mix1 = ['hello', true, 4, false, 6, 'owu', 'com', 'ua', 'owu',true];
for (let i = 0; i < mix1.length; i++) {
if(typeof(mix1[i])==="boolean"){
    console.log(mix1[i]);
}
}
console.log('----------------#9stMq2ou-----------<br>');
let mix2 = ['hello', true, 4, false, 6, 'owu', 'com', 'ua', 'owu',true];
for (let i = 0; i < mix2.length; i++) {
    if(typeof(mix2[i])==="number"){
        console.log(mix2[i]);
    }
}
console.log('---------------#mK4pmM4----------<br>');
let mix3 = ['hello', true, 4, false, 6, 'owu', 'com', 'ua', 'owu',true];
for (let i = 0; i < mix2.length; i++) {
    if(typeof(mix2[i])==="string"){
        console.log(mix2[i]);
    }
}
console.log('---------------#0pm3EyTKy9----------<br>');
let mix4 = [];
mix4[0] = 'owu';
mix4[1] = 4;
mix4[2] = true;
mix4[3] = false;
mix4[4] = 16;
mix4[5] = 'owu';
mix4[6] = false;
mix4[7] = 35;
mix4[8] = 'hello';
mix4[9] = true;
for (let i = 0; i < mix4.length; i++) {
        console.log(mix4[i]);
}
console.log('---------------#mDMWMW5a----------<br>');
document.write('---------------#mDMWMW5a----------<br>');
for (let i = 0; i < 10; i++) {
        console.log('iteration', i);
        document.write('iteration',' ', i, '<br>');
}
console.log('---------------#4sXhaa5YMM----------<br>');
document.write('---------------#4sXhaa5YMM----------<br>');
for (let i = 0; i < 100; i++) {
    console.log('iteration', i);
    document.write('iteration',' ', i, '<br>');
}
console.log('---------------#s24slNyz7----------<br>');
document.write('---------------#s24slNyz7----------<br>');
for (let i = 0; i < 100; i+=2)
    {
        console.log('iteration', i);
        document.write('iteration',' ', i, '<br>');
    }
console.log('---------------#zananT5FR1----------<br>');
document.write('---------------#zananT5FR1----------<br>');
for (let i11 = 0; i11 < 100; i11++) {
    if (i11 % 2 === 0)
     {
        console.log( i11);
        document.write( i11, '<br>');
    }
}
console.log('---------------#Tfrwls7FM----------<br>');
document.write('---------------#Tfrwls7FM----------<br>');
for (let i12 = 0; i12 < 100; i12++) {
    if (i12 % 2 === 1)
     {
        console.log( i12);
        document.write( i12, '<br>');
    }
}
