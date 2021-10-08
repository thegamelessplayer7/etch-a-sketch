/*
create a container div inside of the index.html file

add hover class on hover

create grid of divs and append them to the container div

use flexbox to make divs into grid
*/


const container = document.getElementById('container');
const grid = document.createElement('div');
container.appendChild(grid);
grid.classList.add('grid');




function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'reg';
    }}

    

makeGrid(16, 16);

function clearGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }
    makeGrid(num, num);
}



grid.addEventListener('mouseover', function(e) {
    if(e.target.className === 'reg')  {
        e.target.classList.add('hover');
    }
})  



const clearBtn = document.getElementById('clr-button')

clearBtn.addEventListener('click', () => {
    const squareDivs = document.querySelectorAll('.reg');
    
    for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].classList.remove('hover');
    squareDivs[i].style.backgroundColor = '';
    grid.style.backgroundColor = '';
    }
    })

let colorRandom;
const randomize = document.getElementById('randomize');
randomize.addEventListener('click', () => {
    grid.addEventListener('mouseover', function(e) {
        colorRandom = '#'+Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = colorRandom;
        grid.style.backgroundColor = '';
    }
    /*for(let i = 0; i < squareDivs.length; i++) {
        squareDivs[i].onmouseover = function(e) {
            colorRandom = '#'+Math.floor(Math.random()*16777215).toString(16);
            let colorString = '0px 0px 30px 0px' + colorRandom;
            this.style['background-color'] = colorRandom;
            if (squareDivs[i].style.backgroundColor = colorRandom) {
                console.log('yes'); }
        }
    } */

)});


const squaresBtn = document.getElementById('squares-btn');
let num;
squaresBtn.addEventListener('click', () => {
    num = prompt('How many squares would you like to add?');
    if (num > 100) {
        num = prompt('Don\'t enter a number greater than 100!');
    } else if (num < 1) {
        num = prompt('Enter a number greater than 1!');
    } else if (num <= 100) {
        clearGrid(num, num);
    }
})

const removeGrid = document.getElementById('remove-grid');
removeGrid.addEventListener('click', () => {
    if (grid.classList == 'grid') {
    grid.classList.add('grid-2');
    } else {
        grid.classList = 'grid';
    }
    if (removeGrid.innerHTML == 'Remove Grid') {
        removeGrid.innerHTML = 'Add Grid';
    } else {
        removeGrid.innerHTML = 'Remove Grid';
    }
} )




