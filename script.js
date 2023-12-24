const container = document.getElementById("container");
const root = document.documentElement;

// Change grid size depending on slider value
const slider = document.getElementById("slider");
const sliderOutput = document.getElementById("sliderValue");
sliderOutput.textContent = `${slider.value} * ${slider.value}`;
slider.oninput = () => {makeGrid(slider.value, slider.value);
    sliderOutput.textContent = `${slider.value} * ${slider.value}`;}

const checkboxRandom = document.getElementById("randomCheck");
const colorPicker = document.getElementById("colorPicker");

const clearButton = document.getElementById("clear");
clearButton.addEventListener('click', () =>makeGrid(slider.value, slider.value));

const eraserButton = document.getElementById("eraserButton");


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

const gridCells = document.getElementsByClassName("grid-item");

// Make original grid 
makeGrid(16,16);

function changeBackground(color) {
    this.style.setProperty("background-color", color); 
}

function addGridMouseover(){
for (let i = 0; i < gridCells.length; i++) {
    gridCells[i].addEventListener('mouseover', function() {
        changeBackground.call(this, colorChoice())        
        }); 
    };
}


function removeAllChildNodes(parent)
{
    while (parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
}


function colorChoice()
{
if (checkboxRandom.checked)
{
    max = 255;
    let random1 = Math.round (Math.random() * max);
    let random2 = Math.round (Math.random() * max);
    let random3 = Math.round (Math.random() * max);
    return `rgb(${random1}, ${random2}, ${random3}`;
}
else if (eraserButton.checked)
{
    return "white";
}

else
{
    return `${colorPicker.value}`;
}
}

