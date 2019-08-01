var nama = 'Arif';
var peran = 'Tank';
if(nama===''){
  console.log('Nama harus diisi!');
}else if(nama!=='' && peran===''){
  console.log('Hallo '+nama+', pilih peranmu untuk memulai game!')
}else if(nama!=='' && peran==='Ksatria'){
  console.log('Selamat datang di dunia Proxytia, '+nama+'. Halo '+peran+' '+nama+', kamu dapat menyerang dengan senjatamu!');
}else if(nama !== '' && peran === 'Tabib') {
  console.log('Selamat datang di dunia Proxytia, '+nama+'. Halo '+peran+' '+nama+', kamu akan membantu temanmu yang terluka.');
}else if( nama !== '' && peran === 'Penyihir') {
  console.log('Selamat datang di dunia Proxytia, '+nama+'. Halo '+peran+' '+nama+', ciptakan keajaiban yang membantu kemenanganmu!');
}else{
  console.log('Peran harus di isi Ksatria/Tabib/Penyihir')
}
/*
if( nama === '' && peran === '') {
    console.log('Nama harus diisi!');
}

if( nama === 'Mikael') {
  console.log('Halo ' +nama+', pilih peranmu untuk memulai game!');
}

if( nama === 'Nina' && peran === 'Ksatria') {
    console.log('Selamat datang di dunia Proxytia '+nama+'. Halo '+peran+' '+nama+', kamu dapat menyerang dengan senjatamu!');
}

if(nama === 'Danu' && peran === 'Tabib') {
    console.log('Selamat datang di dunia Proxytia, '+nama+'. Halo '+peran+' '+nama+', kamu akan membantu temanmu yang terluka.');
}

if( nama === 'Zero' && peran === 'Penyihir') {
    console.log('Selamat datang di dunia Proxytia, '+nama+'. Halo '+peran+' '+nama+', ciptakan keajaiban yang membantu kemenanganmu!');
}*/