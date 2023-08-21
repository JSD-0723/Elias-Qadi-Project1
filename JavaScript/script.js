const darkModeButton = document.querySelector(".dark-mode-button");
const body = document.getElementById("body");
const footer = document.querySelector("footer");
const colorfulBar = document.getElementById("welcomeSection");

darkModeButton.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    footer.classList.remove("dark-mode");
    colorfulBar.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
    footer.classList.add("dark-mode");
    colorfulBar.classList.add("dark-mode");
  }
});
