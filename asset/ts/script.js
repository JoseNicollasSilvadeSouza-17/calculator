import { add, substract, multiply, div, divInt, remainder } from "./operations.js";
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const calculatorBtn = document.querySelector("#calculator");
const output = document.querySelector("output");
const mainContainer = document.querySelector('.calculator');
let resultad = 0;
function handleCalculated() {
    const operations = document.querySelector("input[name='operations']:checked");
    let valueOperations = operations.value;
    let num1 = number1.valueAsNumber;
    let num2 = number2.valueAsNumber;
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
    handleCalculated();
});
mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleCalculated();
    }
});
//# sourceMappingURL=script.js.map