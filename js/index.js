console.log("Spoiler Alert");

const magos = ["harry", "snape", "hermione", "dumbledore"];

let estaMuerto = (palabra) => `${palabra} está muerto`;

function modificaPares(grupo, callback) {
  const grupoModificado = [];
  for (const i in grupo) {
    const elemento = grupo[i];
    if (i % 2 !== 0) {
      const elementoModificado = estaMuerto(elemento);
      grupoModificado.push(elementoModificado);
    } else {
      grupoModificado.push(elemento);
    }
  }
  return grupoModificado;
}

console.log(modificaPares(magos, estaMuerto));
