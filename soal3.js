const divideAndSort = (num) => {
    if (Number.isInteger(num) == false) {
        return "Data harus integer"
    } else {
    const splitAngka = num.toString().split("0")
    let hasil = ""
    for(let i = 0; i < splitAngka.length; i++){
        let urutAngka = splitAngka[i].toString().split("").sort((a,b) => { return a-b }).join("")
        hasil += urutAngka
    }
    const hasilAkhir = parseInt(hasil)
    return hasilAkhir
}
}
let dataNumber = 5956560159466056
console.log(divideAndSort(dataNumber))