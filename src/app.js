/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = function() {
  function generateDomain(pronun, adj, noun) {
    let myArray = [];

    for (let i in pronun) {
      for (let j in adj) {
        for (let k in noun) {
          let resultPronun = pronun[i];
          let resultAdj = adj[j];
          let resultNoun = noun[k];

          let domain = resultPronun + resultAdj + resultNoun;

          myArray.push(domain);
        }
      }
    }
    return myArray;
  }
  let pronun = ["the", "of", "other"];
  let adj = ["great", "big", "small"];
  let noun = [".es ", " .com"];

  let result = generateDomain(pronun, adj, noun);
  document.getElementById("listDomainn").innerHTML = result
    .map(domain => '<li class="list-group-item">' + domain + "</li>")
    .join("");
  console.log(result);
};
