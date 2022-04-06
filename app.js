// NAV TOGGLE
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
const linkList = document.getElementsByClassName("nav-link");

// EVENT LISTENER
navBtn.addEventListener("click", () => {
 links.classList.toggle("show-links");
})

for (link of linkList) {
 link.addEventListener("click", function() {
  links.classList.remove("show-links");
 })
}

