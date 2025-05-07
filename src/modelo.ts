interface Partida {
  numeroCarta: number;
  puntuacion: number;
  nuevaPartida: boolean;
  plantado: boolean;
}

export const partida: Partida = {
  numeroCarta: 0,
  puntuacion: 0,
  nuevaPartida: false,
  plantado: false,
};
