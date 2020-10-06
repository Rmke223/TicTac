const makeElement = (tag, className, id, innerText = "") => {
    let element = document.createElement(tag);
    element.setAttribute('class', className);
    element.setAttribute('id', id);
    element.innerText = innerText;
    return element;
}

const divs = [
    { player: "X", tag: "div", class: "col-6 bg-success", id: "px", text: "Good Guys" },
    { player: "O", tag: "div", class: "col-6", id: "po", text: "Bad Guys" },
]

function init() {
    const currentDiv = document.getElementById("main");
    currentDiv.setAttribute("class","container-fluid bg-primary text-center text-white");
    const h1 = document.createElement("h1");
    h1.setAttribute("class", "text-center");
    h1.innerText = "Tic Tac Toe";
    currentDiv.appendChild(h1);
    const players = document.createElement("div");
    players.setAttribute('class', "row")
    currentDiv.appendChild(players);
    // var playerX = document.createElement("div");
    // playerX.setAttribute('class', 'col-6 bg-success')
    // playerX.setAttribute('id', 'px')
    // playerX.innerText = "Good Guys"
    // const playerX = makeElement("div", "col-6 bg-success", "px", "Good Guys");
    // players.appendChild(playerX);
    // const playerO = makeElement("div", "col-6", "po", "Bad Guys");
    // players.appendChild(playerO);

    divs.map((item, idx) => {
        let div = makeElement(item.tag, item.class, item.id, item.text);
        players.appendChild(div);
    })
    // var playerO = document.createElement("div");
    // playerO.setAttribute('class', 'col-6')
    // playerO.setAttribute('id', 'po')
    // playerO.innerText = "Bad Guys"
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
    const row = document.createElement("div");
    row.setAttribute('class', 'row');
    currentDiv.appendChild(row);

    for (i = 1; i < 10; i++) {
        const col = document.createElement("img");
        col.setAttribute('class', 'cell col-4 bg-success border');
        col.setAttribute("id", [i])
        col.setAttribute("style", "")
        col.setAttribute("onclick", "clicker(this.id);")
        col.setAttribute("src", "./img/blank.png");
        
        row.appendChild(col);
    
    }
    const btn = document.createElement("button");
    btn.setAttribute('class', 'bg-success')
    btn.innerHTML = "Reset"
    btn.setAttribute("onclick", "reset();")
    currentDiv.appendChild(btn);

    const brk = document.createElement("br")
    currentDiv.appendChild(brk);

    const btn4 = document.createElement("button");
    btn4.setAttribute('class', 'bg-success')
    btn4.innerHTML = "Reset Scores"
    btn4.setAttribute("onclick", "resetscore();")
    currentDiv.appendChild(btn4);

    const brk2 = document.createElement("br")
    currentDiv.appendChild(brk2);

    const btn3 = document.createElement("button");
    btn3.setAttribute('class', 'bg-success')
    btn3.innerHTML = "Play as Ian"
    btn3.setAttribute("onclick", "changeGood();")
    currentDiv.appendChild(btn3);
    const btn5 = document.createElement("button");
    btn5.setAttribute('class', 'bg-success')
    btn5.innerHTML = "Play as Justin"
    btn5.setAttribute("onclick", "changeGood2();")
    currentDiv.appendChild(btn5);
    const btn7 = document.createElement("button");
    btn7.setAttribute('class', 'bg-success')
    btn7.innerHTML = "Play as Josh"
    btn7.setAttribute("onclick", "changeGood3();")
    currentDiv.appendChild(btn7);


}
var goodSrc = "./img/good1.png"
function changeGood(){
    goodSrc = "./img/good2.png"
    return goodSrc
}
function changeGood2(){
    goodSrc = "./img/good1.png"
    return goodSrc
}
function changeGood3(){
    goodSrc = "./img/good3.png"
    return goodSrc
}


 var state = 0
function clicker(id) {
    if (state == 0) {
        state += 1
        document.getElementById(id).setAttribute ("src",goodSrc)
        document.getElementById(id).removeAttribute('onclick')
        document.getElementById("po").className = "col-6 bg-success";
        document.getElementById("px").className = "col-6 bg-white text-primary";
        checkWin()
    }
    else {
        state -= 1
        document.getElementById(id).setAttribute ("src","./img/bad1.png")
        document.getElementById(id).removeAttribute('onclick')
        document.getElementById("px").className = "col-6 bg-success";
        document.getElementById("po").className = "col-6 bg-white text-primary";
        checkWin()
    }
}

