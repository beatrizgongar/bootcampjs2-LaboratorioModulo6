/*-----VARIABLES------*/
import { partida } from "./modelo";
/*--- MOTOR DE JUEGO ----*/
import {
  actualizarCarta,
  calculaPuntuacion,
  generarNumeroAleatorio,
} from "./motor";

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
/*-----FUNCION INICIO DE NUEVA PARTIDA------*/
export function iniciarNuevaPartida() {
  location.reload();
}

/*-----FUNCION DAME CARTA------*/
function dameCarta() {
  if (partida.nuevaPartida == true) {
    iniciarNuevaPartida();
  } else if (partida.numeroCarta < 11) {
    const carta = generarNumeroAleatorio();
    muestraCarta(carta);
    jugada(partida.numeroCarta + 1, carta);
    calculaPuntuacion(carta);
    muestraPuntuacion();
    controlGameover();
    actualizarCarta();
  }
}

/*-----FUNCION PLANTARSE------*/
function plantarse() {
  if (partida.plantado == true) {
    if (partida.numeroCarta < 11) {
      const cartaPlantarse = generarNumeroAleatorio();
      muestraCarta(cartaPlantarse);
      jugada(partida.numeroCarta + 1, cartaPlantarse);
      calculaPuntuacion(cartaPlantarse);
      muestraPuntuacion();
      mensajeQueHabriaPasado();
      partida.numeroCarta = 12;
    }
    deshabilitarBtPlantarse();
  } else {
    mensajePlantarse();
    QueHubieraPasado();
  }
}

/*-----FUNCION MENSAJE QUE HABRIA PASADO------*/
export function mensajeQueHabriaPasado() {
  if (partida.puntuacion > 7.5) {
    muestraMensaje("Te habrías pasado 😁");
  }
  if (partida.puntuacion == 7.5) {
    muestraMensaje("¡La habrías clavado!🙄");
  }
  if (partida.puntuacion < 7.5) {
    muestraMensaje("¡No habrías llegado a  7 y media!🙄");
  }
}

/*-----FUNCION MENSAJE PLANTARSE------*/
export function mensajePlantarse() {
  if (partida.puntuacion < 4) {
    muestraMensaje("Has sido muy conservador 🙄");
  }
  if (partida.puntuacion >= 4 && partida.puntuacion < 6) {
    muestraMensaje("Te ha entrado el canguelo eh?🤭");
  }
  if (partida.puntuacion >= 6 && partida.puntuacion <= 7) {
    muestraMensaje("Casi casi....🫣");
  }
  if (partida.puntuacion == 7.5) {
    muestraMensaje("¡Lo has clavado!¡Enhorabuena!🥳");
  }
}
/*-----FUNCION QUE HUBIERA PASADO------*/
export function QueHubieraPasado() {
  textoBtDameCarta("Nueva partida");
  partida.nuevaPartida = true;
  if (partida.puntuacion == 7.5) {
    deshabilitarBtPlantarse();
  } else {
    textoBtPlantarse("Qué hubiera pasado?");
    partida.plantado = true;
  }
}

/*-----FUNCION CONTROL GAME OVER------*/
export function controlGameover() {
  if (partida.puntuacion > 7.5) {
    muestraMensaje("TE PASASTE 😁");
  }
  if (partida.puntuacion == 7.5) {
    muestraMensaje("¡Lo has clavado!¡Enhorabuena!🥳");
  }
  if (partida.puntuacion >= 7.5) {
    deshabilitarBtPlantarse();
    textoBtDameCarta("Nueva partida");
    partida.nuevaPartida = true;
  }
}

export const iniciarPartida = () => {
  partida.numeroCarta = 0;
  partida.puntuacion = 0;
  partida.nuevaPartida = false;
  partida.plantado = false;
  muestraPuntuacion();
};
