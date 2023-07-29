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
    
    dimmVal = +prompt('Enter number of boxes on row or column. Max value = 100', 16);
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
    container.appendChild(inDiv);
   
    //display dimension of current Grid
    const dimdisp = document.querySelector('.dispdim');
    dimdisp.textContent = `Current Grid : ${dimmVal} X ${dimmVal}`;
    
    // add hover event listener
    inDiv.addEventListener('mouseenter', function(e) {
        e.target.style.background = 'green';
    }
    );
};
