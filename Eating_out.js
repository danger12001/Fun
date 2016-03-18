exports.fun = function(){
var message1 = "Hi Xola thanks for joining us last night. Your team ate 8 burgers, drank 17 beers and 11 fanta's";
var message2 = "Please send me the payment via EFT prices are as follows: burgers - 37 each, beers - 12, fanta's 9";

var amountDue = [];
var amount = [];
var convert1 = message1.split(".").splice(1,1).join("").replace(/ Your team ate /g,"").replace(/ drank /g,"").replace(/ and/g,"").split(" ").join(",").split(",");
var convert2 = message2.split(": ").splice(1,1).join("").replace(/ -/g,"").replace(/ each/g,"").split(",").join(".").replace(/. /g,",").split(",");

// console.log(convert1);
for(x=0;x<convert1.length;x++){
  if(x % 2 === 0){
  amount.push({
    item: convert1[x + 1],
    amount: convert1[x]
  });
  }
}
// console.log(amount);
// console.log(convert2);
for(x=0;x<convert2.length;x++){
  if(x % 2 === 0){
    amountDue.push({
      item: convert2[x],
      amount: convert2[x + 1]
    });
  }
}
// console.log(amountDue);
var totalBill = [];
var finalBill = 0;
var bill = [];
var price = [];
for(var number in amount){
  bill.push(amount[number].amount);
}
// console.log(bill);
for(var due in amountDue){
  price.push(amountDue[due].amount);
}
// console.log(price);
for(x=0;x<bill.length;x++){
  var calc = bill[x] * price[x];
  totalBill.push(calc);
  finalBill += totalBill[x];
}
// console.log(finalBill);
return "R"+finalBill;
};
