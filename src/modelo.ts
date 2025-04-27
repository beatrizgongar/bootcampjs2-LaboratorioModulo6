interface Partida {
  listaMezclada: number[];
  listaPuntuacion: number[];
  numeroCarta: number;
  puntuacion: number;
  nuevaPartida: boolean;
  plantado: boolean;
}

export const partida: Partida = {
  listaMezclada: [],
  listaPuntuacion: [],
  numeroCarta: 0,
  puntuacion: 0,
  nuevaPartida: false,
  plantado: false,
};
