let nieuweParagraaf = document.createElement("p"); // voeg een p tag toe met createElement
nieuweParagraaf.textContent = "Dit is een nieuwe paragraaf"; // Dit geeft nieuweParagraaf een content van tekst
nieuweParagraaf.style.backgroundColor="yellow" // verander stijl
document.body.appendChild(nieuweParagraaf); // appensChild voegt een child toe aan de body

let container = document.getElementById("container");
let paragraaf = document.getElementById("paragraaf");
container.removeChild(paragraaf); // verwijderd de child paragraaf uit de container parent