function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;
    
    return precioConDescuento;
}


function botonCalcularDescuento() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountvalue = inputDiscount.value;

    const precioConDescuento  = calcularPrecioConDescuento(priceValue, discountvalue)

    const resultadoP = document.getElementById("resultadoP");
    resultadoP.innerText = "El precio con descuento son: $" + precioConDescuento;
}