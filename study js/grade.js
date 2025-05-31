let number = prompt("คะแนนของคุณ: ")

if (number >= 80) {
    document.getElementById("result").innerHTML = "คุณได้เกรด A"
} else if (number >= 70) {
    document.getElementById("result").innerHTML = "คุณได้เกรด B"
} else if (number >= 60) {
    document.getElementById("result").innerHTML = "คุณได้เกรด C"
} else if (number >= 50) {
    document.getElementById("result").innerHTML = "คุณได้เกรด D"
} else {
    document.getElementById("result").innerHTML = "คุณได้เกรด F"
}