function reset() {
    var cells = document.getElementsByClassName("cell")
    for (var i = 0; i < cells.length; i++) {
        cells[i].setAttribute("onclick", "clicker(this.id)")
        cells[i].setAttribute("src", "./img/blank.png");
        document.getElementById("px").className = "col-6 bg-success";
        document.getElementById("po").className = "col-6 bg-white text-primary";
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
    var c1 = document.getElementById("1").src
    console.log(c1)
    console.log(c1.search("bad"))

    var c2 = document.getElementById("2").src
    var c3 = document.getElementById("3").src
    var c4 = document.getElementById("4").src
    var c5 = document.getElementById("5").src
    var c6 = document.getElementById("6").src
    var c7 = document.getElementById("7").src
    var c8 = document.getElementById("8").src
    var c9 = document.getElementById("9").src
    var cellb = document.getElementsByClassName("cell")

    if (c9.search("good") == 37 && c8.search("good") == 37 && c7.search("good") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Good guys won!"
        scoreX()
    }
    else if (c6.search("good") == 37 && c5.search("good") == 37 && c4.search("good") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Good guys won!"
        scoreX()
    }
    else if (c3.search("good") == 37 && c2.search("good") == 37 && c1.search("good") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Good guys won!"
        scoreX()
    }
    else if (c1.search("good") == 37 && c4.search("good") == 37 && c7.search("good") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Good guys won!"
        scoreX()
    }
    else if (c2.search("good") == 37 && c5.search("good") == 37 && c8.search("good") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Good guys won!"
        scoreX()
    }
    else if (c3.search("good") == 37 && c6.search("good") == 37 && c9.search("good") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Good guys won!"
        scoreX()
    }
    else if (c9.search("good") == 37 && c5.search("good") == 37 && c1.search("good") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Good guys won!"
        scoreX()
    }
    else if (c3.search("good") == 37 && c5.search("good") == 37 && c7.search("good") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Good guys won!"
        scoreX()
    }
    else if (c9.search("bad") == 37 && c8.search("bad") == 37 && c7.search("bad") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Bad guys won!"
        scoreO()
    }
    else if (c6.search("bad") == 37 && c5.search("bad") == 37 && c4.search("bad") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Bad guys won!"
        scoreO()
    }
    else if (c1.search("bad") == 37 && c2.search("bad") == 37 && c3.search("bad") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Bad guys won!"
        scoreO()
    }
    else if (c1.search("bad") == 37 && c4.search("bad") == 37 && c7.search("bad") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Bad guys won!"
        scoreO()
    }
    else if (c2.search("bad") == 37 && c8.search("bad") == 37 && c5.search("bad") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Bad guys won!"
        scoreO()
    }
    else if (c9.search("bad") == 37 && c3.search("bad") == 37 && c6.search("bad") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Bad guys won!"
        scoreO()
    }
    else if (c9.search("bad") == 37 && c5.search("bad") == 37 && c1.search("bad") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Bad guys won!"
        scoreO()
    }
    else if (c3.search("bad") == 37 && c5.search("bad") == 37 && c7.search("bad") == 37) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Bad guys won!"
        scoreO()
    }
    else if ((c1.search("good")==37 || c1.search("bad")==37) && (c2.search("good")==37 || c2.search("bad")==37) && (c3.search("good")==37 || c3.search("bad")==37) && (c4.search("good")==37 || c4.search("bad")==37) && (c5.search("good")==37 || c5.search("bad")==37) && (c6.search("good")==37 || c6.search("bad")==37) && (c7.search("good")==37 || c7.search("bad")==37) && (c8.search("good")==37 || c8.search("bad")==37) && (c9.search("good")==37 || c9.search("bad")==37)) {
        for (var i = 0; i < cellb.length; i++) {
            cellb[i].removeAttribute('onclick')
        }
        document.getElementById("winner").innerHTML = "Tie Game"

    }
}

