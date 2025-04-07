var prompt = require("prompt-sync")();
var pontos = 0;
var tabuleiro = [];

for (let i = 0; i < 5; i++) {
    tabuleiro[i] = [];
    for (let j = 0; j < 5; j++) {
        tabuleiro[i][j] = false;
    };
};

var barcos = null;

var jogar = Number(prompt("Deseja jogar?" + "\n" + "1-Sim" + "\n" + "2-Não" + "\n" + ":"));

while (jogar == 1) {
    var dificuldade = Number(prompt("Insira a dificuldade do jogo:" + "\n" + "1-Fácil" + "\n" + "2-Difícil" + "\n" + ": "));

    if (dificuldade == 1) {
        barcos = 5;
    } else if (dificuldade == 2) {
        barcos = 3;
    } else {
        console.log("Insira um valor válido!");
        continue;
    };

    for (let i = 0; i < barcos; i++) {
        var posX = Math.floor(Math.random() * 5);
        var posY = Math.floor(Math.random() * 5);
        while (tabuleiro[posX][posY] == true) {
            posX = Math.floor(Math.random() * 5);
            posY = Math.floor(Math.random() * 5);
            
        }
        tabuleiro[posX][posY] = true;
    };

    console.log(tabuleiro);

    var numTiros = 10;

    function tiro(x, y) {
        if (tabuleiro[x][y] == true) {
            barcos--;
            console.log("Você acertou um barco! Restam: " + barcos);
            pontos += 10;
        } else {
            console.log("Você errou o tiro, tente novamente!");
        }
    };

    for (let i = 0; i < numTiros; i++) {
        var tiro1 = Number(prompt("TIRO X (0 a 4): "));
        var tiro2 = Number(prompt("TIRO Y (0 a 4): "));
        

        if (tiro1 < 0 || tiro1 > 4 || tiro2 < 0 || tiro2 > 4) {
            console.log("Posição inválida. Tente novamente.");
            i--;
            continue;
        }

        tiro(tiro1, tiro2);

        if (barcos == 0) {
            console.log("Parabéns! Você afundou todos os barcos.");
            break;
        }
    };

    if (barcos > 0) {
        console.log("Fim do jogo! Você não afundou todos os barcos.");
    };

    jogar = Number(prompt("Deseja jogar novamente?" + "\n" + "1-Sim" + "\n" + "2-Não" + "\n"+ ": "));
}


