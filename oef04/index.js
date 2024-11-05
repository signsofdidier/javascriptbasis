// 2. Begroeting: Schrijf een functie begroet die een naam als parameter ontvant en een begroeting retourneert
// output = "Hallo Tom!"

let mijnNaam = prompt("Geef je naam in");
function begroet(naam){
    return `Hallo ${naam}`; // schrijf eerst dit als wat er moet gebeuren
}
console.log(begroet(mijnNaam));
