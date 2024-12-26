import "./style.css";

const btAnterior = document.getElementById("bt-anterior");
btAnterior?.addEventListener("click", anterior);

const btSiguiente = document.getElementById("bt-siguiente");
btSiguiente?.addEventListener("click", siguiente);

const btReset = document.getElementById("bt-reset");
btReset?.addEventListener("click", reset);

const btCambio = document.getElementById("bt-cambio");
btCambio?.addEventListener("click", cambio);

let turno;
let turnoNum: number;
let newTurno: number;
let otroTurno: number;

function saberTurno() {
  turno = document.getElementById("numero-turno")!;
  turnoNum = parseInt(turno.innerHTML);
}

function nuevoTurno() {
  const resultadoElement = document.getElementById("numero-turno");
  const turnoRelleno = newTurno.toString().padStart(2, "0");
  if (resultadoElement !== null && resultadoElement !== undefined) {
    resultadoElement.innerHTML = turnoRelleno.toString();
  }
}
function anterior() {
  saberTurno();
  //Incluyo condición para que solo reste un turno si el turno actual no es 00
  if (turnoNum !== 0) {
    newTurno = turnoNum - 1;
    nuevoTurno();
  }
}
function siguiente() {
  saberTurno();
  //Incluyo condición para que solo sume un turno si el turno actual no es 99
  if (turnoNum !== 99) {
    newTurno = turnoNum + 1;
    nuevoTurno();
  }
  //Incluyo condición para que inicie el turno si es 99
  if (turnoNum == 99) {
    reset();
  }
}
function reset() {
  newTurno = 0;
  nuevoTurno();
}

function cambio() {
  otroTurno = parseInt(
    (document.getElementById("otroturno") as HTMLInputElement)?.value
  );
  //Incluyo condición para que solo se introduzcan turnos entre 0 y 99
  //y que no pueda ser espacios

  if (otroTurno < 0 || otroTurno > 99 || isNaN(otroTurno) == true) {
    if (otroTurno < 0 || otroTurno > 99) {
      alert(
        "El turno introducido no es correcto debe tener un valor entre 0 y 99"
      );
    } else {
      alert("Debe informar algún turno");
    }
  } else {
    newTurno = otroTurno;
    nuevoTurno();
  }
}
