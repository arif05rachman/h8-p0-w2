function konversiMenit(menit) {
    let jam = 0
    if (menit<60){
        return 0+':'+menit
    }else{
        for (let i = menit; menit >= 60; i-60){
            jam++
            menit=menit-60
        }
        if (String(menit).length ==1){
            return jam+':0'+menit
        }else{
            return jam+':'+menit
        }
    }
  }
// Refactory
// function konversiMenit(menit) {
//     let jam = 0
//     if (menit<60){
//         return 0+':'+menit
//     }else{
//         for (let i = menit; menit >= 60; i-60){
//             jam++
//             menit=menit-60
//         }
//         return String(menit).length ==1 ? jam+':0'+menit : jam+':'+menit;
//     }
//   }
//   TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00