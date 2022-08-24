function tot() {
  let sub1 = document.getElementById("sub1").value;
  let sub2 = document.getElementById("sub2").value;
  let sub3 = document.getElementById("sub3").value;
  let sub4 = document.getElementById("sub4").value;
  let sub5 = document.getElementById("sub5").value;
  let sub6 = document.getElementById("sub6").value;
  let sub7 = document.getElementById("sub7").value;
  let grd = " ";
  let Fail = " ";

  let total =
    parseFloat(sub1) +
    parseFloat(sub2) +
    parseFloat(sub3) +
    parseFloat(sub4) +
    parseFloat(sub5) +
    parseFloat(sub6) +
    parseFloat(sub7);

  let per = (total * 100) / 700;

  let rou = per;

  var fper = Math.round(rou);

  if (fper <= 100 && fper >= 80) {
    grd = "A";
  } else if (fper <= 79 && fper >= 60) {
    grd = "B";
  } else if (fper <= 59 && fper >= 40) {
    grd = "C";
  } else {
    grd = "F";
  }

  if (per >= 39.5) {
    document.getElementById("per1").innerHTML = "Percentage: " + " " + fper;
    document.getElementById("dtot1").innerHTML = "Total: " + " " + total;
    document.getElementById("grd1").innerHTML = "Grade: " + " " + grd;
  } else {
    document.getElementById("fail1").innerHTML = "Fail";
  }
}
