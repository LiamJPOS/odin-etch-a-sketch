//TODO add tool tip to createCanvasBtn
//TODO add gradiant instead of straight black

function clearCanvas() {
    const allSquares = document.querySelectorAll(".main-container__column");
    allSquares.forEach((square) => {
        square.style.backgroundColor = "white";
    })
}

function deleteCanvas() {
    const mainContainer = document.getElementById('main-container');
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

function generateCanvas(size) {
    deleteCanvas()
    const rows = size
    const columns = size
    const mainContainer = document.getElementById('main-container');
    for(let i = 0; i < rows; i++){
        let row = document.createElement('div');
        row.classList.add("main-container__row");
        mainContainer.appendChild(row);
        for(let i = 0; i < columns; i++){
            let column = document.createElement('div');
            column.classList.add("main-container__column");
            row.appendChild(column);
            column.addEventListener("mouseover", () => {
                column.style.backgroundColor = "black";
            })
        }
    }
}

const createCanvasBtn = document.getElementById("create-canvas-btn")
createCanvasBtn.addEventListener('click', () => {
    let sizeSelection = prompt("Choose a size", 1)
    if (!isNaN(sizeSelection) && sizeSelection > 0 && sizeSelection <= 100){
        sizeSelection = Math.round(sizeSelection);
        generateCanvas(sizeSelection);
    }
})


const clearCanvasBtn = document.getElementById("clear-canvas-btn");
clearCanvasBtn.addEventListener('click', () =>{
    clearCanvas();
})







