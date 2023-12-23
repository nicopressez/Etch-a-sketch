const container = document.getElementById("container");
const root = document.documentElement;

function makeGrid(rows, columns)
{
    root.style.setProperty('--grid-row', rows);
    root.style.setProperty('--grid-column', columns);

    for (let index = 0; index < (rows * columns); index++) {
        const gridCell = document.createElement('div');
        container.appendChild(gridCell).className="grid-item";
    }
}

makeGrid(16,16);

const gridCells = document.getElementsByClassName("grid-item");
function changeBackground(color) {
    this.style.setProperty("background-color", color); 
}

for (let i = 0; i < gridCells.length; i++) {
    gridCells[i].addEventListener('mouseover', function() {
        changeBackground.call(this, 'black'); 
    });
}
