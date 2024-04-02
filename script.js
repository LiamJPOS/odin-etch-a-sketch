const mainContainer = document.getElementById('main-container');
let gridSize = [50, 50];
let rows = gridSize[0]
let columns = gridSize[1]

for(let i = 0; i < rows; i++){
    let row = document.createElement('div');
    row.classList.add("main-container__row");
    mainContainer.appendChild(row)
    for(let i = 0; i < columns; i++){
        let column = document.createElement('div');
        column.classList.add("main-container__column");
        row.appendChild(column);
        column.addEventListener("mouseover", () => {
            column.style.backgroundColor = "black";
        })

    }
}

