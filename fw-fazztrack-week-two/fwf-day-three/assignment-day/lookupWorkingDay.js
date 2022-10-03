const lookupWorkingDay = (day) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
      let check = dataDay.find((item) => {
        return item.toLocaleLowerCase() === day.toLocaleLowerCase();
      });
      if (check) 
        return resolve(check);
        return reject(new Error("Hari ini bukan hari keja."));
    },3000);
  })
}

const inputHari = (day, lookupWorkingDay) => {

  try {

  if(day == null || day == "" || typeof day != "string")
      
      throw `Jangan isi variable hari seperti ini "${day}", silakan disi dengan tepat`;

    lookupWorkingDay(day)
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
  
const day = "kamis";

inputHari(day, lookupWorkingDay);
