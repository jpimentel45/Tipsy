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
  } else {
    document.getElementById("error-message").style.display = "none";
  }
  //check if bill is <=0
  if (bill === "" || bill <= 0) {
    bill = 0;
    document.getElementById("error-message").style.display = "block";
    return;
  } else {
    document.getElementById("error-message").style.display = "none";
  }
  //Check value to number of people
  if (binch === "" || binch <= 1) {
    binch = 1;
    document.getElementById("totalTip").style.display = "none";
  } else {
    document.getElementById("totalTip").style.display = "flex";
  }

  //Calculate
  var total = (bill * tipsy) / binch;
  //round 2 decimals
  total = Math.round(total * 100) / 100;
  //2 digits after decimal point
  total = total.toFixed(2);
  bill = parseFloat(bill);
  binch = parseInt(binch);
  total = parseFloat(total);
  //try splitting bill total, and add tip
  var fullTotal = bill / binch + total;
  fullTotal = fullTotal.toFixed(2);
  //show tip amount
  document.getElementById("totalTip").style.display = "flex";
  //inside of element dynamically inpur tip
  document.getElementById("tip").innerHTML = total;
  document.getElementById("full").innerHTML = fullTotal;
}
//on load hide totalTip div
document.getElementById("totalTip").style.display = "none";

//click function
//this will automatically start grabbing input good for me maybe not for others better to have event on buttom click
//window.addEventListener("click", tipsyCalc, false);
document.getElementById("calculate").onclick = function() {
  tipsyCalc();
};
