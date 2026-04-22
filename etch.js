const container = document.querySelector('.container');
let gridSize = 16;

const resizeBtn = document.querySelector("#resizeBtn");
resizeBtn.textContent = `${gridSize} x ${gridSize}`;

resizeBtn.addEventListener("click", () =>{
    const userInput = prompt("Enter a grid size from 1 to 100:");
    const value = parseInt(userInput);

    if(!isNaN(value) && value >=1 && value <= 100){
        gridSize = value;
        buildGrid(gridSize);
        resizeBtn.textContent = `${gridSize} x ${gridSize}`; 
    } else{
        alert("Enter a number between 1 and 100.");
    }
});

const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener("click", () => {
    buildGrid(gridSize);
});
function buildGrid(size){
    container.replaceChildren();

    const squareSize = 960 / size;
    for(let i = 0; i < (size * size); i++){
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
        container.appendChild(squareDiv);

        //const currColor = getComputedStyle(squareDiv).backgroundColor

        squareDiv.addEventListener("mouseenter",()=>{
            squareDiv.style.backgroundColor = getRandomColor;
        });


    }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

buildGrid(gridSize);


