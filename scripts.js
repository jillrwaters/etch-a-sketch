const grid = document.querySelector("#grid");

const initialGridSize = 16;


function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    grid.appendChild(div);
    addBoxClass(div)
  }
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  grid.style.gridTemplateColumns =`repeat(${size}, 1fr)`
  grid.style.width = "500px";
  grid.style.height = "500px";
}

createGrid(initialGridSize);

function addBoxClass(element) {
  element.classList.add("box");
}

function testBoxClass(element) {
  return element.classList.includes(".box")
}




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



const resizeButton = document.querySelector("#newGridSize");
let currentGridSize = initialGridSize

resizeButton.addEventListener("click", function () {
  const newSize = prompt('Enter a number below 100');
  resizeGrid(newSize);

})


function resizeGrid(size) {
  removeGrid();
  createGrid(size);
  currentGridSize = size;

}

function removeGrid() {
  allBoxes.forEach(function (box) {
    box.remove()
  })
}










