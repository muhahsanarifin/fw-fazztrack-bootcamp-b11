const cekHariKerja = (day) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
      let cek = dataDay.find((item) => {
        return item.toLocaleLowerCase() === day.toLocaleLowerCase();
      });
      if (cek) 
        return resolve(cek);
        return reject(new Error("Hari ini bukan hari keja."));
    },3000);
  })
}

const inputHari = (hari, cekHariKerja) => {

  try {

  if(hari == null || hari == "" || typeof hari != "string")
      
      throw `Jangan isi variable hari seperti ini "${hari}", silakan disi dengan tepat`;

    cekHariKerja(hari)
    .then(res => {
      const responHariKerja = res;
      return console.log(`Ini hari ${responHariKerja} waktunya anda berangkat kerja.`);
    })
    .catch(error => {
      return console.log(error.message);
    })
    
  } catch (error) {
      return console.log(error);
  }
  
} 
  
const hari = "senin";

inputHari(hari, cekHariKerja)
