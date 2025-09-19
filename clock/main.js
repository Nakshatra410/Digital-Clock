let hrs = document.getElementsById("hrs");
let min = document.getElementsById("min");
let sec = document.getElementsById("sec");

let currentTime = new Date();

hrs.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
