
const lengthInfoBtn = document.querySelector('#length-button');
const shapeInfoBtn = document.querySelector('#shape-button');
const finsInfoBtn = document.querySelector('#fins-button');

lengthInfoBtn.addEventListener('click', displayPropperModal);
shapeInfoBtn.addEventListener('click', displayPropperModal);
finsInfoBtn.addEventListener('click', displayPropperModal);

let infoModal;

function displayPropperModal(event) {
	const target = event.target;
	if(target.innerText==="LENGTH") {
		infoModal = document.getElementById('length-modal');
		infoModal.classList.remove('modal-off');
	}else if(target.innerText==="SHAPE") {
		infoModal = document.getElementById('shape-modal');
		infoModal.classList.remove('modal-off');
	}else if(target.innerText==="FINS") {
		infoModal = document.getElementById('fins-modal');
		infoModal.classList.remove('modal-off');
	}
	return infoModal;
}

const gotItBtnLength = document.querySelector('#length-got-it');
const gotItBtnShape = document.querySelector('#shape-got-it');
const gotItBtnFins = document.querySelector('#fins-got-it');

gotItBtnLength.addEventListener('click', closeInfoModal);
gotItBtnShape.addEventListener('click', closeInfoModal);
gotItBtnFins.addEventListener('click', closeInfoModal);

function closeInfoModal() {
	infoModal.classList.add('modal-off');	
}

