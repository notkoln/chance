var spins = localStorage.getItem("rolls")
if (!spins) {
  localStorage.setItem("rolls", "0")
}

const chances = [
  { chance: 10000000000000, color: 'tomato' },
  { chance: 1000000000000, color: 'magenta' },
  { chance: 100000000000, color: 'cyan' },
  { chance: 10000000000, color: 'lime' },
  { chance: 1000000000, color: 'gold' },
  { chance: 100000000, color: 'coral' },
  { chance: 10000000, color: 'pink' },
  { chance: 1000000, color: 'purple' },
  { chance: 100000, color: 'blue' },
  { chance: 10000, color: 'green' },
  { chance: 1000, color: 'yellow' },
  { chance: 100, color: 'orange' },
  { chance: 10, color: 'red' },
  { chance: 5, color: 'olive' },
  { chance: 3, color: 'tan' },
]

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function determineChance() {
  for (let {chance, color} of chances) {
    const roll = Math.floor(Math.random() * chance) + 1
    if (roll === 1) {
       const capColor = color[0].toUpperCase() + color.slice(1)
       document.getElementById("txt").innerText = `${capColor} - 1 in ${numberWithCommas(chance)}`
       document.body.style.backgroundColor = color
       
       return
    }
  }
  
  // If here, no hits
  document.getElementById("txt").innerText = 'Nothing.'
}

function ifspace(e) {
  e = e || window.event;
  
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    determineChance()
    var spints = parseInt(localStorage.getItem("rolls"))
    localStorage.setItem("rolls", ++spints)
    document.title = `Spins: ${numberWithCommas(spints)}`
  }
}
