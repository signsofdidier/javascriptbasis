// 9. tel woorden: scrijf een functie telWooren die het aantal woorden in een string telt.

let mijnZin = "Dit is een zin";

// maak function en geef die een naam, tussen de () zet je dan de naam van wat de functie moet retourneren (zin)
function telWoorden(zin){
    return zin.split(" ").length;
}

// gebruik functie telWoorden() en zet in de haakjes waar je de functie op wil toepassen -> (mijnZin)
console.log(telWoorden(mijnZin));