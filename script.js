'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

if (navbar && navbarToggler) {
  addEventOnElem(navbarToggler, "click", toggleNav);
}

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

if (navbarLinks.length && navbar && navbarToggler) {
  addEventOnElem(navbarLinks, "click", closeNav);
}



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

if (header && backTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  });
}



/**
 * contact form -> WhatsApp
 */

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const message = encodeURIComponent(
      `Hola, quiero agendar cita en GisDent.\n\nNombre: ${data.get("name")}\nTeléfono: ${data.get("phone")}\nMensaje: ${data.get("message")}`
    );
    const whatsapp = `https://wa.me/51988162622?text=${message}`;

    window.location.href = whatsapp;
  });
}
