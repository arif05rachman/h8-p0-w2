var tanggal=1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan=7; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun=2019; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

  if (tanggal<1 || tanggal>31){
    console.log('tanggal yang anda masukan salah')
  }else {
    switch(bulan) {
        case 1:
            bulan=' Januari ';
            break;
        case 2:
            bulan=' Februari ';
            break;
        case 3:
            bulan=' Maret ';
            break;
        case 4:
            bulan=' April ';
            break;
        case 5:
            bulan=' Mei ';
            break;
        case 6:
            bulan=' Juni ';
            break;
        case 7:
            bulan=' Juli ';
            break;
        case 8:
            bulan=' Agustus ';
            break;
        case 9:
            bulan=' September ';
            break;
        case 10:
            bulan=' Oktober ';
            break;
        case 11:
            bulan=' November ';
            break;
        default:
            bulan=' Desember '
      }
      console.log(tanggal + bulan + tahun);
  }