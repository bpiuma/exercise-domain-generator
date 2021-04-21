/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var dom = [".com", ".net"];
  var salida = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++)
          salida += pronoun[i] + adj[j] + noun[k] + dom[l] + "<br>";
      }
    }
  }

  document.getElementById("boton").addEventListener("click", mostrar);

  function mostrar() {
    document.getElementById("mensaje").innerHTML = salida;
  }
};
