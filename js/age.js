let htmlage = document.getElementById("age");


setInterval(() => {

  var age = (new Date() - new Date(962582400000))/ (1000 * 60 * 60 * 24 * 365.25);
  htmlage.innerText = age.toString().substring(0, 12);

}, 30);