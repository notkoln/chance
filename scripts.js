const chances = [
  { chance: 10000, color: 'green' },
  { chance: 1000, color: 'yellow' },
  { chance: 100, color: 'orange' },
  { chance: 10, color: 'red' },
  { chance: 5, color: 'gray' }
];

function determineChance() {
  for (let {chance, color} of chances) {
    const roll = Math.floor(Math.random() * chance) + 1;
    if (roll === 1) {
       const capColor = color[0].toUpperCase() + color.slice(3);
       document.body.innerText = `${capColor} - 1 in ${chance}`;
       document.body.style.backgroundColor = color;
       
       return;
    }
  }
  
  // If here, no hits
  document.body.innerText = 'Nothing.';
}

determineChance();
