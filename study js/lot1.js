let number = prompt("กรอกเลขที่ต้องการซื้อ: ")
console.log(number)
let loter = Math.floor(Math.random() * 100)
console.log(loter)
document.getElementById("youget").innerHTML = number
document.getElementById("loterry").innerHTML = loter

if (number == loter) {
    document.getElementById("reward").innerHTML = "congratulation"
} else {
    document.getElementById("reward").innerHTML = "sorry you don't reward"
}

let age = prompt("กรอกอายุ: ")
if (age == 12) {
    console.log("ไปดรียนป.6")
} else if (age == 13){
    console.log("ไปเรียนม.1")
} else {
    console.log("ไม่ต้องเรียน")
}
 