//create function to calculate tip
function tipsyCalc() {
  //grab user input, store into var
  var bill = document.getElementById("bill").value;
  var tipsy = document.getElementById("tipsy").value;
  var binch = document.getElementById("binch").value;
  //input validator: blank input
  if (bill === "" || tipsy === "") {
    document.getElementById("error-message").style.display = "block";
    return;
  } else if (bill != "" || tipsy === "") {
    document.getElementById("error-message").style.display = "none";
  }
  //Check value to number of people
  if (binch === "" || binch <= 1) {
    binch = 1;
    document.getElementById("totalTip").style.display = "none";
  } else {
    document.getElementById("totalTip").style.display = "inherit";
  }

  //Calculate
  var total = (bill * tipsy) / binch;
  console.log(total);
  console.log(bill);
  console.log(fullTotal);
  //round 2 decimals
  total = Math.round(total * 100) / 100;
  //2 digits after decimal point
  total = total.toFixed(2);
  bill = parseInt(bill);
  binch = parseInt(binch);
  total = parseFloat(total);
  //try splitting bill total, and add tip
  var fullTotal = bill / binch + total;
  fullTotal = fullTotal.toFixed(2);
  //show tip amount
  document.getElementById("totalTip").style.display = "inherit";
  //inside of element dynamically inpur tip
  document.getElementById("tip").innerHTML = total;
  document.getElementById("full").innerHTML = fullTotal;
}
//on load hide totalTip div
document.getElementById("totalTip").style.display = "none";

//click function
document.getElementById("calculate").onclick = function() {
  tipsyCalc();
};
