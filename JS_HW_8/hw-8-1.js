//==================== #iz6emEsP2BA
// Task 1
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let newArray = coursesAndDurationArray.map((course, index) =>
    ({id: index + 1, ...course}));
console.log(newArray);



