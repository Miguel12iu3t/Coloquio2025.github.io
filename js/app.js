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

// En tu archivo JavaScript (o dentro de <script> en HTML)
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Animación personalizada con JS
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Opcional: Añade clase activa al ítem del menú
      document.querySelectorAll('.smooth-scroll').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

function toggleMobileMenu() {
  const menu = document.getElementById("main-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Cierra menús al hacer clic fuera
document.addEventListener('click', function(e) {
  const menuRegistro = document.getElementById("menuRegistro");
  const mobileMenu = document.getElementById("main-menu");
  
  // Si el clic no fue en el botón de registro ni en su menú
  if (!e.target.closest('.register-container')) {
    menuRegistro.style.display = "none";
  }
  
  // Si el clic no fue en el botón de hamburguesa ni en el menú
  if (!e.target.closest('.mobile-menu-toggle') && !e.target.closest('#main-menu')) {
    mobileMenu.style.display = "none";
  }
});

// Ajustar dinámicamente alturas en móvil
function adjustMobileLayout() {
  if (window.innerWidth <= 480) {
    // Ajustar altura del header
    document.querySelector('header').style.height = 'auto';
    
    // Asegurar espacio para el contenido
    document.querySelector('main').style.marginTop = '20px';
  }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('load', adjustMobileLayout);
window.addEventListener('resize', adjustMobileLayout);