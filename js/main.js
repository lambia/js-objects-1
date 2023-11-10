/******************** LAVORIAMO SU UN ARRAY ********************/
// const lista = [ "ciao", "sono", "luca", "testo", "casuale" ];

// for (let i = 0; i < lista.length; i++) {
//     console.log( `${i}: `, lista[i] );
// }

// var parolaDaStampare = parseInt( prompt("Quale parola vuoi leggere?") );
// console.log( lista[parolaDaStampare] );

/*************** LAVORIAMO SU UN OGGETTO PERSONA ***************/
// const persona = {
//     nome: "kristian",
//     cognome: "filiposki",
//     eta: 25,
//     indirizzo: {
//         via: "roma",
//         civico: 35
//     }
// };

// var proprietaDaStampare = prompt("Cosa vuoi conoscere?");
// console.log( persona[proprietaDaStampare] );

// for(let chiave in persona) {
//     console.log( `${chiave}: `, persona[chiave] );
// }

// console.log( persona.indirizzo.via );

/********** LAVORIAMO SU UN ARRAY DI OGGETTI PERSONA ***********/

const studenti = [
    {
        nome: "kristian",
        cognome: "filiposki",
        eta: 25
    },
    {
        nome: "giuseppe",
        cognome: "del corso",
        eta: 26
    },
    {
        nome: "marco",
        cognome: "percolla",
        eta: 25
    },
];

for (let i = 0; i < studenti.length; i++) {
    
    // console.log(`Nome: ${studenti[i].nome} - Cognome: ${studenti[i].cognome} - Eta: ${studenti[i].eta}`);
    
    for(let chiave in studenti[i]) {
        console.log( chiave, studenti[i][chiave] );
    }

}

