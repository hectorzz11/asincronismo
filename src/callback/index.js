
function sum(num1, num2){

    return num1+num2;
}

function calc(num1,num2,callback){

    return callback(num1,num2);
}

console.log(calc(2,2,sum));



function date(callback) {
    console.log(new Date); // Muestra la fecha actual
    setTimeout(function() { //Se ejecuta a los 3000 ms
        let date = new Date; //se crea una fecha que se manda a la función que recibio llamada callback y esta función imprime la fecha que recibe
        callback(date);
    },3000)
}
//solo imprime la fecha que recibe
function printDate(dateNow) {
    console.log(dateNow);
}
//se llama una funcion mandandole como parametro otra función
date(printDate);
