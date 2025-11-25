import { items } from "./data.js";

/*
====================================================
FILTER → Filtrar por tipo (fruta / verdura / en oferta)
====================================================
*/
export function filterByType(type) {
  if (type === "all") {
    return items;
  }

  // ⭐ En oferta
  if (type === "oferta") {
    return items.filter((item) => item.enOferta === true);
  }

  // Filtro normal por fruta/verdura
  return items.filter((item) => item.type === type);
}

/*
====================================================
SORT → Ordenar por precio
====================================================
*/
export function sortByPrice(list, order) {
  const copy = [...list];

  if (order === "price-asc") copy.sort((a, b) => a.price - b.price);
  if (order === "price-desc") copy.sort((a, b) => b.price - a.price);

  return copy;
}
