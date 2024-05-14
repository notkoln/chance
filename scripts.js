var chance1 = Math.floor(Math.random() * 10) + 1
var chance2 = Math.floor(Math.random() * 100) + 1
var chance3 = Math.floor(Math.random() * 1000) + 1
var chance4 = Math.floor(Math.random() * 10000) + 1

if (chance1 === 1) {
  document.body.innerText = "Red - 1 in 10"
  document.body.style.backgroundColor = "red"
}

if (chance2 === 1) {
  document.body.innerText = "Orange - 1 in 100"
  document.body.style.backgroundColor = "orange"
}

if (chance3 === 1) {
  document.body.innerText = "Yellow - 1 in 1,000"
  document.body.style.backgroundColor = "yellow"
}

if (chance4 === 1) {
  document.body.innerText = "Green - 1 in 10,000"
  document.body.style.backgroundColor = "green"
}
