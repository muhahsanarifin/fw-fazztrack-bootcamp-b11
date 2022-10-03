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


const showMonth = (obj, month) => {

  if(!obj)

    return month.map( el => {
      console.log(`Month : ${el}`);
    });

    return console.log(obj.message);

};
getMonth(showMonth)
