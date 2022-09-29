function estValide(button) {
    return button.innerHTML.length == 0;
}

function setSymbol(btn, symbole, string, asset) {
    btn.classList.add(symbole);
    btn.innerHTML = string;
    btn.style.backgroundImage = asset;
}

function randomChoice(pions, symbole, joueurs, asset) {
    choice = Math.ceil(Math.random() * 8);
    choiceID = choice;
    if (pions[choiceID].innerHTML !== "") {
        randomChoice(pions, symbole, joueurs, asset);
    } else {
        pions[choice].classList.add(symbole);
        pions[choice].innerHTML = joueurs[1];
        pions[choice].style.backgroundImage = asset;
    }
}

function computerTurn(pions, symbole, joueurs, asset, computerChoice) {
    if (
        (pions[1].innerHTML == joueurs[1] && pions[2].innerHTML == joueurs[1]) ||
        (pions[3].innerHTML == joueurs[1] && pions[6].innerHTML == joueurs[1]) ||
        (pions[4].innerHTML == joueurs[1] && pions[8].innerHTML == joueurs[1])
    ) {
        if (estValide(pions[0]) == true && computerChoice === false) {
            pions[0].classList.add(symbole);
            pions[0].innerHTML = joueurs[1];
            pions[0].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[1] && pions[2].innerHTML == joueurs[1]) ||
        (pions[4].innerHTML == joueurs[1] && pions[7].innerHTML == joueurs[1])
    ) {
        if (estValide(pions[1]) == true && computerChoice === false) {
            pions[1].classList.add(symbole);
            pions[1].innerHTML = joueurs[1];
            pions[1].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[1] && pions[1].innerHTML == joueurs[1]) ||
        (pions[4].innerHTML == joueurs[1] && pions[6].innerHTML == joueurs[1]) ||
        (pions[5].innerHTML == joueurs[1] && pions[8].innerHTML == joueurs[1])
    ) {
        if (estValide(pions[2]) == true && computerChoice === false) {
            pions[2].classList.add(symbole);
            pions[2].innerHTML = joueurs[1];
            pions[2].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[1] && pions[6].innerHTML == joueurs[1]) ||
        (pions[4].innerHTML == joueurs[1] && pions[5].innerHTML == joueurs[1])
    ) {
        if (estValide(pions[3]) == true && computerChoice === false) {
            pions[3].classList.add(symbole);
            pions[3].innerHTML = joueurs[1];
            pions[3].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[1] && pions[8].innerHTML == joueurs[1]) ||
        (pions[1].innerHTML == joueurs[1] && pions[7].innerHTML == joueurs[1]) ||
        (pions[3].innerHTML == joueurs[1] && pions[5].innerHTML == joueurs[1])
    ) {
        if (estValide(pions[4]) == true && computerChoice === false) {
            pions[4].classList.add(symbole);
            pions[4].innerHTML = joueurs[1];
            pions[4].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[2].innerHTML == joueurs[1] && pions[8].innerHTML == joueurs[1]) ||
        (pions[3].innerHTML == joueurs[1] && pions[4].innerHTML == joueurs[1])
    ) {
        if (estValide(pions[5]) == true && computerChoice === false) {
            pions[5].classList.add(symbole);
            pions[5].innerHTML = joueurs[1];
            pions[5].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[1] && pions[3].innerHTML == joueurs[1]) ||
        (pions[2].innerHTML == joueurs[1] && pions[4].innerHTML == joueurs[1]) ||
        (pions[7].innerHTML == joueurs[1] && pions[8].innerHTML == joueurs[1])
    ) {
        if (estValide(pions[6]) == true && computerChoice === false) {
            pions[6].classList.add(symbole);
            pions[6].innerHTML = joueurs[1];
            pions[6].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[1].innerHTML == joueurs[1] && pions[4].innerHTML == joueurs[1]) ||
        (pions[6].innerHTML == joueurs[1] && pions[8].innerHTML == joueurs[1])
    ) {
        if (estValide(pions[7]) == true && computerChoice === false) {
            pions[7].classList.add(symbole);
            pions[7].innerHTML = joueurs[1];
            pions[7].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[1] && pions[4].innerHTML == joueurs[1]) ||
        (pions[2].innerHTML == joueurs[1] && pions[5].innerHTML == joueurs[1]) ||
        (pions[6].innerHTML == joueurs[1] && pions[7].innerHTML == joueurs[1])
    ) {
        if (estValide(pions[8]) == true && computerChoice === false) {
            pions[8].classList.add(symbole);
            pions[8].innerHTML = joueurs[1];
            pions[8].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[1].innerHTML == joueurs[0] && pions[2].innerHTML == joueurs[0]) ||
        (pions[3].innerHTML == joueurs[0] && pions[6].innerHTML == joueurs[0]) ||
        (pions[4].innerHTML == joueurs[0] && pions[8].innerHTML == joueurs[0])
    ) {
        if (estValide(pions[0]) == true && computerChoice === false) {
            pions[0].classList.add(symbole);
            pions[0].innerHTML = joueurs[1];
            pions[0].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[0] && pions[2].innerHTML == joueurs[0]) ||
        (pions[4].innerHTML == joueurs[0] && pions[7].innerHTML == joueurs[0])
    ) {
        if (estValide(pions[1]) == true && computerChoice === false) {
            pions[1].classList.add(symbole);
            pions[1].innerHTML = joueurs[1];
            pions[1].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[0] && pions[1].innerHTML == joueurs[0]) ||
        (pions[4].innerHTML == joueurs[0] && pions[6].innerHTML == joueurs[0]) ||
        (pions[5].innerHTML == joueurs[0] && pions[8].innerHTML == joueurs[0])
    ) {
        if (estValide(pions[2]) == true && computerChoice === false) {
            pions[2].classList.add(symbole);
            pions[2].innerHTML = joueurs[1];
            pions[2].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[0] && pions[6].innerHTML == joueurs[0]) ||
        (pions[4].innerHTML == joueurs[0] && pions[5].innerHTML == joueurs[0])
    ) {
        if (estValide(pions[3]) == true && computerChoice === false) {
            pions[3].classList.add(symbole);
            pions[3].innerHTML = joueurs[1];
            pions[3].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[0] && pions[8].innerHTML == joueurs[0]) ||
        (pions[1].innerHTML == joueurs[0] && pions[7].innerHTML == joueurs[0]) ||
        (pions[3].innerHTML == joueurs[0] && pions[5].innerHTML == joueurs[0])
    ) {
        if (estValide(pions[4]) == true && computerChoice === false) {
            pions[4].classList.add(symbole);
            pions[4].innerHTML = joueurs[1];
            pions[4].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[2].innerHTML == joueurs[0] && pions[8].innerHTML == joueurs[0]) ||
        (pions[3].innerHTML == joueurs[0] && pions[4].innerHTML == joueurs[0])
    ) {
        if (estValide(pions[5]) == true && computerChoice === false) {
            pions[5].classList.add(symbole);
            pions[5].innerHTML = joueurs[1];
            pions[5].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[0] && pions[3].innerHTML == joueurs[0]) ||
        (pions[2].innerHTML == joueurs[0] && pions[4].innerHTML == joueurs[0]) ||
        (pions[7].innerHTML == joueurs[0] && pions[8].innerHTML == joueurs[0])
    ) {
        if (estValide(pions[6]) == true && computerChoice === false) {
            pions[6].classList.add(symbole);
            pions[6].innerHTML = joueurs[1];
            pions[6].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[1].innerHTML == joueurs[0] && pions[4].innerHTML == joueurs[0]) ||
        (pions[6].innerHTML == joueurs[0] && pions[8].innerHTML == joueurs[0])
    ) {
        if (estValide(pions[7]) == true && computerChoice === false) {
            pions[7].classList.add(symbole);
            pions[7].innerHTML = joueurs[1];
            pions[7].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (
        (pions[0].innerHTML == joueurs[0] && pions[4].innerHTML == joueurs[0]) ||
        (pions[2].innerHTML == joueurs[0] && pions[5].innerHTML == joueurs[0]) ||
        (pions[6].innerHTML == joueurs[0] && pions[7].innerHTML == joueurs[0])
    ) {
        if (estValide(pions[8]) == true && computerChoice === false) {
            pions[8].classList.add(symbole);
            pions[8].innerHTML = joueurs[1];
            pions[8].style.backgroundImage = asset;
            computerChoice = true;
        }
    }
    if (computerChoice === false) {
        randomChoice(pions, symbole, joueurs, asset);
        computerChoice = true;
    }
}

function rechercherVainqueur(pions, joueurs, tour) {
    if (pions[0].innerHTML == joueurs[tour] && pions[1].innerHTML == joueurs[tour] && pions[2].innerHTML == joueurs[tour]) {
        document.getElementById("winingBar").style.display = "block";
        document.getElementById("winingBar").style.top = "5%";
        document.getElementById("winingBar").style.left = "-5%";
        return true;
    }

    if (pions[3].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[5].innerHTML == joueurs[tour]) {
        document.getElementById("winingBar").style.display = "block";
        document.getElementById("winingBar").style.top = "25%";
        document.getElementById("winingBar").style.left = "-5%";
        return true;
    }

    if (pions[6].innerHTML == joueurs[tour] && pions[7].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]) {
        document.getElementById("winingBar").style.display = "block";
        document.getElementById("winingBar").style.top = "45%";
        document.getElementById("winingBar").style.left = "-5%";
        return true;
    }

    if (pions[0].innerHTML == joueurs[tour] && pions[3].innerHTML == joueurs[tour] && pions[6].innerHTML == joueurs[tour]) {
        document.getElementById("winingBar").style.display = "block";
        document.getElementById("winingBar").style.transform = "rotateZ(90deg)";
        document.getElementById("winingBar").style.top = "30%";
        document.getElementById("winingBar").style.left = "-30%";
        document.getElementById("winingBar").style.width = "90%";
        return true;
    }

    if (pions[1].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[7].innerHTML == joueurs[tour]) {
        document.getElementById("winingBar").style.display = "block";
        document.getElementById("winingBar").style.transform = "rotateZ(90deg)";
        document.getElementById("winingBar").style.top = "30%";
        document.getElementById("winingBar").style.left = "0%";
        document.getElementById("winingBar").style.width = "90%";
        return true;
    }

    if (pions[2].innerHTML == joueurs[tour] && pions[5].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]) {
        document.getElementById("winingBar").style.display = "block";
        document.getElementById("winingBar").style.transform = "rotateZ(90deg)";
        document.getElementById("winingBar").style.top = "30%";
        document.getElementById("winingBar").style.left = "35%";
        document.getElementById("winingBar").style.width = "90%";
        return true;
    }

    if (pions[0].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]) {
        document.getElementById("winingBar").style.display = "block";
        document.getElementById("winingBar").style.transform = "rotateZ(47deg)";
        document.getElementById("winingBar").style.top = "28%";
        document.getElementById("winingBar").style.left = "-12%";
        document.getElementById("winingBar").style.width = "140%";
        return true;
    }

    if (pions[2].innerHTML == joueurs[tour] && pions[4].innerHTML == joueurs[tour] && pions[6].innerHTML == joueurs[tour]) {
        document.getElementById("winingBar").style.display = "block";
        document.getElementById("winingBar").style.transform = "rotateZ(-42deg)";
        document.getElementById("winingBar").style.top = "22%";
        document.getElementById("winingBar").style.left = "-15%";
        document.getElementById("winingBar").style.width = "140%";
        return true;
    }
}

