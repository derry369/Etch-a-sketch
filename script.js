//initialize varables
let dimmVal;
let boxSize;

//function to sketch initial 16 X 16 squares
initSixtn();
function initSixtn() {
    dimmVal = 16;
    boxSize = (800 - (2 * dimmVal) ) / dimmVal;

    for(let i = 1; i <= dimmVal * dimmVal; i++) {
        createDivs();
    };
};


//add event listener on 'change number of squares' button
const btn = document.querySelector('button');
btn.addEventListener('click', takeInput);

// erase existing layout and make a new sketch
function takeInput() {
    
    dimmVal = +prompt('Enter number of boxes on row or column. Max value = 100 and Whole numbers only', 16);
    boxSize = (800 - (2 * dimmVal) ) / dimmVal;

    if(dimmVal === 0) {
        alert('Your Input is invald');
        takeInput();
    } else if(dimmVal <= 100 && typeof(dimmVal) === 'number') {
        alterLayout();
        for(let i = 1; i <= dimmVal * dimmVal; i++) {
            createDivs();
        };

    } else {
        alert('Your Input is invald');
        takeInput();
}

};

//erase existing layout
function alterLayout() {
    const tagDivs = document.querySelectorAll('.content');
    const cont = document.querySelector('#container');
    tagDivs.forEach(content => cont.removeChild(content));
};

//create layout
function createDivs () {
    const inDiv = document.createElement('div');
    inDiv.classList.add('content');
    inDiv.style.width = `${boxSize}px`;
    inDiv.style.height = `${boxSize}px`;
    inDiv.style.backgroundColor = 'hsla(359, 100%, 0%, 0)'
    container.appendChild(inDiv);
   
    //display dimension of current Grid
    const dimdisp = document.querySelector('.dispdim');
    dimdisp.textContent = `Current Grid : ${dimmVal} X ${dimmVal}`;
    
    // add hover event listener 
    inDiv.addEventListener('mouseenter', countHovers);
};

// increases color intensity by 10% on each hover till 100%
function countHovers(e) {
    
    if(e.target.style.backgroundColor ===  'rgba(0, 0, 0, 0)') {
        e.target.style.backgroundColor = `hsla(359, 100%, 0%, ${1 / 10})`;

    } else if(e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.1)') {
        e.target.style.backgroundColor = `hsla(359, 100%, 0%, ${2 / 10})`;

    } else if(e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.2)') {
        e.target.style.backgroundColor = `hsla(359, 100%, 0%, ${3 / 10})`;
    
    } else if(e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.3)') {
        e.target.style.backgroundColor = `hsla(359, 100%, 0%, ${4 / 10})`;
    
    } else if(e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.4)') {
        e.target.style.backgroundColor = `hsla(359, 100%, 0%, ${5 / 10})`;
     
    } else if(e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.5)') {
        e.target.style.backgroundColor = `hsla(359, 100%, 0%, ${6 / 10})`;

    } else if(e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.6)') {
        e.target.style.backgroundColor = `hsla(359, 100%, 0%, ${7 / 10})`;

    } else if(e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.7)') {
        e.target.style.backgroundColor = `hsla(359, 100%, 0%, ${8 / 10})`;

    } else if(e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.8)') {
        e.target.style.backgroundColor = `hsla(359, 100%, 0%, ${9 / 10})`;

    } else if(e.target.style.backgroundColor === 'rgba(0, 0, 0, 0.9)') {
        e.target.style.backgroundColor = `hsla(359, 100%, 0%, ${10 / 10})`;

    };

};

