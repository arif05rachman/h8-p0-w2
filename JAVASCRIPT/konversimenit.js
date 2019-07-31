function konversiMenit(menit) {
    var m = Math.floor(menit/60)
    var s = menit%60
    if(String(s).length===1){
        s='0'+s
    }
    var konversi=m+':'+s;
    return String(konversi)
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00