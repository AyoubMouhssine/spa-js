// import functions
import consulterAnnonce from "./consulterAnnonce.js";
import diffuserAnnonce from "./diffuserAnnonce.js";
import administrerAnnonce from "./administrerAnonce.js";
// content to be changed dynamically
const content = document.querySelector("#content");

//recuperer
const consulter = document.getElementById("consulter");
const diffuser = document.getElementById("diffuser");
const administrer = document.getElementById("administrer");

// get les annonces using getAnnonces function from db.js

//
consulter.onclick = () => {
  consulterAnnonce(annonces, content);
};

//
diffuser.onclick = diffuserAnnonce;

//
administrer.onclick = administrerAnnonce;
