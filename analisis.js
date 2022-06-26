//Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
};

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento ) {
            return valorAcumulado + nuevoElemento; 
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

//Calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.lengh)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
};


//Mediana General
const salariosNic = Nicaragua.map(
    function (personita){
        return personita.salary;
    }
);

const salariosNicSorted = salariosNic.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralNic = medianaSalarios(salariosNicSorted);

// Media del top 10%

const spliceStart = (salariosNicSorted.length * 90) / 100;
const spliceCount = salariosNicSorted.length - spliceStart;

const salrioNicTop10 = salariosNicSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Nic = medianaSalarios(salrioNicTop10);

console.log({
    medianaGeneralNic, 
    medianaTop10Nic,
});