const container = document.getElementById("container");
const root = document.documentElement;

function makeGrid(rows, columns)
{
    root.style.setProperty('--grid-row', rows);
    root.style.setProperty('--grid-column', columns);

    for (let index = 0; index < (rows * columns); index++) {
        const gridCell = document.createElement('div');
        container.appendChild(gridCell).className="grid-item"
    }
}

makeGrid(16,16);