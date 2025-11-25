const catalogEl = document.querySelector("#catalog");

/*
====================================================
  MAP → Generar el HTML del catálogo
====================================================
*/
export function renderCatalog(list) {
  // map transforma cada fruta en un string HTML
  const cards = list
    .map(
      (item) => `
      <p class="fruit-item" 
      data-price="${item.price}"
      data-oferta="${item.enOferta}">>
        <strong>${item.name} ${item.emoji}</strong> — ${item.type} — ${item.price}€
      </p>
    `
    )
    .join("");

  catalogEl.innerHTML = cards;

  /*
====================================================
  FOREACH → Aplicar estilos a los elementos creados
  (Ahora pinta SOLO los que están en oferta)
====================================================
*/
  document.querySelectorAll(".fruit-item").forEach((itemEl) => {
    const oferta = itemEl.dataset.oferta === "true";

    if (oferta) {
      itemEl.style.color = "green";
      itemEl.style.fontWeight = "bold";
      itemEl.textContent += " 🔥 OFERTA";
    }
  });
}
