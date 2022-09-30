// First program
const motocycleBrand = brand =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const motocycleBrands = ["Yamaha", "Suzuki", "Ducati", "Esemka", "Aprilia", "KTM", "Kawasaki", "TVS motor", "Piaggio", "Harley Davidson"];
      let cekMotocycleBrand = motocycleBrands.find(brands => {
        return brands.toLowerCase() === brand.toLowerCase();
      })
      if(cekMotocycleBrand)
        return resolve(cekMotocycleBrand);
        return reject(new Error(`${brand} bukan merek motor`))
    }, 3000)
  })
};


const inputmotocycleBrand = (brand, motocycleBrand) => {
  try {
    // Validasi Scripts
    if (brand == null || brand == "" || typeof brand != "string")
      throw `Jangan isi variable hari seperti ini "${brand}", silakan disi dengan tepat`;

    motocycleBrand(brand)
    .then(res => {
      const responseMotocycleBrand = res;
      return console.log(`${responseMotocycleBrand} adalah salah satu merek motor yang didistribusikan di indonesia.`)
    })
    .catch(error => {
      return console.log(error.message);
    })
  } catch (error) {
    
    return console.log(error);
  }
} 

const motocycle = "yamaha";
inputmotocycleBrand(motocycle, motocycleBrand)


// Second program
const clan = clan => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const clans = ["Bugis", "Betawi", "Dayak", "Sunda", "Abra", "Batak"];
      let checkClan = clans.find(item => {
        return item.toLocaleLowerCase() === clan.toLocaleLowerCase();
      })
      if(checkClan)
        return resolve(checkClan);
        return reject(new Error(`Suku ${clan} tidak tersedia`));
    }, 3000);
  })
}

const inputClan = (paramClan, funClan) => {
  try {
    
    if (paramClan == null || paramClan == "" || typeof paramClan != "string")
      throw `Jangan isi variable hari seperti ini "${paramClan}", silakan disi dengan tepat`;

    funClan(paramClan)
    .then(res => {
      const responseClan = res;
      return console.log(`${responseClan} adalah salah satu dari sekian banyak suku di Indonesia.`);
    })
    .catch(error => {
      return console.log(error.message);
    })
  } catch (error) {
      return console.log(error);
  }
}

const iClan = "";
inputClan(iClan, clan)
