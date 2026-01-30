document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // sprečava reload stranice

      successMsg.classList.remove("d-none"); // prikaži poruku
      form.reset(); // očisti polja
    });
  }
});


