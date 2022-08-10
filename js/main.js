const burger = document.querySelector(".burger");
const bar = document.querySelector(".header .navbar");

burger.onclick = function () {
  if (bar.style.display !== "block") {
    bar.style.display = "block";
  } else {
    bar.style.display = "none";
  }
};
