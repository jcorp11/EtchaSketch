console.log('hola');
const container = document.querySelector('.container');
for(i = 0; i < 16 ; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('pixel');
    // newDiv.innerText = i;
    container.append(newDiv);
}
addEvents();

const grid = document.querySelector('.container');
const  btn = document.querySelector('button');

function process(){
    const gridSize = parseInt( prompt('give grid size, less than 100'));
    if (gridSize >100){
        alert('must be less than 100');
        return;
    } ;
    deleteDivs();
    let side = (100/gridSize).toString();
    console.log(side+'vh '.repeat(gridSize));
    grid.style['grid-template-columns'] = side.concat('vh ').repeat(gridSize);
    grid.style['grid-template-rows'] =  side.concat('vh ').repeat(gridSize);
    //console.log(getComputedStyle(grid));
    addDivs(gridSize);
    addEvents();
}
btn.addEventListener('click', process);

function addDivs(gridSize){
    const container = document.querySelector('.container');
    for(i = 0; i < gridSize**2 ; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('pixel');
    //newDiv.innerText = i;
    container.append(newDiv);
}
}

function deleteDivs(){
    const divs = document.querySelectorAll('.pixel');
    divs.forEach(item => item.remove());
}
function addEvents(){
    const divs = document.querySelectorAll('.pixel');
    divs.forEach(function(item){
        item.addEventListener('mouseover', (event)=>{
            event.target.classList.add('taint');
        });
    });
}