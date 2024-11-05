// 23 Bereken Dagen Tussen Twee Datums: Schrijf een functie dagen
// Tussen die het aantan dagen tussen twee datums retourtneers

// parse zet datum naar milliseconden
// Math.abs is absolute waarde (zodat alles positief is bv -5 wordt 5)
// dagen uitrekenen: 1000 ms * 60 seconden * 60 min * 24 uren

function dagenTussen (datum1, datum2){
    const tijdverschil = Math.abs(Date.parse(datum2) - Date.parse(datum1));
    return tijdverschil / (1000 * 60 * 60 * 24);
}

console.log(dagenTussen('2024-11-04', '1973-11-08'));

// Uitbreiding
function jarenEnMaanden(datum1, datum2){
    const dagen = dagenTussen (datum1, datum2) // 18624

}

onafgewerkt