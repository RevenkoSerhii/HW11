!function(){var e=function(e){},n=document.querySelector(".breed-select");console.dir(n);console.log("api.thecatapi.com/v1/breeds"),fetch("https://api.thecatapi.com/v1/breeds?x-api-key=live_DPoEn7ODxFWtOuCuArwxp1OQLssTX1nqeQH867cwI0O0dOL6IoCfgFJ6Sz3604vd").then((function(e){return e.json()})).then((function(n){return n.map((function(n){return console.log(e(n.name))})).join("")})).catch((function(e){return console.log(e)}))}();
//# sourceMappingURL=index.4c25807f.js.map
