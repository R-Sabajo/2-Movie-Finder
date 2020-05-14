// Deel 1 - Elementen toevoegen aan de DOM

// Selecteer de Knoppen voor de dieren uit het HTML document

const lionBtn = document.querySelector('ul').getElementsByTagName('button')[0];

const leopardBtn = document
  .querySelector('ul')
  .getElementsByTagName('button')[1];

const elephantBtn = document
  .querySelector('ul')
  .getElementsByTagName('button')[2];

const rhinoBtn = document.querySelector('ul').getElementsByTagName('button')[3];

const buffaloBtn = document
  .querySelector('ul')
  .getElementsByTagName('button')[4];

// Maak een nieuw list-item voor de diernamen

let newLion = document.createElement('li');
newLion.innerHTML = 'Lion';
console.log(newLion);

let newLeopard = document.createElement('li');
newLeopard.innerHTML = 'Leopard';
console.log(newLeopard);

let newElephant = document.createElement('li');
newElephant.innerHTML = 'Elephant';
console.log(newElephant);

let newRhino = document.createElement('li');
newRhino.innerHTML = 'Rhino';
console.log(newRhino);

let newBuffalo = document.createElement('li');
newBuffalo.innerHTML = 'Buffalo';
console.log(newBuffalo);

// Selecteer de lijst van gespotte dieren

const spottedAnimals = document.getElementById('spotted-animals-list');

console.log(spottedAnimals);

// Maak een functie voor elke knop om het bijbehorende dier toe te voegen mbv Eventlistener

lionBtn.addEventListener('click', e => {
  console.log('Lion');
  spottedAnimals.appendChild(newLion);
});

leopardBtn.addEventListener('click', e => {
  console.log('Leopard');
  spottedAnimals.appendChild(newLeopard);
});

elephantBtn.addEventListener('click', e => {
  console.log('Elephant');
  spottedAnimals.appendChild(newElephant);
});

rhinoBtn.addEventListener('click', e => {
  console.log('Rhino');
  spottedAnimals.appendChild(newRhino);
});

buffaloBtn.addEventListener('click', e => {
  console.log('Buffalo');
  spottedAnimals.appendChild(newBuffalo);
});

//  Deel 2 - 1 element verwijderen uit de DOM

// selecteer de button 'Remove the first'

const removeFirstBtn = document.querySelector('#remove-first-item-button');

console.log(removeFirstBtn);

// voeg eventlistener toe die ervoor zorgt dat als er op de knop wordt gedrukt, het eerste element wordt verwijderd.

removeFirstBtn.addEventListener('click', e => {
  spottedAnimals.firstElementChild.remove();
});

// voeg eventlistener toe die ervoor zorgt dat als er op de knop remove  all wordt gedrukt, alle elementen worden verwijderd.

const removeAllBtn = document.querySelector('#remove-all-button');

removeAllBtn.addEventListener('click', e => {
  console.log('remove');
  spottedAnimals.innerHTML = '';
});
