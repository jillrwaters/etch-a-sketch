let penColor = "black"
// CREATE GRID
function createGrid(size) {
    const grid = document.querySelector("#grid")
    let amountOfBoxes = size * size
    const boxes = grid.querySelectorAll("div")
    boxes.forEach((div) => div.remove())
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`


    for (let i = 0; i < amountOfBoxes; i++) {
        let box = document.createElement("div")
        box.addEventListener("mouseover", fillBox)
        box.style.backgroundColor = "white"
        grid.insertAdjacentElement("beforeend", box)
    }


}
createGrid(16)

function resizeGrid() {
    let size = prompt("Please enter a number between 2 and 100")
    if (size >= 2 && size <= 100) {
        createGrid(size)
    }
    else {
        alert("You must enter a number between 2 and 100")
    }
}

function fillBox() {

    if (penColor === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
        this.style.backgroundColor = penColor
}

function changeColor(color) {
    penColor = color
}

function clearGrid() {
    const boxes = grid.querySelectorAll("div")
    boxes.forEach((b) => {
        b.style.backgroundColor="white"
    })
}

