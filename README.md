# Métodos de Array

Los métodos de array son funciones especiales que vienen incorporadas en JavaScript para ayudarte a trabajar con listas de datos sin tener que programarlo todo desde cero.

En otras palabras:

Son herramientas que JavaScript te regala para recorrer, transformar, filtrar, ordenar o reducir un array.

El array es la caja.
Los métodos son las herramientas para manipular lo que hay dentro.

## **4.1 forEach**

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

El método **`forEach()`** ejecuta la función indicada una vez por cada elemento del array.

```jsx
const nums = [1, 2, 3];

nums.forEach(n => console.log(n));

/* En consola saldría:
1
2
3
*/
```

Ejemplo del proyecto de frutas

```jsx
/* FOREACH → Aplicar estilos a los elementos creados
  (Ahora pinta SOLO los que están en oferta)
*/
  document.querySelectorAll(".fruit-item").forEach((itemEl) => {
    const oferta = itemEl.dataset.oferta === "true";

    if (oferta) {
      itemEl.style.color = "green";
      itemEl.style.fontWeight = "bold";
      itemEl.textContent += " 🔥 OFERTA";
    }
  });
```

---

## **4.2 map**

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

El método **`map()`** crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

**Recorre → transforma → devuelve un array nuevo**

**map NO modifica el array original**

**map devuelve un array nuevo**

```jsx
const nums = [1, 2, 3];

const dobles = nums.map(n => n * 2);
console.log(dobles); // [2, 4, 6]
```

Ejemplo del proyecto de frutas

```jsx
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
```

Podríamos desestructurar este código:

```jsx
const cards = list
  .map(
    ({ name, emoji, type, price, enOferta }) => `
      <p class="fruit-item" 
         data-price="${price}"
         data-oferta="${enOferta}">
        <strong>${name} ${emoji}</strong> — ${type} — ${price}€
      </p>
    `
  )
  .join("");
```

---

## **4.3 filter**

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

El método **`filter()`** crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

```jsx
const nums = [1, 2, 3, 4, 5];

const pares = nums.filter(n => n % 2 === 0);
console.log(pares); //[2, 4]
```

Ejemplo del proyecto:

```jsx
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
```

---

## **4.4 sort**

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

El método **`sort()`** ordena los elementos de un arreglo (array) *localmente* y devuelve el arreglo ordenado.

```jsx
const nums = [5, 3, 10, 1];

nums.sort((a, b) => a - b);
console.log(nums); // [1, 3, 5, 10]
```

Orden alfabético:

```jsx
const letras = ["c", "a", "b"];
letras.sort();
```

Ejemplo del proyecto de frutas:

```jsx
export function sortByPrice(list, order) {
//Modifica el array original, por eso hacemos una copia
//usamos el spread operator para hacer una copia del original
  const copy = [...list];

  if (order === "price-asc") copy.sort((a, b) => a.price - b.price);
  if (order === "price-desc") copy.sort((a, b) => b.price - a.price);

  return copy;
}
```

El **spread operator (...) sirve para expandir o desempaquetar los elementos de un array u objeto** dentro de otro lugar.

Es como **abrir una caja y sacar todo lo que tiene dentro**.

---

## **4.5 reduce**

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

El método **`reduce()`** ejecuta una función **reductora** sobre cada elemento de un array, devolviendo como resultado un único valor.

```jsx
const nums = [1, 2, 3, 4];

const suma = nums.reduce((acum, n) => acum + n, 0);
console.log(suma); // 10
```

Más visual:

```jsx
// acum → valor acumulado
// n → elemento actual

vuelta | acum | n | resultado
---------------------------------
1      | 0    | 1 | 1
2      | 1    | 2 | 3
3      | 3    | 3 | 6
4      | 6    | 4 | 10
```

otro ejemplo:

```jsx
const letras = ['a','b','c'];

const palabra = letras.reduce((acum, letra) => acum + letra, "");
// "abc"
```

> El acumulador NO es para sumar. Es un valor que va creciendo o cambiando en cada vuelta como tú decidas.
> 

Ejemplo de proyecto frutas:

```jsx
export function getTotal() {
  return items.reduce((acc, item) => acc + item.price, 0);
}
```

---
