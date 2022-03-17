// // 1. Deteksi Palindom
// let data = "Malam"
// function checkPalindrom(text,cb) {
//     if(typeof(text) !== "string" || text == "" || text == null) {
//         return "Data yang dikirim harus string"
//     } else {
//     let dataReverse = text.toLowerCase().split("").reverse().join("")
//     return cb(text,dataReverse)
//     }
// }
// const hasilCheck = (text1,text2) => {
//     let text1LowerCase = text1.toLowerCase()
//     if (text1LowerCase == text2) {
//         return `Kata ${text1} adalah palindrom`
//     } else {
//         return `Kata ${text1} bukan palindrom`
//     }
// }
// console.log(checkPalindrom(data, hasilCheck))

// 2. Reverse Words
// let data = "Saya belajar Javascript"
// const reverseWords = (text) => {
//     if (typeof(text) !== "string" || text == "" || text == null) {
//         return "Data yang dikirim harus string"
//     } else {
//     let dataReverse = text.split(" ").reverse().join(" ")
//     return dataReverse
//     }
// }
// console.log(reverseWords(data))
