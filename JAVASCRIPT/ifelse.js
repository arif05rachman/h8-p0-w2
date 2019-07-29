var nama = "";
var peran = "";

if( nama === "" && peran === "") {
    console.log("Nama harus diisi!");
}

if( nama === "Elesis") {
  console.log("Halo " +nama+", pilih peranmu untuk memulai game!");
}

if( nama === "Ronan" && peran === "Ksatria") {
    console.log("Selamat datang di dunia Proxytia "+nama+". Halo "+peran+" "+nama+", kamu dapat menyerang dengan senjatamu!");
}

if(nama === "Rin" && peran === "Tabib") {
    console.log("Selamat datang di dunia Proxytia, "+nama+". Halo "+peran+" "+nama+", kamu akan membantu temanmu yang terluka.");
}

if( nama === "Arme" && peran === "Penyihir") {
    console.log("Selamat datang di dunia Proxytia, "+nama+". Halo "+peran+" "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
}