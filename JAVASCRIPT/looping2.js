//1. Menyusun Barisan Bintang
var rows1=5; // input the number of rows
for(var i=1; i<=rows1;i++){
    console.log('*')
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2=5; // input the number of rows
var bintang=''
for (i = 1; i <= rows2; i++){
    for (j = 1; j <= rows2; j++){
    bintang+='*'
    }
    console.log(bintang);
    bintang='';
}
//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
/*var rows3=5; // input the number of rows
var bintang2='*'
for (k = 1; k <= rows3; k++){
    for (k = 1; k <= rows3; k++){
        console.log(bintang2);
        bintang2+='*'
    }
}*/
var rows3 = 5;

for(var k = 1; k <= rows3; k++) {
    var bintang2 = '';
    for(var l = 1; l <= k; l++) {
        bintang2 += '*';        
    }
    console.log(bintang2);
}