for(let i = 1; i <= 256; i++) {
    createDivs();
};

function createDivs () {
    const inDiv = document.createElement('div');
    inDiv.classList.add('content');
    container.appendChild(inDiv);
};