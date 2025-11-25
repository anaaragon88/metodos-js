import { items } from "./data.js";

/*
====================================================
  REDUCE → Sumar precios totales
====================================================
*/
export function getTotal() {
  return items.reduce((acc, item) => acc + item.price, 0);
}
