var chance1 = Math.floor(Math.random() * 10) + 1
var chance2 = Math.floor(Math.random() * 100) + 1

if (chance1 === 1 && chance2 !== 1) {
  document.body.innerText = "Red - 1 in 10"
  document.body.style.backgroundColor = "red"
}

if (chance2 === 1 && chance1 !== 1) {
  document.body.innerText = "Orange - 1 in 100"
  document.body.style.backgroundColor = "orange"
}
