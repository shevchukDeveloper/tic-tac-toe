"use srtict";
const root = document.querySelector("#root");
let flag = false;
let win = null;
let pole = null;
let closeModal = document.querySelector(".close");
//
function StartGame() {
  for (let i = 0; i < 9; i++) {
    root.innerHTML += `<div class='piece'></div>`;
  }
}
StartGame();
let allPieces = document.querySelectorAll(".piece");
let arrayPieces = Array.from(allPieces);
//
root.addEventListener("click", checkPiece);
//
let modal = document.querySelector(".modal");
let modalBox = document.querySelector(".modal-box");

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

//
function checkPiece(event) {
  let check = event.target.className;
  let pieceContent = event.target.innerHTML;

  if (check === "piece") {
    if (!flag && pieceContent == "") {
      (event.target.innerHTML = "O"), (flag = true);
    }

    if (flag) {
      pole = arrayPieces.find((elem) => elem.textContent == "");
      if (pole === undefined && win == null) {
        modalBox.classList.remove("hide");
        modal.innerHTML = `
          <span>Перемогла Дружба!</span>
          `;
      } else {
        pole.innerHTML = "X";
        flag = false;
      }
    }
  }
  rule();
  chechWin(win);

  if (event.target == modalBox) {
    modalBox.classList.add("hide");
    modal.innerHTML = "";
    flag = false;
    win = null;
    allPieces.forEach((item) => {
      return (item.innerHTML = "");
    });
  }
}
/*0, 1 ,2
  3, 4, 5
  6, 7, 8
*/
function rule(e) {
  if (
    allPieces[0].innerHTML === "O" &&
    allPieces[1].innerHTML === "O" &&
    allPieces[2].innerHTML === "O"
  ) {
    win = "O";
  } else if (
    allPieces[3].innerHTML === "O" &&
    allPieces[4].innerHTML === "O" &&
    allPieces[5].innerHTML === "O"
  ) {
    win = "O";
  } else if (
    allPieces[6].innerHTML === "O" &&
    allPieces[7].innerHTML === "O" &&
    allPieces[8].innerHTML === "O"
  ) {
    win = "O";
  } else if (
    allPieces[0].innerHTML === "O" &&
    allPieces[3].innerHTML === "O" &&
    allPieces[6].innerHTML === "O"
  ) {
    win = "O";
  } else if (
    allPieces[1].innerHTML === "O" &&
    allPieces[4].innerHTML === "O" &&
    allPieces[7].innerHTML === "O"
  ) {
    win = "O";
  } else if (
    allPieces[2].innerHTML === "O" &&
    allPieces[5].innerHTML === "O" &&
    allPieces[8].innerHTML === "O"
  ) {
    win = "O";
  } else if (
    allPieces[0].innerHTML === "O" &&
    allPieces[4].innerHTML === "O" &&
    allPieces[8].innerHTML === "O"
  ) {
    win = "O";
  } else if (
    allPieces[2].innerHTML === "O" &&
    allPieces[4].innerHTML === "O" &&
    allPieces[6].innerHTML === "O"
  ) {
    win = "O";
  } else if (
    allPieces[0].innerHTML === "X" &&
    allPieces[1].innerHTML === "X" &&
    allPieces[2].innerHTML === "X"
  ) {
    win = "X";
  } else if (
    allPieces[3].innerHTML === "X" &&
    allPieces[4].innerHTML === "X" &&
    allPieces[5].innerHTML === "X"
  ) {
    win = "X";
  } else if (
    allPieces[6].innerHTML === "X" &&
    allPieces[7].innerHTML === "X" &&
    allPieces[8].innerHTML === "X"
  ) {
    win = "X";
  } else if (
    allPieces[0].innerHTML === "X" &&
    allPieces[3].innerHTML === "X" &&
    allPieces[6].innerHTML === "X"
  ) {
    win = "X";
  } else if (
    allPieces[1].innerHTML === "X" &&
    allPieces[4].innerHTML === "X" &&
    allPieces[7].innerHTML === "X"
  ) {
    win = "X";
  } else if (
    allPieces[2].innerHTML === "X" &&
    allPieces[5].innerHTML === "X" &&
    allPieces[8].innerHTML === "X"
  ) {
    win = "X";
  } else if (
    allPieces[0].innerHTML === "X" &&
    allPieces[4].innerHTML === "X" &&
    allPieces[8].innerHTML === "X"
  ) {
    win = "X";
  } else if (
    allPieces[2].innerHTML === "X" &&
    allPieces[4].innerHTML === "X" &&
    allPieces[6].innerHTML === "X"
  ) {
    win = "X";
  }
}

function chechWin(win) {
  if (win === "X") {
    modalBox.classList.remove("hide");
    modal.innerHTML = `
    <span>Хрестики отримали перемогу!</span>
    `;
  } else if (win === "O") {
    modalBox.classList.remove("hide");
    modal.innerHTML = `
    <span>Нулики отримали перемогу!</span>
    `;
  }
}
