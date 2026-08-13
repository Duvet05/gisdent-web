const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const message = encodeURIComponent(
      `${data.get("message")}\n\nNombre: ${data.get("name")}\nTel: ${data.get("phone")}`
    );

    const whatsapp = `https://wa.me/51937796690?text=${message}`;

    window.location.href = whatsapp;
  });
}
