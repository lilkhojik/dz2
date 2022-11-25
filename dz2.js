let son = +prompt("Son kiriting")
while (isNaN(son) || son == 0) {
    son = +prompt("Son kiriting")
}
let deg = +prompt("Darajani kiriting")
while (isNaN(deg) || son == 0) {
    deg = +prompt("Darajaga son kiriting")
}
let summa = 1
for (let d = 0; d < deg; d++) {
    summa *= son
}
alert(" Javob = "+summa)