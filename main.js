

function init() {
    const currentDiv = document.getElementById("main");
    const h1 = document.createElement("h1");
    h1.setAttribute("class", "text-center");
    h1.innerText = "Tic Tac Toe";
    currentDiv.appendChild(h1);
    const players = document.createElement("div");
    players.setAttribute('class', "row")
    currentDiv.appendChild(players);
    var playerX = document.createElement("div");
    playerX.setAttribute('class', 'col-4 mx-auto bg-success')
    playerX.setAttribute('id', 'px')
    playerX.innerText = "Player X"
    players.appendChild(playerX);
    var playerO = document.createElement("div");
    playerO.setAttribute('class', 'col-4 mx-auto')
    playerO.setAttribute('id', 'po')
    playerO.innerText = "Player 0"
    players.appendChild(playerO);
    const scores = document.createElement("div");
    scores.setAttribute('class', "row")
    currentDiv.appendChild(scores);
    var scoreX = document.createElement("div");
    scoreX.setAttribute('class', 'col-4 mx-auto')
    scoreX.setAttribute('id','sx')
    scoreX.innerText = 0
    scores.appendChild(scoreX);
    var scoreO = document.createElement("div");
    scoreO.setAttribute('class', 'col-4 mx-auto')
    scoreO.setAttribute('id','so')
    scoreO.innerText = 0
    scores.appendChild(scoreO);
    const winners = document.createElement('div')
    winners.setAttribute('class', "row")
    currentDiv.appendChild(winners);
    var winner = document.createElement('div')
    winner.setAttribute('class', 'col text-center')
    winner.setAttribute('id', 'winner')
    winners.appendChild(winner)




    const board = document.createElement("div");
    board.setAttribute("class", "container-fluid border");
    currentDiv.appendChild(board);
    const row = document.createElement("div");
    row.setAttribute('class', 'row');
    board.appendChild(row);

    for (i = 1; i < 10; i++) {
        const col = document.createElement("div");
        col.setAttribute('class', 'cell col-4 bg-success border');
        col.setAttribute("id", [i])
        col.setAttribute("style", "height: 150px;")
        col.setAttribute("onclick", "clicker(this.id);")
        col.innerText = ""
        row.appendChild(col);
    }
    const btn = document.createElement("button");
    btn.setAttribute('class', 'bg-success')
    btn.innerHTML = "Reset"
    btn.setAttribute("onclick", "reset();")
    currentDiv.appendChild(btn);

    const brk = document.createElement("br")
    currentDiv.appendChild(brk);


    const btn2 = document.createElement("button");
    btn2.setAttribute('class', 'bg-success')
    btn2.innerHTML = "Reset Scores"
    btn2.setAttribute("onclick", "resetscore();")
    currentDiv.appendChild(btn2);
}


var state = 0
function clicker(id) {
    if (state == 0) {
        state += 1
        document.getElementById(id).innerHTML = "x"
        document.getElementById(id).removeAttribute('onclick')
        document.getElementById("po").className = "col-6 bg-success";
        document.getElementById("px").className = "col-6 bg-white";
        checkWin()
    }
    else {
        state -= 1
        document.getElementById(id).innerHTML = "o"
        document.getElementById(id).removeAttribute('onclick')
        document.getElementById("px").className = "col-6 bg-success";
        document.getElementById("po").className = "col-6 bg-white";
        checkWin()
    }
}

function reset() {
    var cells = document.getElementsByClassName("cell")
    for (var i = 0; i < cells.length; i++) {
        cells[i].setAttribute("onclick", "clicker(this.id)")
        cells[i].innerHTML = ""
        document.getElementById("px").className = "col-6 bg-success";
        document.getElementById("po").className = "col-6 bg-white";
        document.getElementById("winner").innerHTML = ""
        state = 0
    }
}
var scorex = 0
var scoreo = 0
function scoreX(){
    scorex += 1
    document.getElementById("sx").innerHTML = scorex
}
var scoreo = 0
function scoreO(){
    scoreo += 1
    document.getElementById("so").innerHTML = scoreo
}
function resetscore(){
    scorex = 0
    document.getElementById("sx").innerHTML = 0
    score0 = 0
    document.getElementById("so").innerHTML = 0


}
function checkWin() {
    var c1 = document.getElementById("1").innerHTML
    var c2 = document.getElementById("2").innerHTML
    var c3 = document.getElementById("3").innerHTML
    var c4 = document.getElementById("4").innerHTML
    var c5 = document.getElementById("5").innerHTML
    var c6 = document.getElementById("6").innerHTML
    var c7 = document.getElementById("7").innerHTML
    var c8 = document.getElementById("8").innerHTML
    var c9 = document.getElementById("9").innerHTML
    var cellb = document.getElementsByClassName("cell")

    if (c9 == "x" && c8 == "x" && c7 == "x") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player X has won!"
        scoreX()
    }
    else if (c6 == "x" && c5 == "x" && c4 == "x") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player X has won!"
        scoreX()
    }
    else if (c1 == "x" && c2 == "x" && c3 == "x") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player X has won!"
        scoreX()
    }
    else if (c1 == "x" && c4 == "x" && c7 == "x") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player X has won!"
        scoreX()
    }
    else if (c2 == "x" && c5 == "x" && c8 == "x") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player X has won!"
        scoreX()
    }
    else if (c3 == "x" && c6 == "x" && c9 == "x") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player X has won!"
        scoreX()
    }
    else if (c1 == "x" && c5 == "x" && c9 == "x") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player X has won!"
        scoreX()
    }
    else if (c3 == "x" && c5 == "x" && c7 == "x") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player X has won!"
        scoreX()
    }
    else if (c9 == "o" && c8 == "o" && c7 == "o") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player O has won!"
        scoreO()
    }
    else if (c6 == "o" && c5 == "o" && c4 == "o") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player O has won!"
        scoreO()
    }
    else if (c1 == "o" && c2 == "o" && c3 == "o") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player O has won!"
        scoreO()
    }
    else if (c1 == "o" && c4 == "o" && c7 == "o") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player O has won!"
        scoreO()
    }
    else if (c2 == "o" && c5 == "o" && c8 == "o") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player O has won!"
        scoreO()
    }
    else if (c3 == "o" && c6 == "o" && c9 == "o") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player O has won!"
        scoreO()
    }
    else if (c1 == "o" && c5 == "o" && c9 == "o") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player O has won!"
        scoreO()
    }
    else if (c3 == "o" && c5 == "o" && c7 == "o") {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Player O has won!"
        scoreO()
    }
    else if ((c1 == "x" || c1 == "o") && (c2 == "x" || c2 == "o") && (c3 == "x" || c3 == "o") && (c4 == "x" || c4 == "o") && (c5 == "x" || c5 == "o") && (c6 == "x" || c6 == "o") && (c7 == "x" || c7 == "o") && (c8 == "x" || c8 == "o") && (c9 == "x" || c9 == "o")) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Tie Game"

    }
}