//1. Melakukan Looping Menggunakan While
var while1 = 2;
console.log('LOOPING PERTAMA')
while(while1 <= 20) {
  console.log(while1+ ' - I love coding');
  while1 = while1+2;
}
var while2 = 20;
console.log('LOOPING KEDUA')
while(while2 >= 2) {
  console.log(while2+ ' - I will become fullstack developer');
  while2 = while2-2;
}

//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')
for (var for1 = 1; for1 <= 20; for1 ++) {
  console.log(for1+ ' - I love coding');
}
console.log('LOOPING KEDUA')
for (var for2 = 20; for2 >= 1; for2 --) {
  console.log(for2+ ' - I will become fullstack developer');
}

//3. Angka Ganjil dan Genap
console.log('GANJIL GENAP');
var looping3 = 1;
while (looping3 <= 100){
  if (looping3 % 2 == 0){
    console.log('"Genap"')
  }else{
    console.log('"Ganjil"')
  }
  looping3 ++
}
console.log('PENAMBAHAN COUNTER 2')
looping3 = 1;
while (looping3 <= 100){
  if (looping3 % 3 == 0){
    console.log('"'+looping3 + ' KELIPATAN 3"')
  }else{
    console.log('""')
  }
  looping3 =looping3+2
}
console.log('PENAMBAHAN COUNTER 5')
looping3 = 1;
while (looping3 <= 100){
  if (looping3 % 6 == 0){
    console.log('"'+looping3 + ' KELIPATAN 6"')
  }else{
    console.log('""')
  }
  looping3 =looping3+5
}
console.log('PENAMBAHAN COUNTER 9')
looping3 = 1;
while (looping3 <= 100){
  if (looping3 % 10 == 0){
    console.log('"'+looping3 + ' KELIPATAN 10"')
  }else{
    console.log('""')
  }
  looping3 =looping3+9
}