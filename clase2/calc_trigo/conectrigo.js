/*Realizar una calculadora de funciones trigonométricas usando el objeto Math
http://artistasdigitales.com/javascript-operaciones-y-funciones-matematicas-basicas/*/

/*function operacions() {
    var x = parseInt(document.getElementById('x').value);
    var sin = Math.sin(x);
    var resultado;
    document.getElementById('z').value = resultado;
    alert("El seno de x = " + sin);
    return Math.sin(x);
}*/

//Ahora sí
function trigo(z) {
    var pi = Math.PI;
    var x = parseInt(document.getElementById('x').value);
    var gr = x * (Math.PI / 180);
    var resultado;

    switch (z) {
        case 0:
            resultado = Math.sin(gr);
            break;
        case 1:
            resultado = Math.cos(gr);
            break;
        case 2:
            resultado = Math.tan(gr);
            break;
        case 3:
            resultado = 1 / Math.tan(gr);
            break;
        case 4:
            resultado = 1 / Math.cos(gr);
            break;
        case 5:
            resultado = 1 / Math.sin(gr);;
            break;
        case 6:
            resultado = Math.asin(gr);
            break;
        case 7:
            resultado = Math.acosh(gr);
            break;
        case 8:
            resultado = Math.atanh(gr);
            break;
    }
    document.getElementById('r').value = resultado;
}

function reset() {
    document.getElementById('x').value = "";
    document.getElementById('r').value = "";
}
