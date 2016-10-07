/*new decision*/
const assert = require('assert');
var budg = 50.00;
var babstore = ["chocolate",
  "fruitjuice", "biltong"];

var spaza = ["water",
  "pap", "orange"];

var spar = ["bread",
  "chicken"];

var option1 = babstore;
var option2 = spaza;
var option3 = spar;
var calculate = function(item1, item2, item3) {
  var cost = item1 + item2 + item3;
  console.log(cost);
  return cost;
}
var option1 = calculate(10.00, 12.00, 22.50);
var option2 = calculate(8.00, 12.00, 1.50);
var option3 = calculate(12.50, 18.99, 0);

var lunchChoice = function() {
    if (option1 <= 50.00 && option1<option2) {
      console.log("Buy at option1")
      return "Buy at option1";
    }
    else if(option2 <= 50.00 && option2<option1){console.log("Buy at option2")
      return "Buy at option2";

    }
    else if(option3 <= 50.00 && option3<option1){console.log("Buy at option3")
      return "Buy at option3";

    }
    else if(option3 <= 50.00 && option3<option2){console.log("Buy at option3")
      return "Buy at option3";

    }
    else{console.log("Too expensive!")}
            }
assert.equal(lunchChoice(40.00), "Buy at option1");
