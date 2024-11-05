// Stap 1: Vraag aan de gebruiker hoeveel namen hij wil ingeven
// Stap 2: Iedere naam wordt aan de array doorgegeven (push)
// Stap 3: Ik wil een console.log(namen)
// Stap 4: Sorteer de namen alfabetisch (sort)
// Stap 5: Sorteer de namen in de omgekeerde volgorde (reverse)


let hoeveelNamen = parseInt(prompt("Hoeveel namen wil je ingeven?"));
let namen = []; // begin met lege array

//for loop voor het vragen van de namen
for (let i = 1; i <= hoeveelNamen; i++){
    let naam = prompt(`Geef een naam ${i} in`); // geef de naam in
    namen.push(naam); // neem de naam array en push daar telkens de ingegeven naam bij
}

console.log(namen);
console.log(namen.sort());
console.log(namen.sort().reverse()); // 2 functies na elkaar mag
