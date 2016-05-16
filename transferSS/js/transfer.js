function transfer(){
	var input = Number(document.Transfer.input.value);
	console.log("Исходной с/с = " + input + " , его тип = " + typeof input);
	var output = Number(document.Transfer.output.value);
	console.log("Предполагаемая с/с = " + output + " , его тип = " + typeof output);
	var result = document.getElementById("result");
	
	var number;
	var resulting = "";
	
	if(input == 10){
		number = Number(document.Transfer.number.value);
		console.log ( '%c%s', 'color: green;', 'Основание числа в 10 с/с' );
		console.log("значение с/с = " + input + " , его тип = " + typeof input);
		resulting = number.toString(output);
	} else {
		number = document.Transfer.number.value;
		console.log ( '%c%s', 'color: silver;', 'Основание числа в ' + number + ' с/с' );
		console.log("значение с/с = " + input + " , его тип = " + typeof input);
		resulting = parseInt(number,input).toString(output);
	}
	
	var info = 'Число ' + number +' с основанием ' + input + ' с/с = ' + resulting + ' с основанием ' + output+ ' с/с';
	console.log(info);

	//console.log(info);
    result.innerHTML = info;
}