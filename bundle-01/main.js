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

/*
1. La funzione stampa in console i per 5 volte (da 0 a 4)
2. Sì, dentro il for occorre separarare l'inizializzazione di i, la condizione e l'incremento con ";" azichè ","
3. Sì, concettualmente sulla base del nome dato alla funzione sembra che l'obiettivo sia fare un ciclo for fino a 5, quindi andrebbe messa come condizione i <= 5 oppure i < 6
*/

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

/*
// 1. La funzione controlla se i numeri inseriti in un array sono pari e se si li pusha in un nuovo array di soli numeri pari
// 2. Sì, a) dentro il for non serve ";" dopo "i++", b) dentro l'if viene fatta un'assegnazione con "=", mentre andrebbe verificata una condizione con "===", c) dopo la condizione dell'if, fuori dalle parentesi, non serve ";"
// 3. Sì, a) il ciclo for deve continuare fino a che i < numbers.length, b) nell'if occorre controllare se l'elemento[i] dell'array number è pari, non se l'array è pari, c) se il numero è pari, occorre pushare non l'indice ma l'elemento a indice i, d) il return evenNumbers va fatto fuori dal ciclo for
*/