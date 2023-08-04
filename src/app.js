/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //array with the words
  var first = "Un ";
  var noun = ["gato ", "perro ", "chofer ", "policia ", "novia ", "mamà "];
  var action = [
    "se comió ",
    "vomitó ",
    "se embriagó ",
    "nos detuvo ",
    "me besó "
  ];
  var possetion = [
    "en su plato ",
    "sobre el proyecto ",
    "camino a la escuela ",
    "al irnos a la playa ",
    "en los zapatos "
  ];
  var where = [
    "mientras estaba nadando",
    "al medio día",
    "a media noche",
    "despues del almuerzo"
  ];

  // declaring random variables
  var rdm1 = Math.floor(Math.random() * noun.length);
  var rdm2 = Math.floor(Math.random() * action.length);
  var rdm3 = Math.floor(Math.random() * possetion.length);
  var rdm4 = Math.floor(Math.random() * where.length);

  //creating a sentence (the excuse)
  document.querySelector("#theexcuse").innerHTML =
    first + noun[rdm1] + action[rdm2] + possetion[rdm3] + where[rdm4];
};
