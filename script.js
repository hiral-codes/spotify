// Shadow maker
let scrollbar = document.querySelector(".--list");
let shadow = document.querySelector(".--icons");
scrollbar.addEventListener("scroll", () => {
  if(scrollbar.scrollTop > 0) {
    shadow.style.borderBottom = "2px solid #000";
  }
  else
    shadow.style.borderBottom = "none";
});

// Loader
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector("#loader-container").style.display = "none";
  }, 3000); // 3000 milliseconds = 3 seconds
});
