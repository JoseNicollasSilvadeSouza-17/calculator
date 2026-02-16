import { add, substract, multiply, div, divInt, remainder } from "./operations.js";

const number1 = document.querySelector("#number1") as HTMLInputElement;
const number2 = document.querySelector("#number2") as HTMLInputElement;
const calculatorBtn = document.querySelector("#calculator") as HTMLButtonElement;
const output = document.querySelector("output") as HTMLOutputElement;

const mainContainer = document.querySelector<HTMLElement>('.calculator')
let resultad: number | string = 0;
const operations = document.querySelector("input[name='operations']:checked") as HTMLInputElement;


function onSubmit(): void {
	let valueOperations = operations.value;
	let num1: number = number1.valueAsNumber;
	let num2: number = number2.valueAsNumber;

	switch (valueOperations) {
		case "add": {
			resultad = add(num1, num2);
			break;
		}

		case "substract": {
			resultad = substract(num1, num2);
			break;
		}

		case "multiply": {
			resultad = multiply(num1, num2);
			break;
		}

		case "div": {
			resultad = div(num1, num2);
			break;
		}

		case "divInt": {
			resultad = divInt(num1, num2);
			break;
		}

		case "remainder": {
			resultad = remainder(num1, num2);
			break;
		}

		default: {
			alert("Error");
			break;
		}
	}

	output.textContent = resultad.toString();
}
calculatorBtn.addEventListener("click", (event) => {
	event.preventDefault();
	onSubmit()
});


mainContainer?.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		onSubmit()
	}
})