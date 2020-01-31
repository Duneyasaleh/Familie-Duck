// alle plaatjes van de duckfamilie in een array
const plaatjes  = document.querySelectorAll('.duck img');
const bolletjes = document.getElementById('bolletjes');

// hoogte gelijkmaken aan de eerste sectie
document.getElementsByClassName('info')[0].style.height = document.getElementsByClassName('duck')[0].clientHeight +'px';

for(let i=0; i<plaatjes.length; i++) {
    plaatjes[i].addEventListener('mouseenter', vulKopAan);
    plaatjes[i].addEventListener('mouseleave', resetKop);
    plaatjes[i].addEventListener('click', kleurinfo );
    // plaatjes[i].aadEventListener('dblclick', balltjes);
    // hier kun je nog 2 events aan toevoegen: click en dblclick
}

function vulKopAan() {
    document.getElementById('duck').innerText = ": "+this.title;
    document.getElementById('kop').style.color  = this.dataset.kleur;
}

function resetKop() {
    document.getElementById('duck').innerText = "";
    document.getElementById('kop').style.color  = 'red';
}


function kleurinfo(){
  document.getElementById('titel').innerText = this.title;
  document.getElementById('informatie').innerHTML = this.dataset.info;
 document.getElementById('informatie').style.fontSize = '10px';
 document.getElementById('titel').style.color = this.dataset.kleur;
 document.getElementById('informatie').style.color = this.dataset.kleur;
 document.getElementById('infor').style.border = '5px solid' +this.dataset.kleur ;
}
// function balltjes(){
// // document.getElementsByClassName('duck').innerHTML = this.dataset.clicks;
//
//
//
// }
/*
    Maak een functie, die aangeroepen wordt door een klik op de afbeelding.
    Deze moet om de geklikte afbeelding een rand maken met de kleur, die
    te vinden is in het data-kleur attribuut.
    Het element.dataset.eigenschap heb je van een element de waarde van 'data-eigenschap'

    Bovendien moet de sectie info gevuld worden: zowel de kop h3#titel als de p#info.
    De inhoud staat in de het alt-attribuut als een ander data-attribuut van de afbeelding.

    */


/**
    Maak noeg een functie die aangeroepen wordt door een dubbelklik.
    In de attributen van elke afbeelding staat een data-attribuut, data-clicks,
    die moet worden opgehoogd.
    Bovendien moet de inhoud van die data-clicks worden ingevoegd in de p.likes.
    Tot slot moet er een div met de class 'bolletje' en de achtergrondkleur uit
    data-kleur toegevoegd worden aan het element div#bolletjes
*/
///
