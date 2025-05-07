/*-----VARIABLES------*/
import { partida } from "./modelo";
/*--- INTERFAZ USUARIO ---*/

/*-----FUNCION CALCULA PUNTUACION------*/
export const calculaPuntuacion = (valorCarta: number) => {
  if (valorCarta > 7) {
    partida.puntuacion += 0.5;
  } else partida.puntuacion += valorCarta;
};

/*-----FUNCION ACTUALIZAR CARTA------*/
export function actualizarCarta() {
  partida.numeroCarta = partida.numeroCarta + 1;
}

/*----FUNCION GENERAR NUMERO ALEATORIO ---*/
/* Math.floor(Math.random() * (max - min + 1) + 1)*/

export function generarNumeroAleatorio() {
  return Math.floor(Math.random() * (10 - 1 + 1) + 1);
}
