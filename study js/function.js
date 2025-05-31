function say() {
    alert("Hello")
}

function tocel(fah) {
    let cel = (fah-32)*5/9
    alert(cel.toFixed(2) + " C")
}

function tofah(cel) {
    let fah = (cel*9)/5+32
    alert(fah.toFixed(2) + " F")
}

function output(elementid, value) {
    document.getElementById(elementid).innerHTML = value
}
