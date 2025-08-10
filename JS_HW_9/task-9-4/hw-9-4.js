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
    courseBlock.className = 'item';

    const heading = document.createElement('h1');
    heading.className = 'heading';
    heading.innerText = course.title;

    const description = document.createElement('p');
    description.className = 'description';
    description.innerText = `Duration: ${course.monthDuration} `;

    courseBlock.appendChild(heading);
    courseBlock.appendChild(description);

    document.body.appendChild(courseBlock);
}