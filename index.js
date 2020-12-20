function credits(periods) {
  var i;
  var x = document.getElementsByClassName("period");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(periods).style.display = "block";
}
