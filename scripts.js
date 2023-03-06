const main = document.querySelector("#grid");

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    main.appendChild(div);
    addBoxClass(div)
  }
}
function addBoxClass(element) {
  element.classList.add("box");
  const box = document.querySelector(".box");
}
function testBoxClass(element) {
  return element.classList.includes(".box")
}

const initialGridSize = 16
createGrid(initialGridSize);


let allBoxes = document.querySelectorAll(".box");

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
  // console.log(eraser.classList.contains(".clicked"));
  erase();
});

function erase() {
  allBoxes.forEach(function (b) {
    b.addEventListener("mouseover", function () {
      if (eraser.classList.contains(".clicked")) {
        b.style.backgroundColor = "white";
        eraser.textContent = "draw"
      }
      else {
        b.style.backgroundColor = "black"
        eraser.textContent = "erase"
      }
    });
  });
}

// CHANGE GRID SIZE

let testing = 50;
let testing1 = 12;
let testing2 = 77;



// grid.classList.add(".resize")
const resizeButton = document.querySelector("#newGridSize");
// const resizeClass = document.querySelector(".resize")


resizeButton.addEventListener("click", function () {
  const newSize = prompt('Enter a number below 100');
  resizeGrid(newSize);

})

function resizeGrid(size) {
  removeGrid();
  createGrid(size);
}

let currentGridSize = initialGridSize

function removeGrid() {
  allBoxes.forEach(function (box) {
    box.remove()
  })
}










