const container = document.getElementById("container");
const root = document.documentElement;

function makeGrid(rows, columns)
{
    removeAllChildNodes(container);
    root.style.setProperty('--grid-row', rows);
    root.style.setProperty('--grid-column', columns);

    for (let index = 0; index < (rows * columns); index++) {
        const gridCell = document.createElement('div');
        container.appendChild(gridCell).className="grid-item";
    }
    addGridMouseover();
}

// Add a button to trigger player input, deciding on new grid size

const gridSizeButton = document.getElementById('inputNumber');
gridSizeButton.addEventListener('click', () => {
    let playerChoice = prompt('Type a number to define the rows & columns of the grid');
    makeGrid(+playerChoice,+playerChoice);
})

const gridCells = document.getElementsByClassName("grid-item");

// Make original grid 
makeGrid(16,16);

function changeBackground(color) {
    this.style.setProperty("background-color", color); 
}

function addGridMouseover(){
for (let i = 0; i < gridCells.length; i++) {
    gridCells[i].addEventListener('mouseover', function() {
        changeBackground.call(this, 'red'); 
    });
}
}

function removeAllChildNodes(parent)
{
    while (parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
}
