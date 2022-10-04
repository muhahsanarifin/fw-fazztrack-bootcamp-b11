/*
  ▧ Sample ▧
  Input:
  ▸ price = 75000
  ▸ voucher = "FAZZFOOD50"
  ▸ distance = 5km
  ▸ tax =true

  Ouput:
  ▸ Price = 75000
  ▸ Discount = 35000
  ▸ Delivery Fee = 14000
  ▸ Tax = 3750 
  ▸ Sub Total = 55250 (Discount + Delivery Fee + Tax)
*/

const fazzFood = (price, discount, distance, tax) => {
  // Init variable
  const discVouchers = ["FAZZFOOD50", "DITRAKTIR60"];
  let resultDiscount = "";
  let deliveryFee = "";
  let taxFee = "";
  let subTotal = "";

  // Validation
  try {
    if (typeof price !== "number") throw "Price value must be number !";
    if (typeof discount !== "string") throw "Dicount value must be string !";
    if (typeof distance !== "number") throw "Distance value must be number !";
    if (discount !== discVouchers[0] && discount !== discVouchers[1])
      throw `${discount}. The discount voucer is not found !`;
  } catch (error) {
    return error;
  }

  // Process Section

  // Discount
  if (discount) {
    if (discount === discVouchers[0]) {
      if (price >= 50000 && price <= 100000) {
        resultDiscount = price * 0.5;
      } else if (price > 100000) {
        let maxDiscVourcher = 50000;
        resultDiscount = price - maxDiscVourcher;
      } else {
        return "Minimum order Rp 50,000 of the discount voucher.";
      }
    } else if (discount === discVouchers[1]) {
      if (price >= 25000 && price <= 50000) {
        resultDiscount = price * 0.6;
      } else if (price > 50000) {
        let maxDiscVourcher = 30000;
        resultDiscount = price - maxDiscVourcher;
      } else {
        return "Mimun order Rp 25,000 of the discount voucher.";
      }
    }
  }

  // Delivery Fee
  if (distance < 2) {
    deliveryFee = 5000;
  } else {
    deliveryFee = (distance - 2) * 3000 + 5000;
  }

  // Tax
  if (tax == true) {
    taxFee = price * 0.05;
  } else {
    taxFee = 0;
  }

  // SubTotal
  if (resultDiscount == "") {
    subTotal = price + deliveryFee + taxFee;
  } else {
    subTotal = resultDiscount + deliveryFee + taxFee;
  }

  return `
    <<< FazzFood >>>
    Price : ${price}
    Discount: ${resultDiscount}
    Delivery Fee: ${deliveryFee}
    Tax Fee: ${taxFee}
    ---------:
    Sub Total: ${subTotal}
  `;
};
// Input FazzFood
const price = 75000;
const voucher = "FAZZFOOD50";
const distance = 5;
const tax = true;

// Result FazzFood
const resultFazzFood = fazzFood(price, voucher, distance, tax);
console.log(resultFazzFood);
