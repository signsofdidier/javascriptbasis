let introElement = document.getElementById("intro");
console.log(introElement.textContent);

let berichten = document.getElementsByClassName("bericht");
console.log(berichten[0].textContent); // textContent geeft de tekst inhoud weer.

let paragrafen = document.getElementsByTagName("p");
console.log(paragrafen[0].textContent);

let containerparagraaf = document.querySelector(".container");
console.log(containerparagraaf.children[0].textContent);

let items = document.querySelectorAll("ul li");
console.log(items.length);

