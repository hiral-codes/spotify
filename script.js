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
// Path: script.js