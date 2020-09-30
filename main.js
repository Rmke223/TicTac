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
        document.getElementById("px").className = "col-6 bg-white";
        document.getElementById("po").className = "col-6 bg-white";
        document.getElementById("winner").innerHTML = ""
    }
}
var scorex = 0
function scoreX(){
    scorex += 1
    document.getElementById("sx").innerHTML = scorex
}
var scoreo = 0
function scoreO(){
    scoreo += 1
    document.getElementById("so").innerHTML = scoreo
}

function checkWin() {
    var c1 = document.getElementById("t1").innerHTML
    var c2 = document.getElementById("t2").innerHTML
    var c3 = document.getElementById("t3").innerHTML
    var c4 = document.getElementById("t4").innerHTML
    var c5 = document.getElementById("t5").innerHTML
    var c6 = document.getElementById("t6").innerHTML
    var c7 = document.getElementById("t7").innerHTML
    var c8 = document.getElementById("t8").innerHTML
    var c9 = document.getElementById("t9").innerHTML
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
        document.getElementById("winner").innerHTML = "Player O has won!"
        scoreO()
    }

}
