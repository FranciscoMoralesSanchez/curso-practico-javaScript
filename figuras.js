//Código del Cuadrado-------------------------
console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();


//Código del Triangulo--------------------------
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


//Código del Circulos-------------------
console.group("Circulos");

function  diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;
console.log("PI es " + PI + ".");

function perimetro(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();