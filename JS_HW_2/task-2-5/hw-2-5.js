temperature = {
    day1: {morning: 15, day: 20, evening: 17},
    day2: {morning: 14, day: 21, evening: 18},
    day3: {morning: 13, day: 22, evening: 19},
    day4: {morning: 12, day: 23, evening: 20},
    day5: {morning: 11, day: 24, evening: 21},
    day6: {morning: 10, day: 25, evening: 22},
    day7: {morning: 9, day: 26, evening: 23}
}

console.log(temperature.day1.morning);
temperature.day1.morning = 16;
console.log(temperature);