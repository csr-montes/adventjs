// ¡Es hora de poner el árbol de navidad en casa! 🎄

// Para ello vamos a crear una función que recibe la altura del árbol,
// que será un entero positivo del 1 a, como máximo, 100.

// Si le pasamos el argumento 5, se pintaría esto:

// ____*____1
// ___***___3
// __*****__5
// _*******_7
// *********9
// ____#____
// ____#____

// Creamos un triángulo de asteriscos * con la altura proporcionada y,
// a los lados, usamos el guión bajo _ para los espacios.
// Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean,
// tienen un tronco de dos líneas de #.

// Otro ejemplo con un árbol de altura 3:

// __*__
// _***_
// *****
// __#__
// __#__

// Ten en cuenta que el árbol es un string y necesitas los saltos de línea
// \n para cada línea para que se forme bien el árbol.

function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  if (!/^[1-9][0-9]?$|^100$/.test(height)) {
    return "";
  }
  let response = "";

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height - i - 1; j++) {
      response += "_";
    }

    for (let j = 0; j < i * 2 + 1; j++) {
      response += "*";
    }

    for (let j = 0; j < height - i - 1; j++) {
      response += "_";
    }

    response += "\n";
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < height - 1; j++) {
      response += "_";
    }

    response += "#";

    for (let j = 0; j < height - 1; j++) {
      response += "_";
    }

    if (i === 0) {
      response += "\n";
    }
  }

  return response;
}

console.log(createXmasTree(5));
