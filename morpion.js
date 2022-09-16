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
      document.getElementById('winingBar').style.top = "15%"
      return true
   }
  
    if (
      pions[3].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[5].innerHTML == joueurs[tour]
    ) {
      document.getElementById('winingBar').style.display = "block"
      document.getElementById('winingBar').style.top = "43%"
      return true
    } 
  
    if (
      pions[6].innerHTML == joueurs[tour] &&
      pions[7].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) { 
      document.getElementById('winingBar').style.display = "block"
      document.getElementById('winingBar').style.top = "70%"
      return true
    } 
  
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[3].innerHTML == joueurs[tour] &&
      pions[6].innerHTML == joueurs[tour]
    ) { 
      document.getElementById('winingBar').style.display = "block"
      document.getElementById('winingBar').style.transform = "rotateZ(90deg)"
      document.getElementById('winingBar').style.top = "50%"
      document.getElementById('winingBar').style.left = "-30%"
      document.getElementById('winingBar').style.width = "95%"
      return true
    }
  
    if (
      pions[1].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[7].innerHTML == joueurs[tour]
    ) { 
      document.getElementById('winingBar').style.display = "block"
      document.getElementById('winingBar').style.transform = "rotateZ(90deg)"
      document.getElementById('winingBar').style.top = "50%"
      document.getElementById('winingBar').style.left = "0%"
      document.getElementById('winingBar').style.width = "95%"
      return true
     }
  
    if (
      pions[2].innerHTML == joueurs[tour] &&
      pions[5].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) { 
      document.getElementById('winingBar').style.display = "block"
      document.getElementById('winingBar').style.transform = "rotateZ(90deg)"
      document.getElementById('winingBar').style.top = "48%"
      document.getElementById('winingBar').style.left = "35%"
      document.getElementById('winingBar').style.width = "98%"
      return true
     }
  
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) { 
      document.getElementById('winingBar').style.display = "block"
      document.getElementById('winingBar').style.transform = "rotateZ(40deg)"
      document.getElementById('winingBar').style.top = "45%"
      document.getElementById('winingBar').style.left = "-12%"
      document.getElementById('winingBar').style.width = "130%"
      return true
    }
  
    if (
      pions[2].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[6].innerHTML == joueurs[tour]
    ) { 
      document.getElementById('winingBar').style.display = "block"
      document.getElementById('winingBar').style.transform = "rotateZ(-40deg)"
      document.getElementById('winingBar').style.top = "45%"
      document.getElementById('winingBar').style.left = "-12%"
      document.getElementById('winingBar').style.width = "130%"
      return true
    }}
  
  
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
  

