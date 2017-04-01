function modelos(ro, beta, thao, delta, phi, epsi, iota) {
    var model = {
        edad: ro,
        nombre: beta,
        colorpiel: thao,
        colorojos: delta,
        altura: phi,
        peso: epsi,
        agencia: iota
    }
    return model;
}

var m1;
var m2;
var m3;
var m4;
var m5;

m1 = modelos(19, "Angi", "N", "Azul", "1,7m", "60kgF", "Aranjuez");
m2 = modelos(18, "Bianca", "N", "Café", "1,63m", "55kgF", "Campo Valdés");
m3 = modelos(22, "Camila", "B", "Gris", "1,52m", "54kgF", "Barrio Chino");
m4 = modelos(24, "Danery", "C", "Café", "1,62m", "40kgF", "Moravia");
m5 = modelos(30, "Estefa", "A", "Café", "1,74m", "55kgF", "Castilla");

var arreglo = [m1, m2, m3, m4, m5]

function agencias(arreglo, agencia) {
    var mod = []
    //console.log("ENtter aasdmasklf"); para probar como está funcionando la función
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].agencia == agencia) {
            mod.push(arreglo[i])
            console.log(arreglo[i].nombre)
        }
    }
    return mod;
}

function edad(model) {
    return model.edad;
}

function nombre(model) {
    return model.nombre;
}

function colorpiel(model) {
    return model.colorpiel;
}

function colorojos(model) {
    return model.colorojos;
}

function altura(model) {
    return model.altura;
}

function peso(model) {
    return model.peso;
}
