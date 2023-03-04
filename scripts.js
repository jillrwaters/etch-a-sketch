
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

const allBoxes = document.querySelectorAll(".box")
for (bx in allBoxes){
    bx.addEventListener("mouseover", () => {
        this.style.backgroundColor = "black"
    })
}
    





// function fillBox(b) {
//     var bx = b.target
//     bx.style.backgroundColor = "black"
    
// }


