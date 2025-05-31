let qrt = prompt("กรอกจำนวนสินค้า: ")
var result = 0


for(var i = 1; i <parseInt(qrt)+1; i++) {
    let item = prompt("กรอกราคาสินค้าชิ้นที่ " + i)
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ "+ i + ": " + item + " บาท" + "<br>"
    result = result + parseInt(item)
}

document.getElementById("result").innerHTML = "ราคารวม " + result + " บาท" 