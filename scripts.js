var spins = localStorage.getItem("spins")
if (!spins) {
  localStorage.setItem("spins", "0")
}

localStorage.clear()

const chances = [
  { chance: 10000000, color: 'pink' },
  { chance: 1000000, color: 'purple' },
  { chance: 100000, color: 'blue' },
  { chance: 10000, color: 'green' },
  { chance: 1000, color: 'yellow' },
  { chance: 100, color: 'orange' },
  { chance: 10, color: 'red' },
  { chance: 5, color: 'gray' },
]

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function determineChance() {
  for (let {chance, color} of chances) {
    const roll = Math.floor(Math.random() * chance) + 1
    if (roll === 1) {
       const capColor = color[0].toUpperCase() + color.slice(1)
       document.body.innerText = `${capColor} - 1 in ${numberWithCommas(chance)}`
       document.body.style.backgroundColor = color
       var spints = parseInt(localStorage.getItem("spins"))
       localStorage.setItem("spins", ++spints)
       document.title = `Spins: ${spints}`
       
       return
    }
  }
  
  // If here, no hits
  document.body.innerText = 'Nothing.'
  var spints = parseInt(localStorage.getItem("spins"))
  localStorage.setItem("spins", ++spints)
  document.title = `Spins: ${spints}`
}

determineChance()
