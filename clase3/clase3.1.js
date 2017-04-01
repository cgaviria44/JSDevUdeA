//Métodos
function Martin(nombre, edad, ocupacion) {
    this.nombre = nombre
    this.edad = edad
    this.ocupacion = ocupacion
    this.saludar = function() {
        alert("say hello")
    }
    this.groseria = function() {
        alert("Rata infernal")
    }
    this.getocupacion = function() {
        alert(this.ocupacion)
    }
    this.mirprimerarrow=(x)=>{
      console.log(x);
    }
}
var martin = new Martin("Elías", 20, "Estudiante")
