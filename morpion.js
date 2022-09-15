function estValide(button) {
  return button.innerHTML.length == 0;
  }

  function setSymbol(btn, symbole, string, asset) {
    btn.classList.add(symbole);
    btn.innerHTML = string;
    btn.style.backgroundImage = asset
  }
  
  function rechercherVainqueur(pions, joueurs, tour) {
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[1].innerHTML == joueurs[tour] &&
      pions[2].innerHTML == joueurs[tour] 
    ) {
      document.getElementById('winingBar').style.display = "block"
      document.getElementById('winingBar').style.top = "10%"
   }
  
    if (
      pions[3].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[5].innerHTML == joueurs[tour]
    ) { if (pions[3].classList.contains('croix') == true) {
      pions[3].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[5].style.backgroundColor = "#9ACD32";
      return true;
    }else {
      pions[3].style.backgroundColor = "grey";
      pions[4].style.backgroundColor = "grey";
      pions[5].style.backgroundColor = "grey";
      return true;
    } }
  
    if (
      pions[6].innerHTML == joueurs[tour] &&
      pions[7].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) { if (pions[6].classList.contains('croix') == true) {
      pions[6].style.backgroundColor = "#9ACD32";
      pions[7].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      return true;
    }else {
      pions[6].style.backgroundColor = "grey";
      pions[7].style.backgroundColor = "grey";
      pions[8].style.backgroundColor = "grey";
      return true;
    } }
  
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[3].innerHTML == joueurs[tour] &&
      pions[6].innerHTML == joueurs[tour]
    ) { if (pions[0].classList.contains('croix') == true) {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[3].style.backgroundColor = "#9ACD32";
      pions[6].style.backgroundColor = "#9ACD32";
      return true;
    }else {
      pions[0].style.backgroundColor = "grey";
      pions[3].style.backgroundColor = "grey";
      pions[6].style.backgroundColor = "grey";
      return true;
    } }
  
    if (
      pions[1].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[7].innerHTML == joueurs[tour]
    ) { if (pions[1].classList.contains('croix') == true) {
      pions[1].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[7].style.backgroundColor = "#9ACD32";
      return true;
    }else {
      pions[1].style.backgroundColor = "grey";
      pions[4].style.backgroundColor = "grey";
      pions[7].style.backgroundColor = "grey";
      return true;
    } }
  
    if (
      pions[2].innerHTML == joueurs[tour] &&
      pions[5].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) { if (pions[2].classList.contains('croix') == true) {
      pions[2].style.backgroundColor = "#9ACD32";
      pions[5].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      return true;
    }else {
      pions[2].style.backgroundColor = "grey";
      pions[5].style.backgroundColor = "grey";
      pions[8].style.backgroundColor = "grey";
      return true;
    } }
  
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) { if (pions[0].classList.contains('croix') == true) {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      return true;
    }else {
      pions[0].style.backgroundColor = "grey";
      pions[4].style.backgroundColor = "grey";
      pions[8].style.backgroundColor = "grey";
      return true;
    } }
  
    if (
      pions[2].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[6].innerHTML == joueurs[tour]
    ) { if (pions[2].classList.contains('croix') == true) {
      pions[2].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[6].style.backgroundColor = "#9ACD32";
      return true;
    } else {
      pions[2].style.backgroundColor = "grey";
      pions[4].style.backgroundColor = "grey";
      pions[6].style.backgroundColor = "grey";
      return true;
    } }
  }
  
  function matchNul(pions) {
    for (var i = 0, len = pions.length; i < len; i++) {
      if (pions[i].innerHTML.length == 0) return false;
    }
  
    return true;
  }
  
  var Afficheur = function(element) {
    var affichage = element;
  
    function setText(message) {
      affichage.innerHTML = message;
    }
  
    return { sendMessage: setText };
  };
  
  function main() {
    var pions = document.querySelectorAll("#Jeu button");
    var joueurs = ["X", "O"];
    var iconejoueur = ["croix","rond"];
    // changer les assets de choixAssets
    let choixAssets = [["url('Xoxo_X_wobg.png')",  "url('onePage/assets/connect1.png')", "url('onePage/assets/buy.png')"], ["url('onePage/assets/connect.png')", "url('onePage/assets/buy1.png')", "url('Xoxo_0_wobg.png')"]]
    let randomNum = 0
    var tour = 0;
    var jeuEstFini = false;
    var afficheur = new Afficheur(document.querySelector("#StatutJeu"));
    afficheur.sendMessage(
      "Game can start! <br /> player " +
        joueurs[tour] +
        " it's your turn!"
    );
    for (var i = 0, len = pions.length; i < len; i++) {
      pions[i].addEventListener("click", function() {
        if (jeuEstFini) return;
  
        if (!estValide(this)) {
          afficheur.sendMessage(
            "Location already taken! <br />Player " +
              joueurs[tour] +
              " it's still your turn!"
          );
        } else {
          // changer 2 pour qu'il soit égale à n-1 avec n nombre d'élément dans les sous listes de choixAssets
          randomNum = parseInt(Math.random()*(2-0+1)+0)
          setSymbol(this, iconejoueur[tour], joueurs[tour], choixAssets[tour][randomNum]);
          jeuEstFini = rechercherVainqueur(pions, joueurs, tour);
  
          if (jeuEstFini) {
            afficheur.sendMessage(
              "Player" +
                joueurs[tour] +
                ' won! <br /> <a href="morpion.html">Play again</a>'
            );
            return;
          }
  
          if (matchNul(pions)) {
            afficheur.sendMessage(
              'Draw! <br/> <a href="morpion.html">Play again</a>'
            );
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
  

