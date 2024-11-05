/*
Oefening 1
Schrijf een programma waarmee je aan de gebruiker vraagt om getallen in te geven tot hij een negatief getal intikt.
Lees de getallen in een array in.
Geef GETAL x in:
Vervolgens vraag je aan de gebruiker het hoeveelste getal hij wenst te zien op het scherm.*/

let getal = parseInt(prompt("Geef een getal in"));
let getallen = [];


for (let i = 1; i>0 ; i++ ){
    if (getal<0){
        break;
    }else{
        getal = parseInt(prompt("Geef een getal in"));
        getallen.push(getal);
    }
}

let x = parseInt(prompt("Hoeveelste getal wil je zien op het scherm?"));

console.log(getallen);
console.log(getallen[x]);

// kmoet nog toevoegen zodat x vanaf 1 start