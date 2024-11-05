// 1. Controlleer Even of Oneven: Schrijf een functie isEven die controlleert of een getal even is
// resultaat moet true or false zijn.

let testGetal = parseInt(prompt("Geef getal in"));
function isEven(getal){
    return getal % 2 === 0;
}

console.log(isEven(testGetal));
