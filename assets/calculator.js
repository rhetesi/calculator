'use strict';

/*
Kell:
KÉSZ Eseményfigyelő a normál és a műveleti gombokhoz
- lenyomásukra értékük megjelenítése a kijelző mezőjében
KÉSZ Eseményfigyelő a 'C' gombra
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
-- appendAdjacentHTML

KÉSZ - Függvények
sum(mmation) = a + b
sub(traction) = a - b
mul(tiply) = a * b
div(ision) = a / b

*/

let inputString = '';
const display = document.querySelector('.display');

// const displayInitContent = document.querySelector('.display').textContent;

/* Handling the click event on a button */

const handleClick = () => {
    let buttons = document.querySelectorAll('.btn__opOrNum');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            document.querySelector('.display').insertAdjacentText('beforeend', buttons[i].textContent);
        })
    }
}
handleClick();

const handleClickClear = () => {
    let clerButton = document.querySelector('.btn__clear');
        clerButton.addEventListener('click', () => {
            // document.querySelector('.display').innerHTML = displayInitContent;
            document.querySelector('.display').textContent = '';

        })
}
handleClickClear();

const handleClickEqual = () => {
    let equalButton = document.querySelector('.btn__equal');
        equalButton.addEventListener('click', () => {
            inputString = document.querySelector('.display').textContent;
            console.log(inputString);
            //console.log(summation(15, 27)); // OK - külső függvénynek kell átadni paraméterként a stringet
            // s majd annak a return-je visszaküldi, hogy kiíassuk
            const sum = summation(15, 27); // Itt kell meghívni a számolásért felelős függvényt
            // aminek a visszatérési értéke lesz a sum, azaz valójában átnevezve resultContent!
            
            const resultContent = inputString + sum; // Ha az elú sum maga a resultContent,
            // akkor ez itt nem is kell.
            
            display.textContent = '';
            display.insertAdjacentText('beforeend', resultContent);
        })
    
}
handleClickEqual();


// String szétszedése tömbökre



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
*/



/* Mathematical functions */
const summation = (a = 0, b = 0) => a + b;

const subtraction = (a = 0, b = 0) => a - b;

const multiply = (a = 1, b = 1) => a * b;

const division = (a = 0, b = 1) => a / b;

//const a = 37, b = 12;
//console.log(summation(a, b));
//console.log(subtraction(a, b));
//console.log(multiply(a, b));
//console.log(division(a, b));


/* const testArray = [1, 2, 'alpha', 3, 15, 'beta', 4];

const numArray = (arr) => arr.map(item => typeof item === 'number');
console.log(numArray(testArray)); */

const testString = '2369+458-12*5/6';

const testNumbersArray = [];
const regExpNum = /\d+/g;
const testOperatorsArray = [];
const regExpOp = /\D/g;
console.log(testString.match(regExpNum));
console.log(testString.match(regExpOp));

/*
Milyen jó a regular expressions használata
A '+' operátor pedig kifejezetten hasznos, így az egymás utániakat a következő szeparátorig egynek veszi!

Súgó:

0.) How to split string javascript keresés után rálelve a reguláris kifejezésekre:

1.) Innen indultam:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

2.) Itt jött a '+' operátor használata:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges

Továbbiak:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet

*/