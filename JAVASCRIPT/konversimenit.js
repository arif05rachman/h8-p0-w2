function konversiMenit(menit) {
    var minutes = Math.floor(menit/60)
    var second = menit%60
    if(String(second).length===1){
        second='0'+second
    }
    var konversi=minutes+':'+second;
    return String(konversi)
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00