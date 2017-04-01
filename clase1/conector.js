/*function operacions(x, y) {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    console.log(x + y);
    return x + y;
}

function operacionr(x, y) {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    console.log(x - y);
    return x - y;
}

function operacionm(x, y) {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    console.log(x * y);
    return x * y;
}

function operaciond(x, y) {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    console.log(x / y);
    return x / y;
}*/
console.log("Conecte");

function resultado(z) {
    //console.log("entrar resultado" + z);
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);
    var resultado;
    if (!x) {
        x = 0;
    }
    if (!y) {
        y = 0;
    }

    switch (z) {
        case 0:
            resultado = x + y;
            //console.log(resultado);
            break;
        case 1:
            resultado = x - y;
            //console.log(resultado);
            break;
        case 2:
            resultado = x * y;
            //console.log(resultado);
            break;
        case 3:
            resultado = x / y;
            //console.log(resultado)
            break;
    }

    document.getElementById('r').value = resultado;
}

function resett() {
    document.getElementById('x').value = "";
    document.getElementById('y').value = "";
    document.getElementById('r').value = "";
}

function conectar() { //conectar html con js
    console.log(conectar)
    return "estoy conectado"
}
