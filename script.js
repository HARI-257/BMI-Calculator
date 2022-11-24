let weight = document.getElementById('weight');
let height = document.getElementById('height');
let result_container = document.querySelector('.result-container');
let result = document.getElementById('result');



function calculateBMI(){
	let bmi = weight.value / Math.pow(height.value , 2);
	result.textContent = `Your BMI Value is ${bmi}`;
	result_container.classList.add('show');
}

function restart(){
	result_container.classList.remove('show');
}


