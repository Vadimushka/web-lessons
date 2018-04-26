var formatDate = /(0[1-9]|[12][0-9]|3[01])/;
var formatMonth = /(0[1-9]|1[012])/;
var formatYear = /(19|20)\d\d/;

var dateNow = new Date();

var dd = prompt("Введите день [dd]", "");
while(formatDate.test(dd)){
    alert("Введенное число не входит в диапазон дат");
    dd = prompt("Введите день [dd]", "");
}

//if (dd == ""){
//    dd = dateNow.getDate();
//}

var mm = prompt("Введите месяц [mm]", "");
while(formatMonth.test(mm)){
    alert("Введенное число не входит в диапазон месяцев");
    mm = prompt("Введите месяц [mm]", "");
}
//if (mm == ""){
//    mm = dateNow.getMonth();
//    mm++;
//}

var yy = prompt("Введите год [yyyy]", "");
while(formatYear.test(yy)){
    alert("Введенное число не входит в диапазон годов");
    yy = prompt("Введите месяц [mm]", "");
}
//if (yy == ""){
//    yy = dateNow.getFullYear();
//}

var hhmmss = dateNow.toLocaleTimeString();

var TMR = 10,
    myDate = dd + '.' + mm + '.' + yy + ' ' + hhmmss;

onload = function (){
    setInterval (function () {
        var a =  myDate.split(' '),
            b =  a [0].split('.'),
            c =  a [1].split(':'),
            d = new Date(),
            T     =              [] , C     =               [];

        T[0] =          b [2] ;C[0] = d.getFullYear ();
        T[1] =        --b [1] ;C[1] = d.getMonth    ();
        T[2] = parseInt(b [0]);C[2] = d.getDate     ();
        T[3] = parseInt(c [0]);C[3] = d.getHours    ();
        T[4] = parseInt(c [1]);C[4] = d.getMinutes  ();
        T[5] = parseInt(c [2]);C[5] = d.getSeconds  ();

        var D = [];
        for (var j = -1; j < 6; j++){
            D [j] = C [j] - T [j];
        }

        if (D[5] < 0){
            --D[4];
            D[5] += 60;
        }
        if (D[4] < 0){
            --D[3];
            D[4] += 60;
        }
        if (D[3] < 0){
            --D[2];
            D[3] += 24;
        }
        if (D[2] < 0){
            --D[1];
            d.setDate(0);
            D[2] +=  d.getDate();
        }
        if (D[1] < 0){
            --D[0];
            D[1] += 12;
        }

        var w = [['год'    , 'года'   , 'лет'    ],   // 0
            ['месяц'  , 'месяца' , 'месяцев'],   // 1
            ['день'   , 'дня'    , 'дней'   ],   // 2
            ['час'    , 'часа'   , 'часов'  ],   // 3
            ['минута' , 'минуты' , 'минут'  ],   // 4
            ['секунда', 'секунды', 'секунд' ]];  // 5

        if(Date.parse(myDate) > d){
            document.getElementById("text").innerHTML = "Дата " + myDate +". Наступит через ";
        } else{
            document.getElementById("text").innerHTML = "Дата " + myDate +". Этот день уже был! Прошло ";
        }

        for (j = 0; j < 6; j++) {
            var n = D [j],
                k = n % 10,
                l = (!k || n > 5 && n < 21 || k > 4) ? 2 : ((k == 1) ? 0 : 1);

            if (j == 0 && new Date(myDate) > d){
                n = -n;
            }

            document.getElementById('mt').getElementsByTagName('div')[j].innerHTML = n + '<p>' + w[j][l];
        }
        TMR = 1000;
    }, TMR);
};