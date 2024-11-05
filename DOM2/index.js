let introElement = document.querySelector("#intro");
introElement.innerHTML = "<strong>Dit is een wijziging</strong>"; // innerHTML kan je stijl tags toevoegen zoals STRONG
// introElement.innerText = "<strong>Dit is een wijziging</strong>"; // Dit pakt alles incl <strong> tag voor bvb code voorbeelden

let logo = document.querySelector("#logo");
logo.setAttribute("src", "nieuwe_logo.png"); // foto veranderen
logo.setAttribute("alt", "nieuwe-alt"); // alt tekst veranderen