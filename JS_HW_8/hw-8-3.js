let Array = [
    {title: 'JavaScript Complex', monthDuration: 5, fun: function (){'jasd'}},
    {title: 'Java Complex', monthDuration: 6, fun: function (){'asqd'}},
    {title: 'Python Complex', monthDuration: 6, fun: function (){'aswd'}},
    {title: 'QA Complex', monthDuration: 4, fun: function (){'fasd'}},
    {title: 'FullStack', monthDuration: 7, fun: function (){'vasd'}},
    {title: 'Frontend', monthDuration: 5, fun: function (){'basd'}},
];
// let Array1 = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 5},
// ];
function deepCopy(obj){
    if (obj === null) {
        return null;
    }
    if (obj === undefined) {
        return undefined;
    }
    if (typeof obj === 'number' && isNaN(obj)) {
        return NaN;
    }
    const arr = JSON.parse(JSON.stringify(obj));
    arr.forEach((el, index) => {
       el.fun = obj[index].fun;
});
   return arr;

}
let ArrayCopy = deepCopy(Array);
console.log(Array);
console.log(ArrayCopy);
console.log(ArrayCopy===Array);
ArrayCopy[0].title = 'Modified JavaScript Complex';
console.log(ArrayCopy); // Modified JavaScript Complex
ArrayCopy[1].func = function (){'2a2swd'};
console.log(ArrayCopy);
Array[2].func = function (){'555555'};
console.log(Array);
console.log(ArrayCopy);