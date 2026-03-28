let pontos = 0;
let tabuleiro = [];
let barcos = 0;
let tirosRestantes = 10;

for (let i = 0; i < 5; i++) {
  tabuleiro[i] = [];
  for (let j = 0; j < 5; j++) {
    tabuleiro[i][j] = false;
  }
}

function gerarBarcos(qtd) {
  barcos = qtd;
  for (let i = 0; i < barcos; i++) {
    let posX = Math.floor(Math.random() * 5);
    let posY = Math.floor(Math.random() * 5);
    while (tabuleiro[posX][posY] === true) {
      posX = Math.floor(Math.random() * 5);
      posY = Math.floor(Math.random() * 5);
    }
    tabuleiro[posX][posY] = true;
  }
}

const dificuldade = Number(prompt("Escolha a dificuldade:\n1 - Fácil (5 barcos)\n2 - Difícil (3 barcos)"));
gerarBarcos(dificuldade === 1 ? 5 : 3);

const tbody = document.querySelector("table tbody");
for (let i = 0; i < 5; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 5; j++) {
    const cell = document.createElement("td");
    cell.id = `cell-${i}-${j}`;
    cell.textContent = `${i},${j}`;
    row.appendChild(cell);
  }
  tbody.appendChild(row);
}

function jogarRodada() {
  const x = parseInt(document.getElementById("x").value);
  const y = parseInt(document.getElementById("y").value);

  if (isNaN(x) || isNaN(y) || x < 0 || x > 4 || y < 0 || y > 4) {
    alert("Posição inválida. Use números de 0 a 4.");
    return;
  }

  if (tabuleiro[x][y] === true) {
    document.getElementById(`cell-${x}-${y}`).style.backgroundColor = "green";
    alert("Acertou um barco!");
    tabuleiro[x][y] = false;
    pontos += 10;
    barcos--;
  } else {
    document.getElementById(`cell-${x}-${y}`).style.backgroundColor = "red";
    alert("Errou!");
  }

  tirosRestantes--;

  if (barcos === 0) {
    alert(`Parabéns! Você afundou todos os barcos. Pontuação: ${pontos}`);
    location.reload();
  } else if (tirosRestantes === 0) {
    alert("Acabaram seus tiros! Fim de jogo.");
    location.reload();
  }
}
