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
    }
}

makeGrid(16, 16);

grid.addEventListener('mouseover', function(e) {
    if(e.target.className === 'reg')  {
        e.target.classList.add('hover');
    }
})  


const clearBtn = document.getElementById('clr-button')
const squareDivs = document.querySelectorAll('.reg');
clearBtn.addEventListener('click', () => {
    
    for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].classList.remove('hover');
    }
})  

function getRandomColor() {
    let randomColor = '#';
    randomColor += Math.floor(Math.random()*16777215).toString(16);
    for (let i = 0; i < squareDivs.length; i++) {
    console.log(squareDivs[i]);
        //squareDivs[i].style.backgroundColor = randomColor;
    }
}

function pickColor() {
    squareDivs.style.backgroundColor = getRandomColor();
    console.log(squareDivs.style.backgroundColor);
}



const randomize = document.getElementById('randomize');
randomize.addEventListener('click', () => {
    for(let i = 0; i < squareDivs.length; i++) {
        squareDivs[i].onmouseover = function(e) {
            let colorRandom = '#'+Math.floor(Math.random()*16777215).toString(16);
            let colorString = '0px 0px 30px 0px' + colorRandom;
            this.style['background-color'] = colorRandom;
        }
    } 
}
);


const squaresBtn = document.getElementById('squares-btn');

squaresBtn.addEventListener('click', () => {
    let num = prompt('How many squares would you like to add?');
    if (num > 100) {
        num = prompt('Don\'t enter a number greater than 100!');
    } else if (num < 1) {
        num = prompt('Enter a number greater than 1!');
    } else if (num <= 100) {
        makeGrid(num, num);
    }
})


document.querySelector('.random').style.backgroundColor = getRandomColor(); 


