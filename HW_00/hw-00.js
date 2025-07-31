// function userBuilder(name, age) {
//     let user = {name, age};
//     return {
//         getName() {
//             return user.name;},
//         getAge() {
//             return user.age;},
//         setName(newName) {
//             user.name = newName;}
//     }}
// let builder = userBuilder("John", 30);
// console.log(builder.getName());
// builder.setName("Jane");
// console.log(builder.getName());

function *foo(x) {
    for (let i = 0; i < x; i++) {
    yield i;
}}
let generator = foo(5);
console.log(generator.next()); // { value: 0, done: false }
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 4, done: false }
