function constru(x, y, z) {
    var celucos1 = {
        PT: x,
        wifi: y,
        ref: z
    }
    return celucos1;
}

function constru2(phi, alpha, theta) {
    var celucos2 = {
        Pa: phi,
        radio: alpha,
        ref: theta
    }
    return celucos2;
}

alert("Melanianos");

function sumar(num) {
    return num.a + num.b
}

var m1 = constru(0, 1, "motog1"); //motorola
console.info(m1);

//console.info(sumar(m1))

var m2 = constru(1, 0, "motox"); //motorola
console.info(m2);

//console.info(sumar(m2))

var m3 = constru(1, 1, "MotoPlay") //motorola
console.info(m3);

//console.info(sumar(m3))

var n1 = constru2(0, 0, "Nokia1"); //nokia
console.info(n1);

//console.info(sumar(n1))

var n2 = constru2(1, 0, "motox"); //nokia
console.info(n2);

//console.info(sumar(n2))

var n3 = constru2(0, 1, "Nokia3000") //motorola
console.info(n3);

//console.info(sumar(n3))

function Salude(celular) {
    // body...
    console.log(celular.ref)
}

function wifi(celucos1) {
    if (celucos1.wifi == 1) {
        return true;
    } else {
        return false;
    }
}

function radio(celucos) {
    if (celucos.radio == 1) {
        return true;
    } else {
        return false;
    }
}

var arreglo = [m1, m2, m3, n1, n2, n3]
console.table(arreglo)

function borrar(arreglo) {
    arreglo.pop()
    console.table(arreglo)
}

function agragar(arreglo, celular) {
    arreglo.push(celular)
    console.table(arreglo)
}
