//CODE TO DISPLAY THE BUTTON IN PC
const buttonRegister = document.getElementById("registrarse");
const options = document.getElementById("options");
const buttonMobile = document.querySelector(".button-register-container");
const navbar = document.querySelector(".white-bar");
const mobileButton = document.getElementById("mobile-button");
const modalButtonRegister = document.getElementsByClassName(
  "modal-button-register"
);
const optionsRegisterMobile = document.getElementById("options-mobile");
options.style.display = "none";
optionsRegisterMobile.style.display = "none";

//FUNCTIONS TO RE USE CODE
const checkWidth = function (pageWidth) {
  if (pageWidth >= 480) {
    mobileButton.classList.add("hidden");
    modalButtonRegister.classList.add("hidden");
    optionsRegisterMobile.classList.add("hidden");
  } else {
    mobileButton.classList.remove("hidden");
  }
};

console.log(mobileButton);
buttonRegister.addEventListener("click", function (e) {
  e.preventDefault();
  if (options.style.display === "block") {
    options.style.display = "none";
    buttonRegister.style.backgroundColor = "#36bd00";
  } else {
    options.style.display = "block";
    buttonRegister.style.backgroundColor = "#41e600";
  }
});

//CODE TO DISPLAY THE BUTTON IN MOBILE JUST IN MOBILE

window.addEventListener("load", function () {
  const pageWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  checkWidth(pageWidth);
});

window.addEventListener("resize", function () {
  const pageWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  checkWidth(pageWidth);
});

//Add event listener to open the button
mobileButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (optionsRegisterMobile.style.display === "block") {
    optionsRegisterMobile.style.display = "none";
  } else {
    optionsRegisterMobile.style.display = "block";
  }
});

//Code to fix navbar
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
