
// 3. Hoogste Getal: Gebruik Math.max() in een functie hoogste die het grootste getal van drie parameters retourneert.

let getal1 = parseInt(prompt("Geef getal 1 in"));
let getal2 = parseInt(prompt("Geef getal 2 in"));
let getal3 = parseInt(prompt("Geef getal 3 in"));

function hoogste(a,b,c){
    return Math.max(a,b,c)
}

console.log(hoogste(getal1,getal2,getal3));