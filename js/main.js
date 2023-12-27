// ! FROM free API
const API = "https://rickandmortyapi.com/api/character";
let block1 = document.querySelector(".block1");
let list = document.querySelector(".list");
async function getCharacters() {
  let res = await fetch(API);
  let data = await res.json();
  list.innerHTML = "";
  data.results.forEach((elem) => {
    console.log(elem);
    list.innerHTML += `
    <img src="${elem.image}" alt="">
    <div>
      <h3>${elem.name}</h3>
      <h4>${elem.gender}</h4>
      <h5>${elem.status}</h5>
      <h5>${elem.type}</h5>
      <h5>${elem.species}</h5>
      </div>
    `;
  });
}
getCharacters();

// ! From db.json
const API2 = "http://localhost:8000/characters";
let block_2 = document.querySelector(".block-2");
let list2 = document.querySelector(".list2");

async function readFilm() {
  let res = await fetch(API);
  let data = await res.json();
  list2.innerHTML = "";
  data.results.forEach((elem) => {
    // fetch(API2, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json; charset=utf-8",
    //   },
    //   body: JSON.stringify(elem),
    // });
  });
}
readFilm();

async function get2() {
  let res = await fetch(API2);
  let data = await res.json();
  list2.innerHTML = "";
  data.forEach((elem) => {
    list2.innerHTML += `
    <img src="${elem.image}" alt="">
    <div>
      <h3>${elem.name}</h3>
      <h4>${elem.gender}</h4>
      <h5>${elem.status}</h5>
      <h5>${elem.type}</h5>
      <h5>${elem.species}</h5>
      </div>
    `;
  });
}
get2();
