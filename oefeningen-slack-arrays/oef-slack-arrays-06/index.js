/*
Oefening 6
Zorg ervoor dat je het alfabet in een array inleest in kleine letters. Gebruik hiervoor een lus
Zorg ervoor dat je deze array naar een andere array kopieert en dat deze opgevuld is met het alfabet in hoofdletters
Je mag geen gebruiken maken van de functies lowercase of uppercase!*/

let lowercaseAlphabet = [];

for(let i = 0; i<26 ; i++ ){
    lowercaseAlphabet.push(String.fromCharCode(97 + i));
}

console.log(lowercaseAlphabet);

let uppercaseAlphabet = [];

for(let i = 0; i<26 ; i++ ){
    uppercaseAlphabet.push(String.fromCharCode(65 + i));
}

console.log(uppercaseAlphabet);