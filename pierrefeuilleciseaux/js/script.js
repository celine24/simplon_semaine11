var button = document.getElementById("submit");
var select = document.getElementById("select");
var display = document.getElementById("display");
var victories = document.getElementById("victories");
var stats = document.getElementById("stats");
var game = 0;
var winnerS = 0;
var winnerC = 0;

function play() {
    var computer = Math.random();
    if (computer < 0.2) {
        computer = "pierre";
    }
    else if (computer < 0.4) {
        computer = "feuille";
    }
    else if (computer < 0.6) {
        computer = "ciseaux";
    }
    else if (computer < 0.8) {
        computer = "lézard";
    }
    else {
        computer = "spoke";
    }
    compare(computer);
}

function compare(computer) {
    var msg;
    var win = "vous avez gagné !";
    var lost = "vous avez perdu.";
    game += 1;
    var surfer = select.options[select.selectedIndex].innerHTML.toLowerCase();
    if (computer === surfer) {
        msg = "Egalité ! Rejouez.";
    }
    else {
        if (computer === "pierre") {
            msg = "L'ordinateur a choisi la Pierre. ";
            if (surfer === "feuille") {
                msg += "Vous avez choisi la Feuille. La Feuille enveloppe la Pierre, " + win;
                winnerS += 1;
            }
            else if (surfer === "ciseaux") {
                msg += "Vous avez choisi les Ciseaux. La Pierre casse les Ciseaux," + lost;
                winnerC += 1;
            }
            else if (surfer === "lézard") {
                msg += "Vous avez choisi le Lézard. La Pierre écrase le Lézard, " + lost;
                winnerC += 1;
            }
            else if (surfer === "spoke") {
                msg += "Vous avez choisi Spoke. Spoke détruit la Pierre, " + win;
                winnerS += 1;
            }
        }
        else if (computer === "feuille") {
            msg = "L'ordinateur a choisi la Feuille. ";
            if (surfer === "pierre") {
                msg += "Vous avez choisi la Pierre. La Feuille enveloppe la Pierre, " + lost;
                winnerC += 1;
            }
            else if (surfer === "ciseaux") {
                msg += "Vous avez choisi les Ciseaux. Les Ciseaux coupent la Feuille, " + win;
                winnerS += 1;
            }
            else if (surfer === "lézard") {
                msg += "Vous avez choisi le Lézard. Le Lézard mange la Feuille, " + win;
                winnerS += 1;
            }
            else if (surfer === "spoke") {
                msg += "Vous avez choisi Spoke. La Feuille désavoue Spoke, " + lost;
                winnerC += 1;
            }
        }
        else if (computer === "ciseaux") {
            msg = "L'ordinateur a choisi les Ciseaux. ";
            if (surfer === "pierre") {
                msg += "Vous avez choisi la Pierre. La Pierre casse les Ciseaux, " + win;
                winnerS += 1;
            }
            else if (surfer === "feuille") {
                msg += "Vous avez choisi la Feuille. Les Ciseaux coupent la Feuille, " + lost;
                winnerC += 1;
            }
            else if (surfer === "lézard") {
                msg += "Vous avez choisi le Lézard. Les Ciseaux décapitent le Lézard, " + lost;
                winnerC += 1;
            }
            else if (surfer === "spoke") {
                msg += "Vous avez choisi Spoke. Spoke détruit les Ciseaux, " + win;
                winnerS += 1;
            }
        }
        else if (computer === "lézard") {
            msg = "L'ordinateur a choisi le Lézard. ";
            if (surfer === "pierre") {
                msg += "Vous avez choisi la Pierre. La Pierre écrase le Lézard, " + win;
                winnerS += 1;
            }
            else if (surfer === "feuille") {
                msg += "Vous avez choisi la Feuille. Le Lézard mange la Feuille, " + lost;
                winnerC += 1;
            }
            else if (surfer === "ciseaux") {
                msg += "Vous avez choisi les Ciseaux. Les Ciseaux décapitent le Lézard, " + win;
                winnerS += 1;
            }
            else if (surfer === "spoke") {
                msg += "Vous avez choisi Spoke. Le Lézard empoisonne Spoke, " + lost;
                winnerC += 1;
            }
        }
        else if (computer === "spoke") {
            msg = "L'ordinateur a choisi Spoke. ";
            if (surfer === "pierre") {
                msg += "Vous avez choisi la Pierre. Spoke détruit la Pierre, " + lost;
                winnerC += 1;
            }
            else if (surfer === "feuille") {
                msg += "Vous avez choisi la Feuille. La Feuille désavoue Spoke, " + win;
                winnerS += 1;
            }
            else if (surfer === "ciseaux") {
                msg += "Vous avez choisi les Ciseaux. Spoke écrase les Ciseaux, " + lost;
                winnerC += 1;
            }
            else if (surfer === "lézard") {
                msg += "Vous avez choisi le Lézard. Le Lézard empoisonne Spoke, " + win;
                winnerS += 1;
            }
        }
    }
    display.innerHTML = msg;
    victories.innerHTML = "Joueur " + winnerS + ' - ' + winnerC + " Ordinateur";
    statistics(winnerS);
}

function statistics (winnerS) {
    var percent = Math.ceil(winnerS * 100 / game);
    stats.innerHTML = "Vous avez joué " + game + " fois. Votre pourcentage de victoires contre l'ordinateur est de : " + percent + "%"; 
}

button.onclick = play;
