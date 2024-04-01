const mainContainer = document.getElementById('main-container');
gridSize = 2 * 2;

for(let i = 0; i < gridSize; i++){
    let drawingSquare = document.createElement('div');
    drawingSquare.classList.add("main-container__drawing-square");
    mainContainer.appendChild(drawingSquare)
}