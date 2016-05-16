console.log(true);
console.log(false);
console.log(5 === 6);

console.log(Boolean(10));

//false
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

var str = "Текст";
if (str){
	console.log("Истина");
}

console.log(true && true);
console.log(true || false);
console.log(!true);

var a = 0,
	isTrue = true;
isTrue && (a = 5);
console.log(a);

var someString = "Не пустая строка";
var newString = someString || "Строка по умолчанию";
console.log(newString);
