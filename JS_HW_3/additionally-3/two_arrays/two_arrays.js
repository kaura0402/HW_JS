
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
usersWithId.forEach(user => {
   citiesWithId.forEach(city => {
       if (user.id === city.user_id) {
           user.address = {user_id: city.user_id, country: city.country, city: city.city}

       }
   })
})
let usersWithCities=[]
usersWithId.forEach(user => {
    usersWithCities.push(user)
})
console.log(usersWithCities);

