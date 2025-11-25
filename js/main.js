import { items } from "./data.js";
import { renderCatalog } from "./catalog.js";
import { filterByType, sortByPrice } from "./filters.js";
import { getTotal } from "./summary.js";

renderCatalog(items);

// FILTRAR
document.querySelector("#typeFilter").addEventListener("change", () => {
  const filtered = filterByType(typeFilter.value);
  renderCatalog(filtered);
});

// ORDENAR
document.querySelector("#sortSelect").addEventListener("change", () => {
  const sorted = sortByPrice(items, sortSelect.value);
  renderCatalog(sorted);
});

// REDUCE extra
const btnTotal = document.querySelector("#showTotalBtn");

btnTotal.addEventListener("click", () => {
  const total = getTotal();
  alert(`El total de precios es: ${total}€`);
});
