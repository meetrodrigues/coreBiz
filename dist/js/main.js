"use strict";function createNode(t){return document.createElement(t)}function append(t,e){return t.appendChild(e)}function clickActive(t){var e=document.querySelector(t);e.addEventListener("click",function(){e.classList.toggle("active")})}function addToCartCreate(t,e){var n=createNode("span");n.setAttribute("class",e),append(t,n)}function addToCartValue(){var e=parseFloat(document.querySelector(".header__container--cart .value").textContent),n=document.querySelector(".header__container--cart .value");document.querySelectorAll(".product__list__container--cart").forEach(function(t){t.addEventListener("click",function(){e+=parseFloat(getSinblings(t)),n.textContent="R$"+e.toLocaleString(),console.log(e)})})}function getSinblings(t){for(var e=[],n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return parseFloat(e[2].textContent)}function createShelves(){fetch("../../products.json").then(function(t){return t.json()}).then(function(t){console.log("data: ",t);var e=document.querySelector(".product__list");for(var n in t)if(t.hasOwnProperty(n)){var r=t[n],c=r.images[0].imageUrl,o=createNode("li");o.setAttribute("class","product__list__container"),o.innerHTML='\n                    <img class="product__list__container--img" src="'+c+'">\n                    <p class="product__list__container--title">'+r.name+'</p>\n                    <p class="product__list__container--value"> '+r.Value+' </p>\n                    <button class="product__list__container--buy"> Comprar </button>\n                    ',append(e,o),addToCartCreate(o,"product__list__container--cart")}addToCartValue()}).catch(function(t){console.log("error: ",t)})}window.addEventListener("DOMContentLoaded",function(){createShelves(),clickActive(".menu--mobile"),clickActive(".header__container--cart")});