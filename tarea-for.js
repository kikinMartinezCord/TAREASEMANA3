//almancernar datos de personas y guardarlos en arreglos. luego determinar la edad mas alta del arreglo.
// let personas=[];
// let n=10;
// for (let i = 0; i < n; i++) {
//     //  personas[i]=+prompt(` soy el ${i+1} registrado`);// OTRA FORMA DE REALIZAR EL REGISTRO EN EL VECTOR O ARREGLO
//     let elementos=[];
//     elementos[0]=prompt(`Ingrese el ${i+1} nombre: `);
//     elementos[1]=prompt(`Ingrese la edad de ${elementos[0]}: `)2
   
//     personas.push(elementos);
// }

// console.log(personas);
// //MOSTRAR AL MAYOR DE EDAD
//     let mayor=0;
//     let nombre="";
//     for (let j = 0; j < personas.length; j++) {
//         if(personas[j][1]>=mayor){
//             mayor=personas[j][1];
//             nombre=personas[j][0];
//         }
        
//     } console.log(`El mayor es : ${nombre} con  ${mayor} años`);

//////EJERCICIO 8/////////////
    // let vector=[4,5,8,9,3,5,2];
    // let vecLLenar=[];
    // for (let c = 0; c < vector.length; c++) {
    //     vecLLenar[0]=vector[vector.length-1];
    //     vecLLenar[c+1]=vector[c];

    // }
    // console.log(vecLLenar);

/////////////EJERCICIO 10///////////////////

    let vectorA=[4,5,8,9,3,5,2,8,5,6];
    let vectorB=[3,2,6,8,9,3,5,2,3,7];
    let sumaV=[];
    for (let s = 0; s < vectorA.length; s++) {
        let x=vectorA[s]; 
        let y=vectorB[s];
        sumaV[s]=x+y;

    }console.log(`La suma de los vectores:\n VECTOR A = ${vectorA.}\n VECTOR B = ${vectorB}`);
    console.log(`            ${sumaV}`);
