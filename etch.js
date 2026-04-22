const container = document.querySelector('.container');
const gridSize = 16;
function buildGrid(size){
    container.replaceChildren();
    for(let i = 0; i < (size * size); i++){
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        container.appendChild(squareDiv);
    }
}

buildGrid(gridSize);