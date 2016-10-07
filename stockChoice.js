var allanShare = 4.00;
var netShare = 9.00;
var budgetTotal = 450.00;

var share1 = function(budget, shareprice) {
  var choice = budget / shareprice;
}
share1(budgetTotal, allanShare);
var share2 = function(budget, shareprice) {
  var choice = budget / shareprice;
}
share2(budgetTotal, netShare);

if (share1 > share2) {
  Console.log("buy share 1");
} else {
  console.log("buy share 2")
}
