


const grid = document.querySelector('.container');
//

// function process(){
//     const gridSize = parseInt( prompt('give grid size, less than 100'));
//     if (gridSize >100){
//         alert('must be less than 100');
//         return;
//     } ;
//     deleteDivs();
//     grid.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`);
//     addDivs(gridSize);
//     addEvents();
// }
initialize();
const slider = document.querySelector('#slider')
const screenVal = document.querySelector('.value');
slider.addEventListener('input', processSlider);

function addDivs(gridSize){
    const container = document.querySelector('.container');
    for(i = 0; i < gridSize**2 ; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('pixel');
    // newDiv.innerText = i+1;
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

function processSlider(event){
    console.log(event);
    console.log(this.value);
    let val = this.value;
    screenVal.textContent = val;
    deleteDivs();
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    addDivs(val);
    addEvents();

}

function initialize(){
    const container = document.querySelector('.container');
    for(i = 0; i < 16 ; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        // newDiv.innerText = i+1;
        container.append(newDiv);
    }
    addEvents();

}