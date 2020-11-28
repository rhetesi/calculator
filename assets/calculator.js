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

const testString = '-36+25-45';
let a = parseInt(testString);
console.log(a, a.length);


/* Mathematical functions */
const summation = (a = 0, b = 0) => a + b;

const subtraction = (a = 0, b = 0) => a - b;

const multiply = (a = 0, b = 0) => a * b;

const division = (a = 0, b = 0) => a / b;


const b = 12;
console.log(summation(a, b));
console.log(subtraction(a, b));
console.log(multiply(a, b));
console.log(division(a, b));
