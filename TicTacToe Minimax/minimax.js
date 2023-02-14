// Tic Tac Toe 
// Martin Noboa A01704052
// Reference: https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
/**
 * Funcion recurrente para determinar el mejor movimiento
 */
function mejorMoviminento() {
  let mejorPuntaje = -5;
  let movimiento;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tablero[i][j] == '') {
        tablero[i][j] = agente;
        let puntaje = minimax(tablero, 0, false);
        tablero[i][j] = '';
        if (puntaje > mejorPuntaje) {
          mejorPuntaje = puntaje;
          movimiento = { i, j };
        }
      }
    }
  }
  tablero[movimiento.i][movimiento.j] = agente;
  jugador = humano;
}

// Asignar puntajes a los escenarios
let resultados = {
  X: 10, // victoria
  O: -10, // perdida
  tie: 0 // empate
};

/**
 * Funcion para encontrar el movimiento mas optimo recorriendo un arbol de posibles escenarios
 * @param {array} tablero 
 * @param {int} profundidad 
 * @param {boolean} esAgente 
 * @returns 
 */
function minimax(tablero, profundidad, esAgente) {
  let resultado = verificarTablero();
  if (resultado !== null) {
    return resultados[resultado];
  }

  if (esAgente) {
    let mejorPuntaje = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tablero[i][j] == '') {
          tablero[i][j] = agente;
          let puntaje = minimax(tablero, profundidad + 1, false);
          tablero[i][j] = '';
          mejorPuntaje = max(puntaje, mejorPuntaje);
        }
      }
    }
    return mejorPuntaje;
  } else {
    let mejorPuntaje = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tablero[i][j] == '') {
          tablero[i][j] = humano;
          let puntaje = minimax(tablero, profundidad + 1, true);
          tablero[i][j] = '';
          mejorPuntaje = min(puntaje, mejorPuntaje);
        }
      }
    }
    return mejorPuntaje;
  }
}
