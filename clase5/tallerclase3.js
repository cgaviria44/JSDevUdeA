function Productos(descripcion, precio, cantidad) {
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
}

function Clientes(nombre, nit, direccion, telefono) {
    this.nombre = nombre;
    this.nit = nit;
    this.direccion = direccion;
    this.telefono = telefono;
}

function Factura(productos, cliente) {
    this.nombre = "akiles";
    this.direccion = "cra 66 # 41-70";
    this.telefono = 2131624;
    this.nit = "8012436-1";
    //var clientes = cliente;
    this.clientes = cliente.nombre;
    this.productos= productos;
    this.subtotal=0;
    this.total=0;
    console.log(this.productos[2]);
    for(var i=0;i<this.productos.length;i++){
      this.subtotal=this.subtotal+this.productos[i].precio;
    }
    this.total=this.subtotal+this.subtotal*0.19;
    var subtotal1 = new Productos("","subtotal",this.subtotal)
    var iva = new Productos("","subtotal",this.subtotal*0.19)
    var total1 = new Productos("","subtotal",this.subtotal+this.subtotal*0.19)
    productos.push(subtotal1,iva,total1)
}

var productos=[]
var producto1 = new Productos("leche colanta", 1200, 3)
var producto2 = new Productos("Huevos",1000,5)
var producto3 = new Productos("Quesito",2100,1)
var producto4 = new Productos("Areptas",1100,10)
productos.push(producto1,producto2,producto3,producto4)


var seco = new Clientes("seco", "1017229318-4", "cra 33 # 43-63", 3182181431)
var factura = new Factura(productos, seco)
