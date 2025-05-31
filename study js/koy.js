let round = prompt("เล่นหี่รอบ? ")
for(var i = 1; i <parseInt(round)+1; i++) {
    var answer = prompt("หัวหรือก้อย: ")
    var random = ""
    if (Math.floor(Math.random() * 2) == 0){
        //หัว
        random = "หัว"
        if (answer == random) {
            alert("you win")
        } else {
            alert("you lose")
        }
    } else {
        //ก้อย
        random = "ก้อย"
        if (answer == random) {
            alert("you lose")
        } else {
            alert("you lose")
        }
    }
}