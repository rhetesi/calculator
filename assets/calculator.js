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

ALAKUL - Függvények
sum(mmation) = a + b
sub(traction) = a - b
mul(tiply) = a * b
div(ision) = a / b

*/

const teststring = '-36+25-45';
let a = parseInt(teststring);
console.log(a, a.length);


/* Mathematical functions */
const summation = (a, b) => a + b;

const subtraction = (a, b) => a - b;

const multiply = (a, b) => a * b;

const division = (a, b) => a / b;


const b = 12;
console.log(summation(a, b));
console.log(subtraction(a, b));
console.log(multiply(a, b));
console.log(division(a, b));
