// import "boxicons";

const toggleChev = document.querySelector(".user-avatar .icons");
const menuCard = document.querySelector(".container-card");
toggleChev.addEventListener("click", () => {
  toggleChev.classList.toggle("active");
  menuCard.classList.toggle("active");
});

// color mode

const darkmode = document.querySelector(".toggle-dm");
const html = document.querySelector("html");

darkmode.addEventListener("click", () => {
  if (html.dataset.colorMode === "light") {
    html.dataset.colorMode = "dark";
    darkmode.textContent = "lightmode";
  } else {
    html.dataset.colorMode = "light";
    // darkmode.style.fontWeight = "600";
    darkmode.textContent = "darkmode";
  }
});
