const e=function(e){};const o=document.querySelector(".breed-select");console.dir(o);console.log("api.thecatapi.com/v1/breeds"),fetch("https://api.thecatapi.com/v1/breeds?x-api-key=live_DPoEn7ODxFWtOuCuArwxp1OQLssTX1nqeQH867cwI0O0dOL6IoCfgFJ6Sz3604vd").then((e=>e.json())).then((o=>o.map((o=>console.log(e(o.name)))).join(""))).catch((e=>console.log(e)));
//# sourceMappingURL=index.a5b987f7.js.map
