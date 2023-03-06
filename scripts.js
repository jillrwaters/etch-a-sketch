const main = document.querySelector("#grid");

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    main.appendChild(div);
    div.classList.add("box");
    const box = document.querySelector(".box");
  }
}

createGrid(16);

const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach(function (b) {
  b.addEventListener("mouseover", function () {
    b.style.backgroundColor = "black";
  });
});

const clear = document.querySelector("#clear");

function clearBoxes() {
  allBoxes.forEach(function (b) {
    b.style.backgroundColor = "white";
  });
    eraser.classList.remove(".clicked")
}

clear.addEventListener("click", clearBoxes);

// ERASER
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", function () {
  eraser.classList.toggle(".clicked");
  console.log(eraser.classList.contains(".clicked"));
  erase();
});

function erase() {
  allBoxes.forEach(function (b) {
      b.addEventListener("mouseover", function () {
            if (eraser.classList.contains(".clicked")) {
        b.style.backgroundColor = "white";
            }
            else {
        b.style.backgroundColor = "black"
            }
      });
  });
}
