var startTime = Date.now();
console.log(startTime);
var newDate = new Date();
console.log(newDate);
console.log(newDate.toString());

var date = new Date(2015, 4, 11, 12, 10, 20, 50);
console.log(date);

console.log(date.getYear());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

date.setDate(20);
console.log(date);

console.log(date.getTime());
console.log(date.toTimeString());
console.log(date.toDateString());

console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());

var options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

console.log(date.toLocaleDateString("ru", options));
var endTime = Date.now();
console.log(endTime);
console.log(endTime - startTime);