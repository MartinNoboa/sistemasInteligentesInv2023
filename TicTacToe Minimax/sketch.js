let tablero = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let w; // = ancho / 3;
let h; // = altura / 3;
let agente = 'X';
let humano = 'O';
let jugador = humano;

function setup() {
  createCanvas(400, 400);
  w = width / 3;
  h = height / 3;
  // descomentar esta funcion para que el agente vaya primero
  //mejorMoviminento();
}

/**
 * Funciona para determinar si 3 valores son igaules
 * @param {char} a 
 * @param {char} b 
 * @param {char} c 
 * @returns true si son los 3 iguales
 */
function tictactoe(a, b, c) {
  return a == b && b == c && a != '';
}

/**
 * Funcion para determinar si el tablero no tiene espacios disponibles
 * @returns true si el tablero esta lleno
 */
function disponible(){
  let vacio;
  for(let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
      if (tablero[i][j] == ''){
        return true;
      }else{
        vacio = false;
      }
    }
  }
    return vacio;
}
/**
 * Verificar si el juego ha terminado
 * @returns estado del tablero (empate o ganador)
 */
function verificarTablero() {
  let ganador = null;
  // Horizontal
  for (let i = 0; i < 3; i++) {
    if (tictactoe(tablero[i][0], tablero[i][1], tablero[i][2])) {
      ganador = tablero[i][0];
    }
  }
  // Vertical
  for (let i = 0; i < 3; i++) {
    if (tictactoe(tablero[0][i], tablero[1][i], tablero[2][i])) {
      ganador = tablero[0][i];
    }
  }
  // Diagonal
  if (tictactoe(tablero[0][0], tablero[1][1], tablero[2][2])) {
    ganador = tablero[0][0];
  }
  if (tictactoe(tablero[2][0], tablero[1][1], tablero[0][2])) {
    ganador = tablero[2][0];
  }

  let libres = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tablero[i][j] == '') {
        libres++;
      }
    }
  }

  if (ganador == null && libres == 0) {
    return 'tie';
  } else {
    return ganador;
  }
}

function mousePressed() {
  if (jugador == humano) {
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);
    if (tablero[i][j] == '') {
      tablero[i][j] = humano;
      jugador = agente;
      if(disponible()){ // si hay espacios disponibles -> seguir jugando
        mejorMoviminento();
      }
    }
  }
}

function draw() {
  background(255);
  strokeWeight(4);

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let lugar = tablero[i][j];
      textSize(32);
      let r = w / 4;
      if (lugar == humano) {
        noFill();
        ellipse(x, y, r * 2);
      } else if (lugar == agente) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }

  let resultado = verificarTablero();
  if (resultado != null) {
    noLoop();
    let resultadoP = createP('');
    resultadoP.style('font-size', '32pt');
    if (resultado == 'tie') {
      resultadoP.html('Tie!');
    } else {
      resultadoP.html(`${resultado} wins!`);
    }
  }
}
