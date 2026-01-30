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

// PONUDE ZA SVADBENE BUKETE
const ponudeDana = [
  "💐 Danas -10% na svadbene bukete od belih ruža",
  "🌸 Besplatna konsultacija uz svaki svadbeni buket",
  "💍 Popust na komplet: bidermajer + dekoracija",
  "✨ Poklon trakice i ukras uz svaku porudžbinu danas",
  "🌷 Sezonski buketi po specijalnoj ceni danas"
];

// Kada se stranica učita
document.addEventListener("DOMContentLoaded", () => {
  const polje = document.getElementById("ponudaDana");

  // Provera: radi samo ako element postoji (bitno!)
  if (polje) {
    const randomIndex = Math.floor(Math.random() * ponudeDana.length);
    polje.textContent = ponudeDana[randomIndex];
  }
});

