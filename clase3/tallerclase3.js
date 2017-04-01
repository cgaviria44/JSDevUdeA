function Productos(descripcion, precio, cantidad) {
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
}

function Cliente(nombre, nit, direccion, telefono) {
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
    var clientes = cliente;
    this.cliente = clientes.nombre;
}

var seco = new Clientes("seco", "1017229318-4", "cra 33 # 43-63", 3182181431)
var productos = new Productos("leche colanta", 1200, 3)
productos.precio
var factura = new Factura(productos, seco)
