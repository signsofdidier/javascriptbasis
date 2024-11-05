let namen = ["Jan", "Piet", "Klaas"];

// eerste naam is 0

console.log(namen[0]);
console.log(namen.push("Fabio"));
console.log(namen[3]);
console.log(namen); // toont alle namen in de array
console.log(namen.push("Tom")); // push voegt naam toe
console.log(namen);
console.log(namen.pop()); // pop doet het laatste element terug weg
console.log(namen);
console.log(namen.shift()); // shift doet het eerste element in de rij weg
console.log(namen);
console.log(namen.unshift("Jonas", "Dieter")); //unshift voegt nieuwe naam toe in begin van de lijst (op de 0 positie)
console.log(namen);
console.log(namen.length); // geeft de hoeveelheid namen er in de array zitten

namen.forEach(naam => console.log(naam)); // forEach output altijd string

let getallen = [1,2,3];
let verdubbeld = getallen.map(getal => getal * 2); // output altijd terug een array
console.log(verdubbeld);

let numbers=[1,2,3,4,5];
let evenGetallen = numbers.filter(getal => getal % 2 === 0); // filter geeft enkel weer wat true is in de lus
console.log(evenGetallen);

let nieuwenummers = [1,2,3,4];
let eersteGroterDanTwee = nieuwenummers.find(getal => getal > 2); // find is vind het eerste getal groter dan 2
console.log(eersteGroterDanTwee);

let index = nieuwenummers.findIndex(getal => getal > 2);
console.log(index);

let fruits = ["appel", "banaan", "peer", "kiwi", "kersen", "sinaasappel"];
let sommigeFruits = fruits.slice(3,6); // slice knipt na die plaats
console.log(sommigeFruits)

let tvfruits = fruits.splice(1,1, "druiven"); // splice 1, 0 voegt toe ertussen, splice 1, 1 vervangt
console.log(tvfruits);
console.log(fruits);

let newnumbers = [1,2,3,4];
let som = newnumbers.reduce((acc,num,) => acc + num, 0); // 0 + 1 + 2 + 3 + 4 (zie mdn)
console.log(som);