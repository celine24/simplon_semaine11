var randomValue = Math.ceil(Math.random() * 100) ;

var proposal = document.getElementById("proposal");
var button = document.getElementById("submit");
var display = document.getElementById("display");

function check() {
    var msg;
    if (proposal.value < 1 || proposal.value > 100 || isNaN(proposal.value)) {
        msg = "Merci d'entrer un NOMBRE entre 1 et 100";
    }
    else if (proposal.value < randomValue) {
        msg = "Trop petit ! Essayez encore !";
    }
    else if (proposal.value > randomValue) {
        msg = "Trop grand Essayez encore !";
    }
    else if (proposal.value == randomValue){
        msg = "Bravo ! Vous avez trouvé le nombre mystère :)";
    }
    display.innerHTML = msg;
}
    
    
button.onclick = check;