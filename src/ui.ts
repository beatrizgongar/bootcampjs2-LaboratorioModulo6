/*-----VARIABLES------*/
import { partida } from "./modelo";
/*--- MOTOR DE JUEGO ----*/
import { dameCarta, plantarse } from "./motor";

/*-----BOTONES------*/
export const btDameCarta = document.getElementById("bt-dame-carta");
export const btPlantarse = document.getElementById("bt-plantarse");

if (btDameCarta instanceof HTMLButtonElement) {
  btDameCarta.addEventListener("click", dameCarta);
}

if (btPlantarse instanceof HTMLButtonElement) {
  btPlantarse.addEventListener("click", plantarse);
}

/*-----FUNCION MUESTRA PUNTUACION------*/
export function muestraPuntuacion() {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML =
      "Puntuación: " + partida.puntuacion.toString() + " puntos";
  } else {
    console.error(
      "muestraPuntuacion: no se ha encontrado el elemento con id puntuacion"
    );
  }
}

/*-----FUNCION MUESTRA MENSAJE------*/
export function muestraMensaje(texto: string) {
  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje) {
    elementoMensaje.innerHTML = texto;
  } else {
    console.error(
      "muestraMensaje: no se ha encontrado el elemento con id mensaje"
    );
  }
}

/*-----FUNCION MUESTRA CARTA------*/
export function muestraCarta(carta: number) {
  const cartaNew = document.getElementById("carta-back");
  const url = "/imagenes/";
  const url2 = "_copas.jpg";
  if (cartaNew instanceof HTMLImageElement) {
    cartaNew.src = url + carta + url2;
  }
}

/*-----FUNCION DESHABILITAR BOTON PLANTARSE------*/
export function deshabilitarBtPlantarse() {
  if (btPlantarse instanceof HTMLButtonElement) {
    btPlantarse.disabled = true;
  }
}

/*-----FUNCION TEXTO BOTON PLANTARSE------*/
export function textoBtPlantarse(texto: string) {
  if (btPlantarse instanceof HTMLButtonElement) {
    btPlantarse.textContent = texto;
  }
}

/*-----FUNCION TEXTO BOTON DAME CARTA------*/
export function textoBtDameCarta(texto: string) {
  if (btDameCarta instanceof HTMLButtonElement) {
    btDameCarta.textContent = texto;
  }
}

/*-----FUNCION JUGADA------*/
export function jugada(carta: number, valor: number) {
  const idCarta = "carta" + carta;
  const cartaJugada = document.getElementById(idCarta);
  const url = "/imagenes/";
  const url2 = "_copas.jpg";
  if (cartaJugada instanceof HTMLImageElement) {
    cartaJugada.src = url + valor + url2;
  }
}
