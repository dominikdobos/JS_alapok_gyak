window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenykezeles1();
  esemenykezeles2();
  esemenykezeles4();
});

function elemekElerese1() {
  const ELEM = document.querySelectorAll("section h2")[0];
  console.log(ELEM.innerHTML);
}
function elemekElerese2() {
  const ELEM = document.querySelectorAll("#ide")[0];
  ELEM.innerHTML = "Jó reggelt!";
}
function elemekElerese3() {
  const ELEM = document.querySelectorAll(".ide")[0];
  ELEM.innerHTML = "Jó reggelt!";
}
function elemekElerese4() {
  const LISTA = [];
  const LISTA_ELEM = document.querySelector(".lista");
  let szoveg = "<ul>";
  for (let index = 0; index < 5; index++) {
    let rnd = Math.floor(Math.random() * (31 - 10) + 10);
    LISTA[index] = rnd;
    szoveg += `<li>${LISTA[index]}</li>`;
  }
  szoveg += "</ul>";
  LISTA_ELEM.innerHTML = szoveg;
}
function elemekFormazasa1() {
  const LISTA_ELEM = document.querySelector(".lista");
  LISTA_ELEM.classList.add("formazott");
}
function esemenykezeles1() {
  const LISTA_ELEM = document.querySelector(".lista");
  const KATTINTAS_UTAN_ELEM = document.querySelector(".kattintasutan");
  LISTA_ELEM.addEventListener("click", function () {
    KATTINTAS_UTAN_ELEM.innerHTML = LISTA_ELEM.innerHTML;
  });
}
function esemenykezeles2() {
  const FELADAT_ELEM = document.querySelectorAll(".feladat")[0];
  FELADAT_ELEM.innerHTML = "<button id='feladat_btn'>Nyomd meg</button>";
  const GOMB_ELEM = document.querySelector("#feladat_btn");
  GOMB_ELEM.addEventListener("click", function () {
    FELADAT_ELEM.innerHTML += `<div><img id="kep" src="./kep.jpg" alt="kep" /></div>`;
    const KEP_ELEM = document.querySelector("#kep");
    KEP_ELEM.addEventListener("mouseover", function () {
      KEP_ELEM.classList.add("kis_kep");
    });
  });
}
function esemenykezeles4() {
  const SZAM_ELEMEK = document.querySelectorAll(".tarolo > .elem");
  const MEGJELENITO_ELEM = document.querySelector(".megjelenito");
  let kivalasztott_szam;
  for (let index = 0; index < SZAM_ELEMEK.length; index++) {
    SZAM_ELEMEK[index].addEventListener("click", function () {
      kivalasztott_szam = index + 1;
      MEGJELENITO_ELEM.innerHTML = `${kivalasztott_szam}`;
    });
  }
}
