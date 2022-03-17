function pijarFood(hargaItem, kodeVoucher, jarakTempuh, pajakResto) {
    let potonganHarga
    let biayaAntar
    let totalPajakResto
    if (typeof(hargaItem) !== "number" || hargaItem < 0 || !hargaItem) {     // Validasi parameter hargaItem
        return "Data harga pemesanan harus number dan tidak boleh bernilai kurang dari 0" 
    }
    if (kodeVoucher == "" || kodeVoucher == false || kodeVoucher == null) { // Kondisi jika parameter kodeVoucher kosong / false / null
        potonganHarga = 0
    } else if (typeof(kodeVoucher) !== "string") {                                  // Validasi parameter kodeVoucher
        return "Kode voucher harus string"
    }
    if (typeof(jarakTempuh) !== "number" || jarakTempuh < 0 || !jarakTempuh) {   // Validasi parameter jarakTempuh
        return "Data jarak tempuh harus number dan tidak boleh bernilai kurang dari 0"
    }
    if (typeof(pajakResto) !== "boolean") {                                  // Validasi parameter pajakResto
        return "Data pajak resto harus bertipe boolean"
    }
    if (kodeVoucher == "PIJARFOOD5") {
        if (hargaItem >= 50000){                                        // Validasi harga item minimal 50.000 untuk PIJARFOOD5
            potonganHarga = 0.5 * hargaItem
            if (potonganHarga > 50000) {                              // Membatasi maksimal diskon jika melebihi dari 50.000
            potonganHarga = 50000
            }
        } else {                                                       // Jika tidak memenuhi minimal harga item maka potongan harga 0
            potonganHarga = 0
        }
    } else if (kodeVoucher == "DITRAKTIRPIJAR") {
        if (hargaItem >= 25000) {                                       // Validasi harga pesanan minimal 25.000 untuk DITRAKTIRPIJAR
            potonganHarga = 0.6 * hargaItem
            if (potonganHarga > 30000) {                              // Membatasi maksimal diskon jika melebihi dari 30.000
            potonganHarga = 30000
            }
        } else {
            potonganHarga = 0                                          // Jika tidak memenuhi minimal harga item maka potongan harga 0
        }
    } else {
        potonganHarga = 0
        }
    if (jarakTempuh > 2) {                                                 
        let jarakTempuhTambahan = jarakTempuh - 2                          // Kondisi dimana jarak tempuh lebih dari 2km. maka akan ada biaya tambahan 3000 setiap 1km
        biayaAntar = 5000 + (jarakTempuhTambahan * 3000)                   // penghitungan total biaya antar menjadi, biaya minimal antar + (selisihjarak x 3000)
    } else {
        biayaAntar = 5000                                                  // Kondisi dimana jika jarak tempuh tidak lebih dari 2km maka biaya antar = 5000
    }
    if (pajakResto == true) {                                               // kondisi dimana resto memakai pajak
        totalPajakResto = 0.05 * hargaItem
    } else {                                                               // kondisi jika resto tidak memakai pajak
        totalPajakResto = 0
    }
    return `Harga       : ${hargaItem}
Potongan    : ${potonganHarga}
Biaya antar : ${biayaAntar}
Pajak       : ${totalPajakResto}
Subtotal    : ${hargaItem - potonganHarga + biayaAntar + totalPajakResto}`
}
console.log(pijarFood(75000, "PIJARFOOD5", 5, true))