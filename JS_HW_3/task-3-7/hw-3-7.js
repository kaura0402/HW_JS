let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

users.forEach(user => {
    if (user.status === true) {
        document.write(user.name + ' ' + '<br>');
    }
},)
{
    document.write('==================</br>');
}

users.forEach(user => {
    if (user.status === false) {
        document.write(user.name + ' ' + '<br>');
    }
},)
{
    document.write('==================</br>');
}

users.forEach(user => {
    if (user.age > 30) {
        document.write(user.name + ' ' + '<br>');
    }

},)