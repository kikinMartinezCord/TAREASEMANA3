//////////////////////////
//     #02

let hrBase = 40;
let pagoH = 10;
let hrTrab = 50;
// hrTrab = +prompt(`Ingrese las Horas Trabajadas: `);
let sSeman = 0;

let hrExtra = 0;
let pagoExtra = 0;
if (hrTrab >= hrBase) {
    hrExtra = hrTrab - hrBase;
    pagoExtra = hrExtra * 2 * pagoH;
    sSeman = hrTrab * pagoH + pagoExtra;
    console.log(`El sueldo semanal corresponde a : ${sSeman}`);
}
else {
    sSeman = hrTrab * pagoH;
    console.log(`El sueldo semanal corresponde a : ${sSeman}`);
}

//////////////////////////
//     #03

let dDisponible = 150;
// dDisponible = +prompt(`¿Con cuanto dinero cuentas?`);

if (dDisponible === 10) {
    console.log(`Con tus: S/.${dDisponible} puedes comprarle una tarjeta `);

}
if (dDisponible > 10 && dDisponible<=100) {
    console.log(`Con tus: S/.${dDisponible} puedes comprarle chocolates `);

}

if (dDisponible > 100 && dDisponible<=250) {
    console.log(`Con tus: S/.${dDisponible} Mínimo puedes comprarle flores `);

}
if (dDisponible>250) {
    console.log(`Con tus: S/.${dDisponible} °?° puedes comprarle un ANILLO `);

}

//////////////////////////
//     #04

let hEstacionada=15;
let pago=0;
    // hEstacionada = +prompt(`¿Cuantas horas estacionó el auto?`);

if (hEstacionada <=2) {
    pago=5*hEstacionada;
    console.log(`Con las ${hEstacionada} horas estaciondas debes pagar: S/.${pago} `);

}
if (hEstacionada > 2 && hEstacionada<=5) {
    pago=4*hEstacionada;
    console.log(`Con las ${hEstacionada} horas estaciondas debes pagar: S/.${pago}`);

}

if (hEstacionada > 5 && hEstacionada<=10) {
    pago=3*hEstacionada;
    console.log(`Con las ${hEstacionada} horas estaciondas debes pagar: S/.${pago} `);

}
if (hEstacionada>10) {
    pago=2*hEstacionada;
    console.log(`Con las ${hEstacionada} horas estaciondas debes pagar: S/.${pago} `);

}

//////////////////////////
//     #08 bonos

// let antiguedad=0;
// let tCobertura= " ";
// let bono =0;
// let honorario=0;
// tbono= prompt(`BONO POR ANTIGUEDAD :antiguo  BONO POR SUELDO ALTO :sueldo   `);

// switch(tbono)
// {
//     case "antiguo":
//         antiguedad=+prompt(`¿Cuantos años de Antiguedad tiene?`);
//         honorario=+prompt(`¿Cuánto es su sueldo?`);
//         if(antiguedad>=2 && antiguedad<5)
//         {
//             bono=honorario*0.2;
            
//         }
//         if(antiguedad>=5)
//         {
//             bono=honorario*0.3;
//         }
//         console.log(`Tu bono corresponde a: S/.${bono}`);
//     break;

//     case "sueldo":
//         honorario=+prompt(`¿Cuánto es su sueldo?`);
//         if(honorario<1000)
//         {
//             bono=honorario*0.25;
            
//         }
//         if(honorario>=1000 && honorario<=3500)
//         {
//             bono=honorario*0.15;
//         }
//         if(honorario>3500)
//         {
//             bono=honorario*0.10;
//         }
//         console.log(`Tu bono corresponde a: S/.${bono}`);
//     break;
//     default:
//     console.log(`errorsh`);

// }



let tCobertura= " ";
let baseA=1200;
let baseB=950;
let cobertura=0;
let alcoholico=false;
let lentes=false;
let oEnfermedad=false;
tCobertura= prompt(`COBERTURA ÁMPLIA : A   DAÑOS A TERCEROS  : B   `);
let edad=+prompt(`Ingrese la edad: `);
let h_Alcohol=prompt(`¿hingiere alcohol?: `);

if( h_Alcohol=="si")
{
alcoholico=true;
}
let usaLentes= prompt(`¿Usa lentes?: `);
if( usaLentes=="si")
{
lentes=true;
}
let enfermo=prompt(`tienes otras enfermedades: `);
if(enfermo=="si")
{
oEnfermedad=true;
}


switch(tCobertura)
{
    case "A":
        if(edad>=40)
        {
            cobertura=cobertura+ baseA*0.2;

        }
        else{
            cobertura=cobertura+ baseA*0.1;

        }

        if(alcoholico==true)
        {
            cobertura=cobertura+ baseA*0.1;
                      
        }
        if(lentes==true)
        {
            cobertura= cobertura+ baseA*0.05;                      
        }
        
        if(oEnfermedad==true)
        {
            cobertura= cobertura+ baseA*0.05;                      
        }

        console.log(`te cuesta: S/.${cobertura}`)

    break;

    case "B":
        
        if(edad>=40)
        {
            cobertura=cobertura+ baseB*0.2;

        }
        else{
            cobertura=cobertura+ baseB*0.1;

        }

        if(alcoholico==true)
        {
            cobertura=cobertura+ baseB*0.1;
                      
        }
        if(lentes==true)
        {
            cobertura= cobertura+ baseB*0.05;                      
        }
        
        if(oEnfermedad==true)
        {
            cobertura= cobertura+ baseB*0.05;                      
        }
        console.log(`te cuesta: S/.${cobertura}`)
    break;
    default:
    console.log(`errorsh`);

}
