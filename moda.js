const lista1 = [
    1,
    2,
    3,
    5,
    3,
    5,
    2,
    2,
];

const lista1Count = {};

lista1.map(
    function (elemento){
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;

        }
       

    }
);