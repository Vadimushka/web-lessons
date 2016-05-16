var N = Number(2400);
var n = 3500;

console.log(typeof(N));
console.log(typeof(n));
console.log(N.toFixed(2));
console.log(n.toFixed(2));
console.log(5 .toFixed(2));
console.log("");
console.log(n.toExponential(3));
console.log(n.toPrecision(5));
console.log("");
var i = 10;

console.log(i);
console.log(-i);
console.log(++i);
console.log(i);
console.log(i++);
console.log(i);
console.log(5 + 3);
console.log(5 - 3);
console.log(5 * 3);
console.log(5 / 3);
console.log(5 % 3);
console.log("");
n = 20;
n = n + 10;
console.log(n);
n += 10;
console.log(n);
console.log("");
console.log(10 < 5);
console.log(10 <= 10);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 == "10");
console.log(10 === "10");
console.log("");
//Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(25));
console.log(Math.pow(5, 3));
console.log(1e308);
console.log(1e309);//Infinity
console.log(typeof(Infinity));//Number
console.log("");
console.log(1e-323);
console.log(1e-324);//0
console.log(5 / 0);//Infinity
console.log(-5 / 0);//-Infinity
console.log(0 / 0);//NaN
console.log(Infinity / Infinity);//NaN
console.log(Math.sqrt(-25));//NaN
console.log(NaN === NaN);//false NaN - идентификатор (парсер)
console.log("");
console.log(0.2 + 0.1);//точность выше у целых
console.log(1072 .toString(2));