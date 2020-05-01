// ///tarea bucles

// // 4.1
// let salario = 1500, anio = 0;
// while (anio < 6) {
//     console.log(`El año ${anio + 1} su salario corresponde a:${salario.toFixed(2)}`);
//     salario = salario + salario * 0.1;
//     anio += 1;

// }
// console.log(`Su salario al cabo de seis años es :${salario.toFixed(2)}`);

// // 4.9


// let deposito = 1500, anios = 0;
// numAnios = +prompt(`Ìngrese la cantida de años que aportó: `)
// while (anios < numAnios) {
//     console.log(`al año ${anios + 1} su depsotito corresponde a:${deposito.toFixed(2)}`);
//     deposito = deposito + deposito * 0.1;
//     anios += 1;

// }
// console.log(`Su depósito al término de los ${numAnios} Años es :${salario.toFixed(2)}`);

//4.11

// let ventas=[];
// ventas.push[]=+prompt(`Ingrese las ventas:  `);
let ventas = [20, 25, 10, 5, 7, 9, 24, 25, 14, 12, 8, 4, 23, 8, 2, 15, 6, 8, 25, 20, 28, 9, 10, 10, 5, 19, 7, 22, 4, 6, 17];
cont = 0;
menoresA10 = 0;
mayoresA10 = 0;
sumatotal = 0;
while (cont < ventas.length) 
{sumatotal=sumatotal+ventas[cont];
    if (ventas[cont] <= 10)
    {
        menoresA10 += 1;
    }
    if (ventas[cont] > 10 && ventas[cont] <=20) 
    {
        mayoresA10 += 1;
    }
    cont += 1;
}
console.log(`Las ventas menores igual a S/.10 fueron :${menoresA10}`);
console.log(`Las ventas mayores  a S/.10  y menores de S/.20 fueron :${mayoresA10}`);
console.log(`Las ventas totales es :${sumatotal}`);



