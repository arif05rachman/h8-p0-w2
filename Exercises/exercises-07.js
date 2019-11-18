//1. Menyusun Barisan Bintang
var rows1 =5; // input the number of rows
for (let i = 0; i<rows1; i++ ){
    console.log('*');
    
}
//========================================================
// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5; // input the number of rows
for (let i = 0; i<rows2; i++ ){
    let bintang = '';
    for (let j = 0; j<rows2; j++ ){
        bintang += '*'
    }
    console.log(bintang);
}
//=========================================================
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
let bintang = '';
for (let i = 0; i<rows2; i++ ){
    for (let j = 0; j<rows2; j++ ){
    }
    bintang += '*'
    console.log(bintang);
}