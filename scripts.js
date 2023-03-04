// ORIGINAL GRID
const main = document.querySelector("#grid")

function createGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement("div")
        main.appendChild(div)
        div.classList.add("box")
        const box = document.querySelector(".box")
        }
    }

createGrid(16)    

// FILL BOXES:
// BLACK AND WHITE
const allBoxes = document.querySelectorAll(".box")
allBoxes.forEach(function(b) {
    b.addEventListener("mouseover", function() {
        b.style.backgroundColor = "black"
    })
})

//RANDOM COLORS



//ERASER

// CLEAR GRID
const clear = document.querySelector("#clear")
function clearBoxes(){
allBoxes.forEach(function(b) {
    b.style.backgroundColor = "white"
})
}
clear.addEventListener("click", clearBoxes)
    

// CHANGE GRID SIZE
const changeGridSize = document.querySelector("#newGridSize")
changeGridSize.addEventListener("click", function() {
    let newSize = prompt("Enter desired grid size (must be 100 or less)")
    if(validateGridSize(newSize)){
        removeGrid
        createGrid(newSize)
    }
})

function removeGrid() {
    grid.removeChild(".box")
}

function validateGridSize(size){
    console.log(size <= 100)
}

function createCustomGrid(validation, size){
    if (validation){
        createGrid(size)
    }

}
