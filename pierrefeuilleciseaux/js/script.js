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
        computer = "spock";
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
            if (surfer === "feuille" || surfer === "spock") {
                if (surfer === "feuille") {
                    msg += "Vous avez choisi la Feuille. La Feuille enveloppe la Pierre, ";
                }
                else {
                    msg += "Vous avez choisi spock. La Feuille désavoue Spock, ";
                }
                msg += win;
                winnerS += 1;
            }
            else {
                if (surfer === "lézard") {
                    msg += "Vous avez choisi le Lézard. La Pierre écrase le Lézard, ";
                }
                else {
                    msg += "Vous avez choisi spock. Spock désintègre la Pierre, ";
                }
                msg += lost;
                winnerC += 1;
            }
        }
        else if (computer === "feuille") {
            msg = "L'ordinateur a choisi la Feuille. ";
            if (surfer === "ciseaux" || surfer === "lézard") {
                if (surfer === "ciseaux") {
                    msg += "Vous avez choisi la Feuille. Les Ciseaux coupent la Feuille, ";
                }
                else {
                    msg += "Vous avez choisi le Lézard. Le Lézard mange la Feuille, ";
                }
                msg += win;
                winnerS += 1;
            }
            else {
                if (surfer === "pierre") {
                    msg += "Vous avez choisi la Pierre. La Feuille enveloppe la Pierre, ";
                }
                else {
                    msg += "Vous avez choisi Spock. La Feuille désavoue spock, ";
                }
                msg += lost;
                winnerC += 1;
            }
        }
        else if (computer === "ciseaux") {
            msg = "L'ordinateur a choisi les Ciseaux. ";
            if (surfer === "pierre" || surfer === "spock") {
                if (surfer === "pierre") {
                    msg += "Vous avez choisi la Pierre. La Pierre casse les Ciseaux, ";
                }
                else {
                    msg += "Vous avez choisi Spock. Spock détruit les Ciseaux, ";
                }
                msg += win;
                winnerS += 1;
            }
            else {
                if (surfer === "feuille") {
                    msg += "Vous avez choisi la Feuille. Les Ciseaux coupent la Feuille, ";
                }
                else {
                    msg += "Vous avez choisi le Lézard. Les Ciseaux décapitent le Lézard, ";
                }
                msg += lost;
                winnerC += 1;
            }
        }
        else if (computer === "lézard") {
            msg = "L'ordinateur a choisi le Lézard. ";
            if (surfer === "pierre" || surfer === "ciseaux") {
                if (surfer === "pierre") {
                    msg += "Vous avez choisi la Pierre. La Pierre écrase le Lézard, ";
                }
                else {
                    msg += "Vous avez choisi les Ciseaux. Les Ciseaux décapitent le Lézard, ";
                }
                msg += win;
                winnerS += 1;
            }
            else {
                if (surfer === "feuille") {
                    msg += "Vous avez choisi la Feuille. Le Lézard mange la Feuille, ";
                }
                else {
                    msg += "Vous avez choisi Spock. Le Lézard empoisonne Spock, ";
                }
                msg += lost;
                winnerC += 1;
            }
        }
        else if (computer === "spock") {
            msg = "L'ordinateur a choisi Spock. ";
            if (surfer === "feuille" || surfer === "lézard") {
                if (surfer === "feuille") {
                    msg += "Vous avez choisi la Feuille. La Feuille désavoue Spock, ";
                }
                else {
                    msg += "Vous avez choisi le Lézard. Le Lézard empoisonne Spock, ";
                }
                msg += win;
                winnerS += 1;
            }
            else {
                if (surfer === "pierre") {
                    msg += "Vous avez choisi la Pierre. Spock désintègre la Pierre, ";
                }
                else {
                    msg += "Vous avez choisi les Ciseaux. Spock écrabouille les Ciseaux, ";
                }
                msg += lost;
                winnerC += 1;
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
