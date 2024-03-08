/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// // ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

// /*
// 1. La funzione controlla se l'età è maggiore o minore di 18 anni e restituisce un messaggio diverso
// 2. Sì, message non è una constante perchè assume valore diversi nel codice. Andrebbe inizializzata con let message = ''
// 3. Sì, per mostrare il messaggio andrebbe restituito message con un return, e quindi tale variabile va inizializzata a livello globale, non nello scope della funzione. Per rendere più riutilizzabile la funzione, sarebbe anche più logico passare myAge come parametro alla funzione e definirlo quindi esternamente alla funzione.
// */

// // ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

// /*
// 1. La funzione stampa in console quanti elementi (colori) sono presenti in un array
// 2. Sì, è stato scritto "lenght" al posto di "length"
// 3. No
// */

// // ESERCIZIO 3
// function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// /*
// 1. La funzione chiede con un prompt all'utente di inserire un numero e poi somma il numero a 12 e mostra in console il risultato finale
// 2. No
// 3. Sì, il prompt è una stringa e va trasformato con parseInt(prompt('Inserisci un numero')) in un numero per poter effettuare una somma
// */

// // ESERCIZIO 4
// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     if (addresses.includes(userEmail)) {
//         grantAccess = 'true';
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccess();

// /*
// 1. Dato un elenco di indirizzi a cui l'accesso è consentito, la funzione controlla se l'indirizzo inserito dall'utente tramite prompt è incluso e quindi ha ccesso o meno
// 2. Sì, sulla base di come sono stati assegnati i valori a grantAccess, nel secondo if occorre controllare se grantAccess è uguale a 'true', non solo a true senza virgolette.
// 3. No
// */

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();

// /*
// 1. TBD
// 2. Sì, la parentesi graffa della funzione non è mai stata chiusa
// 3. No
// */