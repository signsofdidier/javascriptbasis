

// Vermenigvuldig en controlleer: Schrijf een functie vermenigvuldigEnControlleer die twee getallen vermenigvuldigt en controlleert of het resultaat groter is dan 100.

let getal1 = parseInt(prompt("Geef getal 1 in"));
let getal2 = parseInt(prompt("Geef getal 2 in"));
function vermenigvuldigEnControlleer(a,b){
    return (a*b) > 100;
}

console.log(vermenigvuldigEnControlleer(getal1,getal2));