"use srtict";
//  &#10060; хрестик
//  &#11093; нолик
let root = document.querySelector("#root");
let flag = false;
for (let i = 0; i < 9; i++) {
  root.innerHTML += `<div class='piece'></div>`;
}
root.addEventListener("click", (event) => {
  let check = event.target.className;
  let pieceContent = event.target.innerHTML;
  if (check === "piece") {
    if (flag && pieceContent === "") {
      event.target.innerHTML = "&#10060;";
      return (flag = false), console.log("nolik", flag);
    }
    if (!flag && pieceContent == "") {
      event.target.innerHTML = "&#11093;";
      return (flag = true), console.log("krestik", flag);
    }
  }
});

function random(event) {
  document.body.onclick = function (event) {
    if (event) {
      console.log("clicked");

      console.log(Math.floor(Math.random() * 8));
    }
  };
}
