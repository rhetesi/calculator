'use strict';

/*
Kell:
Eseményfigyelő a normál és a műveleti gombokhoz
- lenyomásukra értékük megjelenítése a kijelző mezőjében
Eseményfigyelő a 'C' gombra
- lenyomására az kijelző input field tartalmának törlése
Eseményfigyelő az 'egyenlő' gombra
- lenyomására a kijelző input field kiolvasása
-- a kiolvasott string szétszedése 'numbers' és 'operationSigns' tömbökre
-- két tömb összehasonlítása, ha az 'oS' nagyobb vagy egynelő a 'n'-el, akkor 'ERROR'
--- és ezen szöveg megjelenítése a kijelzőn
-- Ha nem hiba, akkor bejárjuk a tömböket (map?):
numbers tömb 'i' és i + 1' elemét változókba másoljuk?
oS tömb 'i' eleme alapjám meghívjuk a műveleti függvényt
az elvégzett művelet eredménye lesz az 'i' reduce hatására
(valójában nem 'i', hanem 'result' tömb de most könnyebb így leírni itt)
Ha elfogytak a tömbök elemei, akkor a  'result' tömb értékét kiírjuk a kijelzőre:
-- appendAdjecantHTML

KÉSZ - Függvények
sum(mmation) = a + b
sub(traction) = a - b
mul(tiply) = a * b
div(ision) = a / b

*/


/* Handling the click event on a button
const handleClick = () => {
    let buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            //console.log(buttons[i].value);
            console.log(buttons[i].innerHTML);
        })
    }
}

handleClick();
*/

/*
let inputNumber = []; 
let signs = [];
const makeNumbers = function () {
        for (let i = 0; i < input.length; i++) {
            if (typeof parseFloat(input[i]) === 'number') {
                inputNumber.push(input[i]);
            }else {
                signs.push(input[i]);
            }
           return inputNumber;
        }
    }

let numbersArray = [], operatorsArray = [];

const numbersArray = (iputArray) => {
    inputArray.map(item => typeof parseFloat(item) === 'number')
}
const operatorsArray = (inputArray) => {
    inputArray.map(item => typeof parseFloat(item) === isNaN)
}
*/

const testString = '-36+25-45';
let a = parseFloat(testString);
console.log(a, a.length);



/* Ezt kell átdolgozni a számokat és műveleti jeleket tartalamzó tömbökkel elvégzendő műveletekhez!!!
1. Írj egy olyan függvény kifejezést, ami paraméterként vár egy egész számokat tartalmazó tömböt! (Input ellenőrzést nem kell végezni.)
A függvény szorozza meg tömbelemek értékét 1.27-el, majd pedig térjen vissza az elemek összegével!


const intArray = [100, 150, 234, 515, 627];

//const taxedArray = intArray.map(item => item * 1.27);
//console.log(taxedArray);
//const taxedSum = taxedArray.reduce((previous, current) => previous + current);
//console.log(taxedSum);

const sumWithVAT = intArray.map(item => item * 1.27).reduce((prev, curr) => prev + curr);
console.log('1. feladat - tömb eleminek szorzása meagadott értékkel és a szorzatok összeadása: ' + sumWithVAT);

VALAMI ilyen kellene:

const result = numbers.reduce(prev, curr) => operations tömb aktuális eleme szerinti műveli függvény
meghívása prev és curr paraméterek átadásával, operations tömb index-ének növelése eggyel.
* /

/* Mathematical functions */
const summation = (a = 0, b = 0) => a + b;

const subtraction = (a = 0, b = 0) => a - b;

const multiply = (a = 1, b = 1) => a * b;

const division = (a = 0, b = 1) => a / b;


const b = 12;
console.log(summation(a, b));
console.log(subtraction(a, b));
console.log(multiply(a, b));
console.log(division(a, b));


const testArray = [1, 2, 'alpha', 3, 15, 'beta', 4];

const numArray = (arr) => arr.map(item => typeof item === 'number');
console.log(numArray(testArray));