function matchNul(pions) {
    for (var i = 0, len = pions.length; i < len; i++) {
        if (pions[i].innerHTML.length == 0) return false;
    }

    return true;
}

var Afficheur = function (element) {
    var affichage = element;

    function setText(message) {
        affichage.innerHTML = message;
    }

    return {sendMessage: setText};
};

function main() {
    var pions = document.querySelectorAll("#Jeu button");
    var joueurs = ["X", "O"];
    var iconejoueur = ["croix", "rond"];
    // changer les assets de choixAssets
    let choixAssets = [
        ["url('Xoxo_X_wobg.png')", "url('onePage/assets/connect1.png')", "url('onePage/assets/buy.png')"],
        ["url('onePage/assets/connect.png')", "url('onePage/assets/buy1.png')", "url('Xoxo_0_wobg.png')"],
    ];
    let randomNum = 0;
    var tour = 0;
    let computerChoice = false;
    var jeuEstFini = false;
    var afficheur = new Afficheur(document.querySelector("#StatutJeu"));
    afficheur.sendMessage("Game can start! <br /> player " + joueurs[tour] + " it's your turn!");
    for (var i = 0, len = pions.length; i < len; i++) {
        pions[i].addEventListener("click", function () {
            if (jeuEstFini) return;

            if (!estValide(this)) {
                afficheur.sendMessage("Location already taken! <br />Player " + joueurs[tour] + " it's still your turn!");
            } else {
                // changer 2 pour qu'il soit égale à n-1 avec n nombre d'élément dans les sous listes de choixAssets
                randomNum = parseInt(Math.random() * (2 - 0 + 1) + 0);
                setSymbol(this, iconejoueur[0], joueurs[0], choixAssets[0][0]);
                jeuEstFini = rechercherVainqueur(pions, joueurs, tour);

                if (jeuEstFini) {
                    afficheur.sendMessage("Player" + joueurs[tour] + ' won! <br /> <a href="morpion.html">Play again</a>');
                    return;
                }

                if (matchNul(pions)) {
                    afficheur.sendMessage('Draw! <br/> <a href="morpion.html">Play again</a>');
                    return;
                }
                tour++;
                computerChoice = false;
                afficheur.sendMessage("Computer turn!");

                computerTurn(pions, iconejoueur[1], joueurs, choixAssets[1][2], computerChoice);
                jeuEstFini = rechercherVainqueur(pions, joueurs, tour);

                if (jeuEstFini) {
                    afficheur.sendMessage("Player" + joueurs[tour] + ' won! <br /> <a href="morpion.html">Play again</a>');
                    return;
                }

                if (matchNul(pions)) {
                    afficheur.sendMessage('Draw! <br/> <a href="morpion.html">Play again</a>');
                    return;
                }

                tour++;
                tour = tour % 2;
                afficheur.sendMessage("Player " + joueurs[tour] + " it's your turn!");
            }
        });
    }
}

main();
