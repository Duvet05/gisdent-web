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
const contactFeedback = document.querySelector("#formFeedback");

const setFormFeedback = function (message, isError = true) {
  if (!contactFeedback) return;
  contactFeedback.textContent = message;
  if (message) {
    contactFeedback.style.display = "block";
    contactFeedback.classList.add("is-visible");
    contactFeedback.classList.toggle("is-success", !isError);
  } else {
    contactFeedback.style.display = "none";
    contactFeedback.classList.remove("is-visible");
    contactFeedback.classList.remove("is-success");
  }
};

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const messageText = String(data.get("message") || "").trim();

    if (name.length < 3) {
      setFormFeedback("Ingresa un nombre válido.");
      return;
    }

    if (messageText.length < 8) {
      setFormFeedback("Cuéntanos brevemente qué tratamiento necesitas.");
      return;
    }

    const phoneDigits = phone.replace(/[^0-9]/g, "");
    let whatsappPhone = phoneDigits;

    if (phoneDigits.length === 9) {
      whatsappPhone = `51${phoneDigits}`;
    }

    if (phoneDigits.length === 10 && phoneDigits.startsWith("0")) {
      whatsappPhone = `51${phoneDigits.slice(1)}`;
    }

    if (whatsappPhone.length !== 11 || !/^[1-9]\d+$/.test(whatsappPhone)) {
      setFormFeedback("Escribe un número de WhatsApp válido (ej. +51 988 162 622).");
      return;
    }

    setFormFeedback("");

    const whatsappMessage = encodeURIComponent(
      `Hola, quiero agendar cita en GisDent.\n\nNombre: ${name}\nTeléfono: ${phone}\nMensaje: ${messageText}`
    );
    const whatsapp = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`;

    setFormFeedback("Conectando con WhatsApp...", false);

    window.location.href = whatsapp;
  });
}
