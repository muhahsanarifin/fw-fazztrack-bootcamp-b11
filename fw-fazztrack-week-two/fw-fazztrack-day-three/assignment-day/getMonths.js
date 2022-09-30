const getMonth = callback => {
  setTimeout(() => {
    let error = false;
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (!error) {
      callback(null, month);
    }else {
      callback(new Error("Sorry Data Not Found"), [])
    }
  },4000)
};


const showMonth = (value, month) => {
  
  if(value == null)

    return month.map( el => {
      console.log(`Month : ${el}`);
    });

    return console.log(value.message);
  
};

getMonth(showMonth);

