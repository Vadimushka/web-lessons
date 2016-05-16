/**
 * Created by vadimushka_d on 019 - 19 мар.
 */

onload = function (){
    var oneNumber = document.getElementById("one_number");
    var twoNumber = document.getElementById("two_number");
    var operator = document.getElementsByName("operator");
    var result = document.getElementById("result");
    var tmp = 0;

    switch (operator){
        case 'summ':
            tmp = oneNumber + twoNumber;
            break;
        case 'subtraction':
            tmp = oneNumber - twoNumber;
            break;
        case 'multiplication':
            tmp = oneNumber * twoNumber;
            break;
        case 'division':
            tmp = oneNumber / twoNumber;
            break;
    }
    result.innerHTML = "= " + tmp;
};