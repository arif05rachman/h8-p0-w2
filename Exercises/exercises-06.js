// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var i = 2;
while (i <= 20) {
    console.log(i + ' - I love coding');
    i = i + 2
}
console.log('LOOPING KEDUA');
while (i >= 2) {
    console.log(i + ' - I will become fullstack developer');
    i = i - 2
}

//============================================================================================================================================
// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');
for (let j = 1 ; j <= 20; j++ ){
    console.log(j + ' - I love coding');  
}
console.log('LOOPING KEDUA');
for (let j = 20 ; j >= 1; j-- ){
    console.log(j + ' - I will become fullstack developer');   
}

//============================================================================================================================================
// 3. Angka Ganjil dan Genap
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log('GANJIL');
    } else {
        console.log('GENAP');
        
    }
}
//KELIPATAN 3 CONTER 2
for (let i = 1; i <= 100; i++) {
    if(i % 3 == 0){
        console.log(i,'KELIPATAN 3');
    } else {
        console.log('');
    }
}
//KELIPATAN 6 CONTER 5
for (let i = 1; i <= 100; i++) {
    if(i % 6 == 0){
        console.log(i,'KELIPATAN 6');
    } else {
        console.log('');
    }
}
//KELIPATAN 10 CONTER 9
for (let i = 1; i <= 100; i++) {
    if(i % 10 == 0){
        console.log(i,'KELIPATAN 10');
    } else {
        console.log('');
    }
}