let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const course = coursesAndDurationArray[i];
    const courseBlock = document.createElement('div');
    courseBlock.innerText = `Title: ${course.title}, Duration: ${course.monthDuration}`;
    document.body.appendChild(courseBlock);
}