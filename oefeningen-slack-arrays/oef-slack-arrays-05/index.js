/*
Oefening 5
Zorg ervoor dat je het alfabet in een array inleest in kleine letters. Gebruik hiervoor een lus
Zorg ervoor dat je deze array naar een andere array kopieert en dat deze opgevuld is met het alfabet in hoofdletters
Gebruik een Built-in functie hiervoor
*/

let lowercaseAlphabet = [];

/*for-lus: Deze lus maakt een array lowercaseAlphabet met kleine letters van het alfabet. De String.fromCharCode(97 + i) geeft de ASCII-waarde van de kleine letters (a tot z) door telkens 1 op te tellen van 97 (de ASCII-code voor a).*/
for (let i = 0; i<26 ; i++ ){
    lowercaseAlphabet.push(String.fromCharCode(97 + i));
}

/*map()-functie: Dit is een ingebouwde JavaScript-methode waarmee je een nieuwe array kunt maken door elke waarde in de lowercaseAlphabet-array te transformeren. Hier gebruiken we letter.toUpperCase() om elke letter naar hoofdletters om te zetten.*/
let uppercaseAlphabet = lowercaseAlphabet.map(letter => letter.toUpperCase());

console.log(lowercaseAlphabet);
console.log(uppercaseAlphabet);
