/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
  console.log(i);
}
/*
1. Stampa in console i per n volte
2. No, nessun errore di sintassi
3. Sì, il ciclo for non viene mai eseguito perchè i è inizializzata a 0 ma la condizione per eseguire il ciclo è finchè i è maggiore di 5, che non è vera già subito
*/

// ESERCIZIO 2
function addIfEven(num) {
  if (num % 2 = 0) {
    return num + 5;
  }
  return num;
}

/*
1. Controlla se un numero è pari e, se è pari, lo somma a 5
2. Sì, dentro l'if viene fatta un'assegnazione con "=", mentre andrebbe verificata una condizione con "==="
3. No
*/

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
