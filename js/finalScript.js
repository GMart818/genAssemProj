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

let shapesModal;

const shapesTableBtn = document.querySelector('#shapes-table');

shapesTableBtn.addEventListener('click', openShapesModal);

function openShapesModal(event) {
	event.preventDefault();
	if(event.target.innerText==="SHAPES TABLE") {
		shapesModal = document.getElementById('shapes-modal');
		shapesModal.classList.remove('modal-off');
	}
}

const shapesTableGotItBtn = document.querySelector('#shapes-got-it');

shapesTableGotItBtn.addEventListener('click', closeShapesModal);

function closeShapesModal() {
	shapesModal.classList.add('modal-off');	
}






const designForm = document.querySelector('#design-form');
const errorsList = document.querySelector("#errors");

designForm.addEventListener('submit', validateData);

function validateData(event) {
	errorsList.innerHTML = "";
	event.preventDefault();
	let designLength = document.querySelector('#length-in-feet').value;
	
	if (designLength === 'blank') {
	    addError("Length cannot be blank.");
  		}

  	let designShape = document.querySelector('#shape-field').value;
  	
  	if (designShape === 'blank') {
  		addError('Shape cannot be blank.');
  	}

  	let radios = document.getElementsByName("fins-input");
  	let formValid = false;

  	let i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

	if(!formValid) {
		addError('You must select fin type.');
	}			
	else{
	alert("You have successfully completed a design!");
	designForm.reset();
	}
}

function addError(error) {
  let li = document.createElement("li");
  li.innerText = error;
  errorsList.appendChild(li);
}