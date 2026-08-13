const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = encodeURIComponent(data.get("name"));
    const phone = encodeURIComponent(data.get("phone"));
    const message = encodeURIComponent(
      `${data.get("message")}\n\nNombre: ${data.get("name")}\nTel: ${data.get("phone")}`
    );

    const whatsapp = `https://wa.me/51999999999?text=${message}`;

    window.location.href = whatsapp;
  });
}
