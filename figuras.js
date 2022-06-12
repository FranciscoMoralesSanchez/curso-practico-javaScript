//Código del Cuadrado-------------------------------
console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();


//Código del Triangulo-------------------------------------
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return parseInt(lado1) +  parseInt(lado2) +  parseInt(base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


//Código del Circulos-------------------------------------
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


//Aqui interactuamos con el HTML

//Código del Cuadrado----------------------------------------
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Código del triangulo------------------------------------

function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputPrimerLadoT");
    const value = input.value;

    const input1 = document.getElementById("inputSegundoLadoT");
    const value1 = input1.value;

    const input2 = document.getElementById("inputBaseT");
    const value2 = input2.value;

    const perimetroT = perimetroTriangulo(value, value1,value2);
    alert(perimetroT);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("inputBaseTriangulo");
    const value = input.value;

    const inputArea = document.getElementById("inputAlturaTriangulo");
    const valueArea = inputArea.value;

    const areaTri = areaTriangulo(value, valueArea);
    alert(areaTri);
}

//Código del circulo------------------------------------

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetroCirculo = perimetro(value);
    alert(perimetroCirculo);
}