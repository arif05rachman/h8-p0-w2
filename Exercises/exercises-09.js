//Tugas 1
function shoutOut(){
    return 'Halo Function!';
}
console.log(shoutOut());

//Tugas 2
var num1 = 5;
var num2 = 6;
function calculateMultiply(){
    return num1 * num2
}
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//Tugas 3
function processSentence(){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);

