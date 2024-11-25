import "./style.css";
const estiloGrupo =
  "color:white;font-weight: bold; font-size:25px;background-color:green";
const PopRock: string = "🎵 Pop Rock";
const Rock: string = "🎸 Rock";
const HardRock: string = "🤘 Hard Rock";
const Clasica: string = "🎼 Clásica";

interface GrupoMusical {
  nombre: string;
  añoFundacion: number;
  activo: boolean;
  genero: string;
}
const grupoA: GrupoMusical = {
  nombre: "The Beatles",
  añoFundacion: 1960,
  activo: true,
  genero: PopRock,
};
const grupoB: GrupoMusical = {
  nombre: "Queen",
  añoFundacion: 1970,
  activo: false,
  genero: Rock,
};
const grupoC: GrupoMusical = {
  nombre: "AC DC",
  añoFundacion: 1973,
  activo: true,
  genero: HardRock,
};
const grupoD: GrupoMusical = {
  nombre: "Ludwig van Beethoven",
  añoFundacion: 1770,
  activo: false,
  genero: Clasica,
};
const grupoE: GrupoMusical = {
  nombre: "The Rolling Stones",
  añoFundacion: 1962,
  activo: true,
  genero: Rock,
};

console.log(`%c${grupoA.nombre}`, estiloGrupo);
console.log(
  `El grupo ${grupoA.nombre} fue fundado en el año ${grupoA.añoFundacion}, pertenece al género musical ${grupoA.genero} y actualmente es ${grupoA.activo} que esté en activo .`
);

console.log(`%c${grupoB.nombre}`, estiloGrupo);
console.log(
  `El grupo ${grupoB.nombre} fue fundado en el año ${grupoB.añoFundacion}, pertenece al género musical ${grupoB.genero} y actualmente es ${grupoB.activo} que esté en activo .`
);
console.log(`%c${grupoC.nombre}`, estiloGrupo);
console.log(
  `El grupo ${grupoC.nombre} fue fundado en el año ${grupoC.añoFundacion}, pertenece al género musical ${grupoC.genero} y actualmente es ${grupoC.activo} que esté en activo .`
);
console.log(`%c${grupoD.nombre}`, estiloGrupo);
console.log(
  `El compositor ${grupoD.nombre} nació en el año ${grupoD.añoFundacion}, pertenece al género musical ${grupoD.genero} y actualmente es ${grupoD.activo} que esté en activo .`
);
console.log(`%c${grupoE.nombre}`, estiloGrupo);
console.log(
  `El grupo ${grupoE.nombre} fue fundado en el año ${grupoE.añoFundacion}, pertenece al género musical ${grupoE.genero} y actualmente es ${grupoE.activo} que esté en activo .`
);
