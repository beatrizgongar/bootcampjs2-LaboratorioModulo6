/*-----VARIABLES------*/
import { partida } from "./modelo";
/*--- INTERFAZ USUARIO ---*/
import {
  muestraPuntuacion,
  muestraMensaje,
  deshabilitarBtPlantarse,
  textoBtDameCarta,
  textoBtPlantarse,
  muestraCarta,
  jugada,
} from "./ui";

/*-----FUNCION barajas INICIAL------*/
export function barajar() {
  let listaOriginal: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  while (listaOriginal.length > 0) {
    let posicion = Math.floor(Math.random() * listaOriginal.length);
    //Eliminamos el elemento de la listaOriginal
    let elemento = listaOriginal.splice(posicion, 1)[0];
    //Incluimos el elemento de la listaOriginal en la listaMezclada en la posicion[0]
    partida.listaMezclada.unshift(elemento);
    //Cargamos la lista de puntuaciones
    if (partida.listaMezclada[0] > 7 && partida.listaMezclada[0] < 11) {
      partida.listaPuntuacion.unshift(0.5);
    } else {
      partida.listaPuntuacion.unshift(partida.listaMezclada[0]);
    }
  }
  return partida.listaMezclada;
}

/*-----FUNCION CALCULA PUNTUACION------*/
export const calculaPuntuacion = () => {
  partida.puntuacion =
    partida.puntuacion + partida.listaPuntuacion[partida.numeroCarta];
};

/*-----FUNCION CONTROL GAME OVER------*/
export function controlGameover() {
  if (partida.puntuacion > 7.5) {
    muestraMensaje("TE PASASTE 😁");
    deshabilitarBtPlantarse();
    textoBtDameCarta("Nueva partida");
    partida.nuevaPartida = true;
  }
}
/*-----FUNCION INICIO DE NUEVA PARTIDA------*/
export function iniciarNuevaPartida() {
  location.reload();
}

/*-----FUNCION ACTUALIZAR CARTA------*/
export function actualizarCarta() {
  partida.numeroCarta = partida.numeroCarta + 1;
}

/*-----FUNCION DAME CARTA------*/
export function dameCarta() {
  if (partida.nuevaPartida == true) {
    iniciarNuevaPartida();
  } else if (partida.numeroCarta < 11) {
    const carta = partida.listaMezclada[partida.numeroCarta];
    muestraCarta(carta);
    jugada(partida.numeroCarta + 1, carta);
    calculaPuntuacion();
    muestraPuntuacion();
    controlGameover();
    actualizarCarta();
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

/*-----FUNCION PLANTARSE------*/
export function plantarse() {
  if (partida.plantado == true) {
    if (partida.numeroCarta < 11) {
      const cartaPlantarse = partida.listaMezclada[partida.numeroCarta];
      muestraCarta(cartaPlantarse);
      jugada(partida.numeroCarta + 1, cartaPlantarse);
      calculaPuntuacion();
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

export const iniciarPartida = () => {
  partida.listaMezclada = [];
  partida.listaPuntuacion = [];
  partida.numeroCarta = 0;
  partida.puntuacion = 0;
  partida.nuevaPartida = false;
  partida.plantado = false;
  barajar();
  muestraPuntuacion();
};
