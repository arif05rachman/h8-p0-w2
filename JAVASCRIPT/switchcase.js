var tanggal=-3; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan=12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun=2400; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

  if (tanggal<1 || tanggal>31){
    console.log('Tanggal yang anda masukan salah')
  }else if (bulan <1 || bulan > 12){
        console.log('Bulan yang anda masukan salah')
      }else if (tahun<1900 ||tahun>2200){
          console.log('Tahun yang anda masukan Harus 1900 - 2200')
        } else {
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
      console.log(tanggal + bulan + tahun);
    }
  }