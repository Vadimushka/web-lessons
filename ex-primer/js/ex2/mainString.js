console.log("Одна строка");
console.log('Другая строка');
console.log("Третья 'длинная' строка");
console.log('Третья "длинная" строка');
console.log("Третья\n\t\"длинная\"\n\t\tстрока");
console.log("Третья \
'длинная' \
строка");
			
var string = "Hello";
console.log(string + " world");

string = "Еду домой на 39 маршрутке";
console.log(string.length);
console.log(string.charAt(string.length - 1));
console.log(string[5]);
console.log(string.substring(4));
console.log(string.substring(4, 9));
console.log(string.slice(-9));
console.log(string.substr(10, 2));
console.log(string.indexOf("м"));
console.log(string.lastIndexOf("м"));
console.log(string);
console.log(string.replace("39", "33"));
console.log(string.split(" "));
console.log(string.toUpperCase());
console.log(string.toLowerCase());

