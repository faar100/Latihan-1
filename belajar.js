// (Hasil Latihan)
// console.log("Latihan Jadi Hacker HAHAHHAHA");

/* kode di atas berfungsi untuk menyampaikan salam pada dunia */
// ini komentar juga
// e.g. console.log("Halooo")

// Nama: "farhan"
// Alamat: "Jakarta"

// (Hasil Latihan)
// kalau di php $nama = ""
// var namaLengkap = "farhan"
// var alamat = "Jakarta"
// var hari = "Jum'at"
// pastikan pilih variable yang dibutuhkan

// (Hasil Latihan)
// console.log(hari + ' ' + alamat + ' ' + namaLengkap);
// console.log(`Nama saya ${namaLengkap} alamat saya di ${alamat} Lahir Pada Hari ${hari}`);

// jika ingin copy paste ketik: shift-alt-panah bawah
// contoh console latihan atas
// console.log(namaLengkap + ' ' + hari);
// console.log(namaLengkap + alamat + hari);
// console.log(namaLengkap + ' ' + alamat + ' ' + hari);
// console.log( + ' ' +  + ' ' + );
// var hari = `Jum'at` (bisa pakai ` "")
// console.log(`Nama saya ${namaLengkap} alamat saya di ${alamat} Lahir Pada Hari ${hari}`);

// Deklarasi Variable
// var, let, const

// var nama = "farhan";
// var nama = "Rifqi";
// console.log(nama)

// value tidak bisa dideklarasi ulang
// let pekerjaan = "Progammer";
// pekerjaan = "Markating";
// console.log(pekerjaan);

// value tidak bisa diubah
// const alamat = "Bali";
// console.log(alamat);

// Pindah-pindah lne (alt-panah bawah dan atas)

// // [Hoisting]
// var jenisKelamin;
// let jenisKelamin1;
// let jenisKelamin2;
// // const jenisKelamin3;

// console.log('sebelum di isi '+jenisKelamin); 
// console.log(jenisKelamin1); 
// // console.log(jenisKelamin3);

// jenisKelamin = "entity"
// jenisKelamin1 = "cowo"
// jenisKelamin2 = "cewe"
// console.log(jenisKelamin);
// console.log(jenisKelamin1);
// console.log(jenisKelamin2);

// var Harga;
// Harga = 80
// var harga = 80

// var diskon = 500
// if (true){
//     var diskon = 300
// }
// console.log(diskon);

// let message = "My personal Information"
// console.log(message);

// let //bisa eklarasi di awal "let"nya dan harus di tambah ','
// name = "acis",
// age = 21, //nomor tanpa kutip
// gender = "male"

// console.log(name);
// console.log(age);
// console.log(gender);

let beratBadan = 75; // Global Scope
let beratBadan1 = 100;
let hasilBeratBadan = "";

if(beratBadan < 74){ // Scope Awal
    hasilBeratBadan = "kurus"
    console.log(hasilBeratBadan);
} else {
    hasilBeratBadan = "Gendut"
    console.log(hasilBeratBadan);
}
if(beratBadan > 74){ // Scope ke-2
    hasilBeratBadan = "kurus"
    console.log(hasilBeratBadan);
} else {
    hasilBeratBadan = "Gendut"
    console.log(hasilBeratBadan);
}
if(beratBadan1 > 100){ //Scope ke-3
    hasilBeratBadan = "Warning Obesitas"
    console.log(hasilBeratBadan);
} else {
    hasilBeratBadan = "Obesitas"
    console.log(hasilBeratBadan);
}if(beratBadan1 < 100){ //Scope ke-4
    hasilBeratBadan = "Obesitas"
    console.log(hasilBeratBadan);
} else {
    hasilBeratBadan = "Warning Obesitas"
    console.log(hasilBeratBadan);
}

// {data Primitif}
// [String]
// let string1 = "Halo Guys"
// let string2 = 'Lagi ngapain'
// let string3 = `nganggur ${string1}`

// [Number]
let weight = "75";
console.log(weight, typeof(weight) );

let Binarian = true;
console.log(Binarian);

let makananKesukaan = 80; // mesti dengan number
console.log(makananKesukaan);
