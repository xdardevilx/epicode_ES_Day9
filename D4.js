/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
const area = function (l1, l2) {
  const altezza = l1;
  const base = l2;
  const totalArea = base * altezza;
  return totalArea;
};
console.log("l'area del rettangolo è: ", area(10, 15));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (int1, int2) {
  let result;
  if (int1 === int2) {
    result = (int1 + int2) * 3;
  } else {
    result = int1 + int2;
  }
  return result;
};
console.log("questo è il risultato inserito nell else:", crazySum(5, 10));
console.log("questo è il risultato inserito nell if:", crazySum(10, 10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const crazyDiff = function (int1) {
  let diff;
  if (int1 > 19) {
    diff = (int1 - 19) * 3;
  } else {
    diff = int1 - 19;
  }
  return diff;
};
console.log("questo è il risultato inserito nell if:", crazyDiff(21));
console.log("questo è il risultato inserito nell else:", crazyDiff(8));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  let numberint = n;
  if ((numberint >= 20 && numberint <= 100) || numberint === 400) {
    numberint = true;
  } else {
    numberint = false;
  }
  return numberint;
};
console.log(
  "la risposta sara true o false in base al numero inserito come argomento:",
  boundary(400)
);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  const ep = "EPICODE";
  if (str.indexOf(ep) !== 0) {
    let addEp = ep + " " + str;
    return addEp;
  } else {
    return str;
  }
};
console.log(
  epify("ciao sono valerio e sto frequentendo un corso di programmazione")
);
console.log(
  epify(
    "EPICODE ciao sono valerio e sto frequentendo un corso di programmazione"
  )
);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (number) {
  let num = number;
  if (num % 3 === 0 || num % 7 === 0) {
    console.log();
    return "il numero è un multiplo di 3 o di 7";
  } else {
    return "il numero non è un multiplo di 3 o di 7";
  }
};
console.log(check3and7(7));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (insertTostring) {
  return insertTostring.split("").reverse().join("");
};
console.log(reverseString("epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (insertTostring) {
  return insertTostring
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(upperFirst("ciao mondo sono valerio"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (insertTostring) {
  return insertTostring.slice(1, -1);
};

console.log(cutString("ciao io sono valerio"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const giveMeRandom = function (n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    array.push(randomNumber);
  }
  return array;
};
console.log(giveMeRandom(10));

//---------------------------------------------------------------EXTRA--------------------------------------------------------------------------------------

const checkArray = function (insertArrayGenerator) {
  let sum = 0;
  for (let i = 0; i < insertArrayGenerator.length; i++) {
    const number = insertArrayGenerator[i];
    if (number > 5) {
      console.log(number);
      sum += number;
    }
  }
  console.log("Somma degli elementi superiori a 5: " + sum);
};
// const generatorArray = giveMeRandom(10);
console.log(checkArray(giveMeRandom(10)));

//non sò perchè mi da undefined dopo aver stampato in console
