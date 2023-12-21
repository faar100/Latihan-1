// function cekDiskon(hari){
//     let diskon
//     if(hari === "jumat"){
//         diskon = 10000
//     }
//     return diskon
// }
// console.log(cekDiskon("jumat"));

// function cekDiskon(hari){
//     let diskon
//     if(hari === "jumat"){
//         diskon = 10000
//     } else { 
//         diskon
//     }
//     return diskon
// }
// console.log(cekDiskon("jumat"));


// [latihan 1]
// let product = [
//     {
//         nama: "Indo Mie",
//         harga: 100800
//     },
//     {
//         namae: "antangin 1 box",
//         harga: 20500
//     },
//     {
//         nama: "Teh Botol",
//         harga: 10500
//     },
//     {
//         namae: "Fiesta Ayam Crispy",
//         harga: 35500
//     }
// ]
// function hitungTransaksi(hari, tunai){
//     let transaksi = {
//         product: product,
//         subtotal: product[0].harga + product[1].harga,
//         diskon: 0,
//         total: 0, 
//         tunai: tunai,
//         kembali: 0
//     }
//     if(hari === "jumat"){
//         transaksi.diskon = 10000
//     }
//     transaksi.total = transaksi.subtotal - transaksi.diskon
//     transaksi.kembali = tunai - transaksi.total

//     return transaksi;
// }
// console.log(hitungTransaksi("senin",200000));

// latihan(azry)
function nom1(num1,num2){
    var total = num1+num2
    var list = [0,1,6,3,5]
    list.push(total)
    
return list
}
console.log(nom1(2000,30000));

// [Latihan 2]
// function hasil(nilai) {
//     if (nilai > 80) {
//         return "A";
//     } else if (nilai > 70) {
//         return "B";
//     } else if (nilai > 60) {
//         return "C";
//     } else if (nilai > 50) {
//         return "D";
//     } else {
//         return "E";
//     }
    
//     // let nilai = (nilai >= 80) ? 'A' : (nilai >= 70) ? 'B' : (nilai >= 60) ? 'C' : (nilai >= 50) ? 'D' : 'E';
// }

// console.log(hasil(88));